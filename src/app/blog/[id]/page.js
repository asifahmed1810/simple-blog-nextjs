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
  // Ensure params is destructured properly
  const { id } = await Promise.resolve(params); // Safely await params

  // Fetch post data
  const post = await getPost(id);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}
