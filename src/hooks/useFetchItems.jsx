import { useState, useEffect } from 'react';
import { getItems } from '../services/api';

const useFetchItems = options => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        setLoading(true);
        const { list } = await getItems(options);
        setItems(list);
        setLoading(false);
      } catch (error) {
        console.error('Failed to fetch items:', error);
        setError(error);
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  return { items, loading, error };
};

export default useFetchItems;
