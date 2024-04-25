import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getItemsId } from '../api/getItemsId';

export default function useItem(productId) {
  const [item, setItem] = useState(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchItemsWithId = async () => {
      try {
        const data = await getItemsId(productId);
        if (!data) {
          window.alert('존재하지 않는 상품입니다.');
          nav('/', { replace: true });
        }
        setItem(data);
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchItemsWithId();
  }, [productId]);

  return item;
}
