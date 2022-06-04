import FormInput from 'components/atoms/FormInput/FormInput';
import swimmingStyleOptions from './swimmingStyleOptions';

export default function SwimmingWorkoutForm({
  defaultValues,
  onFormValuesChange,
}: PartialFormProps) {
  return (
    <>
      <FormInput
        id="swimmingStyle"
        name="style"
        label="Swimming style"
        type="select"
        value={defaultValues?.style ? defaultValues?.style : ''}
        options={swimmingStyleOptions}
        onSelectItem={onFormValuesChange}
      />
      <FormInput
        id="pools"
        name="pools"
        type="number"
        min={1}
        label="Pools count"
        value={defaultValues?.pools ? `${defaultValues?.pools}` : ''}
        onChange={onFormValuesChange}
      />
      <FormInput
        id="restPools"
        name="rest"
        type="number"
        min={1}
        label="Rest after pools"
        value={defaultValues?.rest ? `${defaultValues?.rest}` : ''}
        onChange={onFormValuesChange}
      />
    </>
  );
}
