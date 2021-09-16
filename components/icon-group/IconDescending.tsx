import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      fill="none"
      viewBox="0 0 18 18"
      {...props}
    >
      <path
        stroke="#22201E"
        d="M9.785 5.98l2.718-2.719L15.22 5.98m-2.718 3.804V3.261m-9.24 5.436h4.892M3.262 4.348h3.805m-3.805 8.698h9.24"
      />
    </svg>
  )
}

export default SvgComponent
