import { FC, MouseEventHandler, ReactNode } from 'react';

import Image from 'next/image';

type Props = {
  leftIcon?: string;
  rightIcon?: string;
  submitting?: boolean;
  type?: 'button' | 'submit';
  bgColor?: string;
  textColor?: string;
  onClick?: MouseEventHandler;
  children: ReactNode;
};

const Button: FC<Props> = ({
  leftIcon,
  rightIcon,
  submitting,
  type,
  bgColor,
  textColor,
  onClick,
  children,
}) => {
  return (
    <button
      type={type ?? 'button'}
      disabled={submitting ?? false}
      onClick={onClick}
      className={`flexCenter gap-3 px-4 py-3 ${textColor ?? 'text-white'} ${
        submitting ? 'bg-black/50' : bgColor ?? 'bg-primary-purple'
      } rounded-xl text-sm font-medium max-md:w-full`}
    >
      {leftIcon ? <Image src={leftIcon} width={14} height={14} alt="left icon" /> : null}

      {children}

      {rightIcon ? <Image src={rightIcon} width={14} height={14} alt="right icon" /> : null}
    </button>
  );
};

export default Button;
