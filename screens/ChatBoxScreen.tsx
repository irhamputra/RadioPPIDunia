import * as React from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, Text, View, Dimensions } from "react-native";
import { StatusBar } from "expo-status-bar";

export default () => {
  return (
    <>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View
            style={{
              position: "absolute",
              top: Dimensions.get("window").height / 3,
              left: Dimensions.get("window").width / 2.4,
            }}
          >
            <ActivityIndicator size="large" />
            <Text style={{ textAlign: "center" }}>Loading...</Text>
          </View>
        )}
        source={{ uri: "http://radioppiduniachat.chatango.com/" }}
      />
      <StatusBar style="dark" />
    </>
  );
};
