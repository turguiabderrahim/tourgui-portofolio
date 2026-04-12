import { useState, useEffect, useMemo } from "react";
import "../css/AnimatedText.css";

export default function AnimatedText() {
  const [currentTitle, setCurrentTitle] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [speed, setSpeed] = useState(100);

  const titles = useMemo(() => ["Software Developer", "Web Designer", "Coder", "IT Support"], []);

  useEffect(() => {
    const title = titles[currentTitle];
    const handleTyping = () => {
      if (!isDeleting) {
        // Typing
        if (displayedText.length < title.length) {
          setDisplayedText(title.substring(0, displayedText.length + 1));
          setSpeed(50);
        } else {
          // Finished typing, wait before deleting
          setSpeed(2000);
          setIsDeleting(true);
        }
      } else {
        // Deleting
        if (displayedText.length > 0) {
          setDisplayedText(title.substring(0, displayedText.length - 1));
          setSpeed(30);
        } else {
          // Finished deleting, move to next title
          setIsDeleting(false);
          setCurrentTitle((prev) => (prev + 1) % titles.length);
          setSpeed(500);
        }
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTitle, speed, titles]);

  return (
    <h1 className="animated-text">
      {displayedText}
      <span className="cursor"></span>
    </h1>
  );
}
