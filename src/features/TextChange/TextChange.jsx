import { useEffect, useState } from "react";

const texts = [
  { text: "Hi, I'm Neamul Kabir Emon", color: "text-indigo-500" },
  { text: "I'm Cloud Security Engineer", color: "text-green-500" },
  { text: "I'm DevOps Engineer", color: "text-blue-500" },
];

const TextChange = () => {
  const [currentText, setCurrentText] = useState("");
  const [endValue, setEndValue] = useState(0);
  const [isForward, setIsForward] = useState(true);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const fullText = texts[index].text;
      setCurrentText(fullText.substring(0, endValue));

      if (isForward) {
        if (endValue < fullText.length) {
          setEndValue((prev) => prev + 1);
        } else {
          setTimeout(() => setIsForward(false), 1000); 
        }
      } else {
        if (endValue > 0) {
          setEndValue((prev) => prev - 1);
        } else {
          setIsForward(true);
          setIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, 80);

    return () => clearInterval(intervalId);
  }, [endValue, isForward, index]);

  return (
    <div className={`${texts[index].color}`}>
      {currentText}
    </div>
  );
};

export default TextChange;
