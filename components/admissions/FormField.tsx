import React from 'react';

const baseInputStyles =
  'w-full px-4 py-3 bg-ivory-50 border text-sm text-charcoal-900 placeholder:text-charcoal-400 focus-visible:outline-2 focus-visible:outline-gold-500 focus-visible:outline-offset-1 outline-none transition-colors';

interface FieldWrapperProps {
  label: string;
  required?: boolean;
  error?: string;
  htmlFor: string;
  children: React.ReactNode;
  hint?: string;
}

export const FieldWrapper: React.FC<FieldWrapperProps> = ({ label, required, error, htmlFor, children, hint }) => (
  <div>
    <label htmlFor={htmlFor} className="block text-xs font-semibold uppercase tracking-wider text-charcoal-600 mb-2">
      {label} {required ? <span className="text-gold-600">*</span> : <span className="text-charcoal-400 normal-case font-normal">(Optional)</span>}
    </label>
    {children}
    {hint && !error && <p className="mt-1.5 text-xs text-charcoal-400">{hint}</p>}
    {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
  </div>
);

interface TextFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  type?: string;
  placeholder?: string;
  hint?: string;
}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  value,
  onChange,
  required,
  error,
  type = 'text',
  placeholder,
  hint,
}) => (
  <FieldWrapper label={label} required={required} error={error} htmlFor={id} hint={hint}>
    <input
      id={id}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className={`${baseInputStyles} ${error ? 'border-red-400' : 'border-stone-300'}`}
    />
  </FieldWrapper>
);

interface TextAreaFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  error?: string;
  placeholder?: string;
  rows?: number;
}

export const TextAreaField: React.FC<TextAreaFieldProps> = ({
  id,
  label,
  value,
  onChange,
  required,
  error,
  placeholder,
  rows = 4,
}) => (
  <FieldWrapper label={label} required={required} error={error} htmlFor={id}>
    <textarea
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      rows={rows}
      className={`${baseInputStyles} resize-none ${error ? 'border-red-400' : 'border-stone-300'}`}
    />
  </FieldWrapper>
);

interface SelectFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { value: string; label: string }[] | string[];
  required?: boolean;
  error?: string;
  placeholder?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  label,
  value,
  onChange,
  options,
  required,
  error,
  placeholder = 'Select an option',
}) => (
  <FieldWrapper label={label} required={required} error={error} htmlFor={id}>
    <select
      id={id}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`${baseInputStyles} ${error ? 'border-red-400' : 'border-stone-300'}`}
    >
      <option value="">{placeholder}</option>
      {options.map((opt) => {
        const optValue = typeof opt === 'string' ? opt : opt.value;
        const optLabel = typeof opt === 'string' ? opt : opt.label;
        return (
          <option key={optValue} value={optValue}>
            {optLabel}
          </option>
        );
      })}
    </select>
  </FieldWrapper>
);
