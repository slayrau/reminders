import { useEffect, useRef } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import classNames from 'classnames';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

// UTILS
import { Colors, BadgeIcons, SystemIconNames } from 'src/utils/const';

// HOOKS
import useListProperties from 'src/hooks/use-list-properties';
import useKeyDown from 'src/hooks/use-key-down';
import useOutsideClick from 'src/hooks/use-outside-click';

// COMPONENTS
import Modal from 'src/components/modal';
import ModalHeader from 'src/components/modal/header';
import Badge from 'src/components/badge';
import Collection from 'src/components/collection';
import Button from 'src/components/button';
import Icon from 'src/components/icon';

// OWN
import BadgeRadio from './components/badge-radio';
import './style.scss';

const ListProperties = () => {
  const escapeKeyDowned = useKeyDown('Escape');
  const listPropertiesModalRef = useRef();
  const listPropertiesScrollRef = useRef();
  const {
    properties,
    handleCancel,
    handleSubmit,
    handleRemoveList,
  } = useListProperties();

  useEffect(() => {
    const scroll = listPropertiesScrollRef.current;

    disableBodyScroll(scroll);
    return () => enableBodyScroll(scroll);
  }, []);

  useEffect(() => {
    if (escapeKeyDowned) {
      handleCancel();
    }
  }, [escapeKeyDowned, handleCancel]);

  useOutsideClick(listPropertiesModalRef, handleCancel);

  return (
    <Formik
      initialValues={{
        id: properties.id,
        title: properties.title,
        color: properties.color,
        icon: properties.icon,
      }}
      validationSchema={Yup.object({
        title: Yup.string().required('List title is reqired'),
      })}
      onSubmit={handleSubmit}
    >
      {({ values, errors, touched, handleChange, handleBlur }) => (
        <Form>
          <Modal style={{ height: 'calc(100% - 40px)' }} targetRef={listPropertiesModalRef}>
            <div className="list-properties">
              <ModalHeader
                title={properties.title}
                onCancel={handleCancel}
              >
                <div className="list-properties__header">
                  <Badge icon={values.icon} color={values.color} />

                  <Field
                    className={classNames('list-properties__input', `system-color--${values.color}`, {
                      'list-properties__input--error': errors.title && touched.title,
                    })}
                    name="title"
                    autoComplete="off"
                    spellCheck="false"
                    placeholder="List name"
                  />

                  {errors.title && touched.title && (
                    <div className="list-properties__error-message">{errors.title}</div>
                  )}
                </div>
              </ModalHeader>

              <div className="list-properties__body" ref={listPropertiesScrollRef}>
                <Collection
                  className="list-properties__colors"
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

                <Collection
                  className="list-properties__badges"
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

              {properties.id !== 'NEW_LIST' && (
                <div className="list-properties__footer">
                  <Button
                    className="list-properties__remove-list-button"
                    onClick={handleRemoveList}
                  >
                    <Icon icon={SystemIconNames.trash} />
                    Remove list
                  </Button>
                </div>
              )}
            </div>
          </Modal>
        </Form>
      )}
    </Formik>
  );
};

export default ListProperties;
