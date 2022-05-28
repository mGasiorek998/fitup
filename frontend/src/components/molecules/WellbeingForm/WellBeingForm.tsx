import FormInput from 'components/atoms/FormInput/FormInput';

export default function WellBeingForm() {
  return (
    <>
      <FormInput type="number" id="time" name="time" label="Time (mins)" />
      <FormInput
        type="select"
        id="wellBeingType"
        name="wellBeingType"
        label="Type of activity"
        options={[
          { label: 'Meditation', value: 'meditation' },
          { label: 'Streching', value: 'streching' },
        ]}
      />
    </>
  );
}
