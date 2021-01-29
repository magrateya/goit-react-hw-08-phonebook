import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { authOperations } from '../redux/auth';
import s from '../components/ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

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
          <input
            ref={register({ required: true, maxLength: 20, minLength: 6 })}
            type="text"
            name="email"
          />
          {errors.number?.type === 'required' && (
            <span style={{ color: 'red' }}>'Your input is required'</span>
          )}
          {errors.number?.type === 'maxLength' && (
            <span style={{ color: 'red' }}>'Your input is too long'</span>
          )}
          {errors.number?.type === 'minLength' && (
            <span style={{ color: 'red' }}>'Your input is too short'</span>
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
            ref={register({ required: true, maxLength: 20, minLength: 3 })}
            type="text"
            name="password"
          />
          {errors.number?.type === 'required' && (
            <span style={{ color: 'red' }}>'Your input is required'</span>
          )}
          {errors.number?.type === 'maxLength' && (
            <span style={{ color: 'red' }}>'Your input is too long'</span>
          )}
          {errors.number?.type === 'minLength' && (
            <span style={{ color: 'red' }}>'Your input is too short'</span>
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
    </div>
  );
}
