import PropTypes from 'prop-types';
import './Cards.css';

const Card = ({ post, deletePost }) => {
  const handleDelete = () => {
    deletePost(post.id);
  };

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>UserID: {post.userId}</p>
      <p>{post.body}</p>
      <button onClick={handleDelete}>
        Eliminar
      </button>
    </div>
  );
};

Card.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
  deletePost: PropTypes.func.isRequired,
};

export default Card;
