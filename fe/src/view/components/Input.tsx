import { ComponentProps } from 'react';

interface InputProps extends ComponentProps<"input"> {
  name?: string;
}

export function Input({name, placeholder, type}: InputProps) {
    return (
      <input
        className="bg-white w-full rounded-lg border border-gray-500 px-3 h-[40px] text-gray-800   focus:border-gray-800 transition-all outline-none"
        type={type}
        name={name}
        placeholder={placeholder}
      />
    );
}
