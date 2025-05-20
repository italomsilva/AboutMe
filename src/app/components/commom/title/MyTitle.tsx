export default function MyTitle(props: MyTitleProps) {
    return (
        <h1
        className={props.className}
        style={{
            fontSize: props.fontSize || "",
            color: props.color || "var(--contrast-color)",
            textAlign: props.textAlign,
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
    className?: string;
};