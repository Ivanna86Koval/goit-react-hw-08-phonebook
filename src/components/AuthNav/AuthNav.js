import { Wrapper, Link } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Wrapper>
      <Link to="/register">Register</Link>{' '}
      {/* Посилання на сторінку реєстрації користувача */}
      <Link to="/login">Log In</Link>{' '}
      {/* Посилання на сторінку входу користувача */}
    </Wrapper>
  );
};
