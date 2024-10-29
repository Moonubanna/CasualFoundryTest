import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: { flex: 1 },
    subContainer: { flex: 1, padding: 15 },
    image: { width: '100%', height: 200},
    title: {fontSize: 16, fontWeight: 'bold'},
    description: {fontSize: 14, fontWeight: 'normal'},
    userInfo: {fontSize: 16, fontWeight: 'bold', color: '#000'},
    commonText: {fontSize: 14, fontWeight: 'normal', color: '#808080'},
    inputSpacing: {
        height: 10, // Adjust this value for more or less space
    },
    loaderContainer: {
        flex: 1,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default styles;