import { useAuth } from "@/lib/AuthContext";
import { router } from "expo-router";
import { Pressable, Text, TouchableOpacity, View } from "react-native";

export default function SignIn() {
  const { signIn } = useAuth();

  console.info('SignIn');

  async function handleSignIn() {
    await signIn();

    router.replace('/');
  }

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 24 }}>SignIn</Text>
      <TouchableOpacity onPress={handleSignIn}>
        <Text>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
}
