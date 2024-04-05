import React from 'react';
import { cn } from '../utils/cn';

type SecondaryButtonProps = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  buttonPt?: Omit<React.HTMLAttributes<HTMLButtonElement>, 'onClick'>;
  innerPt?: React.HTMLAttributes<HTMLDivElement>;
  children?: React.ReactNode;
};

const SecondaryButton = ({ onClick, buttonPt = {}, innerPt = {}, children }: SecondaryButtonProps) => {
  const { className: buttonClassName, ...buttonPtRest } = buttonPt;
  const { className: innerClassName, ...innerPtRest } = innerPt;

  return (
    <button
      onClick={onClick}
      className={cn(
        `bg-white focus:bg-white border-t-2 border-x-2 border-slate-300 shadow-secondaryShadow mb-1 hover:bg-slate-100 hover:shadow-secondaryHover active:shadow-secondaryActive transition-all duration-150 active:translate-y-2 items-center justify-center font-semibold rounded-xl select-none focus:outline-none px-2.5 py-1.5 inline-flex`,
        buttonClassName ?? ''
      )}
      {...buttonPtRest}
    >
      <div
        {...innerPtRest}
        className={cn(
          `text-xs leading-4 text-slate-900 hover:text-slate-900 focus:text-slate-900 font-medium font-manrope`,
          innerClassName ?? ''
        )}
      >
        {children}
      </div>
    </button>
  );
};

export default SecondaryButton;
