import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
import { StyleSheet, View, Animated } from "react-native";
import IconClick from "./iconClick"
function SvgComponent(props: any) {
    return (
        <View style={{ backgroundColor: props.colorBack ? props.colorBack : "rgba(255, 255, 255, 0)" }}>
            <View>


                <Animated.View style={{ ...styles.positionClick, opacity: props.active ? 1 : 0 }}>
                    <IconClick ></IconClick>
                </Animated.View>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={26}
                    height={20}
                    fill="none"
                    viewBox="0 0 26 20"
                    {...props}
                >
                    <Path strokeWidth="3" stroke={!props.color ? "#6E747C" : props.color} d="M2 10h22M2 2h22M2 18h22" />
                </Svg>
            </View>
        </View>
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
        top: -10,
        right: -3
    }
})
export default SvgComponent
