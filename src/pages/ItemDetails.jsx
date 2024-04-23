import { useParams } from 'react-router-dom';

export default function ItemDetails() {
  const params = useParams();

  return <div>{params.id}번 상세페이지 입니다</div>;
}
