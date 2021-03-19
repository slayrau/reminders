import { Formik, Form, Field } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const/icons';
import Button from 'src/components/button';
import IconButton from 'src/components/icon-button';
import Text from 'src/components/typography/text';

import './style.scss';

const getCheckedIcon = (completed) => (
  completed ? SystemIconNames.radioChecked : SystemIconNames.radioUnchecked
);

const getCheckboxTitle = (completed) => (
  `Reminder: ${completed ? 'completed' : 'not completed'}.`
);

const Reminder = ({ id, text, completed, editing, onEdit, onCancel }) => {
  const handleSubmit = (values) => {
    alert(JSON.stringify(values, null, 2))
  };

  if (!editing) {
    return (
      <div
        className={classNames('reminder', {
          'reminder--completed': completed,
        })}
      >
        <div className="reminder__content">
          <div className="reminder__left">
            <IconButton
              className="reminder__checkbox"
              icon={getCheckedIcon(completed)}
              aria-label={getCheckboxTitle(completed)}
            />
          </div>

          <div className="reminder__right">
            <Button
              className="reminders__edit-button"
              onClick={onEdit}
              aria-label={`Reminder text: ${text}.`}
            >
              <Text>{text}</Text>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  if (editing) {
    return (
      <Formik
        initialValues={{ text, completed }}
        onSubmit={handleSubmit}
      >
        {({ values, setFieldValue }) => (
          <div className="reminder reminder--editing">
            <Form>
              <div className="reminder__content">
                <div className="reminder__left">
                  <IconButton
                    className="reminder__checkbox"
                    type="button"
                    icon={getCheckedIcon(values.completed)}
                    aria-label={getCheckboxTitle(values.completed)}
                    onClick={() => setFieldValue('completed', !values.completed)}
                  />
                </div>

                <div className="reminder__right">
                  <div className="reminder__fields">
                    <label className="reminder__label">
                      <Text visuallyHidden>Reminder text:</Text>
                      <Field
                        as={TextareaAutosize}
                        className="reminder__textarea"
                        name="text"
                        placeholder="Reminder"
                        spellCheck="false"
                        autoComplete="off"
                        autoFocus
                      />
                    </label>

                    <div className="reminder__controls">
                      <IconButton
                        icon={SystemIconNames.xmarkCircle}
                        className="reminder__control-button reminder__control-button--cancel"
                        type="button"
                        aria-label="Cancel"
                        onClick={onCancel}
                      />

                      <IconButton
                        icon={SystemIconNames.checkmarkCircle}
                        className="reminder__control-button reminder__control-button--done"
                        aria-label="Done"
                        type="submit"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
  }
};

Reminder.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default Reminder;
