import { useState } from 'react';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) setStep(currentStep => currentStep - 1);
  };

  const handleNext = () => {
    if (step < 3) setStep(currentStep => currentStep + 1);
    if (step === 3) setStep(1);
  };

  const closeButton = <div data-testid='close-button'>&times;</div>;
  const checkButton = <div data-testid='check-button'>&#10003;</div>;

  return (
    <>
      <button className='close' onClick={() => setIsOpen(open => !open)}>
        {isOpen ? closeButton : checkButton}
      </button>
      {isOpen && (
        <div className='steps' data-testid='steps'>
          <div className='numbers' data-testid='numbers'>
            <div className={step >= 1 ? 'active' : ''}>1</div>
            <div className={step >= 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>

          <p className='message' data-testid='message'>
            <span data-testid='step'>Step {step}:</span>
            <span data-testid='message-step'>{messages[step - 1]}</span>
          </p>

          <div className='buttons'>
            <button
              className='button'
              onClick={handlePrevious}
              data-testid='previous'
            >
              Previous
            </button>
            <button className='button' onClick={handleNext} data-testid='next'>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
