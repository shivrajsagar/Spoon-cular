import React from "react";
import { Block, Icon, NavBar } from "galio-framework";
import { Alert, StatusBar, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Header = ({ navigation,title }) => {
  const onLeftPress = () => {
    navigation.openDrawer();
  };

  return (
    <Block safe style={styles.header}>
      <StatusBar />
      <NavBar
        title={title}
        titleStyle={styles.title}
        left={
          <TouchableOpacity onPress={onLeftPress}>
            <Icon name="menu" family="entypo" color="red" size={30} />
          </TouchableOpacity>
        }
        onLeftPress={onLeftPress}
      />
    </Block>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
  },
  title: {
    color: "red",
    left: -110,
    fontSize:20
  },
});

export default Header;
