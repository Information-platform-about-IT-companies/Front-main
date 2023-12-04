export default function findServiceById(categories, id) {
  const foundCategory = categories?.find(
    ({ services }) =>
      services && Array.isArray(services) && services.some((service) => service.id === id),
  );

  return foundCategory ? foundCategory.services.find((service) => service.id === id) : null;
}
