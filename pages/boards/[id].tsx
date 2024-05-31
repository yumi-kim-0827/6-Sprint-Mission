import { useRouter } from 'next/router';

export default function PostView() {
  const router = useRouter();
  const id = router.query['id'];

  return <div>{id} post 페이지</div>;
}
