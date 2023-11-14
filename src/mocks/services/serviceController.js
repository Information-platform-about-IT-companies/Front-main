/* eslint-disable no-plusplus */
import { sleep, allServices } from "services/constants";

const getServices = async () => {
  await sleep(100);
  let i = 0;
  return allServices.reduce(
    (arr, { id, category, services }) =>
      arr.concat(
        services.map((item) => ({ id: i++, name: item, category: { id, name: category } })),
      ),
    [],
  );
};

export { getServices };
