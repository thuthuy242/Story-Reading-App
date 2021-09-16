import * as React from "react"
import Svg, { Path } from "react-native-svg"
import IconClick from "./iconClick"
import { StyleSheet, View, Animated } from "react-native";;
function Genre(props: any) {
    return (
        <View style={{ backgroundColor: props.colorBack ? props.colorBack : "rgba(255, 255, 255, 0)" }}>
            <View style={styles.position}>

                <Animated.View style={{ ...styles.positionClick, opacity: props.active ? 1 : 0 }}>
                    <IconClick ></IconClick>
                </Animated.View>
                <Svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={34}
                    height={34}
                    fill="none"
                    viewBox="0 0 34 34"
                    {...props}
                >
                    <Path
                        stroke={!props.color ? "#6E747C" : props.color}
                        strokeWidth="3"
                        d="M13.813 6.375H7.438c-.587 0-1.063.476-1.063 1.063v6.375c0 .586.476 1.062 1.063 1.062h6.375c.587 0 1.063-.476 1.063-1.063V7.439c0-.587-.476-1.063-1.063-1.063zm0 12.75H7.438c-.587 0-1.063.476-1.063 1.063v6.375c0 .586.476 1.062 1.063 1.062h6.375c.587 0 1.063-.476 1.063-1.063v-6.375c0-.586-.476-1.062-1.063-1.062zm12.75-12.75h-6.375c-.587 0-1.063.476-1.063 1.063v6.375c0 .586.476 1.062 1.063 1.062h6.375c.587 0 1.063-.476 1.063-1.063V7.439c0-.587-.476-1.063-1.063-1.063zm-7.438 12.75v4.25m0 4.25h4.25v-8.5m0 2.125h4.25m0 4.25v2.125"
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
        top: -4,
        right: 4
    }
})
export default Genre