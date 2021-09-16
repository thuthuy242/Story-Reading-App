import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={9.5}
      height={9.5}
      fill="none"
      viewBox="0 0 12 12"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M2.04 7.951A4.31 4.31 0 113.55 9.46h0l-1.49.425a.36.36 0 01-.444-.444l.426-1.49h0zm2.273-2.92h2.875M4.313 6.469h2.875"
      />
    </Svg>
  )
}

export default SvgComponent
