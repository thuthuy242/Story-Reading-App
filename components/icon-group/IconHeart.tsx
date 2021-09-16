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
        d="M6 10.125S1.312 7.5 1.312 4.312A2.438 2.438 0 016 3.373h0a2.438 2.438 0 014.688.94C10.688 7.5 6 10.125 6 10.125z"
      />
    </Svg>
  )
}

export default SvgComponent
