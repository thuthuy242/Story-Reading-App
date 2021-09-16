import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={22}
      height={22}
      fill="none"
      viewBox="0 0 29 29"
      {...props}
    >
      <Rect width={26} height={25} y={2} fill="#fff" rx={3} />
      <Path
        fill="#5A72A9"
        d="M19.225 18.38l.563-3.58h-3.525v-2.324c0-.98.491-1.935 2.07-1.935h1.605V7.492s-1.455-.242-2.846-.242c-2.905 0-4.802 1.715-4.802 4.82v2.73H9.063v3.58h3.227v8.658a13.145 13.145 0 003.973 0V18.38h2.962z"
      />
    </Svg>
  )
}

export default SvgComponent
