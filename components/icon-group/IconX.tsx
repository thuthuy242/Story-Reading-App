import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={15}
      height={15}
      fill="none"
      viewBox="0 0 21 21"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M16.406 4.594L4.594 16.406m11.812 0L4.594 4.594"
      />
    </Svg>
  )
}

export default SvgComponent
