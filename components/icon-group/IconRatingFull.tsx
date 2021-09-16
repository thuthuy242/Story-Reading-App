import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={17}
      height={17}
      fill="none"
      viewBox="0 0 17 17"
      {...props}
    >
      <Path
        fill="#FF845E"
        d="M15.111 6.155a1.035 1.035 0 00-.918-.718l-3.752-.263-1.392-3.505a1.032 1.032 0 00-.962-.658 1.031 1.031 0 00-.96.658L5.714 5.194l-3.732.243a1.034 1.034 0 00-.918.718 1.054 1.054 0 00.326 1.141l2.87 2.427-.853 3.359a1.161 1.161 0 00.443 1.233 1.126 1.126 0 001.268.04l2.961-1.877c.004-.003.008-.005.017 0l3.187 2.019a1.02 1.02 0 001.15-.036 1.052 1.052 0 00.402-1.117l-.907-3.67 2.858-2.378a1.054 1.054 0 00.325-1.141z"
      />
    </Svg>
  )
}

export default SvgComponent
