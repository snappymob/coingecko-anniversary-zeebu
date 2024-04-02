import React from 'react';
import { cn } from '../utils/cn';

type PrimaryButtonProps = {
  label: string;
  buttonPt?: React.HTMLAttributes<HTMLButtonElement>;
  innerPt?: React.HTMLAttributes<HTMLDivElement>;
};

const PrimaryButton = ({ label, buttonPt, innerPt }: PrimaryButtonProps) => {
  const { className: buttonClassName, ...buttonPtRest } = buttonPt ?? {};
  const { className: innerClassName, ...innerPtRest } = innerPt ?? {};

  return (
    <button
      {...buttonPtRest}
      className={cn(
        `bg-primary-500 shadow-primaryShadow mb-1 hover:bg-primary-600 hover:shadow-primaryHover active:shadow-primaryActive transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-xl select-none focus:outline-none px-2.5 py-1.5 inline-flex`,
        buttonClassName ?? ''
      )}
    >
      <div
        {...innerPtRest}
        className={cn(
          `text-xs leading-4 text-white hover:text-white focus:text-white font-medium font-unbounded`,
          innerClassName ?? ''
        )}
      >
        {label}
      </div>
    </button>
  );
};

export default PrimaryButton;
