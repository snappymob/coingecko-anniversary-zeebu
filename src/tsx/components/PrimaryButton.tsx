import React from 'react';
import { cn } from '../utils/cn';

type PrimaryButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonPt?: Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'>;
  innerPt?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
};

const PrimaryButton = ({ onClick, buttonPt = {}, innerPt = {}, children }: PrimaryButtonProps) => {
  const { className: buttonClassName, ...buttonPtRest } = buttonPt;
  const { className: innerClassName, ...innerPtRest } = innerPt;

  return (
    <button
      onClick={onClick}
      className={cn(
        `bg-primary-500 shadow-primaryShadow mb-1 hover:bg-primary-600 hover:shadow-primaryHover active:shadow-primaryActive transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-xl select-none focus:outline-none px-2.5 py-1.5 inline-flex`,
        buttonClassName ?? ''
      )}
      {...buttonPtRest}
    >
      <div
        {...innerPtRest}
        className={cn(
          `text-xs leading-4 text-white hover:text-white focus:text-white font-medium font-manrope`,
          innerClassName ?? ''
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default PrimaryButton;
