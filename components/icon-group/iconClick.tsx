import * as React from "react"
import { StyleSheet, View, Animated } from "react-native"
import Svg, { Circle } from "react-native-svg"

function SvgComponent(props: any) {
    return (
        <View>


            <Svg
                xmlns="http://www.w3.org/2000/svg"
                width={28}
                height={34}
                fill="none"
                viewBox="0 0 28 34"
                {...props}
            >
                <Circle cx={16} cy={22} r={12} fill="#FF845E" />
                <Circle cx={1.5} cy={10.5} r={1.5} fill="#FF845E" />
                <Circle cx={6.5} cy={2.5} r={2.5} fill="#FF845E" />
            </Svg>
        </View>
    )
}

export default SvgComponent