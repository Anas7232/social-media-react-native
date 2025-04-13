import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

export const hp = (percentage: number): number => {
    return (percentage / 100) * deviceHeight;
};

export const wp = (percentage: number): number => {
    return (percentage / 100) * deviceWidth;
};