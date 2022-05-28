import { StyledFlexWrapper } from 'assets/styles/FlexContainer.styles';
import React from 'react';

interface FormInput extends React.HTMLProps<HTMLInputElement> {
  label: string;
  options?: { label: string; value: string }[];
  onSelectItem?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export default function FormInput({
  id,
  options,
  type,
  label,
  onSelectItem,
  ...props
}: FormInput) {
  return (
    <StyledFlexWrapper flexDirection="column">
      <label htmlFor={id}>{label}</label>
      {type === 'select' ? (
        <select onChange={onSelectItem}>
          <option value="">-</option>
          {options?.map((o, i) => (
            <option key={i} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      ) : (
        <input id={id} type={type} {...props} />
      )}
    </StyledFlexWrapper>
  );
}
