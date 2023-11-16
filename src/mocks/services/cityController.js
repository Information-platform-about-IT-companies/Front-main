import { sleep, cities } from "services/constants";
// /api/v1/info/cities
const getCities = async () => {
  await sleep(100);
  return cities.map((item, i) => ({ id: i, name: item }));
};

export { getCities };
