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
      <Path stroke="#6E747C" d="M8 14A6 6 0 108 2a6 6 0 000 12z" />
      <Path stroke="#6E747C" d="M8 4.5V8h3.5" />
    </Svg>
  )
}

export default SvgComponent
