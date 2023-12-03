export default function searchNameServiceByIdInArrayCategories(arr, id) {
  const foundObject = arr.find(
    ({ services }) =>
      services && Array.isArray(services) && services.some((service) => service.id === id),
  );

  return foundObject ? foundObject.services.find((service) => service.id === id) : null;
}
