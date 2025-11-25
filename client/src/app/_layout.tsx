import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_300Light,
  Inter_700Bold,
  Inter_600SemiBold,
} from "@expo-google-fonts/inter";
import {
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "./global.css";

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    Poppins_700Bold,
    Poppins_600SemiBold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_300Light,
    Inter_700Bold,
    Inter_600SemiBold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
