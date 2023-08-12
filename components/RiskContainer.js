import React from "react";
import { Pressable, StyleSheet, View, Image, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Border, FontSize, Color, FontFamily } from "../GlobalStyles";
import axios from 'axios';

const RiskContainer = ({ phoneNumber }) => {
  const navigation = useNavigation();
  
  const handleMenuPress = () => {
    navigation.navigate("Screen3", {phoneNumber});
    
  };
  // const handleMenuPress = () => {
  //   navigation.navigate("Screen3", { phoneNumber });
   
  // };
  // const handleMenuPress = async () => {
  //   try {
  //     const serverUrl = 'http://192.168.35.45:3000'; // 서버 URL
  //     const response = await axios.get(`${serverUrl}/getUserInfo`, {
  //       params: { phoneNumber }
  //     });
  
  //     if (response.data.success) {
  //       const userInfo = response.data.user; // 가져온 사용자 정보
  //       // 화면 전환 및 사용자 정보 전달
  //       navigation.navigate("Screen3", { phoneNumber});
  //     } else {
  //       console.error("사용자 정보 요청 실패");
  //     }
  //   } catch (error) {
  //     console.error("사용자 정보를 가져오는 중 오류 발생:", error);
  //   }
  // };


  return (
    <Pressable style={styles.pressable}>
      <View style={styles.barsstatusdefault}>
        <View style={[styles.background, styles.backgroundPosition]} />
      </View>


      <View style={[styles.rectangle, styles.rectangleLayout]} />
      <Image
        style={[styles.rectangleIcon, styles.rectangleLayout]}
        resizeMode="cover"
        source={require("../assets/rectangle.png")}
      />
      <View style={[styles.rectangle1, styles.rectangleLayout]} />
      <Text style={[styles.thu, styles.thuTypo]}>주의</Text>
      <Text style={[styles.thu1, styles.thuPosition]}>안전</Text>
      <Text style={[styles.thu2, styles.thuTypo]}>위험</Text>
      <Text style={[styles.thu1, styles.thuPosition]}>안전</Text>
      <Text style={[styles.recentlyAdded, styles.recentlyPosition]}>
        오늘의 위험 확률
      </Text>
      <Text style={[styles.recentlyAdded1, styles.recentlyPosition]}>32%</Text>
      <Text style={[styles.thu4, styles.thuPosition]}>안전</Text>
      
      <Pressable
        style={ styles.iconPosition}
        onPress={() => navigation.goBack()}
      >
      <Image
        style={[styles.icon, styles.iconPosition]}
        resizeMode="cover"
        source={require("../assets/arrow.png")}
      />
      </Pressable>
      <View style={[styles.view, styles.iconPosition]} />
      <Pressable style={styles.menu} onPress={handleMenuPress}>
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/menu.png")}
        />
      </Pressable>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backgroundPosition: {
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  iconPosition: {
    top: "50%",
    position: "absolute",
  },
  rectangleLayout: {
    height: 15,
    width: 40,
    borderRadius: Border.br_12xs,
    left: 51,
    position: "absolute",
  },
  thuTypo: {
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    left: "23.71%",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  thuPosition: {
    marginTop: 49,
    textAlign: "left",
    fontSize: FontSize.size_2xs,
    left: "23.71%",
    fontFamily: FontFamily.robotoRegular,
    top: "50%",
    position: "absolute",
  },
  recentlyPosition: {
    lineHeight: 41,
    letterSpacing: 1,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  background: {
    backgroundColor: Color.gray_100,
  },
  containerIcon: {
    marginTop: -4.84,
    right: 15,
    width: 67,
    height: 12,
  },
  time1: {
    marginTop: -11,
    left: 32,
    fontSize: FontSize.size_mini,
    letterSpacing: 0,
    textAlign: "center",
    color: Color.white,
    fontFamily: FontFamily.robotoRegular,
  },
  time: {
    height: "50%",
    width: "47.9%",
    top: "27.27%",
    right: "52.1%",
    bottom: "22.73%",
    left: "0%",
    position: "absolute",
  },
  barsstatusdefault: {
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
    
  },
  rectangle: {
    bottom: 33,
    backgroundColor: Color.khaki,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    width: 40,
    borderRadius: Border.br_12xs,
    left: 51,
  },
  rectangleIcon: {
    marginTop: 49.5,
    width: 40,
    borderRadius: Border.br_12xs,
    left: 51,
    top: "50%",
  },
  rectangle1: {
    bottom: 13,
    backgroundColor: Color.crimson,
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    width: 40,
    borderRadius: Border.br_12xs,
    left: 51,
  },
  thu: {
    marginTop: 69,
  },
  thu1: {
    color: Color.lightgray,
  },
  thu2: {
    marginTop: 89,
  },
  recentlyAdded: {
    marginTop: -19.5,
    left: "22.66%",
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    color: Color.white,
  },
  recentlyAdded1: {
    marginTop: 56,
    left: "66.94%",
    fontSize: FontSize.size_21xl,
    color: Color.lightsteelblue,
    fontFamily: FontFamily.robotoRegular,
  },
  thu4: {
    color: Color.white,
  },
  icon: {
    marginTop: -60.56,
    left: 34,
    width: 17,
    height: 27,
  },
  view: {
    marginTop: -57.5,
    marginLeft: -55,
    left: "50%",
    borderRadius: Border.br_3xs,
    backgroundColor: Color.steelblue,
    width: 110,
    height: 18,
  },
  icon1: {
    marginTop: -68.5,
    width: "100%",
    height: "100%",
  },
  menu: {
    right: 17,
    width: 41, 
    height: 41,
    position: "absolute",
    top: "58%",
    transform: [{ translateY: -20.5 }],
  },
  pressable: {
    backgroundColor: Color.darkslateblue,
    width: 428,
    height: 235,
  },
});

export default React.memo(RiskContainer);
