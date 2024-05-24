import { useCallback, useState } from "react";

interface ErrorType {
  status: Number; // more keys and their types here
}

function useAsync(asyncFunction: Function) {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<unknown | null>(null);
  const wrappedFunction = useCallback(
    async (...args: string[]) => {
      try {
        setPending(true);
        setError(null);
        return await asyncFunction(...args);
      } catch (error: unknown | null) {
        setError(error);
        return;
      } finally {
        setPending(false);
      }
    },
    [asyncFunction]
  );

  return [pending, error, wrappedFunction];
}

export default useAsync;
