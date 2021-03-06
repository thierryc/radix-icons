import * as React from 'react';
import { BaseIconProps } from './types';

interface CaretSortIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline';
}

export const CaretSortIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: CaretSortIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M4.9318 5.43181C4.75607 5.60754 4.75607 5.89247 4.93181 6.0682C5.10754 6.24394 5.39247 6.24394 5.5682 6.0682L7.5 4.1364L9.4318 6.0682C9.60754 6.24394 9.89247 6.24394 10.0682 6.0682C10.2439 5.89247 10.2439 5.60754 10.0682 5.43181L7.8182 3.18181C7.73381 3.09741 7.61935 3.05 7.5 3.05C7.38066 3.05 7.2662 3.09741 7.1818 3.18181L4.9318 5.43181ZM10.0682 9.5682C10.2439 9.39247 10.2439 9.10754 10.0682 8.93181C9.89247 8.75607 9.60754 8.75607 9.43181 8.93181L7.5 10.8636L5.5682 8.93181C5.39247 8.75607 5.10754 8.75607 4.93181 8.93181C4.75607 9.10754 4.75607 9.39247 4.93181 9.5682L7.18181 11.8182C7.35754 11.9939 7.64247 11.9939 7.8182 11.8182L10.0682 9.5682Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`CaretSortIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default CaretSortIcon;
