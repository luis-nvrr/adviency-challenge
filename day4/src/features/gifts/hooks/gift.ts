import create from "zustand";
import { Gift } from "../types/gift";
import giftService from "../services/gift";

type GiftStore = {
  gifts: Gift[];
  fetchAll: () => void;
  addGift: (description: string) => void;
  deleteGift: (id: number) => void;
};

const useStore = create<GiftStore>((set) => ({
  gifts: [],
  fetchAll: async () => {
    const initialGifts: Gift[] = await giftService.fetchAll(true, 500);
    set({ gifts: initialGifts });
  },
  addGift: (description: string) => {
    set((state) => ({
      gifts: [
        ...state.gifts,
        { id: state.gifts.length + 1, description: description },
      ],
    }));
  },
  deleteGift: (id: number) => {
    set((state) => ({
      gifts: state.gifts.filter((g) => g.id !== id),
    }));
  },
}));

export default useStore;
