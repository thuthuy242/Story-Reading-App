import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={40}
      height={40}
      fill="none"
      viewBox="0 0 40 40"
      {...props}
    >
      <Path
        fill="#2BA5FF"
        d="M38.606 18.794L15.512 5.862a1.094 1.094 0 00-1.564 1.322l4.356 12.197c.085.238.085.498 0 .735l-4.356 12.197a1.094 1.094 0 001.564 1.322l23.094-12.932a1.094 1.094 0 000-1.909z"
        opacity={0.2}
      />
      <Path
        stroke="#6E747C"
        d="M38.606 18.794L15.512 5.862a1.094 1.094 0 00-1.564 1.322l4.356 12.197c.085.238.085.498 0 .735l-4.356 12.197a1.094 1.094 0 001.564 1.322l23.094-12.932a1.094 1.094 0 000-1.909zm-20.17.955h8.75"
      />
    </Svg>
  )
}

export default SvgComponent
