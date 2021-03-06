import * as React from 'react';
import { BaseIconProps } from './types';

interface ThickArrowDownIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const ThickArrowDownIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: ThickArrowDownIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M5 2.5C5 2.22386 5.22386 2 5.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5H12.5C12.6873 5 12.8589 5.10467 12.9446 5.27121C13.0303 5.43774 13.0157 5.63821 12.9069 5.79062L7.90687 12.7906C7.81301 12.922 7.66148 13 7.5 13C7.33853 13 7.18699 12.922 7.09314 12.7906L2.09314 5.79062C1.98427 5.63821 1.96972 5.43774 2.05542 5.27121C2.14112 5.10467 2.31271 5 2.5 5H5V2.5ZM6 3V5.5C6 5.77614 5.77614 6 5.5 6H3.4716L7.5 11.6398L11.5284 6H9.5C9.22386 6 9 5.77614 9 5.5V3H6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  if (type === 'twoTone' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M9.5 2.5H5.5V5.5H2.5L7.5 12.5L12.5 5.5H9.5V2.5Z" fill={color} opacity=".2" />
        <path
          d="M5 2.5C5 2.22386 5.22386 2 5.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5H12.5C12.6873 5 12.8589 5.10467 12.9446 5.27121C13.0303 5.43774 13.0157 5.63821 12.9069 5.79062L7.90687 12.7906C7.81301 12.922 7.66148 13 7.5 13C7.33853 13 7.18699 12.922 7.09314 12.7906L2.09314 5.79062C1.98427 5.63821 1.96972 5.43774 2.05542 5.27121C2.14112 5.10467 2.31271 5 2.5 5H5V2.5ZM6 3V5.5C6 5.77614 5.77614 6 5.5 6H3.4716L7.5 11.6398L11.5284 6H9.5C9.22386 6 9 5.77614 9 5.5V3H6Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`ThickArrowDownIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default ThickArrowDownIcon;
