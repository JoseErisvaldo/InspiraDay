

import { useState } from "react";
const initialPosts = [
  { id: 1, profileName: "João Inspirador", profilePhoto: "https://api.dicebear.com/9.x/lorelei/svg?seed=João%20Inspirador", title: "Acredite em Si Mesmo", content: "Acredite em si mesmo e tudo será possível.", tags: ["autoestima", "confiança", "motivação"], date: "2024-08-22T08:00:00Z" },
  { id: 2, profileName: "Maria Motivadora", profilePhoto: "https://api.dicebear.com/9.x/pixel-art/svg?seed=Maria%20Motivadora", title: "Esforço Contínuo", content: "O sucesso é a soma de pequenos esforços repetidos diariamente.", tags: ["disciplina", "consistência", "sucesso"], date: "2024-08-22T09:30:00Z" },
  { id: 3, profileName: "Carlos Determinado", profilePhoto: "https://api.dicebear.com/9.x/lorelei/svg?seed=Carlos%20Determinado", title: "Primeiro Passo", content: "A jornada de mil milhas começa com um único passo.", tags: ["ação", "iniciativa", "crescimento"], date: "2024-08-22T10:45:00Z" },
  { id: 4, profileName: "Ana Conquistadora", profilePhoto: "https://api.dicebear.com/9.x/lorelei/svg?seed=Ana%20Conquistadora", title: "Nunca é Tarde", content: "Nunca é tarde para ser o que você poderia ter sido.", tags: ["oportunidade", "mudança", "determinação"], date: "2024-08-22T11:15:00Z" },
  { id: 5, profileName: "Felipe Visionário", profilePhoto: "https://api.dicebear.com/9.x/lorelei/svg?seed=Felipe%20Visionário", title: "Olhos no Objetivo", content: "Os obstáculos são aquelas coisas assustadoras que você vê quando desvia os olhos do seu objetivo.", tags: ["foco", "superação", "objetivos"], date: "2024-08-22T13:00:00Z" },
];

export function usePosts() {
  const [posts] = useState(initialPosts);
  return { posts };
}