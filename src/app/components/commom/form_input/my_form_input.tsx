export default function MyFormInput(props: MyFormInputProps) {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input
        type={props.type}
        id={props.id}
        name={'i'+props.id}
        placeholder={props.placeholder}
        required={props.required}
        value={props.value}
        onChange={props.onChange}
      />
    </div>
  );
}
export type MyFormInputProps = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  required: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};
