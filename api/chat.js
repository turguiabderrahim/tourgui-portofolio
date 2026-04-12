export default async function handler(req, res) {
  const apiKey = process.env.OPENAI_API_KEY;

  // 1. Safety Check for API Key
  if (!apiKey) {
    return res.status(500).json({ reply: "API Key is missing on the server." });
  }

  // 2. Ensure only POST requests are allowed
  if (req.method !== 'POST') {
    return res.status(405).json({ reply: "Method not allowed" });
  }

  const { message, history } = req.body;

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
          { 
            role: "system", 
            content: "You are Abderrahim Tourgui, a Software Developer and Informatics student. Be professional, logical, and direct. Your motto is 'Falling is not an option'." 
          },
          // 3. Mapping the history correctly
          ...(history || []).map(m => ({ 
            role: m.role === "assistant" ? "assistant" : "user", 
            content: m.content 
          })),
          { role: "user", content: message }
        ],
      }),
    });

    const data = await response.json();

    // 4. Handle OpenAI errors (like insufficient balance or invalid key)
    if (data.error) {
      console.error("OpenAI Error:", data.error);
      return res.status(data.error.code === "insufficient_quota" ? 402 : 500).json({ 
        reply: "My brain is currently resting (API quota reached). Please check back later!" 
      });
    }

    res.status(200).json({ reply: data.choices[0].message.content });
  } catch (error) {
    console.error("Fetch Error:", error);
    res.status(500).json({ reply: "I'm having trouble connecting to my network right now." });
  }
}