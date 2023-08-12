import * as React from "react";
import { Pressable, Image, StyleSheet, View, ScrollView } from "react-native";
import RiskContainer from "../components/RiskContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";
import axios from "axios";

const Screen1 = ({route}) => {
  // const {phoneNumber} = route.params;
  const phoneNumber = route.params.phoneNumber;
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <RiskContainer phoneNumber={phoneNumber}  />
      {/* 온습도 */}
      <Image
        style={[styles.icon, styles.iconLayout]}
        resizeMode="cover"
        source={require("../assets/111.png")}
      />
      {/* 발열량 */}
      <Pressable
        style={[styles.pressable, styles.iconLayout]}
        onPress={() => navigation.navigate("Screen2", {phoneNumber})}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/21.png")}
        />
      </Pressable>
      <Image
        style={styles.icon2}
        resizeMode="cover"
        source={require("../assets/-1.png")}
      />
      {/* 전체 */}
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("Screen4", {phoneNumber})}
      >
        <Image
          style={styles.icon1}
          resizeMode="cover"
          source={require("../assets/3.png")}
        />
      </Pressable>
      {/* 상자박스 */}
      <View style={styles.view1}>
        <View style={styles.view2} />
      </View>
      
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  iconLayout: {
    height: 193,
    width: 129,
  },
  icon: {
    marginTop: 22,
    marginRight: 135,
    
  },
  icon1: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    marginTop: -193,
    marginLeft: 135,
  },
  icon2: {
    width: 0,
    height: 0,
    marginTop: -176,
    marginRight: 1,
  },
  pressable1: {
    width: 223,
    height: 129,
    marginTop: 117,
  },
  view2: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderTopLeftRadius: Border.br_15xl,
    borderTopRightRadius: Border.br_15xl,
    backgroundColor: "#fdd0e3",
  },
  view1: {
    width: 428,
    height: 399,
    marginTop: 35,
  },
  
  view: {
    backgroundColor: Color.darkslateblue,
    flex: 1,
    alignItems: "center",
    width: "100%",
    marginTop: -35,
  },
});

export default Screen1;
