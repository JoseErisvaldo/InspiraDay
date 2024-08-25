import axios from "axios";

const api = axios.create({
  baseURL: "https://ummrcakwdaeufujhnvrv.supabase.co/rest/v1",
  headers: {
    'apikey': process.env.REACT_APP_SUPABASE_KEY,
    'Authorization': `Bearer ${process.env.REACT_APP_SUPABASE_KEY}`
  }
});

export default api;
