import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'Fortnite review', body: 'lorem ipsum...', author: 'Jack C', id: 1 },
    { title: 'Vacation blog \'21', body: 'lorem ipsum...', author: 'Robert', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Emma B', id: 3 }
  ])

  return (
    <div className="home">
      {blogs.map(blog => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
        </div>
      ))}
    </div>
  );
}
 
export default Home;
