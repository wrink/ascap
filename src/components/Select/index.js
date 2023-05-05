import { useCallback, useState } from 'react';

export const Select = ({ 
  label,
  options,
  onChange,
  error,
}) => {
  const [ value, setValue ] = useState('');
  const [ valueLabel, setValueLabel ] = useState('');
  const [ open, setOpen ] = useState(false);

  const handleToggle = useCallback(() => {
    setOpen(!open);
  }, [ open, setOpen ]);

  const handleChange = useCallback(({ value, label }) => () => {
    setValue(value);
    setValueLabel(label);
    onChange(value);
    handleToggle();
  }, [
    setValue,
    setValueLabel,
    onChange,
  ]);

  console.log(error);

  return (
    <>
      <div className={`select ${error && 'select-error'} ${!!value && 'select-selected'}`}>
        <label>
          {label}
        </label>
        <button
          className={`btn ${open && 'show'}`}
          type='button'
          data-bs-toggle='dropdown'
          aria-expanded='false'
         >
          {valueLabel}
        </button>
        <ul class='dropdown-menu'>
          {
            options.map(({ value, label }) => (
              <li key={value}>
                <a className='dropdown-item' onClick={handleChange({ value, label })}>
                  {label}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
      {error && (
        <p className='text-error'>
          {error}
        </p>
      )}
    </>
  );
};