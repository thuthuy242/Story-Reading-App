import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconView from "../icon-group/IconView";
import IconComment from "../icon-group/IconComment";
import IconHeart from '../icon-group/IconHeart';

let { width } = Dimensions.get("window")

export const LoadingRecommendedStory: React.FC = () => {


    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
                    />
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/3.4, height: 80, borderRadius:10}} />
                    <View style={{ marginLeft: 2 }}>
                    <View style={{ width: width/3.5, height: 8,  marginTop: 6, borderRadius:3 }} />
                    <View
                        style={{ marginTop: 6, width: width/3.5, height: 18, borderRadius:3 }}
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
        display:'flex',
        justifyContent:'flex-start',
        flexDirection:'row',
        flexWrap:'wrap',

    },
    story: {
        height: 130,
        width: width/3.3,
        display: 'flex',
        alignItems: "center",
        flexDirection:'column',
        marginHorizontal:2
        
    },
    placeholderContainer: {
        marginVertical:3,
        marginHorizontal: 3,
        height: 120,
        width: width /3.3,
        display:'flex',
        flexDirection: "column"
        
    }, 

    title: {
        width: '100%',
        fontSize: 11,
        color:'#22201E',
        paddingHorizontal:3,
        justifyContent:'center',
        textAlign:'center',
        marginTop:3,
        fontFamily:'Montserrat-SemiBold'
    

    },
    info: {
        fontSize: 9,
        color: '#6E747C',
        fontFamily:'Montserrat-Medium'
        
    },

    infoContainer:{
        width:'100%',
        flexDirection: "row",
        display:'flex',
        justifyContent:'space-between',
        paddingHorizontal:5,
        marginTop:3        

    },
    subInfo:{
        display:'flex',
        flexDirection:'row', 
        justifyContent:'center',
        alignItems:'center'
    },

    
    percent:{
        fontSize: 8,
        color: '#FF845D',
        fontWeight:'bold',
        marginRight:3
        
        

    },
    img:{
        width:width/3.4,
        height:80,
        borderWidth:1,
        borderColor:'white',
        borderRadius:10

    }
    
})