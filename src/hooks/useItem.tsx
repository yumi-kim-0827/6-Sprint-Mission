import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetItemResponse, getItemsId } from '../api/getItemsId';

export default function useItem(productId: string) {
  const [item, setItem] = useState<GetItemResponse | null>(null);
  const nav = useNavigate();

  useEffect(() => {
    const fetchItemsWithId = async () => {
      try {
        if (productId) {
          const data = await getItemsId(productId);
          if (!data) {
            window.alert('존재하지 않는 상품입니다.');
            nav('/', { replace: true });
          } else {
            setItem(data);
          }
        }
      } catch (error) {
        console.error('Failed to fetch items:', error);
      }
    };
    fetchItemsWithId();
  }, [productId]);

  return item;
}
