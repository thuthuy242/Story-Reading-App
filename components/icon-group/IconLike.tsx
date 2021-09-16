import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={29}
      height={25}
      fill="none"
      viewBox="0 0 21 17"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M10.5 15.719S2.297 11.125 2.297 5.547A4.266 4.266 0 0110.5 3.903h0a4.267 4.267 0 018.203 1.644c0 5.578-8.203 10.172-8.203 10.172z"
      />
    </Svg>
  )
}

export default SvgComponent
