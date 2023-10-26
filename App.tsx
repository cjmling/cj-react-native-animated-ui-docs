import { StyleSheet, View } from "react-native";
import HorizontalCarousalExample from "./components/HorizontalCarousalExample/HorizontalCarousalExample";

export default function App() {
  return (
    <View style={styles.container}>
      <HorizontalCarousalExample />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    marginTop: 150,
  },
});
