export function removeIdFromEntity(entity: Meal | Workout) {
  if (!Object.keys(entity).includes('_id')) return;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { _id, ...rest } = entity;
  return rest;
}
