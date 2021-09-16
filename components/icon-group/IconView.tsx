import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={10}
      height={10}
      fill="none"
      viewBox="0 0 12 12.5"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M6 2.625C2.25 2.625.75 6 .75 6S2.25 9.375 6 9.375 11.25 6 11.25 6 9.75 2.625 6 2.625z"
      />
      <Path
        stroke="#6E747C"
        d="M6 7.875a1.875 1.875 0 100-3.75 1.875 1.875 0 000 3.75z"
      />
    </Svg>
  )
}

export default SvgComponent
