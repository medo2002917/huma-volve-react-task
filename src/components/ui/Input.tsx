import type { ChangeEvent } from "react";

type InputProps = {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

function Input({
  label,
  value,
  placeholder,
  onChange,
}: InputProps) {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <div>
      <label>{label}</label>

      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}

export default Input;