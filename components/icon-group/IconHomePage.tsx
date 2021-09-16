
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
                    width={29}
                    height={30}
                    fill="none"
                    viewBox="0 0 29 30"
                    color="red"
                    {...props}
                >
                    <Path
                        stroke={!props.color ? "#6E747C" : props.color}
                        strokeWidth="3"
                        d="M17.908 26.851v-6.888c0-.304-.12-.596-.333-.811a1.13 1.13 0 00-.803-.337h-4.546c-.3 0-.59.121-.803.337a1.154 1.154 0 00-.333.811v6.888c0 .305-.12.597-.333.812a1.13 1.13 0 01-.803.336L3.137 28a1.128 1.128 0 01-.804-.336A1.149 1.149 0 012 26.852V13.585a1.158 1.158 0 01.372-.85L13.735 2.3a1.13 1.13 0 011.529 0l11.364 10.436a1.15 1.15 0 01.372.85v13.267a1.159 1.159 0 01-.333.812 1.136 1.136 0 01-.804.336h-6.819a1.13 1.13 0 01-.803-.337 1.154 1.154 0 01-.333-.812v0z"
                    />
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
        top: -5,
        right: -3
    }
})
export default SvgComponent
