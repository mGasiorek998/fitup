import FormInput from 'components/atoms/FormInput/FormInput';

export default function WellBeingForm({
  onFormValuesChange,
}: PartialFormProps) {
  return (
    <>
      <FormInput
        type="number"
        id="time"
        name="time"
        label="Time (mins)"
        onChange={onFormValuesChange}
      />
      <FormInput
        type="select"
        id="wellBeingType"
        name="wellBeingType"
        label="Type of activity"
        onSelectItem={onFormValuesChange}
        options={[
          { label: 'Meditation', value: 'meditation' },
          { label: 'Streching', value: 'streching' },
        ]}
      />
    </>
  );
}
