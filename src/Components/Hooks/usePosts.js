import { useState, useEffect } from "react";
import api from "../../Components/Server/api";

export function usePosts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPosts() {
      try {
        const [responsePosts, responseUsers, responseLikes, responseComments] = await Promise.all([
          api.get("/posts?select=*"),
          api.get("/users?select=*"),
          api.get("/likes?select=*"),
          api.get("/comments?select=*")
        ]);
        if (responsePosts.status === 200 && responseUsers.status === 200 && responseLikes.status === 200) {
          const postsWithUser = responsePosts.data.map((post) => {
            const user = responseUsers.data.find((user) => user.id === post.user_id);
            const likes = responseLikes.data.filter((like) => like.post_id === post.id).map((like) => {
              const user = responseUsers.data.find((user) => user.id === like.user_id);
              return {
                profile_photo: user.profile_photo,
                userName: user.username,
                name: user.name,
                post_id: like.post_id,
                user_id: like.user_id,
                created_at: like.created_at
              };
            });
            const comments = responseComments.data.filter((comment) => comment.post_id === post.id).map((comment) => {
              const user = responseUsers.data.find((user) => user.id === comment.user_id);
              return {
                profile_photo: user.profile_photo,
                userName: user.username,
                name: user.name,
                post_id: comment.post_id,
                user_id: comment.user_id,
                content: comment.content,
                created_at: comment.created_at
              };
            });
            const likesCount = likes.length;
            const commentsCount = comments.length;
            return {
              id: post.id,
              user_id: post.user_id,
              content: post.content,
              created_at: post.created_at,
              profile_photo: user ? user.profile_photo : null,
              name: user ? user.name : null,
              userName: user ? user.username : null,
              likes: likes,
              comments: comments,
              likesCount: likesCount,
              commentsCount: commentsCount
            };
          });
          setPosts(postsWithUser);
        } else {
          setError("Erro ao buscar posts");
        }
      } catch (error) {
        setError("Erro ao buscar posts");
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);
  return { posts, loading, error };
}
