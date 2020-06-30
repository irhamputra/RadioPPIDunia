import React from "react";
import { SafeAreaView, ScrollView, View, Alert } from "react-native";
import { Text, ListItem, Icon, Avatar } from "react-native-elements";

export default () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Account</Text>
          </View>
          <ListItem
            key={1}
            title="Max Mustermann"
            subtitle="max.mustermann@example.de"
            chevron
            leftAvatar={
              <Avatar
                rounded
                title="MM"
                titleStyle={{ color: "white" }}
                containerStyle={{ backgroundColor: "gray" }}
              />
            }
            bottomDivider
            topDivider
            onPress={() => alert("Navigate to Profile")}
          />
        </View>

        <View>
          <View style={{ padding: 10 }}>
            <Text style={{ fontWeight: "bold" }}>Support Us</Text>
          </View>
          <ListItem
            key={2}
            title="Merchandise RPD"
            topDivider
            chevron
            bottomDivider
            onPress={() => alert("Link to Instagram")}
          />
        </View>

        <View style={{ marginTop: 10 }}>
          <ListItem
            key={3}
            title="FAQ"
            topDivider
            chevron
            bottomDivider
            onPress={() => alert("Link to Rate App")}
          />
          <ListItem
            key={4}
            title="Rate our App"
            chevron
            bottomDivider
            onPress={() => alert("Link to Rate App")}
          />

          <ListItem
            key={5}
            title="Version"
            chevron
            bottomDivider
            onPress={() =>
              Alert.alert("Radio PPI Dunia", "version 1.0.0", [], {
                cancelable: false,
              })
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
