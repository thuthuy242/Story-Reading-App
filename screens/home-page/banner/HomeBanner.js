import React, { useState } from 'react';
import { StyleSheet, ScrollView, Dimensions, FlatList } from 'react-native';
import ItemBanner from "./itemBanner"
import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/base_group/Themed';
let { width } = Dimensions.get("window")
import { FlatListSlider } from 'react-native-flatlist-slider';
import ChildItem from "./child"
const banner1 = require("../../../assets/images/banner4.png");
const banner2 = require("../../../assets/images/banner2.png");
const banner3 = require("../../../assets/images/banner3.png");
let data = [
    {
        image: 'https://images.unsplash.com/photo-1567226475328-9d6baaf565cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60',

    },
    {
        image: 'https://images.unsplash.com/photo-1455620611406-966ca6889d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1130&q=80',

    },
]

export default function Banner() {
    const [active, setActive] = useState(1)
    const keyExtractor = (index) => index;
    const renderRestaurantRows = (item) => (
        <ItemBanner item={item} />

    );


    return (
        <View style={styles.Carousel}>
            {/* <ScrollView
                horizontal
                scrollEventThrottle={0}
                pagingEnabled
                onScroll={changeImage}
                showsHorizontalScrollIndicator={false}

            //contentContainerStyle={styles.scroll}
            > */}
            <FlatListSlider
                imageKey={'image'}
                data={data}
                width={295}
                timer={2000}
                loop={true}
                autoscroll={false}
                indicator={false}
                component={<ChildItem />}
                onPress={item => alert(JSON.stringify(item))}
                //indicatorActiveWidth={40}
                contentContainerStyle={{ paddingHorizontal: 165 }}
                animation={true}
                local={false}
            />
            {/* {
                    data.map((item, key) => {
                        return (
                            <ItemBanner item={item} key={key} statusActive={key === active ? true : false}></ItemBanner>
                        )

                    })
                } */}
            {/* </ScrollView> */}
            {/* <View style={styles.wrapdot}>
                {data.map((index, key) => {
                    return (
                        <Text key={key} style={active === key ? styles.dotActive : styles.dot}>⬤</Text>
                    )
                })
                }
            </View> */}
        </View>
    )
}
const styles = StyleSheet.create({
    Carousel: {
        //marginLeft: -275,
        marginTop: 100,

        backgroundColor: "rgba(255, 255, 255, 0)",
    },

});