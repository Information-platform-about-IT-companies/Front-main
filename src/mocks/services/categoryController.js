/* eslint-disable no-plusplus */
import { sleep, allServices } from "services/constants";

const getCategories = async () => {
  await sleep(500);
  let i = 0;
  return allServices.map(({ id, category, services }) => ({
    id,
    name: category,
    services: services.map((item) => ({ id: i++, name: item })),
  }));
};

export { getCategories };
