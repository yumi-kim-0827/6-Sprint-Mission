import { useParams } from 'react-router-dom';

export default function Edit() {
  const params = useParams();

  return <div>{params.id}번 수정페이지 입니다</div>;
}
