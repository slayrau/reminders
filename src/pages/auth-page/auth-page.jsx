import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AuthPageTypes } from 'src/utils/const';
import authBackgroundImg from 'src/assets/images/auth-background.jpg';

import Operation from 'src/redux/operations/auth';
import Selector from 'src/redux/selectors/auth';

import AuthInput from './components/auth-input';
import './style.scss';

const AuthPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(Selector.loading);
  const match = useRouteMatch('/:type');
  const authType = match.params.type;

  const handleSubmit = ({ email, password }) => {
    if (authType === AuthPageTypes.signIn) dispatch(Operation.signIn(email, password));
    if (authType === AuthPageTypes.signUp) dispatch(Operation.signUp(email, password));
  };

  useEffect(() => {
    document.documentElement.style.backgroundImage = `url(${authBackgroundImg})`;
    document.body.style.backdropFilter = 'blur(50px)';

    return () => {
      document.documentElement.style.backgroundImage = '';
      document.body.style.backdropFilter = '';
    };
  }, []);

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: '',
      }}
      validationSchema={Yup.object({
        email: Yup.string().email('Invalid email').required('Email is required'),
        password: Yup.string().min(6, 'Password is to short. Min length 6 symbols').required('Password is required'),
        confirmPassword: authType === AuthPageTypes.signUp && Yup.string().oneOf([Yup.ref('password'), null]).required('Password must match'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm }) => (
        <main className="auth-page">
          <div className="auth-page__container">
            <div className="auth-page__body">

              <section className="auth-page__auth-modal auth-modal">
                <div className="auth-modal__header">
                  <h1 className="auth-modal__page-title">Reminders</h1>
                  <p className="auth-modal__description">
                    {authType === AuthPageTypes.signIn && 'Sign in with your email and password.'}
                    {authType === AuthPageTypes.signUp && 'Create account.'}
                  </p>
                </div>

                <Form className="auth-modal__form">
                  <div className="auth-modal__body">
                    <Field
                      label="Email"
                      type="text"
                      name="email"
                      placeholder="example@email.com"
                      component={AuthInput}
                      error={touched.email && errors.email}
                    />

                    <Field
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="- - - - - - - -"
                      component={AuthInput}
                      error={touched.password && errors.password}
                    />

                    {authType === AuthPageTypes.signUp && (
                      <Field
                        label="Confirm password"
                        type="password"
                        name="confirmPassword"
                        placeholder="- - - - - - - -"
                        component={AuthInput}
                        error={touched.confirmPassword && errors.confirmPassword}
                      />
                    )}
                  </div>

                  <div className="auth-modal__errors">
                    <ul className="auth-modal__errors-list">
                      {Object.keys(errors)
                        // eslint-disable-next-line array-callback-return
                        .filter((err) => {
                          if (authType === AuthPageTypes.signIn) {
                            return err !== 'confirmPassword' && touched[err];
                          }

                          if (authType === AuthPageTypes.signUp) {
                            return touched[err];
                          }
                        })
                        .map((err) => (
                          <li className="auth-modal__errors-item" key={err}>
                            {errors[err]}
                          </li>
                        ))}
                    </ul>
                  </div>

                  <div className="auth-modal__controls">
                    <button
                      className="auth-modal__submit-button"
                      type="submit"
                      disabled={loading}
                    >
                      Continue
                    </button>
                  </div>
                </Form>

                <div className="auth-modal__footer">
                  {authType === AuthPageTypes.signIn && (
                    <NavLink
                      className="auth-modal__screen-link"
                      to={`/${AuthPageTypes.signUp}`}
                      onClick={resetForm}
                    >
                      Don&#39;t have an acount? Create one.
                    </NavLink>
                  )}

                  {authType === AuthPageTypes.signUp && (
                    <NavLink
                      className="auth-modal__screen-link"
                      to={`/${AuthPageTypes.signIn}`}
                      onClick={resetForm}
                    >
                      Already have an account? Sign In.
                    </NavLink>
                  )}
                </div>
              </section>
            </div>
          </div>
        </main>
      )}
    </Formik>
  );
};

export default AuthPage;
