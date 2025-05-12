import { forwardRef, InputHTMLAttributes } from 'react';

type Styles = {
  labelClassName?: string;
};

type InputProps = { label?: string; styles?: Styles; error?: string } & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(({ error, styles, label, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-2 relative">
      {label && (
        <label className={`${error ? 'text-red-500' : ` text-white ${styles?.labelClassName}`} `}>
          {label}
        </label>
      )}
      <input ref={ref} {...props} />
      {error && (
        <div className="text-red-500 text-sm flex justify-end absolute -bottom-5 right-0">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
});

export default Input;
