import { Call_Elements } from "../services/elements";

export function useElements() {
  const getElements = async () => {
    const res = await Call_Elements();
    return res;
  };

  return {
    getElements,
  };
}
