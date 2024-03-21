import { useRef, type ComponentPropsWithoutRef, type FormEvent } from "react";

type Props = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
};

export default function Form({ onSave, children, ...otherProps }: Props) {
  const form = useRef<HTMLFormElement>(null);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }
  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
}
