import PostCard from "../../Components/Post/PostCard";
import ProfileInfoCard from "../../Components/Profile/ProfileInfoCard";
import SuggestedProfiles from "../../Components/SuggestedProfiles/SuggestedProfiles";
import Container from "../../Components/UX/Container/Container";

const posts = [
  { id: 1, profileName: "João Inspirador", profilePhoto: "https://via.placeholder.com/150", title: "Acredite em Si Mesmo", content: "Acredite em si mesmo e tudo será possível.", tags: ["autoestima", "confiança", "motivação"], date: "2024-08-22T08:00:00Z" },
  { id: 2, profileName: "Maria Motivadora", profilePhoto: "https://via.placeholder.com/150", title: "Esforço Contínuo", content: "O sucesso é a soma de pequenos esforços repetidos diariamente.", tags: ["disciplina", "consistência", "sucesso"], date: "2024-08-22T09:30:00Z" },
  { id: 3, profileName: "Carlos Determinado", profilePhoto: "https://via.placeholder.com/150", title: "Primeiro Passo", content: "A jornada de mil milhas começa com um único passo.", tags: ["ação", "iniciativa", "crescimento"], date: "2024-08-22T10:45:00Z" },
  { id: 4, profileName: "Ana Conquistadora", profilePhoto: "https://via.placeholder.com/150", title: "Nunca é Tarde", content: "Nunca é tarde para ser o que você poderia ter sido.", tags: ["oportunidade", "mudança", "determinação"], date: "2024-08-22T11:15:00Z" },
  { id: 5, profileName: "Felipe Visionário", profilePhoto: "https://via.placeholder.com/150", title: "Olhos no Objetivo", content: "Os obstáculos são aquelas coisas assustadoras que você vê quando desvia os olhos do seu objetivo.", tags: ["foco", "superação", "objetivos"], date: "2024-08-22T13:00:00Z" },
  { id: 6, profileName: "Clara Otimista", profilePhoto: "https://via.placeholder.com/150", title: "Melhorar o Amanhã", content: "O que você faz hoje pode melhorar todos os seus amanhãs.", tags: ["planejamento", "futuro", "desenvolvimento"], date: "2024-08-22T14:30:00Z" },
  { id: 7, profileName: "Lucas Persistente", profilePhoto: "https://via.placeholder.com/150", title: "Caminho para o Êxito", content: "A persistência é o caminho do êxito.", tags: ["persistência", "sucesso", "motivação"], date: "2024-08-22T15:00:00Z" },
  { id: 8, profileName: "Sofia Inspiradora", profilePhoto: "https://via.placeholder.com/150", title: "Foco na Jornada", content: "A felicidade não é o destino, é a jornada.", tags: ["felicidade", "jornada", "vida"], date: "2024-08-22T16:00:00Z" },
  { id: 9, profileName: "Ricardo Resiliente", profilePhoto: "https://via.placeholder.com/150", title: "Transforme Dificuldades em Oportunidades", content: "As dificuldades são oportunidades disfarçadas.", tags: ["resiliência", "oportunidade", "superação"], date: "2024-08-22T17:00:00Z" },
  { id: 10, profileName: "Beatriz Corajosa", profilePhoto: "https://via.placeholder.com/150", title: "Saia da Zona de Conforto", content: "Tudo o que você deseja está do outro lado do medo.", tags: ["coragem", "zona de conforto", "mudança"], date: "2024-08-22T18:00:00Z" },
  { id: 11, profileName: "Pedro Decidido", profilePhoto: "https://via.placeholder.com/150", title: "Ação Imediata", content: "Não espere o momento perfeito, faça o momento perfeito.", tags: ["ação", "imediato", "proatividade"], date: "2024-08-22T19:00:00Z" },
  { id: 12, profileName: "Laura Forte", profilePhoto: "https://via.placeholder.com/150", title: "Seja Resiliente", content: "A vida não fica mais fácil, você fica mais forte.", tags: ["resiliência", "força", "vida"], date: "2024-08-22T20:00:00Z" },
  { id: 13, profileName: "André Confiante", profilePhoto: "https://via.placeholder.com/150", title: "Autoconfiança é a Chave", content: "Confie em si mesmo. Você sabe mais do que imagina.", tags: ["autoconfiança", "autoestima", "sucesso"], date: "2024-08-22T21:00:00Z" },
  { id: 14, profileName: "Luiza Vitoriosa", profilePhoto: "https://via.placeholder.com/150", title: "Vença a Si Mesmo", content: "O único limite para o seu sucesso é o que você acredita ser possível.", tags: ["sucesso", "autoestima", "superação"], date: "2024-08-22T22:00:00Z" },
  { id: 15, profileName: "Marcos Determinado", profilePhoto: "https://via.placeholder.com/150", title: "Determinação Diária", content: "Pequenos passos na direção certa são o que constroem grandes vitórias.", tags: ["determinação", "vitória", "passos"], date: "2024-08-22T23:00:00Z" },
];

const followSuggestions = [
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



export default function Home() {
  

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Olá, José Erisvaldo!</h1>
      <p className="text-gray-700 mb-4">
        Comece seu dia com motivação e inspiração. Explore as postagens e encontre sua dose diária de positividade.
      </p>
      <div className="flex flex-1 gap-4 ">
        <div className="w-[15rem] flex flex-col h-[calc(100vh-15rem)]">
          <ProfileInfoCard/>
          
        </div>
        <div style={{
          scrollbarWidth: 'none'
        }} className=" w-full h-[calc(100vh-15rem)] overflow-scroll ">
          <div className="bg-slate-50">
              {posts.map(post => (
              <PostCard  key={post.id} post={post}  />
              ))}
          </div>
        </div>
        <div className="w-96">
          <div>
            <h3 className="flex justify-between items-center font-semibold">Sugestões para você <span>Ver tudo</span></h3>
          </div>
          <SuggestedProfiles followSuggestions={followSuggestions} />
        </div>
      </div>
    </Container>
  );
}
