export default function LustreText({ text, disabled = false, speed = 5, className = "" }) {
  const animationStyle = {
    animationName: "shine",
    animationDuration: `${speed}s`,
    animationTimingFunction: "linear",
    animationIterationCount: "infinite",
    animationFillMode: "forwards",
  };

  return (
    <span
      className={`lustre-text ${!disabled ? "animate-shine" : ""} lustre-dark ${className}`}
      style={!disabled ? animationStyle : undefined}
    >
      {text}
    </span>
  );
}
