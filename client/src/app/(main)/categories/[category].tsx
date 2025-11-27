import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { restaurants } from "@/src/constants/restaurants";
import { SlidersHorizontalIcon } from "phosphor-react-native";
import BottomSheet from "@gorhom/bottom-sheet/lib/typescript/components/bottomSheet/BottomSheet";
import CategoryFilterSheet from "@/src/components/categories/CategoryFilterSheet";

const CategoryScreen = () => {
  const { category } = useLocalSearchParams();

  const data = restaurants.filter((restaurant) =>
    restaurant.categories.some((cat) => cat.slug === category),
  );

  const sheetRef = useRef<BottomSheet>(null);

  const handleSheetOpen = () => {
    sheetRef.current?.expand();
  };

  return (
    <SafeAreaView className="h-full gap-y-5 p-5">
      <View className="flex-row items-center justify-between">
        <Text className="font-poppinsBold text-xl capitalize">
          {category}'s
        </Text>
        <TouchableOpacity onPress={handleSheetOpen}>
          <SlidersHorizontalIcon size={28} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        renderItem={({ item }) => (
          <View>
            <Image
              source={require("@/assets/images/categories/pizza.png")}
              className="h-52 w-44 rounded-lg"
            />
            <Text className="font-poppinsSemiBold text-lg">
              {item.name.slice(0, 15)}...
            </Text>
            <View className="flex-row items-center gap-2">
              {item.categories.map((cat) => (
                <Text key={cat.slug} className="text-sm text-gray-400">
                  {cat.name},
                </Text>
              ))}
            </View>
          </View>
        )}
      />
      <CategoryFilterSheet sheetRef={sheetRef} />
    </SafeAreaView>
  );
};

export default CategoryScreen;
