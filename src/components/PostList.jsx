import { useSelector } from "react-redux";
import { Card, Image } from "react-bootstrap";

const PostsList = () => {
  const posts = useSelector((state) => state.posts.posts);
  const profile = useSelector((state) => state.profile.myProfile);
  console.log("PROFILE:", profile);

  if (!posts.length) {
    return <p className="mb-2">Nessun post disponibile.</p>;
  }

  return (
    <>
      {posts.map((post, index) => (
        <Card key={index} className="mb-2">
          <Card.Body>
            <Card.Title>{profile.username}</Card.Title>
            {post.text && <Card.Text>{post.text}</Card.Text>}

            {post.media && post.mediaType === "image" && (
              <div className="mb-2">
                <Image src={post.media} fluid />
              </div>
            )}

            {post.media && post.mediaType === "video" && (
              <div className="mb-2">
                <video controls width="100%">
                  <source src={post.media} type="video/mp4" />
                  Il tuo browser non supporta il tag video.
                </video>
              </div>
            )}

            <small className="text-muted">{new Date(post.timestamp).toLocaleString()}</small>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
export default PostsList;
