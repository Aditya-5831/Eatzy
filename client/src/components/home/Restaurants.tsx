import { View, Text, FlatList, Image } from "react-native";
import React from "react";
import { restaurants } from "@/src/constants/restaurants";
import { Star } from "phosphor-react-native";

const Restaurants = () => {
  return (
    <View>
      <View className="mb-3 w-full flex-row items-center justify-between">
        <Text className="font-poppinsSemiBold text-lg">
          Popular Restaurants
        </Text>
        <Text className="font-poppinsSemiBold text-sm text-gray-500">
          See all
        </Text>
      </View>
      <FlatList
        data={restaurants}
        horizontal
        contentContainerStyle={{ gap: 12 }}
        renderItem={({ item }) => (
          <View className="gap-2">
            <Image
              source={item.image}
              className="h-48 w-80 rounded-lg"
              resizeMode="cover"
            />
            <View className="flex-row items-center justify-between">
              <Text className="font-poppinsSemiBold">{item.name}</Text>
              <View className="flex-row items-center gap-1">
                <Star weight="fill" color="gold" size={15} />
                <Text className="text-sm">{item.rating}</Text>
                <Text className="text-sm text-gray-500">
                  ({item.ratingCount} ratings)
                </Text>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Restaurants;
