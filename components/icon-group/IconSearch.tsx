import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import IconClick from "./iconClick"
import { StyleSheet, View, Animated } from "react-native";
function SvgComponent(props: any) {
    return (
        <View style={{ backgroundColor: props.colorBack ? props.colorBack : "rgba(255, 255, 255, 0)" }}>
            <View>


                <Animated.View style={{ ...styles.positionClick, opacity: props.active ? 1 : 0 }}>
                    <IconClick ></IconClick>
                </Animated.View>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={props.width || 39}
                    height={props.height || 37}
                    fill="none"
                    viewBox="0 0 39 37"
                    {...props}
                >
                    <Path
                        stroke={!props.colorBack ? "#22201E" : "#6E747C"}
                        strokeWidth="3"
                        d="M17.938 26.875c6.04 0 10.938-4.897 10.938-10.938C28.876 9.897 23.979 5 17.938 5S7 9.897 7 15.937c0 6.041 4.897 10.938 10.938 10.938zm7.733-3.203L32 30M12.5 17c1.412 3.405 2.934 4.045 6 4.5"
                    />
                </Svg>

            </View>
        </View >
    )
}
const styles = StyleSheet.create({
    position: {
        position: 'relative',
        zIndex: 1,
    },
    positionClick: {
        position: "absolute",
        zIndex: 0,
        top: -4,
        right: 1
    }
})
export default SvgComponent
