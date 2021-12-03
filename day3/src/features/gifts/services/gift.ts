import { Gift } from "../types/gift";

const giftList = [
  { id: 1, description: "medias" },
  { id: 2, description: "caramelos" },
  { id: 3, description: "vitel tone" },
];

const fetchAll = (succeed: boolean, timeout: number): Promise<Gift[]> => {
  return new Promise<Gift[]>((resolve, reject) => {
    setTimeout(() => {
      if (succeed) {
        resolve(giftList);
      } else {
        reject({ message: "error" });
      }
    }, timeout);
  });
};

export default {
  fetchAll,
};
