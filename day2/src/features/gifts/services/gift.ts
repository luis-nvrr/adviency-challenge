import { Gift } from "../types/gift";

const giftList: Gift[] = [
  { id: 0, description: "medias" },
  { id: 1, description: "caramelos" },
  { id: 2, description: "vitel tone" },
];

const fetchAll = (success: boolean, timeout: number): Promise<Gift[]> => {
  return new Promise<Gift[]>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(giftList);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export default {
  fetchAll,
};
