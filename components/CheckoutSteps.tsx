import React from 'react';
import Checkout from './Checkout';
import OrderDetails from './OrderDetails';
import { checkoutStore } from '../store/CheckoutStore';
import PaypalBtn from './PaypalBtn';

interface StepContainerProps {
  step: number;
}

interface ProgressBarProps {
  step: number;
  updateStep: any;
}

function CheckoutSteps() {
  const { step, updateStep } = checkoutStore((state) => state);
  return (
    <div>
      <ProgressBar step={step} updateStep={updateStep} />
      <StepContainer step={step} />
    </div>
  );
}

const ProgressBar = ({ updateStep, step }: ProgressBarProps) => {
  const steps = ['Billing information', 'Order information', 'Payment Method'];
  return (
    <div className='max-w-xl mx-auto my-4 border-b-2 pb-4'>
      <div className='flex pb-3'>
        {steps.map((data, index) => {
          const newStep = index + 1;
          const nextStep = index + 2;
          const lastStep = steps.length > newStep;
          return (
            <div
              className={`${!lastStep ? 'flex w-fit' : 'flex w-full'}`}
              key={data}
            >
              <div className='flex-1'>
                <div
                  className={`${
                    step >= newStep ? `step-circle-active` : 'step-circle'
                  }`}
                >
                  <span
                    onClick={() => updateStep(newStep)}
                    className='text-white text-center w-full'
                  >
                    {newStep}
                  </span>
                </div>
              </div>
              {lastStep && (
                <div className='w-full align-center items-center align-middle content-center flex px-4'>
                  <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
                    <div
                      className={`${
                        step >= nextStep
                          ? 'step-bar-active'
                          : step >= newStep
                          ? 'step-bar'
                          : ''
                      }`}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className='flex text-xs content-center text-center justify-between'>
        {steps.map((data) => (
          <p key={data}>{data}</p>
        ))}
      </div>
    </div>
  );
};

function StepContainer({ step }: StepContainerProps) {
  switch (step) {
    case 1:
      return <FirstStep />;
    case 2:
      return <SecondStep />;
    case 3:
      return <ThirdStep />;
    default:
      return <div></div>;
  }
}

const FirstStep = () => {
  return <Checkout />;
};

const SecondStep = () => {
  return <OrderDetails />;
};

const ThirdStep = () => {
  return <PaypalBtn />;
};

export default CheckoutSteps;
