import type { FieldProps } from "../../types";

export function Field({
  label,
  id,
  type = "text",
  placeholder,
  required,
  pattern,
  title,
  inputRef,
  error,
  onChange,
}: FieldProps) {
  return (
    <div className="field">
      <div className="field-top">
        <label htmlFor={id} className="field-label">
          {label}
        </label>
        {error && <span className="field-error">{error}</span>}
      </div>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        title={title}
        className={`field-input${error ? " invalid" : ""}`}
        onChange={onChange}
      />
    </div>
  );
}
