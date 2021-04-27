import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

// UTILS
import { AuthPageTypes } from 'src/utils/const';
import authBackgroundLightImg from 'src/assets/images/auth-background-light.jpg';
import authBackgroundDarkImg from 'src/assets/images/auth-background-dark.jpg';

// REDUX
import AuthOperation from 'src/redux/operations/auth';
import AuthSelector from 'src/redux/selectors/auth';

// COMPONENTS
import Modal from 'src/components/modal';
import Title from 'src/components/typography/title';
import Text from 'src/components/typography/text';
import Button from 'src/components/button';
import BubbleGroup from 'src/components/bubble/group';

import 'src/styles/common/auth-page.scss';

const Background = {
  light: authBackgroundLightImg,
  dark: authBackgroundDarkImg,
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const authLoading = useSelector(AuthSelector.authLoading);
  const error = useSelector(AuthSelector.error);

  const handleSubmit = ({ email, password }) => {
    dispatch(AuthOperation.signUp({ email, password }));
  };

  useEffect(() => {
    const themeType = document.documentElement.getAttribute('data-theme');
    document.documentElement.style.backgroundImage = `url(${Background[themeType] || Background.light})`;

    return () => {
      document.documentElement.style.backgroundImage = '';
    };
  });

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
        confirmPassword: AuthPageTypes.signUp && Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm passwords is required'),
      })}
      onSubmit={handleSubmit}
    >
      {({ errors, touched, resetForm }) => (
        <main className="auth-page">

          <Form className="auth-page__form">
            <Modal>
              <div className="auth-page__form-header">
                <Title level="1" weight="bold">Reminders</Title>
                <Text>Create an account to use Reminders.</Text>
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
                    autoComplete="new-password"
                  />

                  <Field
                    className={classNames('auth-page__input', {
                      'auth-page__input--error': touched.confirmPassword && errors.confirmPassword,
                    })}
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm password"
                    autoComplete="new-password"
                  />
                </BubbleGroup>

                {!!Object.keys(errors).length && (
                  <div className="auth-page__form-errors">
                    <ul className="auth-page__errors-list">
                      {Object.keys(errors)
                        .filter((err) => touched[err] && errors[err])
                        .map((err) => (
                          <li className="auth-page__errors-item" key={err}>
                            {errors[err]}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}

                {error && <p className="auth-page__auth-error">{error.message}</p>}

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
                <NavLink
                  className="auth-page__screen-link"
                  to={`/${AuthPageTypes.signIn}`}
                  onClick={resetForm}
                >
                  Already have an account? Sign In.
                </NavLink>
              </div>
            </Modal>
          </Form>

        </main>
      )}
    </Formik>
  );
};

export default SignUpPage;
