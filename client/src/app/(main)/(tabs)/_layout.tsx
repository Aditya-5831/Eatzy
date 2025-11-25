import React from "react";
import { Tabs } from "expo-router";
import { BasketIcon, House, NotepadIcon, User } from "phosphor-react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        sceneStyle: {
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarActiveTintColor: "#FF3B30",
          tabBarIcon: ({ focused, color, size }) => (
            <House
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="cart"
        options={{
          title: "Cart",
          tabBarActiveTintColor: "#FF3B30",
          tabBarIcon: ({ focused, color, size }) => (
            <BasketIcon
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="orders"
        options={{
          title: "Orders",
          tabBarActiveTintColor: "#FF3B30",
          tabBarIcon: ({ focused, color, size }) => (
            <NotepadIcon
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarActiveTintColor: "#FF3B30",
          tabBarIcon: ({ focused, color, size }) => (
            <User
              color={color}
              size={size}
              weight={focused ? "fill" : "regular"}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
