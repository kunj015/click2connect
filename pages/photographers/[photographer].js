import { useRouter } from 'next/router';
 
export default function Page() {
  const router = useRouter();
  console.log(router.query.photographer)
  return <p>Post: {router.query.photographer}</p>;
}