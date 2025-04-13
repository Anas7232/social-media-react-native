import ScreenWrapper from "@/components/screenWrapper";
import { useRouter } from "expo-router";
import { Button, Text } from "react-native";

export default function Index() {

  const router = useRouter()

  return (
    <ScreenWrapper>
        <Text> This is my first react naive </Text>
        <Button title="welcome" onPress={() => router.push('/welcome')} />
    </ScreenWrapper>
  );
}
