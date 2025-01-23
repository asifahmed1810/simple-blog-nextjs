import Header from "@/components/Header";
import Link from "next/link";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";


async function getPosts() {
  const res = await fetch(' https://jsonplaceholder.typicode.com/posts', {
    next: { revalidate: 60 }
  });
  return res.json();

}

export default async function Home() {

  const posts = await getPosts();

  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <Header user={user}></Header>
      <div className="p-10 px-20">
        <h1 className="text-2xl font-bold mb-4 underline">Blog Posts</h1>
        <ul className="space-y-6">
          {
            posts.map(post => <li key={post.id}>
              <Link href={`/blog/${post.id}`}>
                <h1 className="text-blue-600">{post.title}</h1>
              </Link>
            </li>)
          }
        </ul>
      </div>
    </>

  );
}
