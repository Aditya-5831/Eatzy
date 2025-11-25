import { View, TextInput } from "react-native";
import React from "react";
import { MagnifyingGlassIcon } from "phosphor-react-native";

interface SearchBarProps {
  placeholder: string;
}

const SearchBar = ({ placeholder }: SearchBarProps) => {
  return (
    <View className="flex-row items-center gap-1 rounded-full border border-gray-200 bg-gray-50 px-2 py-1">
      <MagnifyingGlassIcon />
      <TextInput className="w-full" placeholder={placeholder} />
    </View>
  );
};

export default SearchBar;
