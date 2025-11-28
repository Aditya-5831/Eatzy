import { Pressable, Text, View } from "react-native";
import React, { RefObject, useMemo } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";
import SearchBar from "../shared/SearchBar";
import { BriefcaseIcon, HouseIcon, MapPinIcon } from "phosphor-react-native";

interface LocationSheetProps {
  sheetRef: RefObject<BottomSheetMethods | null>;
}

const LocationSheet = ({ sheetRef }: LocationSheetProps) => {
  const snapPoints = useMemo(() => ["40%", "75%"], []);

  return (
    <BottomSheet
      ref={sheetRef}
      snapPoints={snapPoints}
      index={-1}
      enablePanDownToClose
      containerStyle={{
        zIndex: 99999,
      }}
    >
      <BottomSheetView className="z-50 gap-5 px-5 py-3">
        <View className="mt-1">
          <Text className="font-poppinsSemiBold text-lg">
            Choose your location
          </Text>
          <Text className="text-xs text-gray-400">
            Eatzy needs your location to show nearby restaurants
          </Text>
        </View>

        <SearchBar placeholder="Search for area, street..." />

        <Pressable className="flex-row items-center gap-3 font-interMedium">
          <MapPinIcon size={20} color="red" weight="fill" />
          <Text>Use current location</Text>
        </Pressable>

        <View>
          <Text className="mb-2 font-interMedium text-gray-500">
            Saved places
          </Text>

          <Pressable className="flex-row items-center gap-3 py-2">
            <HouseIcon size={20} color="black" />
            <Text className="font-interRegular">Home</Text>
          </Pressable>

          <Pressable className="flex-row items-center gap-3 py-2">
            <BriefcaseIcon size={20} color="black" />
            <Text className="font-interRegular">Work</Text>
          </Pressable>
        </View>

        <View>
          <Text className="mb-2 font-interMedium text-gray-500">
            Recent locations
          </Text>

          <Pressable className="flex-row items-center gap-3 py-2">
            <MapPinIcon size={20} color="gray" />
            <Text className="font-interRegular">Marine drive, Mumbai</Text>
          </Pressable>
          <Pressable className="flex-row items-center gap-3 py-2">
            <MapPinIcon size={20} color="gray" />
            <Text className="font-interRegular">Andheri west, Mumbai</Text>
          </Pressable>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

export default LocationSheet;
