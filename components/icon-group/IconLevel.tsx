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
        d="M16 18a6 6 0 100-12 6 6 0 000 12z"
        opacity={0.2}
      />
      <path
        stroke="#000"
        d="M16 22c5.522 0 10-4.477 10-10S21.522 2 16 2C10.476 2 6 6.477 6 12s4.477 10 10 10z"
      />
      <path
        stroke="#000"
        d="M16 18a6 6 0 100-12 6 6 0 000 12zm6 2v10l-6-3-6 3V20"
      />
    </svg>
  )
}

export default SvgComponent
