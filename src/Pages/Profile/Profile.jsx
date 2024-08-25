import { SlArrowLeft } from "react-icons/sl";
import CardPost from "../../Components/Post/CardPost";
import PostCard from "../../Components/Post/PostCard";
import ProfileInfoCard from "../../Components/Profile/ProfileInfoCard";
import SuggestedProfiles from "../../Components/SuggestedProfiles/SuggestedProfiles";
import Container from "../../Components/UX/Container/Container";
import { Link, useParams } from "react-router-dom";
import { usePosts } from "../../Components/Hooks/usePosts";
import { useFollowSuggestions } from "../../Components/Hooks/useFollowSuggestions";
import useProfiles from "../../Components/Hooks/useProfiles";

export default function Profile() {
  const { id } = useParams();
  const { posts } = usePosts(); 
  const { followSuggestions } = useFollowSuggestions();
  const { profiles } = useProfiles();

  const profile = profiles.find((profile) => profile.id === id);
  const userPosts = posts.filter((post) => post.user_id === id);

  return (
    <Container>
      <div className=" flex flex-col sm:flex-row gap-5 w-full">
        <div className="w-full sm:w-1/4">
          <Link to={'/'} className="text-2xl mb-3">
            <SlArrowLeft />
          </Link>
          <div className="bg-gray-50 p-4 rounded-3xl mt-5">
            {profile ? (
              <ProfileInfoCard profile={profile} />
            ) : (
              <p>Carregando perfil...</p>
            )}
          </div>
        </div>

        <div className="w-full flex h-[530px] sm:h-[840px] p-4">
          <CardPost rem={'0'}>
            {userPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </CardPost>
        </div>

        <div className="hidden lg:block w-[800px] mt-4">
          <div className="bg-gray-50 p-4 rounded-3xl">
            <h3 className="flex justify-between items-center font-semibold">
              Sugestões para você <span>Ver tudo</span>
            </h3>
            <SuggestedProfiles followSuggestions={followSuggestions} />
          </div>
        </div>
      </div>
    </Container>
  );
}
