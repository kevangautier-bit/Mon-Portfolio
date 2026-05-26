import { useState, useEffect } from 'react';

export default function TypeWriter({ lines, charDelay = 45, lineDelay = 250 }) {
  const [completed, setCompleted] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => setShowCursor(v => !v), 530);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    const fullText = (line.prefix ?? '') + line.text;

    if (charIndex < fullText.length) {
      const delay = line.fast ? 18 : charDelay;
      const timer = setTimeout(() => setCharIndex(c => c + 1), delay);
      return () => clearTimeout(timer);
    }

    const pause = line.pause ?? lineDelay;
    const timer = setTimeout(() => {
      setCompleted(prev => [...prev, { text: fullText, style: line.style }]);
      setLineIndex(l => l + 1);
      setCharIndex(0);
    }, pause);
    return () => clearTimeout(timer);
  }, [lineIndex, charIndex, lines, charDelay, lineDelay]);

  const currentLine = lineIndex < lines.length ? lines[lineIndex] : null;
  const currentText = currentLine
    ? ((currentLine.prefix ?? '') + currentLine.text).slice(0, charIndex)
    : '';

  return (
    <div className="typewriter">
      {completed.map((line, i) => (
        <div key={i} className={`tw-line ${line.style || ''}`}>
          {line.text}
        </div>
      ))}
      {currentLine && (
        <div className={`tw-line ${currentLine.style || ''}`}>
          {currentText}
          <span className={`tw-cursor ${showCursor ? 'on' : 'off'}`}>█</span>
        </div>
      )}
      {lineIndex >= lines.length && (
        <span className={`tw-cursor standalone ${showCursor ? 'on' : 'off'}`}>█</span>
      )}
    </div>
  );
}
