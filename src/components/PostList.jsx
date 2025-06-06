{
  /* <Card key={post._id} className="mt-2 border rounded">
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
</Card>; */
}
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchPostComments, addComment } from "../redux/action";
import { Card } from "react-bootstrap";

const PostList = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const postDetails = useSelector((state) => state.posts.postDetails);
  const loading = useSelector((state) => state.posts.loading);
  const error = useSelector((state) => state.posts.error);

  const [recentPosts, setRecentPosts] = useState([]);
  const [commentInputs, setCommentInputs] = useState({});

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  useEffect(() => {
    if (posts.length) {
      const postsDesc = [...posts].reverse();
      const selectedPosts = postsDesc.slice(0, 10);

      setRecentPosts(selectedPosts);

      selectedPosts.forEach((post) => {
        dispatch(fetchPostComments(post._id));
      });
    }
  }, [dispatch, posts]);

  const handleInputChange = (postId, value) => {
    setCommentInputs((prev) => ({ ...prev, [postId]: value }));
  };

  const handleAddComment = (postId) => {
    const commentText = commentInputs[postId]?.trim();
    if (!commentText) return;

    dispatch(addComment(postId, commentText));
    setCommentInputs((prev) => ({ ...prev, [postId]: "" }));
  };

  if (loading) return <p>Caricamento post...</p>;
  if (error) return <p>Errore: {error}</p>;
  if (!recentPosts.length) return <p>Nessun post disponibile</p>;

  return (
    <div>
      {recentPosts.map((post) => {
        const detailedPost = postDetails[post._id];
        const comments = detailedPost?.comments || [];

        return (
          <Card key={post._id} className="mb-4 p-3 border rounded">
            <Card.Body>
              <Card.Title>{post.text}</Card.Title>
              {post.image && <img src={post.image} alt="Post" style={{ maxWidth: "100%" }} />}
              <Card.Text>Autore: {post.username}</Card.Text>

              <ul>
                {comments.slice(0, 3).map((comment, index) => (
                  <li key={index}>{comment.comment}</li>
                ))}
              </ul>

              <div className="mt-2">
                <input
                  type="text"
                  placeholder="Scrivi un commento..."
                  value={commentInputs[post._id] || ""}
                  onChange={(e) => handleInputChange(post._id, e.target.value)}
                  className="form-control mb-1"
                />
                <button onClick={() => handleAddComment(post._id)} className="btn btn-primary rounded-pill mt-1">
                  Invia
                </button>
              </div>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default PostList;
