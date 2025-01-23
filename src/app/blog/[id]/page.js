


async function getPost(id) {
    const res=await fetch(` https://jsonplaceholder.typicode.com/posts/${id}`,{
        next:{revalidate:60},
    });
    return res.json()
    
}
  


export default async function BlogDetails({params}) {

    const {id}=params;
    const post=await getPost(id);

  
  
  
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">{
            post.title}
        </h1>
        <p>{post.body}</p>
        
      </div>
    );
  }
  