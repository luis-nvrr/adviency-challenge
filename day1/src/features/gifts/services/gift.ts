import { Gift } from "../types/gift";

const GiftList: Gift[] = [
  { id: 0, description: "Medias" },
  { id: 1, description: "Caramelos" },
  { id: 2, description: "Vitel Tone" },
];

const findAllMock = (success: boolean, timeout: number) => {
  return new Promise<Gift[]>((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve(GiftList);
      } else {
        reject({ message: "Error" });
      }
    }, timeout);
  });
};

export default {
  findAllMock,
};
