import React, { useRef, useEffect } from "react"
import Svg, { Path } from "react-native-svg"
import IconClick from "./iconClick"
/* SVGR has dropped some elements not supported by react-native-svg: title */
import { StyleSheet, View, Animated } from "react-native";
function BookIcon(props: any) {
    const fadeAnim = useRef(new Animated.Value(0)).current
    useEffect(() => {
        Animated.timing(
            fadeAnim,
            {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true
            }
        ).start();
    }, [fadeAnim])
    return (
        <View style={{ backgroundColor: props.colorBack ? props.colorBack : "rgba(255, 255, 255, 0)" }} >
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
                        strokeWidth="2"
                        d="M10.625 5.313h-4.25c-.587 0-1.063.475-1.063 1.062v21.25c0 .587.476 1.063 1.063 1.063h4.25c.587 0 1.063-.476 1.063-1.063V6.375c0-.587-.476-1.063-1.063-1.063zm-5.312 5.312h6.375"
                    />
                    <Path
                        stroke={!props.color ? "#6E747C" : props.color}
                        strokeWidth="2"
                        d="M17 5.313h-4.25c-.587 0-1.063.475-1.063 1.062v21.25c0 .587.476 1.063 1.063 1.063H17c.587 0 1.063-.476 1.063-1.063V6.375c0-.587-.476-1.063-1.063-1.063zm-5.312 18.062h6.374M23.2 4.973l-4.106 1.1a1.062 1.062 0 00-.751 1.3l5.5 20.527c.152.567.734.903 1.301.751l4.105-1.1c.567-.152.904-.734.752-1.301L24.5 5.724a1.063 1.063 0 00-1.302-.751zm-.457 18.821l6.158-1.65m-9.458-10.665l6.158-1.65"
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
        top: 0,
        right: 2.1
    }
})

export default BookIcon

