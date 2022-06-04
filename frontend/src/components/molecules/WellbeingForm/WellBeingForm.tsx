import FormInput from 'components/atoms/FormInput/FormInput';

export default function WellBeingForm({
  defaultValues,
  onFormValuesChange,
}: PartialFormProps) {
  return (
    <>
      <FormInput
        type="number"
        min={1}
        id="time"
        name="time"
        label="Time (mins)"
        value={defaultValues?.time ? `${defaultValues.time}` : ''}
        onChange={onFormValuesChange}
      />
      <FormInput
        type="select"
        id="wellBeingType"
        name="wellBeingType"
        label="Type of activity"
        value={
          defaultValues?.wellBeingType ? `${defaultValues.wellBeingType}` : ''
        }
        onSelectItem={onFormValuesChange}
        options={[
          { label: 'Meditation', value: 'meditation' },
          { label: 'Streching', value: 'streching' },
        ]}
      />
    </>
  );
}
