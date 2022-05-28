import FormInput from 'components/atoms/FormInput/FormInput';

export default function JoggingWorkoutForm() {
  return (
    <>
      <FormInput type="number" id="distance" name="distance" label="Distance" />
      <FormInput
        type="number"
        id="runningTime"
        name="runningTime"
        label="Running time"
      />
      <FormInput
        type="number"
        id="restTime"
        name="restTime"
        label="Rest time"
      />
    </>
  );
}
