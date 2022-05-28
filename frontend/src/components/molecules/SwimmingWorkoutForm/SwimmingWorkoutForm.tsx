import FormInput from 'components/atoms/FormInput/FormInput';
import swimmingStyleOptions from './swimmingStyleOptions';

export default function SwimmingWorkoutForm() {
  return (
    <>
      <FormInput
        id="swimmingStyle"
        name="swimmingStyle"
        label="Swimming style"
        type="select"
        options={swimmingStyleOptions}
      />
      <FormInput id="pools" name="pools" type="number" label="Pools count" />
      <FormInput
        id="restPools"
        name="restPools"
        type="number"
        label="Rest after pools"
      />
    </>
  );
}
