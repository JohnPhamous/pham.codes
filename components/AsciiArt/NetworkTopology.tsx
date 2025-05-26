import { useState, useEffect } from 'react';

const frames = [
  '[User] <--> [NET] <--> [GPU]',
  '[User] <--< [NET] >--> [GPU]',
  '[User] <--> [NET] <--> [GPU]',
  '[User] >--< [NET] <--< [GPU]',
];

const NetworkTopology = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % frames.length);
    }, 500); // Change frame every 500ms

    return () => clearInterval(intervalId);
  }, []);

  return (
    <pre
      className="bg-white animate-textFade"
      style={{
        animationDelay: `calc(2 * var(--animation-delay-step))`, // Ensure this matches existing page animations
        textAlign: 'center', // Center the ASCII art
        margin: '20px 0', // Add some margin
      }}
    >
      {frames[currentFrame]}
    </pre>
  );
};

export default NetworkTopology;
