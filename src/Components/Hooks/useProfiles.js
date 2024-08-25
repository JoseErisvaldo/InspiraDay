import { useState, useEffect } from "react";
import api from "../Server/api";

export default function useProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProfiles() {
      try {
        const [responseProfile, responseFollows, responseFollowing] = await Promise.all([
          api.get("/users?select=*"),
          api.get("/follows?select=*"),
          api.get("/following?select=*")
        ]);

        if (responseProfile.status === 200) {
          // Mapeando os usuários para adicionar informações de seguidores e seguindo
          const users = responseProfile.data.map((user) => {
            const userFollows = responseFollows.data.filter((follow) => follow.follower_id === user.id);
            const userFollowing = responseFollowing.data.filter((follow) => follow.user_id === user.id);
            const userFollowers = responseFollows.data.filter((follow) => follow.user_id === user.id);

            return {
              ...user,
              following: userFollowing,
              follows: userFollows,
              followingCount: userFollowing.length,
              followsCount: userFollowers.length
            };
          });

          setProfiles(users);
          console.log(users);
        } else {
          setError("Erro ao buscar perfis");
        }
      } catch (error) {
        setError("Erro ao buscar perfis");
      } finally {
        setLoading(false);
      }
    }

    fetchProfiles();
  }, []);

  return { profiles, loading, error };
}
