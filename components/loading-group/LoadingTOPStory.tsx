import React from 'react';
import { View, StyleSheet, Button, Text, Dimensions, ScrollView, Image } from "react-native"
import { useNavigation } from '@react-navigation/native';
import SkeletonPlaceholder from "react-native-skeleton-placeholder";
import IconRank from '../icon-group/IconRank';

let { width } = Dimensions.get("window")

interface Props {
    routes: any;
    navigation?: any

}
export const LoadingTOPStory: React.FC<Props> = ({routes}) => {


    const navigation = useNavigation();

    return (
        <View style={styles.container} >
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.stories}>
                    <View style={styles.story}>
                        <IconRank/>
                        <Image style={styles.img} source={require("../icon-group/imgTest.jpg")}></Image>
                        <View style={styles.info}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Name of storys fhsđ sdf</Text>           
                            <Text style={styles.chapter}>Chapter: 12</Text>
                        </View>
                    </View>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                
                </View>

                <View style={styles.stories}>
                    <View style={styles.story}>
                        <IconRank/>
                        <Image style={styles.img} source={require("../icon-group/imgTest.jpg")}></Image>
                        <View style={styles.info}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Name of storys fhsđ sdf sdj</Text>           
                            <Text style={styles.chapter}>Chapter: 12</Text>
                        </View>
                    </View>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                
                </View>

                <View style={styles.stories}>
                    <View style={styles.story}>
                        <IconRank/>
                        <Image style={styles.img} source={require("../icon-group/imgTest.jpg")}></Image>
                        <View style={styles.info}>
                            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>Name of storys fhsđ sdf sdj</Text>           
                            <Text style={styles.chapter}>Chapter: 12</Text>
                        </View>
                    </View>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>

                    <SkeletonPlaceholder>
                        <View style={styles.placeholderContainer}>
                            <View style={{ width: 27, height: 27, borderRadius: 50 }} />
                            <View style={{ marginLeft: 13 }}/>
                            <View style={{ width: 50, height: 50, borderRadius: 7 }} />
                            <View style={{ flexDirection:"column", marginLeft:10 }}>
                                <View style={{ width: 150, height: 20, borderRadius: 3 }} />
                                <View
                                    style={{ marginTop: 6, width: 70, height: 8, borderRadius: 3 }}
                                />
                            </View>
                        </View>
                    </SkeletonPlaceholder>
                
                </View>

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
    stories: {
        height: 330,
        width: 280,
        display: 'flex',
        flexDirection:'column',
        marginHorizontal:5,
        justifyContent:'space-between'
    },

    story: {
        marginHorizontal: 5,
        width: 280,
        display: 'flex',
        alignItems: "center",
        flexDirection:'row',
    },

    info: {
        width:160,
        flexDirection: "column",
        display:'flex',
        justifyContent:'center',
        paddingHorizontal:5,
    },

    title: {
        fontSize: 11,
        color:'#22201E',  
        fontFamily:'Montserrat-SemiBold'         

    },
    chapter: {
        fontSize: 8.5,
        color: '#6E747C',
        marginTop:3,
        fontFamily:'Montserrat-Medium'

    },

    placeholderContainer: {
        flexDirection: "row", 
        alignItems: "center",
        width: 280,
        marginHorizontal: 8
        
    },
    img:{
        
        borderRadius: 7,
        width:50,
        height:50,
        marginRight:5,
        marginLeft:10

    },
    
    
})