import Header from "@/components/Header";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  });
  if (!res.ok) {
    throw new Error("Failed to fetch post");
  }
  return res.json();
}

export default async function BlogDetails({ params }) {
  // Access id directly from params (no need to await params)
  const id = params?.id;

  if (!id) {
    throw new Error("Post ID is missing");
  }

  // Fetch post data
  const post = await getPost(id);

  // Fetch user session
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <>
      <Header user={user} />
      <div className="p-6 px-20">
        <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
        <p className="text-blue-600">{post.body}</p>
      </div>
    </>
  );
}
