import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Card = ({ post, deletePost }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }
  }, [isLoading]);

  const handleDelete = () => {
    setIsLoading(true);
    deletePost(post.id);
  };

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>UserID: {post.userId}</p>
      <p>{post.body}</p>
      <button onClick={handleDelete} disabled={isLoading}>
        {isLoading ? 'Eliminando...' : 'Eliminar'}
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
