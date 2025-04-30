import { forwardRef, TextareaHTMLAttributes } from 'react';

type Styles = {
  labelClassName?: string;
};

type TextareaProps = {
  label?: string;
  styles?: Styles;
  error?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ error, styles, label, ...props }, ref) => {
  return (
    <div className="w-full flex flex-col gap-2">
      {label && (
        <label className={`${error ? 'text-red-500' : ` text-white ${styles?.labelClassName}`} `}>
          {label}
        </label>
      )}
      <textarea ref={ref} {...props} />
      {error && (
        <div className="text-red-500 text-sm flex justify-end">
          <p>{error}</p>
        </div>
      )}
    </div>
  );
});

export default Textarea;
