export default function MyTitle(props: MyTitleProps) {
    return (
        <h1
        style={{
            fontSize: props.fontSize || "2rem",
            color: props.color || "var(--contrast-color)",
            textAlign: props.textAlign || "left",
            textDecoration: props.textDecoration || "underline",
        }}
        >
        {props.text}
        </h1>
    );
}

export type MyTitleProps = {
    text: string;
    fontSize?: string;
    color?: string;
    textAlign?: "left" | "center" | "right" | "justify";
    textDecoration?: "underline" | "none";
};