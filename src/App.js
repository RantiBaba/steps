import { useState } from 'react';
// import Counter from './Counter';

const messages = [
  'Learn React ⚛️',
  'Apply for jobs 💼',
  'Invest your new income 🤑',
];

export default function App() {
  return <Steps />;
  // return <Counter />;
}

function Steps() {
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
            <div className={step === 1 ? 'active' : ''}>1</div>
            <div className={step === 2 ? 'active' : ''}>2</div>
            <div className={step === 3 ? 'active' : ''}>3</div>
          </div>

          <StepMessage step={step} testId='message-step'>
            <span data-testid='message'>{messages[step - 1]}</span>
          </StepMessage>

          <div className='buttons'>
            <Button
              className='button'
              onClick={handlePrevious}
              testId='previous-button'
            >
              <span data-testid='emoji-left'>👈🏿</span> Previous
            </Button>
            <Button
              className='button'
              onClick={handleNext}
              testId='next-button'
            >
              Next <span data-testid='emoji-right'>👉🏿</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

const StepMessage = ({ step, testId, children }) => (
  <div className='message'>
    <h3 data-testid={testId}>Step {step}:</h3>
    {children}
  </div>
);

const Button = ({ className, onClick, testId, children }) => (
  <button className={className} onClick={onClick} data-testid={testId}>
    {children}
  </button>
);
