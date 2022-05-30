import FormInput from 'components/atoms/FormInput/FormInput';
import swimmingStyleOptions from './swimmingStyleOptions';

export default function SwimmingWorkoutForm({
  onFormValuesChange,
}: PartialFormProps) {
  return (
    <>
      <FormInput
        id="swimmingStyle"
        name="style"
        label="Swimming style"
        type="select"
        options={swimmingStyleOptions}
        onSelectItem={onFormValuesChange}
      />
      <FormInput
        id="pools"
        name="pools"
        type="number"
        label="Pools count"
        onChange={onFormValuesChange}
      />
      <FormInput
        id="restPools"
        name="rest"
        type="number"
        label="Rest after pools"
        onChange={onFormValuesChange}
      />
    </>
  );
}
