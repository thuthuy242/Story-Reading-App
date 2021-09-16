import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        stroke="#22201E"
        d="M14.015 11.563a4.066 4.066 0 01-3.39 3.39M5.628 5.106c-1.206 1.818-2.19 3.895-2.19 5.832a6.562 6.562 0 1013.124 0c0-4.063-2.812-7.188-5.091-9.464h0L8.75 7.188 5.628 5.106h0z"
      />
    </svg>
  )
}

export default SvgComponent