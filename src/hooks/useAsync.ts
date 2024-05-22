import { useState } from "react";

export default function useAsync(asyncFunction: any): [boolean, any] {
  const [pending, setPending] = useState(false);

  const wrappedFunction = async (...args: any[]) => {
    try {
      setPending(true);
      return await asyncFunction(...args);
    } catch (error) {
      console.error(error);
    } finally {
      setPending(false);
    }
  };

  return [pending, wrappedFunction];
}
