import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, Image } from 'react-native';
import IconRank from '../icon-group/IconRank';


const DATA = [
  {
    id: "1",
    rank: "1",
    img: require("../icon-group/imgTest.jpg"),
    title: "Name of story1",
    chapter: "125"
  },
  {
    id: "2",
    rank: "2",
    img: require("../icon-group/imgTest.jpg"),
    title: "Name of story2",
    chapter: "15"
  },
  {
    id: "3",
    rank: "3",
    img: require("../icon-group/imgTest.jpg"),
    title: "Name of story3",
    chapter: "124"
  },
  {
    id: "4",
    rank: "4",
    img: require("../icon-group/imgTest.jpg"),
    title: "Name of story4",
    chapter: "1"
  },
  {
    id: "5",
    rank: "5",
    img: require("../icon-group/imgTest.jpg"),
    title: "Name of story5",
    chapter: "214"
  },
];

const Item = ({rank, img, title, chapter }) => (
    <View style={styles.story}>
        <IconRank/>
        <Image style={styles.img} source={img}></Image>
        <View style={styles.info}>
            <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>{title}</Text>           
            <Text style={styles.chapter}>Chapter: {chapter}</Text>
        </View>
    </View>
  );
  
  export const LoadingItemDailyTOP = () => {
    const renderItem = ({ item }) => (
      <Item rank={item.rank} img={item.img} title={item.title} chapter={item.chapter} />
    );
  
    return (
      <View style={styles.stories}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }

  const styles = StyleSheet.create({
    stories: {
        height: 330,
        width: 280,
        display: 'flex',
        flexDirection:'column',
        marginHorizontal:5,
        justifyContent:'space-between'
    },

    story: {
        marginVertical:5,
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
        fontWeight: "300",
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

