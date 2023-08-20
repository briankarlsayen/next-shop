import React, { useState } from 'react';
import Checkout from './Checkout';
import PaymentMethod from './PaymentMethod';
import OrderDetails from './OrderDetails';
import { checkoutStore } from '../store/CheckoutStore';
import PaypalBtn from './PaypalBtn';
import FillBtn from './FillBtn';

interface StepContainerProps {
  checkoutInfo: checkoutInfo;
  setCheckoutInfo: any;
  updateField: any;
}

interface ProgressBarProps {
  step: number;
  updateStep: any;
}

interface checkoutInfo {
  step: number;
  fullName: string;
  displayName: string;
  workSpaceName: string;
  workSpaceURL: string;
  workSpaceType: string;
}

interface IChecklistInfo {
  paymentType?: string;
}

function CheckoutSteps() {
  const [checkoutInfo, setCheckoutInfo] = useState<IChecklistInfo>();
  // const [step, updateStep] = useState(1);
  const { billingInfo, step, updateBilling, updateStep } = checkoutStore(
    (state) => state
  );
  console.log('step', step);
  return (
    <div>
      <ProgressBar step={step} updateStep={updateStep} />
      <StepContainer
        step={step}
        updateStep={updateStep}
        checkoutInfo={checkoutInfo}
        setCheckoutInfo={setCheckoutInfo}
      />
    </div>
  );
}

const ProgressBar = ({ updateStep, step }: ProgressBarProps) => {
  return (
    <div className='max-w-xl mx-auto my-4 border-b-2 pb-4'>
      <div className='flex pb-3'>
        <div className='flex-1'></div>

        <div className='flex-1'>
          <div
            className={`${step >= 1 ? `step-circle-active` : 'step-circle'}`}
          >
            <span
              onClick={() => updateStep(1)}
              className='text-white text-center w-full'
            >
              1
            </span>
          </div>
        </div>
        <div className='w-1/6 align-center items-center align-middle content-center flex'>
          <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
            <div
              className={`${
                step >= 2 ? 'step-bar-active' : step >= 1 ? 'step-bar' : ''
              }`}
            ></div>
          </div>
        </div>

        <div className='flex-1'>
          <div
            className={`${step >= 2 ? `step-circle-active` : 'step-circle'}`}
          >
            <span
              onClick={() => updateStep(2)}
              className='text-white text-center w-full'
            >
              2
            </span>
          </div>
        </div>

        <div className='w-1/6 align-center items-center align-middle content-center flex'>
          <div className='w-full bg-grey-light rounded items-center align-middle align-center flex-1'>
            <div
              className={`${
                step >= 3 ? 'step-bar-active' : step >= 2 ? 'step-bar' : ''
              }`}
            ></div>
          </div>
        </div>

        <div className='flex-1'>
          <div
            className={`${step >= 3 ? `step-circle-active` : 'step-circle'}`}
          >
            <span
              onClick={() => updateStep(3)}
              className='text-grey-darker text-center w-full'
            >
              3
            </span>
          </div>
        </div>

        <div className='flex-1'></div>
      </div>

      <div className='flex text-xs content-center text-center'>
        <div className='w-1/2'>Billing information</div>
        <div className='w-1/2'>Order information</div>
        <div className='w-1/2'>Payment Method</div>
      </div>
    </div>
  );
};

function StepContainer({
  checkoutInfo,
  setCheckoutInfo,
  updateField,
  step,
  updateStep,
}: any) {
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
