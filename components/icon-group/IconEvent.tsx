import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={32}
      height={30}
      fill="none"
      viewBox="0 0 32 30"
      {...props}
    >
      <path
        fill="#2BA5FF"
        d="M4.848 5.587a4.656 4.656 0 004.656 4.655h12.02a4.656 4.656 0 004.656-4.655.913.913 0 00-.284-.659.99.99 0 00-.685-.272H5.818a.99.99 0 00-.686.272.913.913 0 00-.284.659z"
        opacity={0.2}
      />
      <path
        stroke="#22201E"
        d="M25.21 4.656H5.819c-.536 0-.97.416-.97.93V24.21c0 .514.434.931.97.931H25.21c.535 0 .97-.417.97-.931V5.587c0-.515-.435-.931-.97-.931zm-3.878-1.863v3.725M9.696 2.793v3.725m-4.848 3.724H26.18m-7.272 7.449h-6.787m3.393-3.259v6.518"
      />
    </svg>
  )
}

export default SvgComponent
