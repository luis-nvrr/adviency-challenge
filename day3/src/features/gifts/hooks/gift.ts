import create from "zustand";
import { Gift } from "../types/gift";
import giftService from "../services/gift";

type GiftState = {
  gifts: Gift[];
  fetchAll: () => void;
  addGift: (description: string) => void;
};

const useStore = create<GiftState>((set) => ({
  gifts: [],
  fetchAll: async () => {
    const initialGifts: Gift[] = await giftService.fetchAll(true, 1000);
    set({ gifts: initialGifts });
  },
  addGift: (description) => {
    set((state) => ({
      gifts: [
        ...state.gifts,
        { description: description, id: state.gifts.length + 1 },
      ],
    }));
  },
}));

export default useStore;
