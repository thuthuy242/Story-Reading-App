import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={29}
      fill="none"
      viewBox="0 0 29 29"
      {...props}
    >
      <path
        fill="#2BA5FF"
        d="M11.781 18.125H7.25a4.531 4.531 0 110-9.063h4.531v9.063z"
        opacity={0.2}
      />
      <path
        stroke="#000"
        d="M11.781 9.063v14.014a.906.906 0 01-.403.754l-1.245.83a.906.906 0 01-1.382-.534L7.25 18.125"
      />
      <path
        stroke="#000"
        d="M7.25 18.125a4.531 4.531 0 110-9.063h4.531s6.169 0 12.104-4.978a.906.906 0 011.49.693V22.41a.905.905 0 01-1.49.692c-5.935-4.978-12.104-4.978-12.104-4.978H7.25z"
      />
    </svg>
  )
}

export default SvgComponent