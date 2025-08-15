import { Call_Categories } from "../services/categories";

export function useCategories() {
  const getCategories = async () => {
    const res = await Call_Categories();
    return res;
  };

  return { getCategories };
}
