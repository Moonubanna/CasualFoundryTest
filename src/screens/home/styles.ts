import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {flex: 1},
    subContainer: {flex: 1, padding: 10, alignItems: 'center', justifyContent: 'center'},
    title: { fontSize: 18, fontWeight: 'bold' },
    body: { color: '#555' },
    postByUser: { color: '#777' },
    image: { width: '100%', height: 150, marginTop: 5 }
});

export default styles;