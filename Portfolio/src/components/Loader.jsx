import { useEffect, useState } from "react";

export default function Loader({ onFinish }) {
  const name = "Dilpreet Singh Gill";
  const [text, setText] = useState("");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(name.slice(0, i + 1));
      i++;
      if (i === name.length) {
        clearInterval(interval);
        setTimeout(onFinish, 800);
      }
    }, 120);
    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="h-screen flex items-center justify-center text-3xl sm:text-4xl font-bold">
      {text}
    </div>
  );
}
