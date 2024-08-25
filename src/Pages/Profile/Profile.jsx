import { SlArrowLeft } from "react-icons/sl";
import CardPost from "../../Components/Post/CardPost";
import PostCard from "../../Components/Post/PostCard";
import ProfileInfoCard from "../../Components/Profile/ProfileInfoCard";
import SuggestedProfiles from "../../Components/SuggestedProfiles/SuggestedProfiles";
import Container from "../../Components/UX/Container/Container";
import { Link, useParams } from "react-router-dom";
import { usePosts } from "../../Components/Hooks/usePosts";
import { useFollowSuggestions } from "../../Components/Hooks/useFollowSuggestions";
import GenericCard from "../../Components/UX/GenericCard/GenericCard";
import { useProfiles } from "../../Components/Hooks/useProfiles";

export default function Profile() {
  const { id } = useParams();
  const { posts } = usePosts(); 
  const { followSuggestions } = useFollowSuggestions();
  const {profiles} = useProfiles();
  let profile = profiles.find((profile) => profile.id == id)
  return (
    <Container >
      <div className="flex flex-col">
        <Link to={'/'} className="text-2xl mb-3">
          <SlArrowLeft />
        </Link>
        <div className=" flex flex-col justify-center items-center gap-5 sm:w-3/6 sm:grid sm:grid-cols-2 m-auto bg-gray-50 p-4 rounded-3xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <ProfileInfoCard profile={profile} />
            <div>
              {profile.keywords.map((item) => (
                <span key={item} className="font-semibold text-blue-500">
                  #{item} {' '}
                </span>
              ))}
            </div>
          </div>
          <div>{profile.bio}</div>
        </div>
        <div className="flex w-full h-[530px] sm:h-[440px] p-4">
          <CardPost rem={'0'} >
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))} 
          </CardPost>
          <div className="hidden sm:block">
          <GenericCard rem={'0'} >
            <div >
              <h3 className="flex justify-between items-center font-semibold">Sugestões para você <span>Ver tudo</span></h3>
            </div>
            <SuggestedProfiles followSuggestions={followSuggestions} />
            </GenericCard>
          </div>
        </div>
      </div>
    </Container>
  )
}