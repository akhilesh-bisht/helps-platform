const PostCard = ({ posts }) => (
  <ul>
    {posts.map((post) => (
      <li key={post.id}>
        <h3>{post.title}</h3>
        <p>Category: {post.category}</p>
      </li>
    ))}
  </ul>
);

export default PostCard;
