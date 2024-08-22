import ProfileInfoCard from "../../Components/Profile/ProfileInfoCard";
import Container from "../../Components/UX/Container/Container";

// Defina uma lista de postagens
const posts = [
  { id: 1, title: "Postagem 1", content: "Conteúdo da postagem 1" },
  { id: 2, title: "Postagem 2", content: "Conteúdo da postagem 2" },
  { id: 3, title: "Postagem 3", content: "Conteúdo da postagem 3" },
  { id: 4, title: "Postagem 4", content: "Conteúdo da postagem 4" },
  { id: 1, title: "Postagem 1", content: "Conteúdo da postagem 1" },
  { id: 2, title: "Postagem 2", content: "Conteúdo da postagem 2" },
  { id: 3, title: "Postagem 3", content: "Conteúdo da postagem 3" },
  { id: 4, title: "Postagem 4", content: "Conteúdo da postagem 4" },
  // Adicione mais postagens conforme necessário
];

export default function Home() {
  

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Olá, José Erisvaldo!</h1>
      <p className="text-gray-700 mb-4">
        Comece seu dia com motivação e inspiração. Explore as postagens e encontre sua dose diária de positividade.
      </p>
      <div className="flex gap-4">
        <div className="w-[15rem] flex flex-col h-[calc(100vh-15rem)]">
          <ProfileInfoCard/>
          
        </div>
        <div className="flex-1 h-[calc(100vh-15rem)] border overflow-scroll ">
        <ul>
            {posts.map(post => (
              <li key={post.id} className={"border p-4 mb-4"}>
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p>{post.content}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  );
}
