import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={9.5}
      height={9.5}
      fill="none"
      viewBox="1 0 12 12"
      {...props}
    >
      <Path
        stroke="#A1A1A1"
        d="M6 3.75V6m1.949 1.125L6 6m2.633-1.326h1.875V2.8"
      />
      <Path
        stroke="#A1A1A1"
        d="M8.917 8.917a4.125 4.125 0 110-5.834l1.59 1.591"
      />
    </Svg>
  )
}

export default SvgComponent
