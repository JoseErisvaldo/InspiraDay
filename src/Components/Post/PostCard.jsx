import { FaRegComment, FaRegHeart } from "react-icons/fa";


export default function PostCard({ post }) {
  return (
    <div className="p-4 mb-4 bg-slate-50">
      <div className="flex items-center mb-2 gap-2">
        <img src={post.profilePhoto} alt={post.profileName} className="w-10 h-10 rounded-full" />
        <h2 className="text-xl font-bold mb-2">{post.profileName}</h2>
      </div>
      <div className="font-semibold">{post.title}</div>
      <p>{post.content}</p>
      {post.tags.map((tag, index) => (
          <span key={index} className="font-semibold text-blue-500">
            #{tag} {' '}
          </span>
        ))}
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