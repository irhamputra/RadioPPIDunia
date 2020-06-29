import React from "react";
import { Audio, AVPlaybackStatus } from "expo-av";
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Sound } from "expo-av/build/Audio/Sound";
import { StatusBar } from "expo-status-bar";
import BottomSheet from "reanimated-bottom-sheet";
import { Button } from "react-native-elements";

export default () => {
  const [soundObj, setSoundObj] = React.useState<{
    sound: Sound;
    status: AVPlaybackStatus;
  } | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);
  let bs = React.useRef<BottomSheet | null>(null);

  React.useEffect(() => {
    setLoading(true);
    const audioStream = async () => {
      const { sound, status } = await Audio.Sound.createAsync({
        uri: "http://s1.voscast.com:8080/;",
      });

      return {
        sound,
        status,
      };
    };

    audioStream()
      .then(async ({ sound, status }) => {
        setSoundObj({ sound, status });
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  const playAudio = async () => {
    if (soundObj) {
      try {
        setIsPlaying(true);
        await soundObj.sound.playAsync();
      } catch (e) {
        alert(e);
      }
    }
  };

  const pauseAudio = async () => {
    if (soundObj) {
      try {
        setIsPlaying(false);
        await soundObj.sound.pauseAsync();
      } catch (e) {
        alert(e);
      }
    }
  };

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ padding: 10, flex: 1 }}>
        <Text>Home Screen</Text>
      </ScrollView>

      <BottomSheet
        ref={bs}
        snapPoints={[70, 50, 10]}
        renderContent={() => {
          return (
            <View
              style={{
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                paddingVertical: 21,
                paddingHorizontal: 10,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <View>
                <Text style={{ fontWeight: "bold", color: "white" }}>
                  Now Playing
                </Text>
                <Text style={{ color: "white" }}>
                  SSK Raka - UGD (Unit Galau Darurat)
                </Text>
              </View>
              {!isPlaying ? (
                <TouchableOpacity onPress={playAudio}>
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 24 }}
                  >
                    Play
                  </Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={pauseAudio}>
                  <Text
                    style={{ color: "white", fontWeight: "bold", fontSize: 24 }}
                  >
                    Pause
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          );
        }}
        initialSnap={0}
        enabledGestureInteraction={false}
      />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
};
