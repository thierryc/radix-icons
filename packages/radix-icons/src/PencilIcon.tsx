import * as React from 'react';
import { BaseIconProps } from './types';

interface PencilIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const PencilIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: PencilIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M11.8535 1.14645C11.6583 0.951184 11.3417 0.951184 11.1464 1.14645L3.71452 8.57836C3.62456 8.66832 3.55259 8.77461 3.50248 8.89155L2.04041 12.303C1.95987 12.491 2.00186 12.709 2.14643 12.8536C2.291 12.9981 2.50902 13.0401 2.69694 12.9596L6.10844 11.4975C6.22537 11.4474 6.33167 11.3754 6.42163 11.2855L13.8535 3.85355C14.0488 3.65829 14.0488 3.34171 13.8535 3.14645L11.8535 1.14645ZM4.42163 9.28547L11.5 2.20711L12.7929 3.5L5.71452 10.5784L4.21921 11.2192L3.78078 10.7808L4.42163 9.28547Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`PencilIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default PencilIcon;
