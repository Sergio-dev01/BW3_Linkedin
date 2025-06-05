import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postDetails = useSelector((state) => state.posts.postDetails);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Prendi 10 post casuali
  const randomPosts = posts.sort(() => Math.random() - 0.5).slice(0, 10);

  if (!posts.length) {
    return <p>Caricamento post...</p>;
  }

  return (
    <div>
      {randomPosts.map((post) => {
        const detailedPost = postDetails[post._id];
        const comments = detailedPost?.comments || [];

        return (
          <div key={post._id} className="mb-4 p-3 border rounded">
            <h5>{post.text}</h5>
            {post.image && <img src={post.image} alt="Post" style={{ maxWidth: "100%" }} />}
            <p>Autore: {post.username}</p>

            <ul>
              {comments.map((comment, index) => (
                <li key={index}>{comment.text}</li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;
