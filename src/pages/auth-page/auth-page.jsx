import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useRouteMatch } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

// UTILS
import { AuthPageTypes } from 'src/utils/const';
import authBackgroundImg from 'src/assets/images/auth-background.jpg';

// REDUX
import AuthOperation from 'src/redux/operations/auth';
import AuthSelector from 'src/redux/selectors/auth';

// COMPONENTS
import Modal from 'src/components/modal';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import Button from 'src/components/button';
import BubbleGroup from 'src/components/bubble/group';

import './style.scss';

const AuthPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(AuthSelector.authLoading);
  const match = useRouteMatch('/:type');
  const authType = match.params.type;
  const isSignUpType = authType === AuthPageTypes.signUp;
  const isSignInType = authType === AuthPageTypes.signIn;

  const handleSubmit = ({ email, password }) => {
    if (authType === AuthPageTypes.signIn) dispatch(AuthOperation.signIn({ email, password }));
    if (authType === AuthPageTypes.signUp) dispatch(AuthOperation.signUp({ email, password }));
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
        confirmPassword: authType === AuthPageTypes.signUp && Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm passwords is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm }) => (
        <main className="auth-page">

          <Form className="auth-page__form">
            <Modal>
              <div className="auth-page__form-header">
                <Title level="1" weight="bold">Reminders</Title>
                {isSignInType && <Text>Sign in with your email and password.</Text>}
                {isSignUpType && <Text>Create an account to use Reminders.</Text>}
              </div>

              <div className="auth-page__form-body">
                <BubbleGroup className="auth-page__form-fields">
                  <Field
                    className={classNames('auth-page__input', {
                      'auth-page__input--error': touched.email && errors.email,
                    })}
                    type="text"
                    name="email"
                    placeholder="Email"
                    autoComplete="email"
                  />

                  <Field
                    className={classNames('auth-page__input', {
                      'auth-page__input--error': touched.password && errors.password,
                    })}
                    type="password"
                    name="password"
                    placeholder="Password"
                    autoComplete={isSignInType ? 'password' : 'new-password'}
                  />

                  {authType === AuthPageTypes.signUp && (
                    <Field
                      className={classNames('auth-page__input', {
                        'auth-page__input--error': touched.confirmPassword && errors.confirmPassword,
                      })}
                      type="password"
                      name="confirmPassword"
                      placeholder="Confirm password"
                      autoComplete="new-password"
                    />
                  )}
                </BubbleGroup>

                <div className="auth-page__form-errors">
                  <ul className="auth-page__errors-list">
                    {Object.keys(errors)
                      // eslint-disable-next-line array-callback-return
                      .filter((err) => {
                        if (isSignInType) {
                          return err !== 'confirmPassword' && touched[err] && errors[err];
                        }

                        if (isSignUpType) {
                          return touched[err] && errors[err];
                        }
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
                    disabled={authLoading}
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
            </Modal>
          </Form>

        </main>
      )}
    </Formik>
  );
};

export default AuthPage;
