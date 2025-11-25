import Categories from "@/src/components/home/Categories";
import Header from "@/src/components/home/Header";
import LocationSheet from "@/src/components/home/LocationSheet";
import Restaurants from "@/src/components/home/Restaurants";
import SearchBar from "@/src/components/shared/SearchBar";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import { useRef } from "react";
import { ScrollView, View } from "react-native";
import { Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const sheetRef = useRef<BottomSheet>(null);

  return (
    <SafeAreaView edges={["top"]} className="flex-1 px-5 pt-5">
      <ScrollView
        contentContainerStyle={{
          gap: 20,
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header sheetRef={sheetRef} />

        {/* Search bar */}
        <SearchBar placeholder="Search food..." />

        {/* Banner */}
        <Image
          source={require("@/assets/images/food_banner.png")}
          className="h-48 w-full rounded-lg border border-gray-100"
          resizeMode="cover"
        />

        {/* Categories */}
        <Categories />

        {/* Restaurants */}
        <Restaurants />
      </ScrollView>

      {/* Location sheet */}
      <LocationSheet sheetRef={sheetRef} />
    </SafeAreaView>
  );
};

export default HomeScreen;
