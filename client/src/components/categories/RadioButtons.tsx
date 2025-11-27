import { View, Text, Pressable } from "react-native";
import React, { useState } from "react";

interface RadioButtonsProps {
  options: { option: string; label: string }[];
  className?: string;
}

const RadioButtons = ({ options, className }: RadioButtonsProps) => {
  const [selectedOption, setSelectedOption] = useState<string | undefined>();

  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <View className={`${className} gap-3`}>
      {options.map((opt) => (
        <Pressable
          onPress={() => handleSelectOption(opt.option)}
          key={opt.option}
          className=" flex-row items-center gap-2"
        >
          <View className="size-5 items-center justify-center rounded-full border">
            {selectedOption === opt.option && (
              <View className="size-3.5 rounded-full bg-black" />
            )}
          </View>
          <Text className="font-interMedium">{opt.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};

export default RadioButtons;
