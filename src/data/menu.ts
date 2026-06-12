import idly from "@/assets/food-idly.jpg";
import dosa from "@/assets/food-dosa.jpg";
import vada from "@/assets/food-vada.jpg";
import bonda from "@/assets/food-bonda.jpg";
import puri from "@/assets/food-puri.jpg";
import uthappam from "@/assets/food-uthappam.jpg";
import chapati from "@/assets/food-chapati.jpg";
import pongali from "@/assets/food-pongali.jpg";

export type MenuItem = {
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
};

export const tiffinCategories: { title: string; items: MenuItem[] }[] = [
  {
    title: "Classic Tiffins",
    items: [
      { name: "Idly (3 Pieces)", price: 36, image: idly, category: "Classic", description: "Soft, fluffy steamed rice cakes served with sambar and fresh coconut chutney." },
      { name: "Sambar Idly (2 Pieces)", price: 40, image: idly, category: "Classic", description: "Tender idlis soaked in our signature spiced sambar broth." },
      { name: "Vada (2 Pieces)", price: 40, image: vada, category: "Classic", description: "Crispy golden lentil doughnuts, a South Indian breakfast classic." },
      { name: "Vada Sambar (2 Pieces)", price: 45, image: vada, category: "Classic", description: "Medu vadas dunked into hot, aromatic sambar." },
      { name: "Single Vada", price: 25, image: vada, category: "Classic", description: "One perfectly fried medu vada with chutneys." },
      { name: "Mysore Bonda (3 Pieces)", price: 40, image: bonda, category: "Classic", description: "Soft, fluffy fried savoury balls — a Mysore favourite." },
      { name: "Mysore Bonda (2 Pieces)", price: 28, image: bonda, category: "Classic", description: "Two pieces of crisp-outside, soft-inside bondas." },
      { name: "Masala Gare (2 Pieces)", price: 40, image: vada, category: "Classic", description: "Spiced lentil patties with onion and curry leaves." },
      { name: "Perugu Vada (2 Pieces)", price: 50, image: vada, category: "Classic", description: "Cool curd-soaked vadas tempered with mustard and curry leaves." },
      { name: "Perugu Vada Full Plate", price: 55, image: vada, category: "Classic", description: "Generous full plate of refreshing yoghurt vadas." },
      { name: "Kattu Pongali", price: 45, image: pongali, category: "Classic", description: "Ghee-rich rice and lentil porridge tempered with pepper and cumin." },
    ],
  },
  {
    title: "Dosa Varieties",
    items: [
      { name: "Dosa", price: 40, image: dosa, category: "Dosa", description: "Crispy, golden plain dosa served with sambar and chutneys." },
      { name: "Ulli Dosa", price: 45, image: dosa, category: "Dosa", description: "Plain dosa topped with sautéed onions and green chillies." },
      { name: "Masala Dosa", price: 45, image: dosa, category: "Dosa", description: "Crispy dosa wrapped around spiced potato masala." },
      { name: "Upma Dosa", price: 45, image: dosa, category: "Dosa", description: "Soft upma stuffed inside a crisp dosa." },
      { name: "Pesara Dosa", price: 40, image: dosa, category: "Dosa", description: "Wholesome green-gram dosa, an Andhra speciality." },
      { name: "Ulli Pesara Dosa", price: 45, image: dosa, category: "Dosa", description: "Green-gram dosa loaded with onions and herbs." },
      { name: "Nellore Karam Dosa", price: 45, image: dosa, category: "Dosa", description: "Fiery dosa smeared with the famous Nellore-style karam." },
      { name: "Uthappam", price: 55, image: uthappam, category: "Dosa", description: "Thick pancake topped with onion, tomato and chillies." },
      { name: "Paper Roast Dosa", price: 60, image: dosa, category: "Dosa", description: "Extra thin, crisp, paper-roasted dosa served with chutneys." },
      { name: "Rava Dosa", price: 45, image: dosa, category: "Dosa", description: "Lacy, crisp semolina dosa with cumin and curry leaves." },
    ],
  },
  {
    title: "Puri & Breads",
    items: [
      { name: "Puri (2 Pieces)", price: 45, image: puri, category: "Bread", description: "Puffed-up puris served with hot potato curry." },
      { name: "Single Puri", price: 25, image: puri, category: "Bread", description: "One golden puri with curry." },
      { name: "Chapathi (1)", price: 45, image: chapati, category: "Bread", description: "Soft wheat chapathi with a daily-changing curry." },
      { name: "Parota (1)", price: 45, image: chapati, category: "Bread", description: "Flaky layered parota, freshly griddled." },
    ],
  },
];

export const allTiffins = tiffinCategories.flatMap((c) => c.items);
