import { useState } from "react";

const initialfollowSuggestions = [
  { id: 1, name: "João Inspirador", photo: "https://via.placeholder.com/150", bio: "Acredito no poder da autoconfiança. Sou um defensor da positividade e quero inspirar você a acreditar em si mesmo para alcançar seus sonhos." },
  { id: 2, name: "Maria Motivadora", photo: "https://via.placeholder.com/150", bio: "Sou uma motivadora nata e acredito que a disciplina e a consistência são fundamentais para o sucesso. Estou aqui para ajudar você a se manter focado e alcançar suas metas." },
  { id: 3, name: "Carlos Determinado", photo: "https://via.placeholder.com/150", bio: "Eu sou um exemplo de determinação e iniciativa. Minha missão é motivar você a dar o primeiro passo em sua jornada, não importa quão longa seja a estrada." },
  { id: 4, name: "Ana Conquistadora", photo: "https://via.placeholder.com/150", bio: "Nunca é tarde para mudar e alcançar novos objetivos. Acredito na força da determinação e da perseverança e estou aqui para inspirar mudanças positivas em sua vida." },
  { id: 5, name: "Felipe Visionário", photo: "https://via.placeholder.com/150", bio: "Mantenho o foco em meus objetivos e ajudo os outros a superarem obstáculos para alcançar suas metas. Minha visão e determinação são voltadas para inspirar você a seguir em frente." },
];

export function useFollowSuggestions() {
  const [followSuggestions] = useState(initialfollowSuggestions);
  return { followSuggestions };
}