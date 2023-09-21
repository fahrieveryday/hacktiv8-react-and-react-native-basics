import { useEffect, useReducer, useState } from 'react';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from 'utils/redux/hooks';
import { userSlice } from 'utils/redux/user/user-slice';

export function HomePage() {
  const dispatch = useAppDispatch();
  const [isRender, setIsRender] = useState(false);
  const user = useAppSelector((state) => state.user);
  const isUserLogged = Boolean(user.username && user.password);
  const [formState, setFormState] = useReducer(
    (state, newState) => ({
      ...state,
      ...newState,
    }),
    {
      username: 'fahrieveryday',
      password: 'fahrieveryday',
    }
  );

  const handleSubmitForm = (event) => {
    event.preventDefault();

    const timer = 1500;

    const { username, password } = formState;
    const isLoginValid =
      username === 'fahrieveryday' && password === 'fahrieveryday';

    const loginMessage = isLoginValid ? 'Login Success' : 'Login Failed';
    const loginIcon = isLoginValid ? 'success' : 'error';

    Swal.fire({
      icon: loginIcon,
      title: loginMessage,
      showConfirmButton: true,
      timer,
    });

    if (isLoginValid) {
      setTimeout(() => {
        dispatch(userSlice.actions.save(formState));
        // eslint-disable-next-line no-restricted-globals
        location.assign('/user');
      }, timer);
    }
  };

  useEffect(() => {
    if (isUserLogged) {
      // eslint-disable-next-line no-restricted-globals
      location.assign('/user');
    }
    setTimeout(() => {
      setIsRender(true);
    }, 100);
  }, [isUserLogged]);

  return (
    <div className='home-page-wrapper'>
      {isRender && (
        <>
          <h1>Login</h1>
          <form
            className='home-page-form'
            action=''
            onSubmit={handleSubmitForm}
          >
            <input
              className='home-page-input-username'
              type='text'
              name='username'
              value={formState.username}
              onChange={(event) =>
                setFormState({ username: event.target.value })
              }
            />
            <input
              className='home-page-input-password'
              type='password'
              name='username'
              value={formState.password}
              onChange={(event) =>
                setFormState({ password: event.target.value })
              }
            />
            <button className='home-page-button-submit' type='submit'>
              Login
            </button>
          </form>
        </>
      )}
    </div>
  );
}
