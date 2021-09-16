import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      fill="none"
      viewBox="0 0 25 25"
      {...props}
    >
      <path
        fill="#2BA5FF"
        d="M12.5 21.875a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
        opacity={0.2}
      />
      <path
        stroke="#ACACAC"
        d="M12.5 21.875a9.375 9.375 0 100-18.75 9.375 9.375 0 100 18.75z"
      />
      <path
        fill="#ACACAC"
        d="M8.984 11.719a1.172 1.172 0 100-2.344 1.172 1.172 0 000 2.344z"
      />
      <path
        stroke="#ACACAC"
        d="M14.844 10.547h2.344m-.628 4.297a4.689 4.689 0 01-8.12 0"
      />
    </svg>
  )
}

export default SvgComponent