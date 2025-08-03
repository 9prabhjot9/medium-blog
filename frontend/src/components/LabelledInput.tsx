import { Input } from "./ui/input";
import React from "react";

type LabelledInputProps = {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const LabelledInput = ({
  label,
  name,
  type = "text",
  placeholder,
  onChange,
}: LabelledInputProps) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};