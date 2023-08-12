// import React, { useState, useEffect } from "react";
import * as React from "react";
import { StyleSheet, View, Image, Text, Pressable, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, FontFamily, Border, Color } from "../GlobalStyles";
import RiskContainer from "../components/RiskContainer";
import axios from "axios";

const Screen2 = ({route}) => {
  const phoneNumber = route.params.phoneNumber;
  const navigation = useNavigation();

  // const {phoneNumber} = route.params;
  // const navigation = useNavigation();
  // const [userInfo, setUserInfo] = useState(null);

  // // 사용자 정보 가져오기
  // const fetchUserInfo = async () => {
  //   try {
  //     const serverUrl = 'http://192.168.35.45:3000'; // 서버 URL
  //     const response = await axios.get(`${serverUrl}/getUserInfo`, {
  //       params: { phoneNumber: route.params.phoneNumber } 
  //     });

  //     if (response.data.success) {
  //       setUserInfo(response.data.user); // 가져온 사용자 정보 변수에 설정
  //     } else {
  //       console.error("사용자 정보 요청 실패");
  //     }
  //   } catch (error) {
  //     console.error("사용자 정보를 가져오는 중 오류 발생:", error);
  //   }
  // };

  // useEffect(() => {
  //   fetchUserInfo(); // 사용자 정보 가져오기
  // }, []);

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <RiskContainer phoneNumber={phoneNumber}/>
      
      {/* 온습도 */}
      <Pressable
        style={[styles.pressable, styles.icon3Layout]}
        onPress={() => navigation.navigate("Screen1", {phoneNumber})}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/111.png")}
        />
      </Pressable>

      {/* 발열량 */}
      <Image
        style={[styles.icon3, styles.icon3Layout]}
        resizeMode="cover"
        source={require("../assets/21.png")}
      />
      <Image
        style={styles.icon4}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />

      {/* 전체 */}
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Screen4", {phoneNumber})}
      >
        <Image
          style={[styles.icon, styles.icon1Layout]}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </Pressable>
      {/* 상자박스 */}
      <View style={styles.view3}>
        <View style={styles.view5Position}>
          <View style={[styles.view5, styles.view5Position]} />
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flewGorw: 1,
  },

  view5Position: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  time1Position: {
    top: "50%",
    position: "absolute",
  },
  recentlyFlexBox: {
    textAlign: "left",
    lineHeight: 41,
    letterSpacing: 1,
  },
  thuTypo1: {
    marginLeft: 102,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  thuTypo: {
    marginTop: -15,
    marginLeft: 102,
    fontSize: FontSize.size_2xs,
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
  },
  rectangleLayout: {
    borderWidth: 1,
    borderColor: "#707070",
    borderStyle: "solid",
    marginLeft: 51,
    marginTop: -14,
    height: 15,
    width: 40,
    borderRadius: Border.br_12xs,
  },

  icon1Layout:{
    marginTop: 0,
    marginLeft: 8,
  },

  icon3Layout: {
    height: 193,
    width: 129,
  },
  view1: {
    height: 235,
    width: 428,
    backgroundColor: Color.darkslateblue,
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
    left: 0,
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
    height: 44,
    marginTop: -270,
    width: 428,
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  menu: {
    width: 41,
    height: 41,
    marginLeft: 360,
    marginTop: 5,
  },
  icon1: {
    width: 17,
    height: 27,
    marginTop: -33,
    marginLeft: -330,
  },
  view2: {
    borderRadius: Border.br_3xs,
    backgroundColor: Color.steelblue,
    width: 110,
    height: 18,
    marginTop: -24,
    alignSelf: "center",
  },
  recentlyAdded: {
    fontSize: FontSize.size_17xl,
    fontWeight: "700",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    marginLeft: 97,
    marginTop: 20,
    color: Color.white,
  },
  thu: {
    marginTop: 23,
    color: Color.lightgray,
  },
  thu1: {
    color: Color.lightgray,
  },
  thu2: {
    color: Color.white,
  },
  rectangleIcon: {
    marginLeft: 51,
    marginTop: -14,
    height: 15,
    width: 40,
    borderRadius: Border.br_12xs,
  },
  recentlyAdded1: {
    fontSize: FontSize.size_21xl,
    color: Color.lightsteelblue,
    marginTop: -8,
    marginLeft: 287,
    fontFamily: FontFamily.robotoRegular,
  },
  
  pressable: {
    marginTop: 22,
    marginLeft: 82,
  },
  icon3: {
    marginTop: -193,
    marginLeft: 217,
  },
  icon4: {
    width: 0,
    height: 0,
    marginTop: -176,
    marginLeft: 214,
  },
  pressable1: {
    width: 223,
    height: 129,
    marginTop: 117,
    alignSelf: "center",
    marginLeft: -41,
  },
  view5: {
    borderTopLeftRadius: Border.br_15xl,
    borderTopRightRadius: Border.br_15xl,
    backgroundColor: "#d3b4e1",
    
  },
  view3: {
    height: 399,
    marginTop: 35,
    width: 428,
    
  },
  view: {
    flex: 1,
    width: "110%",
    backgroundColor: Color.darkslateblue,
    marginTop: -35,
    marginLeft: -8,
    
  },
});

export default Screen2;
