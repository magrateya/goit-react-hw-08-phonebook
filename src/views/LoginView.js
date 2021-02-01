import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import s from '../components/ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const { register, handleSubmit, errors, reset } = useForm();

  const onHandleSubmit = data => {
    dispatch(authOperations.logIn(data));

    reset({ email: '', password: '' });
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          E-mail
          <input ref={register({ required: true })} type="text" name="email" />
          {errors.email?.type === 'required' && (
            <span style={{ color: 'red' }}>'Your input is required'</span>
          )}
        </label>
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          Password
          <input
            ref={register({ required: true })}
            type="text"
            name="password"
          />
          {errors.password?.type === 'required' && (
            <span style={{ color: 'red' }}>'Your input is required'</span>
          )}
        </label>

        <button
          className={s.formBtn}
          type="submit"
          style={{
            padding: '5px',
            width: '25%',
            alignSelf: 'center',
          }}
        >
          Log in
        </button>
      </form>
      {error && (
        <p style={{ color: 'red' }}>
          {error.message} - something went wrong try again.
        </p>
      )}
    </div>
  );
}
