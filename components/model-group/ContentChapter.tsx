import * as React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Animated from 'react-native-reanimated';
import BottomSheet from 'reanimated-bottom-sheet';
import DownIcon from '../icon-group/DownIcon'
let { width, height } = Dimensions.get("window");
export default function ContenChapter() {

    return (
        <>
            <View style={styles.container}>
                <View style={styles.wrapper}>


                    <View style={styles.header}>
                        <Text style={styles.title}> CHAPTERS</Text>
                        <View style={styles.removeBackground}>

                            <View style={styles.icon}>
                                <DownIcon width={25} height={25}></DownIcon>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </>
    );
}
const styles = StyleSheet.create({
    wrapper: {
        margin: 20,
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    removeBackground: {
        backgroundColor: "rgba(255, 255, 255, 0)",
    },
    container: {
        width: width,
        height: height,
    },
    header: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: "flex",
        alignItems: "flex-start",
        alignContent: "center",
        justifyContent: "flex-end",
        flexDirection: "row",
        marginTop: 25,
    },
    title: {
        color: "#22201E",
        fontSize: 20,
        fontFamily:'Montserrat-Bold',
    },

    icon: {
        paddingLeft: width / 2 - (width / 3.5),
        //pLeft: width / 5,
        display: "flex",
        alignItems: "flex-end",
        flexDirection: "row",
        justifyContent: "flex-end",
        backgroundColor: "rgba(255, 255, 255, 0)",

    },
    scroll: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    }
});
