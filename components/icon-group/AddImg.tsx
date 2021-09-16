import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={113}
      height={114}
      fill="none"
      viewBox="0 0 113 114"
      {...props}
    >
      <Circle cx={56.5} cy={56.5} r={55.5} fill="#B9B9B9" stroke="#fff" />
      <Circle cx={56.5} cy={51.5} r={21.5} fill="#fff" />
      <Path
        fill="#fff"
        d="M44 75c9.965 4.073 15.44 3.936 25 0 12.872 5.024 17.994 10.376 25 22.5-6 5-10 8.5-17 11s-14.5 4-19.5 4.5-29.694-3.764-39-15.5C25.867 85.958 30.762 80.301 44 75z"
      />
      <Path
        fill="#6E747C"
        d="M97.156 87a10.157 10.157 0 1010.157 10.156A10.173 10.173 0 0097.156 87zm3.907 10.938h-3.126v3.124a.782.782 0 11-1.562 0v-3.124H93.25a.781.781 0 110-1.563h3.125V93.25a.781.781 0 111.563 0v3.125h3.125a.781.781 0 010 1.563z"
      />
    </Svg>
  )
}

export default SvgComponent
