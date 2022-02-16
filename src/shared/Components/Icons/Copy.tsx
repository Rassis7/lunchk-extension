import React, { memo, SVGProps, VFC } from "react";

export const Copy: VFC<SVGProps<SVGSVGElement>> = memo(
  ({ width = 32, height = 32, ...rest }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="feather feather-copy"
      viewBox="0 0 24 24"
      width={width}
      height={height}
      {...rest}
    >
      <rect width="13" height="13" x="9" y="9" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"></path>
    </svg>
  )
);
