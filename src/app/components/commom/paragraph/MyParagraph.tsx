export default function MyParagraph(props: MyParagraphProps) {
  return (
    <p
      style={{
        fontSize: props.fontSize || "1rem",
        color: props.color || "var(--light-first)",
        textAlign: props.textAlign || "left",
        lineHeight: props.lineHeight || "1.5",
        textIndent: props.textIndent || "2rem",
      }}
    >
      {props.text}
    </p>
  );
}
export type MyParagraphProps = {
  text: string;
  fontSize?: string;
  color?: string;
  textAlign?: "left" | "center" | "right" | "justify";
  lineHeight?: string;
  textIndent?: string;
};