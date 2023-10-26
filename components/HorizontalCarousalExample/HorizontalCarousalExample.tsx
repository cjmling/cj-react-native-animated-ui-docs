import { HorizontalCarousal } from "cj-react-native-animated-ui";
import { Image, View } from "react-native";

const datas = [
  {
    img: "https://cdn.myanimelist.net/images/anime/1506/138982.jpg",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1100/138338.jpg",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1015/138006.jpg",
  },
  {
    img: "https://cdn.myanimelist.net/images/anime/1136/138410.jpg",
  },
];

export default function HorizontalCarousalExample() {
  return (
    <HorizontalCarousal
      itemWidth={200}
      itemGap={30}
      itemInactiveOpacity={0.2}
      itemActiveScale={1.5}
      wrapperStyle={{ padding: 30 }}
    >
      {datas.map((data, index) => (
        <View key={index}>
          <Image
            style={{ width: 200, height: 300 }}
            source={{
              uri: data.img,
            }}
          />
        </View>
      ))}
    </HorizontalCarousal>
  );
}
