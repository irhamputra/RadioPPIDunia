import React from "react";
import { Audio, AVPlaybackStatus } from "expo-av";
import {
  ActivityIndicator,
  Button,
  SafeAreaView,
  ScrollView,
  Text,
} from "react-native";
import { Sound } from "expo-av/build/Audio/Sound";

export default () => {
  const [soundObj, setSoundObj] = React.useState<{
    sound: Sound;
    status: AVPlaybackStatus;
  } | null>(null);

  const [loading, setLoading] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(false);

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
      <ScrollView>
        <Text>Home Screen</Text>

        {isPlaying ? (
          <Button title="Pause" onPress={pauseAudio} />
        ) : (
          <Button title="Play" onPress={playAudio} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};
