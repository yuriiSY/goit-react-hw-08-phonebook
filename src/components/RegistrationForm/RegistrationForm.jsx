import { useState, useId } from 'react';

import style from './registration-form.module.css';

const INITIAL_STATE = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    ...INITIAL_STATE,
  });

  const handleChange = e => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    reset();
  };

  const reset = () => {
    setState({ ...INITIAL_STATE });
  };

  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();

  const { name, password, email } = state;

  return (
    <div className={style.registration__form}>
      <div className={style.title}>Welcome</div>
      <div className={style.subtitle}>Let's create your account!</div>
      <form onSubmit={handleSubmit}>
        <div className={style.block}>
          <input
            value={name}
            id={nameId}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder=" "
            className={style.input}
            required
          />
          <div className={style.cut}></div>
          <label className={style.placeholder} htmlFor={nameId}>
            Name
          </label>
        </div>
        <div className={style.block}>
          <input
            value={email}
            id={emailId}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder=" "
            className={style.input}
            required
          />
          <div className={style.cut}></div>
          <label className={style.placeholder} htmlFor={emailId}>
            Email
          </label>
        </div>
        <div className={style.block}>
          <input
            value={password}
            id={passwordId}
            onChange={handleChange}
            type="password"
            name="password"
            className={style.input}
            placeholder=" "
            required
          />
          <div className={style.cut}></div>
          <label className={style.placeholder} htmlFor={passwordId}>
            Password
          </label>
        </div>
        <button className={style.submit} type="submit">
          Regiser
        </button>
      </form>
    </div>
  );
};

export default RegistrationForm;
