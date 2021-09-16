import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
    return (
        <Svg
            xmlns="http://www.w3.org/2000/svg"
            width={25}
            height={25}
            fill="none"
            viewBox="0 0 25 25"
            {...props}
        >
            <Path
                stroke="#22201E"
                strokeWidth="1.5"
                d="M9.375 21.875h6.25M5.489 10.156a7.022 7.022 0 017.064-7.03c3.867.028 6.96 3.241 6.96 7.119v.692c0 3.498.73 5.528 1.375 6.637a.782.782 0 01-.672 1.176H4.784a.78.78 0 01-.672-1.176c.644-1.11 1.377-3.14 1.377-6.637v-.78z"
            />
        </Svg>
    )
}

export default SvgComponent