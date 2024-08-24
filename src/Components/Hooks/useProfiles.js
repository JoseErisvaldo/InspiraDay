import { useState } from "react";

const initialProfiles = [
  { id: 1, name: "João Inspirador", photo: "https://via.placeholder.com/150", bio: "Acredito no poder da autoconfiança. Sou um defensor da positividade e quero inspirar você a acreditar em si mesmo para alcançar seus sonhos." },
  { id: 2, name: "Maria Motivadora", photo: "https://via.placeholder.com/150", bio: "Sou uma motivadora nata e acredito que a disciplina e a consistência são fundamentais para o sucesso. Estou aqui para ajudar você a se manter focado e alcançar suas metas." },
  { id: 3, name: "Carlos Determinado", photo: "https://via.placeholder.com/150", bio: "Eu sou um exemplo de determinação e iniciativa. Minha missão é motivar você a dar o primeiro passo em sua jornada, não importa quão longa seja a estrada." },
  { id: 4, name: "Ana Conquistadora", photo: "https://via.placeholder.com/150", bio: "Nunca é tarde para mudar e alcançar novos objetivos. Acredito na força da determinação e da perseverança e estou aqui para inspirar mudanças positivas em sua vida." },
  { id: 5, name: "Felipe Visionário", photo: "https://via.placeholder.com/150", bio: "Mantenho o foco em meus objetivos e ajudo os outros a superarem obstáculos para alcançar suas metas. Minha visão e determinação são voltadas para inspirar você a seguir em frente." },
  { id: 6, name: "Clara Otimista", photo: "https://via.placeholder.com/150", bio: "Como otimista, acredito no poder do planejamento e no desenvolvimento pessoal. Meu objetivo é incentivar você a melhorar continuamente para alcançar um futuro melhor." },
  { id: 7, name: "Lucas Persistente", photo: "https://via.placeholder.com/150", bio: "Sou a personificação da persistência. Acredito que a perseverança é o caminho para o sucesso e estou aqui para motivar você a nunca desistir." },
  { id: 8, name: "Sofia Inspiradora", photo: "https://via.placeholder.com/150", bio: "Vejo a felicidade como uma jornada e não um destino. Compartilho minha filosofia de vida para ajudar você a encontrar alegria em cada passo do caminho." },
  { id: 9, name: "Ricardo Resiliente", photo: "https://via.placeholder.com/150", bio: "Encaro as dificuldades como oportunidades disfarçadas. Sou um exemplo de resiliência e estou aqui para ajudar você a transformar desafios em sucesso." },
  { id: 10, name: "Beatriz Corajosa", photo: "https://via.placeholder.com/150", bio: "Incentivo você a sair da sua zona de conforto e enfrentar seus medos para alcançar o que deseja. Minha coragem é um impulso para você superar seus próprios limites." },
  { id: 11, name: "Pedro Decidido", photo: "https://via.placeholder.com/150", bio: "Acredito em agir imediatamente e criar minhas próprias oportunidades. Estou aqui para inspirar você a ser proativo e fazer as coisas acontecerem." },
  { id: 12, name: "Laura Forte", photo: "https://via.placeholder.com/150", bio: "Acredito que as dificuldades da vida nos tornam mais fortes. Minha força e resiliência estão aqui para inspirar você a superar os desafios da vida." },
  { id: 13, name: "André Confiante", photo: "https://via.placeholder.com/150", bio: "Confio plenamente em mim mesmo e acredito que a autoconfiança é a chave para o sucesso. Estou aqui para encorajar você a acreditar em suas próprias capacidades." },
  { id: 14, name: "Luiza Vitoriosa", photo: "https://via.placeholder.com/150", bio: "Sou uma vencedora nata e acredito que nossos limites são definidos pelo que acreditamos ser possível. Quero inspirar você a superar seus próprios limites." },
  { id: 15, name: "Marcos Determinado", photo: "https://via.placeholder.com/150", bio: "Acredito que grandes vitórias são construídas com pequenos passos. Minha determinação diária é um exemplo de como a constância leva ao sucesso." },
];

export function useProfiles() {
  const [profiles, setProfiles] = useState(initialProfiles);
  return { profiles };
}