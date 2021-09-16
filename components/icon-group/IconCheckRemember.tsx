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
        fill="#6E747C"
        d="M17.875 2.75H4.125A1.376 1.376 0 002.75 4.125v13.75a1.376 1.376 0 001.375 1.375h13.75a1.376 1.376 0 001.375-1.375V4.125a1.376 1.376 0 00-1.375-1.375zm-2.62 6.684l-5.041 4.813a.686.686 0 01-.95 0l-2.52-2.406a.687.687 0 11.95-.994l2.045 1.952 4.568-4.358a.687.687 0 11.949.993z"
      />
    </Svg>
  )
}

export default SvgComponent
