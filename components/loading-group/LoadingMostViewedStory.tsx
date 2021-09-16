import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconView from "../icon-group/IconView";
import IconChapter from '../icon-group/IconChapter';

let { width } = Dimensions.get("window")

export const LoadingMostViewedStory: React.FC= () => {

    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.38, height: 105, borderTopLeftRadius:8, borderTopRightRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 20,  marginTop: 6, borderRadius:3 }} />
                    <View style={{display:'flex', flexDirection:"row", justifyContent:'space-between', marginTop:5}}>
                            <View
                                style={{ marginTop: 6, width: 35, height: 8, borderRadius:3 }}
                            />
                            <View
                                style={{ marginTop: 6, width: 30, height: 8, borderRadius:3, marginEnd:3 }}
                            />
                    </View>
                    </View>
                </View>
            </SkeletonPlaceholder>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        width: width,
        alignItems: "center",
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',
        display: 'flex',

    },
    story: {
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        height: 160,
        width: width/3.3,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginHorizontal:2
        
    },
    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        marginVertical:2,
        marginHorizontal:2,
        height: 160,
        width: width /3.3,
        display:'flex',
        flexDirection: "column", 

    }, 

    infoContainer:{
        width: width /3.38,
        height:50,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5
        
    },

    titleContainer:{
        height:28,
        justifyContent:'center',
    },

    title: {
        fontSize: 11,
        color:'#22201E',
        fontFamily:'Montserrat-SemiBold'
    },
    info: {
        fontSize: 8,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'
        
    },
    subtitle: {
        width:'100%',
        flexDirection: "row",
        display:'flex',
        justifyContent:'space-between',
    },
    subInfo:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },
    
    img:{
        width:width/3.4,
        height:105,
        borderTopLeftRadius:10,
        borderTopRightRadius: 10

    }
    
})