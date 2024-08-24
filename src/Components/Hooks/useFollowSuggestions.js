import { useState } from "react";

const initialfollowSuggestions = [
  { id: 1, name: "Ana Conquistadora", photo: "https://via.placeholder.com/150?text=Ana" },
  { id: 2, name: "Carlos Determinado", photo: "https://via.placeholder.com/150?text=Carlos" },
  { id: 3, name: "Felipe Visionário", photo: "https://via.placeholder.com/150?text=Felipe" },
  { id: 4, name: "Laura Forte", photo: "https://via.placeholder.com/150?text=Laura" },
  { id: 5, name: "Marcos Determinado", photo: "https://via.placeholder.com/150?text=Marcos" },
  { id: 6, name: "Ricardo Resiliente", photo: "https://via.placeholder.com/150?text=Ricardo" },
  { id: 7, name: "João Inspirador", photo: "https://via.placeholder.com/150?text=João" },
  { id: 8, name: "Sofia Inspiradora", photo: "https://via.placeholder.com/150?text=Sofia" },
  { id: 9, name: "Beatriz Corajosa", photo: "https://via.placeholder.com/150?text=Beatriz" },
  { id: 10, name: "Pedro Decidido", photo: "https://via.placeholder.com/150?text=Pedro" },
];

export function useFollowSuggestions() {
  const [followSuggestions] = useState(initialfollowSuggestions);
  return { followSuggestions };
}