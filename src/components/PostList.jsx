import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/action";
import { Card } from "react-bootstrap";

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
          <Card key={post._id} className="mt-2 border rounded">
            <Card.Body>
              <Card.Title>{post.text}</Card.Title>

              {post.image && <img src={post.image} alt="Post" style={{ maxWidth: "100%" }} />}
              <Card.Text>Autore: {post.username}</Card.Text>

              <ul>
                {comments.map((comment, index) => (
                  <li key={index}>{comment.text}</li>
                ))}
              </ul>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostList;
