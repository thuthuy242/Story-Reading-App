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
        stroke="#000"
        d="M9.88 11.525l2.744 2.745 2.744-2.744m-2.745-3.842v6.586m-9.33-5.489h4.94M3.293 4.39h9.33m-9.33 8.782h3.842"
      />
    </svg>
  )
}

export default SvgComponent