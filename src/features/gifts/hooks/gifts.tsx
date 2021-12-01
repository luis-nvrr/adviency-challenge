import create from "zustand";
import gift from "../services/gift";
import giftService from "../services/gift";
import { Gift } from "../types/gift";

type GiftState = {
  gifts: Gift[];
  fetch: () => void;
};

const useStore = create<GiftState>((set) => ({
  gifts: [],
  fetch: async () => {
    const giftData = await giftService.findAllMock(true, 2000);
    set({ gifts: giftData });
  },
}));

export default useStore;
