import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconUpdate from '../icon-group/IconUpdate';
let { width } = Dimensions.get("window");

export const LoadingStory: React.FC = () => {
    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: width/3.25, height: 120, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft:4 }}>
                        <View style={{ width: width/3.8, height: 25,  marginTop: 6,borderRadius:3 }} />
                        <View
                            style={{ marginTop: 5, width:width/6, height: 8,borderRadius:3 }}
                        />
                        </View>
                    </View>
                </SkeletonPlaceholder>
            </ScrollView>
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0)",
        display: 'flex',
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "stretch",
        width: width

    },
    story: {
        marginHorizontal: 5,
        height: 175,
        width: width /3.2,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',
    },

    img:{
        width:width/3.3,
        height:120,
        borderTopLeftRadius:8,
        borderTopRightRadius: 8
    },

    infoContainer:{
        width: width /3.2,
        height:50,
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5,
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
    chapter: {

        fontSize: 8.5,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'


    },
    time: {
        fontSize: 8,
        color: '#A1A1A1',
        fontFamily:'Montserrat-MediumItalic'

    },

    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 5,
        height: 175,
        width: width /3.2,
        display:'flex',
        flexDirection: "column", 
        
    },

    
    
})