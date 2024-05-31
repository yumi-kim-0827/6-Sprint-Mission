// import Image from "next/image";
// import Heart from "./Heart";

// interface PostListProps {
//   className: string;
//   posts: postProps[];
// }

// interface postProps {
//   id: number;
//   title: string;
//   content: string;
//   image: null & string;
//   likeCount: number;
//   createdAt: Date;
//   updatedAt: Date;
//   writer: WriterProps;
// }

// interface WriterProps {
//   id: number;
//   nickname: string;
// }

// export default function PostList({ className = "", posts }: PostListProps) {
//   return (
//     <ul>
//       {posts.map((post: postProps) => (
//         <li key={post.id}>
//           <div></div>
//           <div>
//             <h2>{post.title}</h2>
//             <Image src={post.image} alt={post.title} />
//           </div>
//           <div>
//             <div>
//               <h3>{post.writer.nickname}</h3>
//               <h3>{post.createdAt.toString()}</h3>
//             </div>
//             <div>
//               <Heart />
//               <h3>{post.likeCount}</h3>
//             </div>
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }
