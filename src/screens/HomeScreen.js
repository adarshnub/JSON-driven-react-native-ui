import { View } from "react-native";
import React from "react";
import CustomText from "../components/CustomText";
import data from "../data/data.json";

const HomeScreen = () => {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <CustomText text={data.title} style={{fontSize:26,marginBottom:20}}/>
      {data.body.map((item, index) => {
        const Component = CustomText;
        return <Component key={index} {...item} />;
      })}
    </View>
  );
};

export default HomeScreen;
