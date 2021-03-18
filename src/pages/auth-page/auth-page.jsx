import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

import { AuthPageTypes } from 'src/utils/const';
import authBackgroundImg from 'src/assets/images/auth-background.jpg';

import Operation from 'src/redux/operations/auth';
import Selector from 'src/redux/selectors/auth';

import Modal from 'src/components/modal';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import Button from 'src/components/button';

import AuthInput from './components/auth-input';
import './style.scss';

const AuthPage = () => {
  const dispatch = useDispatch();
  const loading = useSelector(Selector.loading);
  const match = useRouteMatch('/:type');
  const authType = match.params.type;
  const isSignUpType = authType === AuthPageTypes.signUp;
  const isSignInType = authType === AuthPageTypes.signIn;

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
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ errors, touched, resetForm }) => (
        <main className="auth-page">

          <Modal>
            <Form className="auth-page__form">
              <div className="auth-page__form-header">
                <Title level="1" weight="bold">Reminders</Title>
                {isSignInType && <Text>Sign in with your email and password.</Text>}
                {isSignUpType && <Text>Create an account to use Reminders.</Text>}
              </div>

              <div className="auth-page__form-body">
                <div className="auth-page__form-fields">
                  <Field
                    label="Email"
                    type="text"
                    name="email"
                    placeholder="Your email"
                    autoComplete="email"
                    component={AuthInput}
                    error={touched.email && errors.email}
                  />

                  <Field
                    label="Password"
                    type="password"
                    name="password"
                    placeholder="Required"
                    component={AuthInput}
                    error={touched.password && errors.password}
                    autoComplete={isSignInType ? 'new-password' : 'new-password'}
                  />

                  {authType === AuthPageTypes.signUp && (
                    <Field
                      label="Password"
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm"
                      component={AuthInput}
                      error={touched.confirmPassword && errors.confirmPassword}
                      autoComplete={isSignUpType && 'new-password'}
                    />
                  )}
                </div>

                <div className="auth-page__form-errors">
                  <ul className="auth-page__errors-list">
                    {Object.keys(errors)
                      // eslint-disable-next-line array-callback-return
                      .filter((err) => {
                        if (isSignInType) return err !== 'confirmPassword' && touched[err];
                        if (isSignUpType) return touched[err];
                      })
                      .map((err) => (
                        <li className="auth-page__errors-item" key={err}>
                          {errors[err]}
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="auth-page__form-controls">
                  <Button
                    className="auth-page__submit-button"
                    type="submit"
                    disabled={loading}
                    wide
                  >
                    Continue
                  </Button>
                </div>
              </div>

              <div className="auth-page__form-footer">
                {authType === AuthPageTypes.signIn && (
                  <NavLink
                    className="auth-page__screen-link"
                    to={`/${AuthPageTypes.signUp}`}
                    onClick={resetForm}
                  >
                    Don&#39;t have an acount? Create one.
                  </NavLink>
                )}

                {authType === AuthPageTypes.signUp && (
                  <NavLink
                    className="auth-page__screen-link"
                    to={`/${AuthPageTypes.signIn}`}
                    onClick={resetForm}
                  >
                    Already have an account? Sign In.
                  </NavLink>
                )}
              </div>
            </Form>
          </Modal>

        </main>
      )}
    </Formik>
  );
};

export default AuthPage;
