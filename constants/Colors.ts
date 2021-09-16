const tintColorLight = '#FF845E';
const tintColorDark = '#fff';
const colorPrimary = "#FF845E"

export default {
    light: {
        text: '#123124',
        background: '#fff',
        primary: '#ebebeb',
        tint: tintColorLight,
        tabIconDefault: '#6E747C',
        tabIconSelected: colorPrimary,
    },
    dark: {
        text: '#fff',
        background: '#000',
        primary: 'white',
        tint: tintColorDark,
        tabIconDefault: '#6E747C',
        tabIconSelected: tintColorDark,
    },
    lightNavigation: {
        dark: false,
        colors: {
            primary: '#white',
            background: 'white',
            card: '#ebebeb',
            text: 'black',
            text1: '#ebebeb',
            border: '#fff',
            notification: '#fff',
        }
    },
    darkNavigation: {
        dark: true,
        colors: {
            primary: '#a8a8a8',
            background: '#fff',
            card: '#fff',
            text: '#fff',
            border: '#fff',
            notification: '#fff',
        }
    }
};
