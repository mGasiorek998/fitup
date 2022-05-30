import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import React from 'react';

interface FormInput extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name?: string;
  value?: string;
  options?: { label: string; value: string }[];
  onSelectItem?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  options,
  type,
  name,
  value,
  label,
  onSelectItem,
  onChange,
  ...props
}: FormInput) {
  return (
    <StyledFlexWrapper flexDirection="column">
      <label htmlFor={id}>{label}</label>
      {type === 'select' ? (
        <select name={name} onChange={onSelectItem}>
          <option value="">-</option>
          {options?.map((o, i) => (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
      )}
    </StyledFlexWrapper>
  );
}
