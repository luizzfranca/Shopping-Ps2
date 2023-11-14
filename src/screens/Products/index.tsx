import { useEffect, useRef, useState } from "react";
import { CardGamesImage } from "../../components/CardGamesImage";
import { Container, Content, CardScroll, StyledScrollView } from "./styles";
import { FlatList, ScrollView } from "react-native";

import w1 from "../../assets/w1.png";
import w2 from "../../assets/w2.png";
import w3 from "../../assets/w3.png";
import w4 from "../../assets/w4.png";
import w5 from "../../assets/w5.png";
import w6 from "../../assets/w6.png";
import w7 from "../../assets/w7.png";
import w8 from "../../assets/w8.png";
import w9 from "../../assets/w9.png";
import c1 from "../../assets/c1.png";
import c2 from "../../assets/c2.png";
import c3 from "../../assets/c3.png";
import c4 from "../../assets/c4.png";
import c5 from "../../assets/c5.png";
import c6 from "../../assets/c6.png";
import c7 from "../../assets/c7.png";
import c8 from "../../assets/c8.png";
import c9 from "../../assets/c9.png";
import c10 from "../../assets/c10.png";
import c11 from "../../assets/c11.png";
import c12 from "../../assets/c12.png";
import { CardGame } from "../../components/CardGame";

export function Products() {
  const [cardGamesImage, setCardGamesImage] = useState([
    w1,
    w2,
    w3,
    w4,
    w5,
    w6,
    w7,
    w8,
    w9,
  ]);
  const [currentImage, setCurrentImage] = useState(0);

  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.round(offset / 430);
    setCurrentImage(index);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) => (prevIndex + 1) % cardGamesImage.length);
      flatListRef.current.scrollToIndex({
        animated: true,
        index: (currentImage + 1) % cardGamesImage.length,
      });
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentImage, cardGamesImage.length]);

  return (
    <Container>
      <FlatList
        ref={flatListRef}
        data={cardGamesImage}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <CardGamesImage
            source={item}
            resizeMode="cover"
            style={{ width: 440, height: 300, borderRadius: 60 }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={handleScroll}
      />
      <Content>
        <StyledScrollView>
          <CardScroll>
            <CardGame imageSource={c1} title="Super Marios Bros" />
            <CardGame imageSource={c2} title="Devil My Cry" />
            <CardGame imageSource={c3} title="Battlefield" />
            <CardGame imageSource={c4} title="Fifa" />
            <CardGame imageSource={c5} title="Darksouls" />
            <CardGame imageSource={c6} title="Fear" />
            <CardGame imageSource={c7} title="Bolder Gates" />
            <CardGame imageSource={c8} title="Ratchet Clank" />
            <CardGame imageSource={c9} title="Bomberman" />
            <CardGame imageSource={c10} title="Tekken 7" />
            <CardGame imageSource={c11} title="The King of Fighters" />
            <CardGame imageSource={c12} title="Kena" />
          </CardScroll>
        </StyledScrollView>
      </Content>
    </Container>
  );
}
