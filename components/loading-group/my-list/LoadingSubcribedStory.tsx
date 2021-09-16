import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, Image, TouchableOpacity } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconSubcribed from '../../icon-group/IconSubcribed';

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}

export const LoadingSubcribedStory: React.FC = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of storysdfhsjd fjsjkdfhkjshdfkjashdajksdhakjsdhasjkd</Text>
                    </View>

                    <View style={styles.subInfo}>
                        <Text style={styles.chapter}>Chapter: 1254</Text>
                        <View style={styles.iconContainer}>
                            <IconSubcribed/>
                        </View>
                        

                    </View>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of storysdfhsjd fjsjkdfhkjshdfkjashdajksdhakjsdhasjkd</Text>
                    </View>

                    <View style={styles.subInfo}>
                        <Text style={styles.chapter}>Chapter: 1254</Text>
                        <View style={styles.iconContainer}>
                            <IconSubcribed/>
                        </View>
                        

                    </View>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name of storysdfhsjd fjsjkdfhkjshdfkjashdajksdhakjsdhasjkd</Text>
                    </View>

                    <View style={styles.subInfo}>
                        <Text style={styles.chapter}>Chapter: 1254</Text>
                        <View style={styles.iconContainer}>
                            <IconSubcribed/>
                        </View>
                        

                    </View>
                </View>
            </View>

            <View style={styles.subContainer}>
                <Image style={styles.img} source={require("../../icon-group/imgTest.jpg")}></Image>
                <View style={styles.infoContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title } numberOfLines={2} ellipsizeMode='tail'>Name </Text>
                    </View>

                    <View style={styles.subInfo}>
                        <Text style={styles.chapter}>Chapter: 1254</Text>
                        <View style={styles.iconContainer}>
                            <IconSubcribed/>
                        </View>
                        

                    </View>
                </View>
            </View>

            

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/2.28, height: 150, borderTopLeftRadius:10, borderTopRightRadius:10}} />
                    <View style={{ marginLeft: 5 }}>
                    <View style={{ width: width/2.5, height: 30,  marginTop: 10, borderRadius:3 }} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 8, marginEnd:7}}>
                        <View
                            style={{width: width/4.5, height: 15, borderRadius:3 }}
                        />
                        <View
                            style={{ width: 25, height: 25, borderRadius:20 }}
                        />
                    </View>
                    
                    </View>
                </View>
            </SkeletonPlaceholder>

            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/2.28, height: 150, borderTopLeftRadius:10, borderTopRightRadius:10}} />
                    <View style={{ marginLeft: 5 }}>
                    <View style={{ width: width/2.5, height: 30,  marginTop: 10, borderRadius:3 }} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 8, marginEnd:7}}>
                        <View
                            style={{width: width/4.5, height: 15, borderRadius:3 }}
                        />
                        <View
                            style={{ width: 25, height: 25, borderRadius:20 }}
                        />
                    </View>
                    
                    </View>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/2.28, height: 150, borderTopLeftRadius:10, borderTopRightRadius:10}} />
                    <View style={{ marginLeft: 5 }}>
                    <View style={{ width: width/2.5, height: 30,  marginTop: 10, borderRadius:3 }} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 8, marginEnd:7}}>
                        <View
                            style={{width: width/4.5, height: 15, borderRadius:3 }}
                        />
                        <View
                            style={{ width: 25, height: 25, borderRadius:20 }}
                        />
                    </View>
                    
                    </View>
                </View>
            </SkeletonPlaceholder>
            <SkeletonPlaceholder>
                <View style={styles.placeholderContainer}>
                    <View style={{ width: width/2.28, height: 150, borderTopLeftRadius:10, borderTopRightRadius:10}} />
                    <View style={{ marginLeft: 5 }}>
                    <View style={{ width: width/2.5, height: 30,  marginTop: 10, borderRadius:3 }} />
                    <View style={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', marginTop: 8, marginEnd:7}}>
                        <View
                            style={{width: width/4.5, height: 15, borderRadius:3 }}
                        />
                        <View
                            style={{ width: 25, height: 25, borderRadius:20 }}
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
        backgroundColor: "rgba(255, 255, 255, 0.0)",
        justifyContent:'space-between',
        flexDirection:'row',
        flexWrap:'wrap',
        display: 'flex',
        marginTop:25,

    },
    header:{
        fontSize:16,
        fontWeight: '700',
        color: '#22201E',
        marginBottom:10
    },
    subContainer:{
        backgroundColor: "rgba(255, 255, 255, 0.3)",
        width:width/2.25,
        borderRadius:12,
        borderColor:"rgba(255, 255, 255, 0.7)",
        borderWidth:1.5,
        display:'flex',
        height: 235,
        justifyContent:'flex-start',
        marginVertical:5
        
    },
    img:{
        width:width/2.3,
        height:150  ,
        borderTopLeftRadius:10,
        borderTopRightRadius:10

    },
    infoContainer: {
        display:'flex',
        width:width/2.5,
        flexDirection: 'column',
        marginHorizontal: 5,
        marginVertical:5,
        justifyContent:'space-between',
        
        
        
    },
    titleContainer:{
        height:38,
        justifyContent:'center',
    },

    title:{
        fontSize:13,
        fontFamily:'Montserrat-Bold',
        color: '#22201E',

    },
    chapter:{
        color:'#6E747C',
        fontSize: 11,
        fontFamily:'Montserrat-Medium'

    },
    subInfo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:5

    },


    placeholderContainer: {
        borderWidth: 1.5,
        borderRadius: 10,
        marginVertical:5,
        marginHorizontal:2,
        height: 235,
        width: width /2.25,
        display:'flex',
        flexDirection: "column", 

        
    },
    iconContainer:{
        backgroundColor: "rgba(110, 116, 124, 0.2)",
        width: 25,
        height:25,
        borderRadius:50,
        display:'flex',
        justifyContent:'center',
        alignItems:'center'

    }

})