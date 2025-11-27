import { View, Text, TouchableOpacity } from "react-native";
import React, { RefObject, useMemo } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import RadioButtons from "./RadioButtons";

interface CategoryFilterSheetProps {
  sheetRef: RefObject<BottomSheetMethods | null>;
}

const CategoryFilterSheet = ({ sheetRef }: CategoryFilterSheetProps) => {
  const snapPoints = useMemo(() => ["45%", "80%"], []);

  const sortOptions = [
    {
      option: "rating",
      label: "Rating: High to Low",
    },
    {
      option: "Price_low_to_high",
      label: "Price: Low to High",
    },
    {
      option: "Price_high_to_low",
      label: "Price: High to Low",
    },
  ];

  const foodType = [
    {
      option: "veg",
      label: "Veg",
    },
    {
      option: "non-veg",
      label: "Non veg",
    },
  ];

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
    >
      <BottomSheetView className="gap-y-7 p-5">
        <Text className="font-poppinsSemiBold text-lg">Filters</Text>
        <View className="gap-y-3">
          <Text className="font-poppinsSemiBold">Sort by</Text>
          <RadioButtons options={sortOptions} />
        </View>
        <View className="gap-y-3">
          <Text className="font-poppinsSemiBold">Food type</Text>
          <RadioButtons options={foodType} />
        </View>
        <View className="mt-5 flex-row items-center gap-5">
          <TouchableOpacity
            activeOpacity={0.3}
            className="flex items-center justify-center rounded-lg border border-gray-400 px-5 py-3"
          >
            <Text className="font-interMedium">Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.3}
            className="flex items-center justify-center rounded-lg bg-black px-8 py-3"
          >
            <Text className="font-interMedium text-white">Apply</Text>
          </TouchableOpacity>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default CategoryFilterSheet;
