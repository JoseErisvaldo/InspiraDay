import { Link } from "react-router-dom";
import PostCard from "../../Components/Post/PostCard";
import ProfileInfoCard from "../../Components/Profile/ProfileInfoCard";
import SuggestedProfiles from "../../Components/SuggestedProfiles/SuggestedProfiles";
import Container from "../../Components/UX/Container/Container";
import Button from "../../Components/UX/Button/Button";
import CardPost from "../../Components/Post/CardPost";
import { usePosts } from "../../Components/Hooks/usePosts";
import { useFollowSuggestions } from "../../Components/Hooks/useFollowSuggestions";

export default function Home() {  
  const { posts } = usePosts(); 
  const { followSuggestions } = useFollowSuggestions();

  return (
    <Container>
      <h1 className="text-4xl font-bold mb-4">Olá, José Erisvaldo!</h1>
      <p className="text-gray-700 mb-4">
        Comece seu dia com motivação e inspiração. Explore as postagens e encontre sua dose diária de positividade.
      </p>
      <div className="flex flex-1 gap-4 ">
        <div className="hidden sm:block w-[15rem] h-[calc(100vh-15rem)]">
          <ProfileInfoCard profile={'2'}/> 
          <Link to="/perfil" className="flex justify-center items-center">
            <Button text="Ver perfil" background="#0084ff" color="#fff" />
          </Link>
        </div>
        <CardPost rem={'15'} >
          <div className="">
            {posts.map(post => (
              <PostCard  key={post.id} post={post}  />
            ))}
          </div>
        </CardPost>
        <div className="w-96 hidden lg:block">
          <div>
            <h3 className="flex justify-between items-center font-semibold">Sugestões para você <span>Ver tudo</span></h3>
          </div>
          <SuggestedProfiles followSuggestions={followSuggestions} />
        </div>
      </div>
    </Container>
  );
}
