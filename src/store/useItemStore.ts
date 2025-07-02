import { create } from 'zustand';
import axios from 'axios';

type Item = {
  id: number;
  name: string;
  image: string;
  species: string;
};

type Store = {
  items: Item[];
  fetchItems: () => void;
};

export const useItemStore = create<Store>((set) => ({
  items: [],
  fetchItems: async () => {
    const res = await axios.get('https://rickandmortyapi.com/api/character');
    set({ items: res.data.results });
  }
}));
