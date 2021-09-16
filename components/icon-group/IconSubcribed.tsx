import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={12}
      height={13}
      fill="none"
      viewBox="0 0 12 13"
      {...props}
    >
      <Path
        fill="#FF845E"
        stroke="#6E747C"
        d="M10.374 5.778v0A4.488 4.488 0 009.108 2.63a4.33 4.33 0 00-3.074-1.316s0 0 0 0H6a4.341 4.341 0 00-3.093 1.308 4.5 4.5 0 00-1.28 3.156h0c0 2.114-.43 3.343-.818 4.022h0a.625.625 0 00.217.843c.09.053.193.081.296.081m9.052-4.946l-9.052 5.296v-.35m9.052-4.946c0 2.114.429 3.344.817 4.022h0a.625.625 0 01-.217.843.585.585 0 01-.296.081m-.304-4.946l.304 4.946m-9.356 0s0 0 0 0m0 0h0m0 0h9.355m-9.354 0h9.354m0 0h0m0 0h0m-2.697 1.89a.135.135 0 00.038-.095l-.038.095zm0 0a.12.12 0 01-.086.036l.086-.037zm3.656-9.658h0a.138.138 0 01-.019.15.124.124 0 01-.083.042.117.117 0 01-.087-.03.131.131 0 01-.03-.041h0a6.113 6.113 0 00-2.2-2.483h0A.135.135 0 019.16.458a.136.136 0 01.053-.086.12.12 0 01.089-.02c.015.002.03.008.044.017h0a6.37 6.37 0 012.291 2.587zm-11.052.12h0a.13.13 0 01-.072.066.116.116 0 01-.091-.006.133.133 0 01-.07-.128.138.138 0 01.013-.051h0A6.37 6.37 0 012.654.368h.001a.119.119 0 01.09-.016.128.128 0 01.077.056.136.136 0 01.017.103.135.135 0 01-.057.082h0A6.113 6.113 0 00.584 3.076zm7.31 9.574H4.106a.12.12 0 01-.086-.037.135.135 0 01-.038-.094c0-.037.014-.071.038-.095a.12.12 0 01.086-.037h3.788s0 0 0 0a.12.12 0 01.086.037.136.136 0 01.038.095l-.124.131z"
      />
    </Svg>
  )
}

export default SvgComponent
