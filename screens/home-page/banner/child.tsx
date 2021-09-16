import React from 'react';
import { TouchableOpacity, Image, StyleSheet, View, Text, Platform } from 'react-native';

function ChildItem({
    style,
    item,
    imageKey,
    onPress,
    index,
    active,
    local,
}: {
    style: any,
    item: any,
    imageKey: any,
    onPress: any,
    index; any,
    active: any,
    local: any,
}) {
    return (
        <TouchableOpacity
            style={[styles.videoContainer]}
            onPress={() => onPress(item)}>
            <View style={[styles.imageContainer, styles.shadow]}>
                <Image
                    style={[styles.videoPreview, active ? {} : { height: 120 }]}
                    source={{ uri: item[imageKey] }}
                />
            </View>
            <Text style={styles.desc}>{item.desc}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    videoContainer: {
        width: 275,
        paddingVertical: 28,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20,
    },
    videoPreview: {
        width: 275,
        height: 155,
        borderRadius: 8,
        resizeMode: 'cover',
    },
    desc: {
        fontSize: 14,
        letterSpacing: 0,
        lineHeight: 24,
        marginTop: 18,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.1,
                shadowRadius: 5,
            },
            android: {
                elevation: 5,
            },
        }),
    },
});
export default ChildItem;