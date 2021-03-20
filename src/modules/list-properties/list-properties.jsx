import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

// UTILS
import { Colors, BadgeIcons } from 'src/utils/const';

// REDUX
import Selector from 'src/redux/selectors/list-properties';
import ActionCreator from 'src/redux/actions/list-properties';
import Operation from 'src/redux/operations/user-lists';

// COMPONENTS
import Modal from 'src/components/modal';
import Title from 'src/components/typography/title';
import Headline from 'src/components/typography/headline/headline';
import Badge from 'src/components/badge';
import Button from 'src/components/button';
import Collection from 'src/components/collection';

// OWN
import BadgeRadio from './components/badge-radio';
import './style.scss';

const ListProperties = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const properties = useSelector(Selector.listProperties);

  const handleCancel = () => {
    dispatch(ActionCreator.closeList());
  };

  const handleSubmit = ({ title, color, icon }) => {
    dispatch(Operation.createList({
      title,
      color,
      icon,
    }, (id) => history.push(`/lists/${id}`)));
  };

  if (!properties.isOpen) return null;

  return (
    <Formik
      initialValues={{
        title: properties.title,
        color: properties.color,
        icon: properties.icon,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('List title is reqired'),
      })}
      onSubmit={handleSubmit}
      validateOnBlur={false}
      validateOnChange={false}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Modal style={{ height: '100%' }}>
          <section className="list-properties">
            <Form className="list-properties__form">
              <div className="list-properties__header">
                <div className="list-properties__header-left">
                  <Button onClick={handleCancel} secondary>
                    <Headline>Cancel</Headline>
                  </Button>
                </div>

                <div className="list-properties__header-content">
                  <Title level="2" weight="bold">{properties.title}</Title>
                </div>

                <div className="list-properties__header-right">
                  <Button type="submit" secondary>
                    <Headline>Done</Headline>
                  </Button>
                </div>
              </div>

              <div className="list-properties__body">
                <Badge icon={values.icon} color={values.color} />

                <Field
                  className={classNames('list-properties__input', `system-color--${values.color}`)}
                  name="title"
                  autoComplete="off"
                  spellCheck="false"
                />

                {errors.title && touched.title && (
                  <div className="list-properties__error-message">{errors.title}</div>
                )}
              </div>

              <div className="list-properties__divider" />

              <div className="list-properties__footer">
                <Collection
                  columns="6"
                  title="Badge colors"
                  titleHidden
                >
                  {Colors.map((color) => (
                    <BadgeRadio
                      key={color.id}
                      name="color"
                      id={color.id}
                      value={color.id}
                      title={color.title}
                      checked={color.id === values.color}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}
                </Collection>

                <div className="list-properties__divider" />

                <Collection
                  columns="6"
                  title="Badge icons"
                  titleHidden
                >
                  {BadgeIcons.map((icon) => (
                    <BadgeRadio
                      key={icon.id}
                      name="icon"
                      id={icon.id}
                      value={icon.id}
                      title={icon.title}
                      checked={icon.id === values.icon}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  ))}
                </Collection>
              </div>
            </Form>
          </section>
        </Modal>
      )}
    </Formik>
  );
};

export default ListProperties;
