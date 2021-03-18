import { useDispatch, useSelector } from 'react-redux';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';

import { Colors, BadgeIcons, ColorTypes, BadgeIconNames } from 'src/utils/const';

import Selector from 'src/redux/selectors/list-properties';
import ActionCreator from 'src/redux/actions/list-properties';

import Modal from 'src/components/modal';
import Title from 'src/components/typography/title';
import Badge from 'src/components/badge';
import Button from 'src/components/button';
import Collection from 'src/components/collection';

import BadgeRadio from './components/badge-radio';
import './style.scss';

const ListProperties = () => {
  // temp
  const properties = {
    name: 'Ullam veritatis earum',
    color: ColorTypes.indigo,
    icon: BadgeIconNames.person,
  };

  const dispatch = useDispatch();
  const isOpen = useSelector(Selector.isOpen);

  const handleCancel = () => {
    dispatch(ActionCreator.close());
  };

  const handleSubmit = ({ name, color, icon }) => {
    alert(JSON.stringify({ name, color, icon }, null, 2));
    dispatch(ActionCreator.close());
  };

  if (!isOpen) return null;

  return (
    <Formik
      initialValues={{
        name: properties.name,
        color: properties.color,
        icon: properties.icon,
      }}
      validationSchema={Yup.object({
        name: Yup.string().required('List name is reqired'),
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
                  <Button onClick={handleCancel} secondary>Cancel</Button>
                </div>

                <div className="list-properties__header-content">
                  <Title level="2" weight="bold">{properties.name}</Title>
                </div>

                <div className="list-properties__header-right">
                  <Button type="submit" secondary>Done</Button>
                </div>
              </div>

              <div className="list-properties__body">
                <Badge icon={values.icon} color={values.color} />

                <Field
                  className={classNames('list-properties__input', `system-color--${values.color}`)}
                  name="name"
                  autoComplete="off"
                  spellCheck="false"
                />

                {errors.name && touched.name && (
                  <div className="list-properties__error-message">{errors.name}</div>
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
