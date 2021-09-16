import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={32}
      fill="none"
      viewBox="0 0 32 32"
      {...props}
    >
      <path
        fill="#2BA5FF"
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12z"
        opacity={0.2}
      />
      <path
        stroke="#000"
        d="M16 28c6.627 0 12-5.373 12-12S22.627 4 16 4 4 9.373 4 16s5.373 12 12 12zm4-9a5 5 0 110-6"
      />
    </svg>
  )
}

export default SvgComponent