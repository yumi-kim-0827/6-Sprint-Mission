import { useState } from "react";

export default function useAsync(asyncFunction) {
  const [pending, setPending] = useState(false);

  const wrappedFunction = async (...args) => {
    try {
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return { pending, wrappedFunction };
}
