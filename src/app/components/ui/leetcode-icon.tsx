import type { SVGProps } from 'react';

type LeetCodeIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
};

export default function LeetCodeIcon({ className, size = 24, ...props }: LeetCodeIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      width={size}
      height={size}
      className={className}
      fill="currentColor"
      {...props}
    >
      <path d="M13.93 3.22a1 1 0 0 1 1.41 0l1.42 1.42a1 1 0 0 1 0 1.41l-5.3 5.3a1 1 0 0 1-1.41-1.42l4.88-4.88-.71-.71-5.59 5.59a3 3 0 0 0 4.24 4.24l5.59-5.59.71.71-5.3 5.3a5 5 0 1 1-7.07-7.07l5.3-5.3a1 1 0 0 1 1.41 0z" />
      <path d="M8 20a1 1 0 1 1 0-2h8a1 1 0 1 1 0 2H8z" />
    </svg>
  );
}
