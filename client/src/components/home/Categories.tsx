import { Text, FlatList, Image, TouchableOpacity, View } from "react-native";
import React from "react";
import { categories } from "@/src/constants/categories";
import { UnknownInputParams, router } from "expo-router";

const Categories = () => {
  const handleCategory = (category: UnknownInputParams) => {
    router.push({
      pathname: "/categories/[category]",
      params: category,
    });
  };

  return (
    <View>
      <View className="mb-3 w-full flex-row items-center justify-between">
        <Text className="font-poppinsSemiBold text-lg">Categories</Text>
        <Text className="font-poppinsSemiBold text-sm text-gray-500">
          See all
        </Text>
      </View>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        contentContainerStyle={{ gap: 15 }}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              handleCategory({ category: item.category } as UnknownInputParams)
            }
            activeOpacity={0.2}
            className="items-center gap-1"
          >
            <Image
              source={item.image}
              className="size-20 rounded-full bg-violet-400"
            />
            <Text className="font-poppinsSemiBold text-sm">{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Categories;
