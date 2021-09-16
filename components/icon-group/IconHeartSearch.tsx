import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      viewBox="0 0 10 10"
      {...props}
    >
      <Path
        stroke="#22201E"
        d="M5 8.438S1.094 6.25 1.094 3.593A2.032 2.032 0 015 2.81h0a2.032 2.032 0 013.906.783C8.906 6.25 5 8.438 5 8.438z"
      />
    </Svg>
  )
}

export default SvgComponent
