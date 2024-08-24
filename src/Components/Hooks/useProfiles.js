import { useState } from "react";

const initialProfiles = [
  {
    id: 1,
    name: "João Inspirador",
    photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=João%20Inspirador",
    bio: "Acredito no poder da autoconfiança. Sou um defensor da positividade e quero inspirar você a acreditar em si mesmo para alcançar seus sonhos.",
    keywords: ["autoconfiança", "positividade", "inspiração"]
  },
  {
    id: 2,
    name: "Maria Motivadora",
    photo: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Maria%20Motivadora",
    bio: "Sou uma motivadora nata e acredito que a disciplina e a consistência são fundamentais para o sucesso. Estou aqui para ajudar você a se manter focado e alcançar suas metas.",
    keywords: ["disciplina", "consistência", "foco"]
  },
  {
    id: 3,
    name: "Carlos Determinado",
    photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=Carlos%20Determinado",
    bio: "Eu sou um exemplo de determinação e iniciativa. Minha missão é motivar você a dar o primeiro passo em sua jornada, não importa quão longa seja a estrada.",
    keywords: ["determinação", "iniciativa", "ação"]
  },
  {
    id: 4,
    name: "Ana Conquistadora",
    photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=Carlos%20Determinado",
    bio: "Nunca é tarde para mudar e alcançar novos objetivos. Acredito na força da determinação e da perseverança e estou aqui para inspirar mudanças positivas em sua vida.",
    keywords: ["perseverança", "mudança", "conquista"]
  },
  {
    id: 5,
    name: "Felipe Visionário",
    photo: "https://api.dicebear.com/9.x/lorelei/svg?seed=Felipe%20Visionário",
    bio: "Mantenho o foco em meus objetivos e ajudo os outros a superarem obstáculos para alcançar suas metas. Minha visão e determinação são voltadas para inspirar você a seguir em frente.",
    keywords: ["visão", "foco", "superação"]
  }
];



export function useProfiles() {
  const [profiles, setProfiles] = useState(initialProfiles);
  return { profiles };
}