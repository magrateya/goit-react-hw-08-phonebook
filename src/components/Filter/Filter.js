import { useSelector, useDispatch } from 'react-redux';
import s from './Filter.module.css';
import { selectors, actions } from '../../redux/contacts';

export default function Filter() {
  const value = useSelector(selectors.getFilter);
  const items = useSelector(selectors.getItems);
  const dispatch = useDispatch();

  return (
    items.length > 1 && (
      <label className={s.filterLabel}>
        <span className={s.filterTitle}>Find contacts by name</span>
        <input
          type="text"
          value={value}
          onChange={e => dispatch(actions.changeFilter(e.target.value))}
        ></input>
      </label>
    )
  );
}
