import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      fill="none"
      viewBox="0 0 16 16"
      {...props}
    >
      <Path
        fill="#FF845E"
        d="M11.002 2a3.741 3.741 0 00-3 1.497 3.751 3.751 0 00-6.75 2.253c0 4.491 6.24 8.037 6.505 8.186a.5.5 0 00.489 0 19.832 19.832 0 003.215-2.346c2.183-1.965 3.29-3.93 3.29-5.84A3.755 3.755 0 0011.002 2z"
      />
    </Svg>
  )
}

export default SvgComponent
