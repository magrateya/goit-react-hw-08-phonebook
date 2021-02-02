import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { operations } from '../../redux/contacts';
import s from '../ContactForm/ContactForm.module.css';

export default function ContactEditor({ id, onCloseModal }) {
  const dispatch = useDispatch();

  const { register, handleSubmit, errors, reset } = useForm();

  const onHandleSubmit = ({ name, number }) => {
    dispatch(operations.editContact({ name, number, id }));

    reset({ email: '', password: '' });
    onCloseModal();
  };

  return (
    <div style={{ width: '500px' }}>
      <form
        onSubmit={handleSubmit(onHandleSubmit)}
        style={{
          margin: '0',
          width: '60%',
        }}
      >
        <label
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '10px',
          }}
        >
          Name
          <input
            ref={register({ required: true, maxLength: 20, minLength: 6 })}
            type="text"
            name="name"
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
            marginBottom: '20px',
          }}
        >
          Number
          <input
            ref={register({ required: true, maxLength: 20, minLength: 3 })}
            type="text"
            name="number"
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

        <div
          style={{
            display: 'flex',
          }}
        >
          <button
            // onClick={onCloseModal}
            className={s.formBtn}
            type="submit"
            style={{
              padding: '5px',
              width: '48%',

              marginRight: '10px',
            }}
          >
            Edit
          </button>
          <button
            onClick={onCloseModal}
            type="submit"
            className={s.formBtn}
            style={{
              padding: '5px',
              width: '48%',
            }}
          >
            Close
          </button>
        </div>
      </form>
    </div>
  );
}
