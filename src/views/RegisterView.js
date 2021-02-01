import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { authOperations, authSelectors } from '../redux/auth';
import s from '../components/ContactForm/ContactForm.module.css';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().min(4).required(),
  email: yup.string().email(),
  password: yup.string().min(6).required(),
});

export default function ContactForm() {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError);

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onHandleSubmit = data => {
    dispatch(authOperations.register(data));

    reset({ name: '', email: '', password: '' });
    console.log(data);
  };

  return (
    <div style={{ padding: '40px 0' }}>
      <form onSubmit={handleSubmit(onHandleSubmit)}>
        <label className={s.nameLabel} style={{ marginBottom: '0' }}>
          Name
          <input
            ref={register({ required: true, maxLength: 20, minLength: 2 })}
            type="text"
            name="name"
          />
          <p style={{ color: 'red', margin: '0' }}>{errors.name?.message}</p>
        </label>
        <label className={s.nameLabel}>
          E-mail
          <input
            ref={register({ required: true, maxLength: 20, minLength: 6 })}
            type="text"
            name="email"
          />
          <p style={{ color: 'red', margin: '0' }}>{errors.email?.message}</p>
        </label>
        <label className={s.nameLabel}>
          Password
          <input
            ref={register({ required: true, maxLength: 20, minLength: 3 })}
            type="text"
            name="password"
          />
          <p style={{ color: 'red', margin: '0' }}>
            {errors.password?.message}
          </p>
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
