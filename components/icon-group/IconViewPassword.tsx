import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      fill="none"
      viewBox="0 0 22 22"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M17.286 10.94l1.96 3.396m-5.996-1.509l.611 3.467m-5.119-3.468l-.611 3.467M4.71 10.938l-1.97 3.411m.01-5.336c1.445 1.788 4.094 4.05 8.25 4.05s6.805-2.262 8.25-4.05"
      />
    </Svg>
  )
}

export default SvgComponent
