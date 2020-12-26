import React from "react";
import { StyleSheet } from "react-native";
import { Block, Text } from "galio-framework";
import { TouchableOpacity } from "react-native-gesture-handler";

const DrawerItem = ({ title, index,navigation }) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate(title);
      }}
      style={styles.container}
    >
      <Block  key={index}>
        <Text color="#ff2222" size={20} left>
          {title}
        </Text>
      </Block>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height:50,
    backgroundColor:"#ffcccc",
    alignItems:"flex-start",
    justifyContent:"center",
    padding:20
  },
});

export default DrawerItem;
