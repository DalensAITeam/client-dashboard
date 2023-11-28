import { useState } from 'react';
// import './CustomDropdown.css';

const options = ['One variety of animal farm type', 'Double variety of animal farm type', 'Multiple variety of animal farm farm type'];

const CustomDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
    setIsOpen(false); // Close the dropdown after selecting an option
  };

  return (
    <div className= {`custom-dropdown ${isOpen ? 'active' : ''}`}>
      <div className="selected-option  font-[500px]" onClick={() => setIsOpen(!isOpen)}>
        {selectedOption || 'Type of animal farm option'}
      </div>
      <div className="options bg-[#CCCCCC80] shadow-lg shadow-[#CCCCCC80]-500/50">
        {isOpen &&
          options.map((option, index) => ( 
            <div key={index} style={{color: 'red'}} className='font-medium'>
              <input 
                type="radio"
                name="options"
                value={option}
                checked={selectedOption === option}
                onChange={() => handleOptionChange(option)}
    
              />
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default CustomDropdown;