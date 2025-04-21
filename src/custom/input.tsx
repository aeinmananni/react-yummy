import { InputHTMLAttributes } from 'react';

type Styles = {
  labelClassName?: string;
};

type InputProps = { label?: string; styles?: Styles; error?: string } & InputHTMLAttributes<HTMLInputElement>;

export default function Input({ error, styles, label, ...props }: InputProps) {
  return (
    <div className="w-full flex flex-col gap-2">
      <label className={`${error ? 'text-red-500' : ` text-white ${styles?.labelClassName}`} `}>
        {label}
      </label>
      <input {...props} />
      {error && (
        <div className="text-red-500 text-sm flex justify-end">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
}
