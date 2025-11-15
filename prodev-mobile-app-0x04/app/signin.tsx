import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { Link, useRouter } from "expo-router";
import { styles } from "../styles/_join";

export default function Join() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.iconsection}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text>{"<"}</Text>
        </TouchableOpacity>
        <Image source={require("../assets/images/logo.png")} />
      </View>

      <View style={styles.titleTextGroup}>
        <Text style={styles.titleText}>Join now</Text>
        <Text style={styles.subText}>Create an account to continue</Text>
      </View>

      <View style={styles.formGroup}>
        <View>
          <Text style={styles.formLabel}>Email</Text>
          <TextInput style={styles.formControl} />
        </View>

        <View>
          <Text style={styles.formLabel}>Password</Text>
          <View style={styles.formPasswordControl}>
            <TextInput style={styles.passwordControl} secureTextEntry />
            {/* eye icon placeholder */}
            <Text>👁</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* social buttons and divider same as signin */}
      {/* signupgroup: "Already have an account? Sign in" with Link to /signin */}
    </View>
  );
}
