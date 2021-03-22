import { useField } from 'formik';
import PropTypes from 'prop-types';

import { SystemIconNames } from 'src/utils/const';
import Icon from 'src/components/icon';
import Headline from 'src/components/typography/headline';
import './style.scss';

const InputPicture = ({ setFilePicture, ...restProps }) => {
  const [field] = useField(restProps);

  const handleChange = (event) => {
    field.onChange(event);
    setFilePicture(event.target.files[0]);
  };

  return (
    <label className="input-picture profile-properties__input-picture">
      <Icon icon={SystemIconNames.photoStack} />
      <Headline>Select photo</Headline>
      <input
        className="input-picture visually-hidden"
        type="file"
        accept="image/*"
        {...field}
        onChange={handleChange}
      />
    </label>
  );
};

InputPicture.propTypes = {
  setFilePicture: PropTypes.func.isRequired,
};

export default InputPicture;
