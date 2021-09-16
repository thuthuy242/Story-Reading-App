import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity, Alert } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any;
    

}

export const LoadingCollectionMyList: React.FC = (onPress) => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <Text style={styles.header}>Collections</Text>
            <View style={styles.subContainer}>
                <TouchableOpacity style={styles.component} activeOpacity={0.5} > 
                    <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Resume Reading</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.component} activeOpacity={0.5}> 
                    <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                    <View style= {styles.titleContainer}>
                        <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Subcribed</Text>
                    </View>
                </TouchableOpacity>
                

                <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: (width-30)/2.08, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        <View style={{ marginLeft: 2 }}>
                        <View style={{ width: 120, height: 25,  marginTop: 6, borderRadius:3 }} />
                    </View>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                    <View style={styles.placeholderContainer}>
                        <View style={{ width: (width-30)/2.08, height: 90, borderTopRightRadius:8, borderTopLeftRadius:8}} />
                        
                        <View style={{ width: 120, height: 25,  marginTop: 6, borderRadius:3 }} />
                    
                </View>
            </SkeletonPlaceholder>
            
            </View>

            
            
        
                        
            
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        alignItems: "flex-start",
        justifyContent:'flex-start',
        flexDirection:'column',
        display: 'flex',
        marginTop:25

    },
    header:{
        fontSize:16,
        color: '#22201E',
        marginBottom:10,
        fontFamily:'Montserrat-Bold'
    },

    subContainer:{
        backgroundColor: "rgba(255, 255, 255, 0)",
        width:width-30,
        alignItems: "center",
        flex: 1,
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',

    },

    component:{
        marginVertical:5,
        height: 135,
        width: (width-30)/2.05,
        display: 'flex',
        borderWidth: 1.5,
        borderRadius: 10,
        borderColor: "white",
        alignItems: "center",
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        flexDirection:'column',

    },

    img:{
        width: (width-30)/2.1,
        height:90,
        borderTopLeftRadius:10,
        borderTopRightRadius: 10

    },
    titleContainer:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        height:45
    },
    title:{
        fontSize:14,
        fontWeight: '700',
        color: '#22201E',
        fontFamily:'Montserrat-Bold'

    },
    placeholderContainer: {
        marginVertical:5,
        borderWidth: 1.5,
        borderRadius: 10,
        height: 135,
        width: (width-30)/2.05,
        alignItems:'center',
        flexDirection: "column", 
        
    }, 
    
    

})