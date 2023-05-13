import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import './PostForm.css';

const PostForm = ({ createPost }) => {
  const { register, handleSubmit, reset, setError, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    if (data.title === '') {
      setError('title', { type: 'required', message: 'El título es requerido' });
    } else {
      createPost(data);
      reset();
    }
  };

  return (
    <div className="post-form">
      <h2>Crear Post</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-field">
          <label>Título:</label>
          <input type="text" {...register('title')} required />
          {errors.title && <span>{errors.title.message}</span>}
        </div>
        <div className="form-field">
          <label>Usuario ID:</label>
          <input type="number" {...register('userId')} required />
        </div>
        <div className="form-field">
          <label>Contenido:</label>
          <textarea {...register('body')} required />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired,
};

export default PostForm;
