import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from 'utils/redux/hooks';
import { userSlice } from 'utils/redux/user/user-slice';

export function UserPage() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  const handleSubmit = (event) => {
    event.preventDefault();

    const timer = 1500;

    Swal.fire({
      icon: 'success',
      title: 'Logout Success',
      showConfirmButton: true,
      timer,
    });

    setTimeout(() => {
      dispatch(userSlice.actions.reset());
      // eslint-disable-next-line no-restricted-globals
      location.assign('/');
    }, timer);
  };

  return (
    <div className='user-page-wrapper'>
      <h1>Hello, {user.username}</h1>
      <form className='user-page-form' action='' onSubmit={handleSubmit}>
        <button className='user-page-button-submit' type='submit'>
          Logout
        </button>
      </form>
    </div>
  );
}
