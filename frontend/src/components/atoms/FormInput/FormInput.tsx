import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import React from 'react';

interface FormInput extends React.HTMLProps<HTMLInputElement> {
  label: string;
  name?: string;
  disabled?: boolean;
  value?: string;
  withoutEmptyOption?: boolean;
  options?: { label: string; value: string }[];
  onSelectItem?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FormInput({
  id,
  options,
  disabled,
  withoutEmptyOption,
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
        <select
          disabled={disabled}
          name={name}
          value={value}
          onChange={onSelectItem}
        >
          {!withoutEmptyOption && <option value="">-</option>}
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
          disabled={disabled}
          onChange={onChange}
          {...props}
        />
      )}
    </StyledFlexWrapper>
  );
}
