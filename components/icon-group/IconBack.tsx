import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 20 20"
      {...props}
    >
      <Path stroke="#6E747C" d="M12.5 16.25L6.25 10l6.25-6.25" />
    </Svg>
  )
}

export default SvgComponent
