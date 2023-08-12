//import React, { useState, useEffect } from "react";
import * as React from "react";
import { Pressable, Image, StyleSheet, View, ScrollView } from "react-native";
import RiskContainer from "../components/RiskContainer";
import { useNavigation } from "@react-navigation/native";
import { Border, Color } from "../GlobalStyles";
import axios from "axios";

const Screen4 = ({route}) => {
  const phoneNumber = route.params.phoneNumber;
  // const [userInfo, setUserInfo] = useState(null);
  const navigation = useNavigation();

  


  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.view}>
      <RiskContainer phoneNumber={phoneNumber}/>
      

      {/* 온습도 */}
      <Pressable
        style={[styles.pressable, styles.pressableLayout]}
        onPress={() => navigation.navigate("Screen1", {phoneNumber})}
      >
        <Image
          style={styles.icon}
          resizeMode="cover"
          source={require("../assets/111.png")}
        />
      </Pressable>
      {/* 발열량 */}
      <Pressable
        style={[styles.pressable1, styles.pressableLayout]}
        onPress={() => navigation.navigate("Screen2", {phoneNumber})}
      >
        <Image
          style={styles.icon}
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
      <Image
        style={styles.icon3}
        resizeMode="cover"
        source={require("../assets/3.png")}
      />
      {/* 상자박스 */}
      <View style={styles.view1}>
        <View style={styles.viewPosition}>
          <View style={[styles.view3, styles.viewPosition]} />
          
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    
  },

  pressableLayout: {
    height: 193,
    width: 129,
  },
  viewPosition: {
    left: 0,
    bottom: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  pressable: {
    marginTop: 22,
    marginRight: 135,
  },
  pressable1: {
    marginTop: -193,
    marginLeft: 135,
  },
  icon2: {
    width: 0,
    height: 0,
    marginTop: -176,
    marginRight: 1,
  },
  icon3: {
    width: 223,
    height: 129,
    marginTop: 117,
  },
  view3: {
    borderTopLeftRadius: Border.br_15xl,
    borderTopRightRadius: Border.br_15xl,
    backgroundColor: "#c0dbea",
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

export default Screen4;
