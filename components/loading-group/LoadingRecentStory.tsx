import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
let { width } = Dimensions.get("window")

export const LoadingRecentStory: React.FC = () => {


    const navigation = useNavigation();

    return (
        <View style={styles.container} >

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: -1, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: 140, height: 18,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 5, width: 60, height: 8, borderRadius:3 }}
                    />
                    <View
                        style={{ marginTop: 5, width: 110, height: 8, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            
                <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: -1, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: 140, height: 18,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 5, width: 60, height: 8, borderRadius:3 }}
                    />
                    <View
                        style={{ marginTop: 5, width: 110, height: 8, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: -1, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: 140, height: 18,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 5, width: 60, height: 8, borderRadius:3 }}
                    />
                    <View
                        style={{ marginTop: 5, width: 110, height: 8, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            
                <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: -1, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: 140, height: 18,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 5, width: 60, height: 8, borderRadius:3 }}
                    />
                    <View
                        style={{ marginTop: 5, width: 110, height: 8, borderRadius:3 }}
                    />
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
        flex: 1,
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',

    },
    story: {
        marginVertical:3,
        height: 150,
        width: width/2.2,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',
        marginHorizontal:3
        
    },
    infoContainer:{
        width: width /2.2,
        height:58,
        flexDirection:'column',
        justifyContent:'space-evenly',
        paddingHorizontal:5,


    },

    titleContainer:{
        height:28,
        justifyContent:'center',
    },

    placeholderContainer: {
        marginVertical:3,
        borderWidth: 1.5,
        borderRadius: 10,
        marginHorizontal: 3,
        height: 150,
        width: width /2.2,
        display:'flex',
        flexDirection: "column", 
        
    }, 

    title: {
        fontSize: 11,
        color:'#22201E',  
        fontFamily:'Montserrat-SemiBold'  

    },

    chapter: {
        fontSize: 8,
        color: '#6E747C',   
        alignSelf:'flex-start',
        fontFamily:'Montserrat-Medium'
    },

    img:{
        width:width/2.25,
        height:90,
        borderTopLeftRadius:10,
        borderTopRightRadius: 10

    }
    
})