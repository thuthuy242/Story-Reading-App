import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/base_group/Themed';
import { Breadcrumb } from "../../components/base_group/BreadCrumb"
import { LoadingTOPStory } from '../../components/loading-group/LoadingTOPStory';
export default function ListHotStory(props) {
    return (
        <View style={styles.container}>
            <Breadcrumb routes={{ name: "Daily TOP", as: "TabTwoScreen", navigation: props.navigation }}></Breadcrumb>
            <LoadingTOPStory routes={{name: "Daily TOP"}}></LoadingTOPStory>
        </View >
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        marginLeft:20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:20
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginTop:20,
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});