import * as React from "react";
import { WebView } from "react-native-webview";
import { ActivityIndicator, Text, View } from "react-native";

export default () => {
  const [loading, setLoading] = React.useState(true);

  return (
    <>
      <WebView
        startInLoadingState={true}
        renderLoading={() => (
          <View style={{ position: "absolute" }}>
            <ActivityIndicator size="large" />
            <Text>Loading...</Text>
          </View>
        )}
        source={{ uri: "http://radioppiduniachat.chatango.com/" }}
      />
    </>
  );
};
