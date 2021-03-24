import { Formik, Form, Field } from 'formik';
import TextareaAutosize from 'react-textarea-autosize';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const/icons';
import Button from 'src/components/button';
import IconButton from 'src/components/icon-button';
import Text from 'src/components/typography/text';
import Headline from 'src/components/typography/headline';
import Icon from 'src/components/icon/icon';

import './style.scss';

const getCheckedIcon = (completed) => (
  completed ? SystemIconNames.radioChecked : SystemIconNames.radioUnchecked
);

const getCheckboxTitle = (completed) => (
  `Reminder: ${completed ? 'completed' : 'not completed'}.`
);

const Reminder = ({ id, text, completed, editing, onEdit, onCancel, onSubmit, onRemove }) => {
  const handleToggleCheckbox = () => {
    onSubmit({
      id,
      text,
      completed: !completed,
    });
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
              className={classNames('reminder__checkbox', {
                'reminder__checkbox--checked': completed,
              })}
              icon={getCheckedIcon(completed)}
              aria-label={getCheckboxTitle(completed)}
              onClick={handleToggleCheckbox}
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
        initialValues={{ id, text, completed }}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue }) => (
          <div className="reminder reminder--editing">
            <Form>
              <div className="reminder__content">
                <div className="reminder__left">
                  <IconButton
                    className={classNames('reminder__checkbox', {
                      'reminder__checkbox--checked': values.completed,
                    })}
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
                        className="reminder__control-button reminder__control-button--done"
                        type="submit"
                        aria-label="Done"
                        icon={SystemIconNames.checkmark}
                      />

                      <IconButton
                        className="reminder__control-button reminder__control-button--cancel"
                        type="button"
                        aria-label="Cancel"
                        icon={SystemIconNames.xmark}
                        onClick={onCancel}
                      />

                      {id !== 'NEW_REMINDER' && (
                        <IconButton
                          className="reminder__control-button reminder__control-button--remove"
                          type="button"
                          aria-label="Remove"
                          icon={SystemIconNames.trash}
                          onClick={onRemove}
                        />
                      )}
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
