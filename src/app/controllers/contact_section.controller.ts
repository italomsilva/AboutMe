import { Dispatch, SetStateAction } from "react";

export function handleInputChange<T>(
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  setState: Dispatch<SetStateAction<T>>
) {
  setState(e.target.value as T);
}
export function handleSubmit(
  e: React.FormEvent<HTMLFormElement>,
  name: string | null,
  email: string | null,
  msg: string | null
): void {
  e.preventDefault();
  if (name && email && msg) {
    const subject = `Portfolio contact: ${name}`;
    const body = `${msg}\n\nContact email: ${email}`;
    const url = `mailto:dev.italoms@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  } else {
    console.log("Please fill in all fields.");
  }
}
