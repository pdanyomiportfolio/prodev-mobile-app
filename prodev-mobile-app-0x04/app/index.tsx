import { View, Text, ImageBackground, TouchableOpacity, Image } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/_mainstyle";

export default function Home() {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/splash.png")}
        style={styles.backgroundImageContainer}
      >
        <View style={styles.logoContainer}>
          <Image source={require("../assets/images/logo.png")} />
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>Stay ahead with ALX</Text>
        </View>

        <View style={styles.titleSubTextContainer}>
          <Text style={styles.titleSubText}>
            Learn, grow, and transform your career with ALX programs.
          </Text>
        </View>

        <View style={styles.buttonGroup}>
          <Link href="/join" asChild>
            <TouchableOpacity style={styles.buttonPrimary}>
              <Text style={styles.buttonPrimaryText}>Join now</Text>
            </TouchableOpacity>
          </Link>

          <Link href="/signin" asChild>
            <TouchableOpacity style={styles.buttonSecondary}>
              <Text style={styles.buttonSecondaryText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </ImageBackground>
    </View>
  );
}
