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
        d="M5 11h22V6a1 1 0 00-1-1H6a1 1 0 00-1 1v5z"
        opacity={0.2}
      />
      <path
        stroke="#22201E"
        d="M26 5H6a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V6a1 1 0 00-1-1zm-4-2v4M10 3v4m-5 4h22"
      />
      <path stroke="#22201E" d="M20.5 16l-5.834 5.5-3.167-3" />
    </svg>
  )
}

export default SvgComponent
