import React from "react";
import { Block } from "galio-framework";
import { Text } from "react-native";

Card = () => {
  return (
    <Block>
      <Text>Name</Text>
      <Text>Name</Text>
      <Text>Name</Text>
      <Text>Name</Text>
      <Text>Name</Text>
    </Block>
  );
};
export default Card;

const styles = StyleSheet.create({
  blk: {
    flex: 1,
    justifyContent: "center",
  },
});
