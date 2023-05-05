import React from 'react';

export const FormSteps = ({ active, children }) => (
  <div className='form-steps'>
    {
      React.Children.map(children, (child, i) => React.cloneElement(child, { index: i + 1, active: (active === i) ? 1 : 0 }))
    }
  </div>
);

export const FormStep = ({ active, index, title, children }) => (
  <div className={`form-step ${active && 'form-step-active'}`}>
    <div className='form-step-header'>
      <div className='form-step-index'>{index}</div>
      <div className='form-step-title'>
        <h2 className='mb-0'>{title}</h2>
      </div>
    </div>
    <div className='form-step-body'>
      <div className='form-step-spacer' />
      <div className='form-step-content container'>
        {children}
      </div>
    </div>
  </div>
);
