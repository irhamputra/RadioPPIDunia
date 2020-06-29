import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Text, ListItem } from "react-native-elements";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text style={{ fontWeight: "bold" }}>Account</Text>
        </View>
        <ListItem
          key={1}
          title="YourName"
          subtitle="YourEmail"
          chevron
          bottomDivider
        />
      </ScrollView>
    </SafeAreaView>
  );
};
