import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={13}
      height={13}
      fill="none"
      viewBox="0 0 11 11"
      {...props}
    >
      <Path stroke="#6E747C" d="M8.938 4.125L5.5 7.563 2.062 4.124" />
    </Svg>
  )
}

export default SvgComponent
