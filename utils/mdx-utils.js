import { api } from '../services/api';

export const getPosts = async () => {
  try {
    const { data } = await api.get('/posts');
    return data;
  } catch (error) {
    return {}; // Return an empty object or handle the error as needed.
  }
};
export const getPostBySlug = async (id) => {
  try {
    const { data } = await api.get(`/posts?id=eq.${id}`);
    return data;
  } catch (error) {
    console.error('Error fetching post:', error);
    return {}; // Return an empty object or handle the error as needed.
  }
};
