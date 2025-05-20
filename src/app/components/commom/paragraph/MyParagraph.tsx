export default function MyParagraph(props: MyParagraphProps) {
  return (
    <p
      className={props.className}
      style={{
        fontSize: props.fontSize || "",
        color: props.color || "var(--light-first)",
        textAlign: props.textAlign,
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
  className?:string;
};