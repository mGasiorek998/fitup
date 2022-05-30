import FormInput from 'components/atoms/FormInput/FormInput';

export default function JoggingWorkoutForm({
  defaultValues,
  onFormValuesChange,
}: PartialFormProps) {
  return (
    <>
      <FormInput
        type="number"
        id="distance"
        name="distance"
        label="Distance"
        value={defaultValues?.distance ? `${defaultValues.distance}` : ''}
        onChange={onFormValuesChange}
      />
      <FormInput
        type="number"
        id="runningTime"
        name="runningTime"
        label="Running time"
        value={defaultValues?.runningTime ? `${defaultValues.runningTime}` : ''}
        onChange={onFormValuesChange}
      />
      <FormInput
        type="number"
        id="restTime"
        name="rest"
        label="Rest time"
        value={defaultValues?.rest ? `${defaultValues.rest}` : ''}
        onChange={onFormValuesChange}
      />
    </>
  );
}
