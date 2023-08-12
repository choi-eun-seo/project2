import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Pressable,
  ImageBackground,
  Text,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, Border, FontSize } from "../GlobalStyles";
import axios from "axios";

const Screen3 = ({route}) => {
  console.log(route.params)
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState(null);

  // useEffect(() => {
  //   //사용자 정보 조회 요청 보내기
  //   const fetchUserInfo = async () => {
  //     try {
  //       const serverUrl = 'http://192.168.35.45:3000';
  //       const response = await axios.get(`${serverUrl}/getUserInfo`, {
  //         params: {
  //           phoneNumber: route.params.phoneNumber,
  //         },
  //       });
  //       if (response.data.success) {
  //         setUserInfo(response.data.user);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching user info: ", error);
  //     }
  //   };
  //   fetchUserInfo();
  // }, []);
  // const [userInfo, setUserInfo] = useState(null);

  // 사용자 정보 가져오기
  
  const fetchUserInfo = async () => {
    try {
      const serverUrl = 'http://192.168.35.45:3000';
      const response = await axios.get(`${serverUrl}/getUserInfo`, {
        params: {
          phoneNumber: route.params.phoneNumber,
          
        }, 
      });

      if (response.data.success) {
        setUserInfo(response.data.user); 
      } else {
       console.error("사용자 정보 요청 실패", route.params.phoneNumber);
        
      }
    } catch (error) {
      console.error("사용자 정보를 가져오는 중 오류 발생:", error);
    }
  };

    useEffect(() => {
    
       fetchUserInfo(); // 사용자 정보 가져오기
    
    }, []); 
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <View style={styles.view1} />
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/-4.png")}
      />
      <View style={styles.view2} />
      <Pressable
        style={styles.iconnavigationclose24px}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/iconnavigationclose-24px1.png")}
        />
      </Pressable>
      <Image
        style={[styles.icon2, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/11.png")}
      />
      <ImageBackground
        style={styles.icon3}
        resizeMode="cover"
        source={require("../assets/2.png")}
      />
      <Text style={[styles.recentlyAdded, styles.recentlyTypo1]}>
        {userInfo?.name || "사용자"}</Text>
      <Text
        style={[styles.recentlyAdded1, styles.recentlyTypo1]}
      >{`위치 : ${userInfo?.address || "주소 정보 없음"}`}</Text>
      <Pressable style={[styles.pressable, styles.pressableLayout]}>
        <ImageBackground
          style={styles.idCardClipAltIcon}
          resizeMode="cover"
          source={require("../assets/idcardclipalt.png")}
        />
        <Text style={[styles.recentlyAdded2, styles.recentlyTypo]}>
          개인정보 변경
        </Text>
      </Pressable>
      <Pressable style={[styles.pressable1, styles.pressableLayout]}>
        <ImageBackground
          style={styles.addressBookIcon}
          resizeMode="cover"
          source={require("../assets/addressbook.png")}
        />
        <Text style={[styles.recentlyAdded3, styles.recentlyTypo]}>
          주소지 변경
        </Text>
      </Pressable>
      <Pressable
        style={[styles.pressable2, styles.pressableLayout]}
        onPress={() => navigation.navigate("Screen8", {phoneNumber: route.params.phoneNumber })}
      />
      <ImageBackground
        style={styles.sensorFireIcon}
        resizeMode="cover"
        source={require("../assets/sensorfire.png")}
      />
      <Text style={[styles.recentlyAdded4, styles.recentlyTypo]}>
        센서 정보 변경
      </Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },

  iconLayout: {
    overflow: "hidden",
    maxWidth: "100%",
    width: "89.72%",
  },
  recentlyTypo1: {
    marginLeft: 131,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    letterSpacing: 0,
  },
  pressableLayout: {
    marginLeft: 9,
    height: 88,
    backgroundColor: Color.gray_200,
    borderRadius: Border.br_xl,
    width: "85.51%",
  },
  recentlyTypo: {
    color: Color.dimgray,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
    letterSpacing: 0,
    fontSize: FontSize.size_3xl,
  },
  view1: {
    alignSelf: "stretch",
    height: 44,
  },
  icon: {
    height: 926,
    marginTop: -44,
  },
  view2: {
    width: 320,
    height: 61,
    marginTop: -926,
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  iconnavigationclose24px: {
    width: 32,
    height: 32,
    marginTop: -42,
    marginLeft: 13,
  },
  icon2: {
    height: 130,
    marginTop: 17,
  },
  icon3: {
    width: 94,
    height: 94,
    marginTop: -102,
    marginLeft: 13,
  },
  recentlyAdded: {
    width: "30.55%",
    color: Color.gray_300,
    marginTop: -78,
    fontWeight: "700",
    fontSize: FontSize.size_3xl,
    marginLeft: 131,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    letterSpacing: 0,
  },
  recentlyAdded1: {
    width: "51.87%",
    fontSize: FontSize.size_mini,
    lineHeight: 18,
    color: Color.white,
    marginTop: 4,
    marginLeft: 131,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    letterSpacing: 0,
  },
  idCardClipAltIcon: {
    top: 20,
    bottom: 19,
    width: 49,
    left: 20,
    position: "absolute",
  },
  recentlyAdded2: {
    marginTop: -14,
    left: "26.78%",
    color: Color.dimgray,
    top: "50%",
    position: "absolute",
  },
  pressable: {
    marginTop: 90,
  },
  addressBookIcon: {
    marginTop: -26,
    width: 50,
    height: 50,
    top: "50%",
    left: 20,
    position: "absolute",
  },
  recentlyAdded3: {
    marginTop: -15,
    left: "26.78%",
    color: Color.dimgray,
    top: "50%",
    position: "absolute",
  },
  pressable1: {
    marginTop: 21,
  },
  pressable2: {
    marginTop: 19,
  },
  sensorFireIcon: {
    height: 49,
    marginTop: -66,
    marginLeft: 29,
    width: 49,
  },
  recentlyAdded4: {
    width: "40.61%",
    marginTop: -39,
    marginLeft: 106,
  },
  view: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
  },
});

export default Screen3;
