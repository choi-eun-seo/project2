// import * as React from "react";
import React, {useState} from "react";
import { Text, StyleSheet, TextInput, Pressable, View,ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import axios from "axios";
// import {SERVER_URL} from "react-native-dotenv";

const Screen5 = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [address, setAddress] = useState("");
  const [sensorNumber, setSensorNumber] = useState("");

  const handleSignUp = async () => {
    try {
      // null일 경우 실패 처리
      if (!name || !phoneNumber || !password || !confirmPassword || !address || !sensorNumber) {
        Alert.alert("회원 가입 실패", "입력하지 않은 정보가 있습니다.");
        return;
      }
      if (password !== confirmPassword) {
        Alert.alert("비밀번호 불일치", "비밀번호가 일치하지 않습니다.");
        return;
      }

      const serverUrl ='http://192.168.35.45:3000';
      const userData = {
        id: phoneNumber,
        name,
        phoneNumber,
        password,
        address,
        sensorNumber,
      };
    
      const response = await axios.post(`${serverUrl}/signup`, userData);
      // 서버에서 응답 받아 처리 (성공 메시지 + 로그인 화면으로 이동)
      if (response.data.success){
        Alert.alert("회원 가입 성공", "회원 가입이 성공적으로 완료되었습니다.");
        navigation.navigate("Screen6");
      } else {
        if (response.status === 400 && response.data.message === "이미 가입된 전화번호입니다.") {
          Alert.alert("회원 가입 실패", "이미 가입된 전화번호입니다.");
        } else {
          Alert.alert("회원 가입 실패", "회원 가입 실패. 다시 시도해주세요");
        }

      }
      
    } catch (error) {
      // 서버에서 에러 응답 올 때 에러 처리
      Alert.alert("회원 가입 실패", "서버요청 실패. 다시 시도해주세요");
    }
  };
  

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <Text style={styles.recentlyAdded}>회원가입</Text>
      {/* 이름 입력 */}
      <Text style={[styles.recentlyAdded1, styles.recentlyTypo]}>이름</Text>
      <TextInput
        style={[styles.textinput, styles.textinputLayout]}
        keyboardType="default"
        value={name}
        onChangeText={setName}
      />

      {/* 전화번호 입력 */}
      <Text style={[styles.recentlyAdded2, styles.recentlyTypo]}>전화번호</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />

      {/* 비밀번호 입력 */}
      <Text style={[styles.recentlyAdded3, styles.recentlyTypo]}>비밀번호</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
        value={password}
        onChangeText={setPassword}
      />
      {/* 비밀번호 확인 */}
      <Text style={[styles.recentlyAdded3, styles.recentlyTypo]}>비밀번호 확인</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      {/* 주소 입력 */}
      <Text style={[styles.recentlyAdded4, styles.recentlyTypo]}>주소</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
        value={address}
        onChangeText={setAddress}
      />
      
      {/* 센서번호 입력 */}
      <Text style={styles.recentlyTypo}>센서번호</Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
        value={sensorNumber}
        onChangeText={setSensorNumber}
      />

      {/* 회원가입 버튼 */}
      <Pressable
        style={[styles.pressable, styles.textinputLayout]}
        onPress={handleSignUp}
      />
      <Text style={styles.recentlyAdded6}>가입하기</Text>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: Padding.p_25xl,
    backgroundColor: Color.darkslateblue,
  },

  recentlyTypo: {
    marginLeft: 3,
    fontSize: FontSize.size_6xl,
    letterSpacing: 0,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
  },
  textinputLayout: {
    height: 71,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded: {
    fontSize: FontSize.size_17xl,
    letterSpacing: 1,
    textAlign: "left",
    color: Color.white,
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
    lineHeight: 41,
    marginTop: -15,
  },
  recentlyAdded1: {
    marginTop: 50,
  },
  textinput: {
    backgroundColor: Color.white,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded2: {
    marginTop: 4,
  },
  textinput1: {
    marginTop: 2,
    backgroundColor: Color.white,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded3: {
    marginTop: 3,
  },
  recentlyAdded4: {
    marginTop: 2,
  },
  pressable: {
    backgroundColor: Color.lightsteelblue,
    marginTop: 50,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded6: {
    fontSize: FontSize.size_11xl,
    color: Color.black,
    marginTop: -50,
    alignSelf: "center",
    letterSpacing: 0,
    textAlign: "center",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
    lineHeight: 41,
  },
  view: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_8xl,
    paddingTop: Padding.p_25xl,
    paddingRight: Padding.p_7xl,
  },
});

export default Screen5;
