import * as React from 'react';
import { BaseIconProps } from './types';

interface AspectRatioIconProps extends BaseIconProps {
  size?: '15';
  type?: 'outline' | 'twoTone';
}

export const AspectRatioIcon = ({
  color = 'currentColor',
  size = '15',
  type = 'outline',
  ...props
}: AspectRatioIconProps) => {
  if (type === 'outline' && size === '15') {
    return (
      <svg width="15" height="15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M3.5 2C2.67157 2 2 2.67157 2 3.5V11.5C2 12.3284 2.67157 13 3.5 13H11.5C12.3284 13 13 12.3284 13 11.5V3.5C13 2.67157 12.3284 2 11.5 2H3.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H11.5C11.7761 3 12 3.22386 12 3.5V8H10.5C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9H12V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V9H4.5C4.77614 9 5 8.77614 5 8.5C5 8.22386 4.77614 8 4.5 8H3V3.5ZM6 8.5C6 8.22386 6.22386 8 6.5 8H8.5C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9H6.5C6.22386 9 6 8.77614 6 8.5Z"
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
        <path
          d="M3.5 2.5C2.94772 2.5 2.5 2.94772 2.5 3.5V8.5V11.5C2.5 12.0523 2.94772 12.5 3.5 12.5H11.5C12.0523 12.5 12.5 12.0523 12.5 11.5V8.5V3.5C12.5 2.94772 12.0523 2.5 11.5 2.5H3.5Z"
          fill={color}
          opacity=".2"
          fillRule="evenodd"
          clipRule="evenodd"
        />
        <path
          d="M3.5 2C2.67157 2 2 2.67157 2 3.5V11.5C2 12.3284 2.67157 13 3.5 13H11.5C12.3284 13 13 12.3284 13 11.5V3.5C13 2.67157 12.3284 2 11.5 2H3.5ZM3 3.5C3 3.22386 3.22386 3 3.5 3H11.5C11.7761 3 12 3.22386 12 3.5V8H10.5C10.2239 8 10 8.22386 10 8.5C10 8.77614 10.2239 9 10.5 9H12V11.5C12 11.7761 11.7761 12 11.5 12H3.5C3.22386 12 3 11.7761 3 11.5V9H4.5C4.77614 9 5 8.77614 5 8.5C5 8.22386 4.77614 8 4.5 8H3V3.5ZM6 8.5C6 8.22386 6.22386 8 6.5 8H8.5C8.77614 8 9 8.22386 9 8.5C9 8.77614 8.77614 9 8.5 9H6.5C6.22386 9 6 8.77614 6 8.5Z"
          fill={color}
          fillRule="evenodd"
          clipRule="evenodd"
        />
      </svg>
    );
  }

  console.error(`AspectRatioIcon doesn't support the combination of ${size} and ${type}`);
  return null;
};

export default AspectRatioIcon;
