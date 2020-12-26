import React from "react";
import { Block, Text } from "galio-framework";
import { DrawerItem } from "../Components";
import { TouchableOpacity } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

const screens = ["Home", "About", "Setting", "Contact"];

const CustomDrawer = ({ navigation }) => {
  return (
    <>
      <Block flex>
        <TouchableOpacity onPress={() => navigation.navigate("About")}>
          <Block height={150} middle>
            <Text size={30}>Profile</Text>
          </Block>
        </TouchableOpacity>

        {screens.map((title, index) => (
          <Block flex style={{ padding: 10 }}>
            <DrawerItem index={index} title={title} navigation={navigation} />
          </Block>
        ))}
      </Block>
      <Block flex style={styles.bottom}>
        <Text>App version</Text>
      </Block>
    </>
  );
};

const styles = StyleSheet.create({
  bottom: {
    bottom: 0,
    alignContent:"flex-end"
  },
});

export default CustomDrawer;
