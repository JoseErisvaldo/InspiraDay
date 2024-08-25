import { FaRegComment, FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function PostCard({ post }) {
  return (
    <div className="p-4 mb-4 bg-slate-50">
      <Link to={`/perfil/${post.user_id}`} className="flex items-center gap-3">
        <div className="flex items-center mb-2 gap-2">
          <img src={post.profile_photo} alt="Foto" className="w-10 h-10 rounded-full" />
          <h2 className="text-xl font-bold mb-2">{post.name}</h2>
        </div>
      </Link>
      <div className="font-semibold">titulo</div>
      <p>{post.content}</p>
      <div className="m-2 flex gap-4">
        <span className="cursor-pointer">
          <FaRegHeart />
        </span>
        <span className="cursor-pointer">
          <FaRegComment />
        </span>
      </div>
    </div>
  );
}