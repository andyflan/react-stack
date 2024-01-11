import React from "react";
import classNames from "classnames";

interface InputFieldProps extends React.PropsWithChildren {
  name: string
  label: string
  value: string
  onChange: (value: string) => void
};

export const InputField: React.FC<InputFieldProps> = ({
  name,
  label,
  value,
  onChange,
}) => (<div className="my-3">
    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={name}>{label}</label>
    <input 
      name={name}
      type="text" 
      value={value}
      onChange={event => onChange(event.target.value)}
    />
</div>);