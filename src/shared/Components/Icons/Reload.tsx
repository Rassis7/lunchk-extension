import { memo, SVGProps, VFC } from "react";

export const Reload: VFC<SVGProps<SVGSVGElement>> = memo(
  ({ width = 32, height = 32, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      x="0"
      y="0"
      version="1"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      fill="currentColor"
      {...rest}
    >
      <path d="M25.049 40.566l.003.003 17.233-.003v-6.66h-9.15c4.248-4.453 10.225-7.24 16.865-7.24 12.884 0 23.333 10.446 23.333 23.333H80c0-16.569-13.431-30-30-30-8.499 0-16.159 3.551-21.614 9.232L28.382 20h-6.663v17.233a3.33 3.33 0 003.33 3.333zM74.948 59.434v-.003l-17.233.003v6.66h9.147C62.617 70.547 56.641 73.333 50 73.333c-12.884 0-23.333-10.445-23.333-23.333H20c0 16.569 13.431 30 30 30 8.496 0 16.159-3.552 21.614-9.231V80h6.667V62.767a3.331 3.331 0 00-3.333-3.333z"></path>
    </svg>
  )
);
