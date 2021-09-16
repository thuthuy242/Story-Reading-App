import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={19}
      fill="none"
      viewBox="0 0 10 11"
      {...props}
    >
      <Path
        stroke="#22201E"
        d="M7.007 6.781a2.033 2.033 0 01-1.694 1.695M2.814 3.553c-.603.91-1.095 1.948-1.095 2.916a3.281 3.281 0 106.562 0c0-2.031-1.406-3.594-2.546-4.732h0l-1.36 2.857-1.561-1.04h0z"
      />
    </Svg>
  )
}

export default SvgComponent
