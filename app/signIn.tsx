import useAuth from "@/hooks/useAuth";
import { Pressable, Text, View } from "react-native";

export default function SignIn() {
  const { signIn } = useAuth();

  return (
    <View>
      <Pressable onPress={signIn}>
        <Text>You are not authenticated, click to sign in</Text>
      </Pressable>
    </View>
  );
}
