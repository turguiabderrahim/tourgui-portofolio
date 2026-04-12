export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    console.error("OPENAI_API_KEY is not set in environment variables");
    return res.status(500).json({ 
      reply: "API Key is missing on the server.",
      error: "OPENAI_API_KEY not configured"
    });
  }

  const { message, history } = req.body;

  if (!message) {
    return res.status(400).json({ reply: "Message is required." });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          { role: "system", content: "You are Abderrahim Tourgui. Be logical, concise, and helpful. Answer questions about web development, programming, and professional experience." },
          ...(history && Array.isArray(history) ? history.map(m => ({ 
            role: m.role, 
            content: typeof m.content === 'string' ? m.content : '' 
          })).filter(m => m.content) : []),
          { role: "user", content: message }
        ],
        temperature: 0.7,
        max_tokens: 500,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("OpenAI API Error:", errorData);
      return res.status(response.status).json({ 
        reply: "Failed to get response from AI service.",
        error: errorData.error?.message || "Unknown error"
      });
    }

    const data = await response.json();
    
    if (!data.choices || !data.choices[0] || !data.choices[0].message) {
      return res.status(500).json({ 
        reply: "Unexpected response format from AI service." 
      });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Chat API Error:", error);
    res.status(500).json({ 
      reply: "I'm having trouble connecting right now. Please try again later.",
      error: error.message 
    });
  }
}
