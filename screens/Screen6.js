import * as React from "react";
import { Text, StyleSheet, TextInput, Pressable, View, ScrollView, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border, Padding } from "../GlobalStyles";
import axios from "axios";

const Screen6 = () => {
  const navigation = useNavigation();
  const [phoneNumber, setPhoneNumber] = React.useState("");
  const [password, setPassword] =React.useState("");

  const handleLogin = async () => {
    try {
      const serverUrl = 'http://192.168.35.45:3000';
      const userData = {
        phoneNumber,
        password,
      };

      const response = await axios.post(`${serverUrl}/login`, userData);
      if(response.data.success) {
        //로그인 성공
        navigation.navigate("Screen4", { phoneNumber: phoneNumber }); // phoneNumber 전달
        Alert.alert("로그인 성공", "로그인에 성공하셨습니다.");
      }  
      
      else {
        // 로그인 실패
        Alert.alert("로그인 실패", "전화번호 또는 비밀번호가 일치하지 않습니다.");
      }
    } catch (error) {
      Alert.alert("로그인 실패", "서버 요청 실패. 다시 시도해주세요");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <Text style={styles.recentlyAdded}>로그인</Text>
      <Text style={[styles.recentlyAdded1, styles.recentlyTypo1]}>ID</Text>
      <TextInput
        style={[styles.textinput, styles.textinputLayout]}
        keyboardType="number-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
      />
      <Text style={[styles.recentlyAdded2, styles.recentlyTypo1]}>
        password
      </Text>
      <TextInput
        style={[styles.textinput1, styles.textinputLayout]}
        keyboardType="default"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <Pressable
        style={[styles.pressable, styles.textinputLayout]}
        onPress={handleLogin}
      />
      <Text style={[styles.recentlyAdded3, styles.recentlyTypo]}>로그인</Text>
      <Pressable
        style={[styles.pressable1, styles.textinputLayout]}
        onPress={() => navigation.navigate("Screen5")}
      />
      <Text style={[styles.recentlyAdded4, styles.recentlyTypo]}>회원가입</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    paddingBottom: Padding.p_20xl,
  },

  recentlyTypo1: {
    marginLeft: 3,
    letterSpacing: 0,
    fontSize: FontSize.size_6xl,
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
  recentlyTypo: {
    alignSelf: "center",
    marginTop: -55,
    fontSize: FontSize.size_11xl,
    letterSpacing: 0,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
    lineHeight: 41,
  },
  recentlyAdded: {
    fontSize: FontSize.size_17xl,
    letterSpacing: 1,
    textAlign: "left",
    fontFamily: FontFamily.hancomMalangMalangRegular,
    fontWeight: "700",
    lineHeight: 41,
    color: Color.white,
  },
  recentlyAdded1: {
    marginTop: 100,
    
  },
  textinput: {
    backgroundColor: Color.white,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded2: {
    marginTop: 9,
  },
  textinput1: {
    marginTop: 2,
    backgroundColor: Color.white,
    width: 375,
    borderRadius: Border.br_xl,
  },
  pressable: {
    backgroundColor: Color.lightsteelblue,
    marginTop: 21,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded3: {
    color: Color.black,
  },
  pressable1: {
    backgroundColor: "rgba(233, 233, 233, 0.65)",
    marginTop: 40,
    width: 375,
    borderRadius: Border.br_xl,
  },
  recentlyAdded4: {
    color: Color.white,
    alignSelf: "center",
    marginTop: -55,
    fontSize: FontSize.size_11xl,
  },
  view: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    width: "100%",
    paddingLeft: Padding.p_8xl,
    paddingTop: 25,
    paddingRight: Padding.p_7xl,
  },
});

export default Screen6;
