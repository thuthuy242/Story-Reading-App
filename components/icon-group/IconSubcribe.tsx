import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={25}
      fill="none"
      viewBox="0 0 20 18"
      {...props}
    >
      <Path
        stroke="#6E747C"
        d="M7.5 16.5h5M4.391 7.75a5.61 5.61 0 1111.219 0v0c0 2.798.585 4.422 1.1 5.31a.624.624 0 01-.537.94H3.827a.626.626 0 01-.538-.941c.516-.887 1.102-2.511 1.102-5.31h0zM14.33.874a8.161 8.161 0 012.963 3.29m-14.586 0A8.161 8.161 0 015.669.874"
      />
    </Svg>
  )
}

export default SvgComponent
