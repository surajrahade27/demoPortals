import React, { useState } from 'react';

function DynamicSelect(props) {
  const { label, options } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  function handleOptionClick(option) {
    setSelectedOption(option);
    setIsOpen(false);
    props.onChange(option);
  }

  return (
    <div className="form-group">
      <label>{label}</label>
      <div className="dropdown">
        <a href="#" className="dropdown-label" onClick={() => setIsOpen(!isOpen)}>
          <div className="flex-table flex-table-left-sm align-items-baseline">
            <aside><div className="badge badge-dot" style={{ '--bgcolor': selectedOption.bgColor }}></div></aside>
            <aside className="flex-item-spread ellipsis">{selectedOption.label}</aside>
          </div>
        </a>
        {isOpen && (
          <div className="dropdown-content">
            {options.map(option => (
              <a href="#" key={option.value} onClick={() => handleOptionClick(option)}>
                <div className="flex-table flex-table-left-sm align-items-baseline">
                  <aside><div className="badge badge-dot" style={{ '--bgcolor': option.bgColor }}></div></aside>
                  <aside className="flex-item-spread ellipsis">{option.label}</aside>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}


export default DynamicSelect;
