import { CSSProperties, useState } from "react";

export default function MyButton(props: MyButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const style: CSSProperties = {
    padding: props.style?.padding || "0.3rem 2rem",
    transition: props.style?.transition || "all 0.3s",
    backgroundColor: isHovered
      ? props.style?.hoverBackgroundColor || "var(--hover-bg-color)"
      : props.style?.backgroundColor || "var(--contrast-color)",
    color: isHovered
      ? props.style?.hoverColor || "var(--hover-text-color)"
      : props.style?.color || "var(--dark-first)",
    border: props.style?.border || "3px solid var(--contrast-color)",
    borderRadius: props.style?.borderRadius || "0.1rem",
    fontSize: props.style?.fontSize || "",
    cursor: "pointer",

  };

  if (props.type === "link") {
    return (
      <a
        href={props.href}
        className={props.className}
        style={style}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        target={props.target}
        hidden={props.disabled}
      >
        {props.text}
      </a>
    );
  }

  return (
    <button
      type={props.type}
      className={props.className}
      style={style}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
}

export type MyButtonProps = {
  type?: "button" | "link" | "submit" | "reset";
  onClick?: () => void;
  text: string;
  className?: string;
  href?: string;
  disabled?: boolean;
  target?: string;
  style?: {
    padding?: string;
    backgroundColor?: string;
    color?: string;
    border?: string;
    borderRadius?: string;
    fontSize?: string;
    hoverColor?: string;
    hoverBackgroundColor?: string;
    transition?: string;
  };
};
