import { View, Text, Pressable } from "react-native";
import React, { RefObject } from "react";
import {
  BellIcon,
  BowlFoodIcon,
  CaretDownIcon,
  MapPinIcon,
} from "phosphor-react-native";
import { BottomSheetMethods } from "@gorhom/bottom-sheet/lib/typescript/types";

interface HeaderProps {
  sheetRef: RefObject<BottomSheetMethods | null>;
}

const Header = ({ sheetRef }: HeaderProps) => {
  const handleOpenSheet = () => {
    sheetRef.current?.expand();
  };

  return (
    <View className="flex-row items-center justify-between">
      <BowlFoodIcon weight="fill" color="#FF3B30" size={30} />
      <Pressable onPress={handleOpenSheet} className="items-center">
        <Text className="font-interSemiBold text-sm text-gray-400">
          Location
        </Text>
        <View className="flex-row items-center gap-1">
          <MapPinIcon size={20} color="red" weight="fill" />
          <Text className="font-interSemiBold">Marine drive, Mumbai</Text>
          <CaretDownIcon size={15} weight="bold" />
        </View>
      </Pressable>
      <BellIcon />
    </View>
  );
};

export default Header;
