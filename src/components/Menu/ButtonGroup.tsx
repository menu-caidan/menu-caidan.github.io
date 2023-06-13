import React, { useState } from 'react';

interface Option {
  label: string;
  value: string;
}

interface ButtonGroupProps {
  selectedChoice: string;
  options: Option[];
  onChange: (option: string) => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({ selectedChoice, options, onChange }) => {
  // const [selectedOption, setSelectedOption] = useState<Option>(options[0]);

  const handleOptionChange = (option: Option) => {
    // setSelectedOption(option);
    onChange(option.value);
  };

  return (
    <div className="btn-group" role="group">
      {options.map((option) => (
        <button
          key={option.value}
          className={`btn btn-outline-primary ${selectedChoice === option.value ? 'active' : ''}`}
          onClick={() => handleOptionChange(option)}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;