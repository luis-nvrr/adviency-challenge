import create from "zustand";
import giftService from "../services/gift";
import { Gift } from "../types/gift";

type GiftState = {
  gifts: Gift[];
  fetchAll: () => void;
};

const useStore = create<GiftState>((set) => ({
  gifts: [],
  fetchAll: async () => {
    const initialGifts = await giftService.fetchAll(true, 2000);
    set({ gifts: initialGifts });
  },
}));

export default useStore;
