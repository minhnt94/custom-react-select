import Select from 'react-select';
import './CustomSelect.styles.scss';

const textStyle = () => ({
  fontSize: '1.4rem',
  fontWeight: 'normal',
  lineHeight: '1.8rem',
});

export const SingleSelect = ({ styles, ...props }) => {
  const customStyles = {
    indicatorSeparator: (provided, state) => ({
      ...provided,
      display: state.selectProps.isClearable ? 'block' : 'none',
    }),
    ...styles,
  };
  return (
    <Select
      styles={customStyles}
      isMulti={false}
      classNamePrefix='custom-select'
      // menuIsOpen
      {...props}
    />
  );
};

export const MultiSelect = ({ styles, ...props }) => {
  const customStyles = {
    ...styles,
  };
  return (
    <Select
      styles={customStyles}
      isSearchable
      isClearable
      isMulti
      classNamePrefix='custom-select'
      components={{ Option: CustomOption }}
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      {...props}
    />
  );
};

const CustomOption = (props) => {
  const { innerProps, innerRef, value } = props;
  console.log('props', props)

  return (
    <div ref={innerRef} {...innerProps} className={props.isSelected ? 'is-selected' : ''}>
      <label className='checkbox checkbox--normal  checkbox--nolabel'>
        <input type='checkbox' className='checkbox__input' name='' value={value} checked={props.isSelected}/>
        <span className='checkbox__label'></span>
        <span className='checkbox__checkmark'></span>
      </label>
      <span className="custom-select__option-label">{props.children}</span>
    </div>
  );
};
