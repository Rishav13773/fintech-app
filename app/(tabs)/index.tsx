import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import LinearGradient from "react-native-linear-gradient";
import CustomButton from "@/components/CustomButton";
import Trade from "@/components/Trade";
import AnimatedButton from "@/components/AnimatedButton";
import { useState } from "react";

export default function HomeScreen() {
  const { width } = Dimensions.get("window");
  const isTablet = width >= 768; // tablet screen width

  const [toggleState, setToggleState] = useState(false);
  const handleToggle = (value: any) => setToggleState(value);

  return (
    <SafeAreaView style={styles.container}>
      {/* Hero Section */}
      <LinearGradient
        colors={["#C525FF", "#391EDC"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.heroSection}
      >
        {/* Header */}
        <View style={styles.headerContainer}>
          <TouchableOpacity>
            <Ionicons name="person-outline" style={styles.headerIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>XILLION</Text>
          <TouchableOpacity>
            <Ionicons name="notifications-outline" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        {/* Portfolio */}
        <View style={styles.portfolioContainer}>
          <Text style={styles.portfolioLabel}>Current portfolio</Text>
          <View style={styles.portfolioDetails}>
            <Text style={styles.portfolioAmount}>₹12,78,653</Text>
            <Ionicons name="refresh" style={styles.refreshIcon} />
          </View>
          <Text style={styles.portfolioUnusedFunds}>Unused funds</Text>
          <Text style={styles.portfolioUnusedAmount}>₹1,18,261</Text>
        </View>

        {/* Helpers Button */}
        <View
          style={[
            styles.helperContainer,
            isTablet ? styles.tabletHelperContainer : styles.helperContainer,
          ]}
        >
          <View style={styles.buttonContainer}>
            <CustomButton iconName="download-outline" title="Portfolio" />
            <CustomButton iconName="chatbox" title="Ask AI" />
          </View>
        </View>
      </LinearGradient>

      {/* Footer Section */}
      <View style={styles.footerSection}>
        <View style={styles.recommendationContainer}>
          <Text
            style={[
              styles.footerTitle,
              isTablet ? styles.tabletFooterTitle : styles.phoneFooterTitle,
            ]}
          >
            Today's recommendation
          </Text>

          <Trade />
          {/* Execute Button */}
          <AnimatedButton onToggle={handleToggle} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
  },

  heroSection: {
    width: "100%",
    height: hp("30%"),
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 20,
  },

  headerTitle: {
    fontSize: hp("2.5%"),
    color: "white",
  },

  headerIcon: {
    fontSize: hp("2.5%"),
    color: "white",
  },

  portfolioContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  portfolioUnusedFunds: {
    color: "white",
    marginTop: 15,
  },

  portfolioUnusedAmount: {
    color: "white",
    fontWeight: "black",
    marginTop: 5,
  },

  portfolioLabel: {
    color: "white",
    fontSize: hp("2%"),
    marginBottom: 5,
  },

  portfolioDetails: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  portfolioAmount: {
    fontSize: hp("3.5%"),
    color: "white",
    fontWeight: "bold",
  },

  refreshIcon: {
    fontSize: hp("3%"),
    color: "white",
  },

  helperContainer: {
    // position: "absolute",
    top: hp(`6`),
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },

  tabletHelperContainer: {
    top: hp(`8`),
  },

  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
  },

  footerSection: {
    // Footer styling (currently empty, you can add as needed)
    flex: 1,
    backgroundColor: "black",
  },

  footerTitle: {
    color: "white",
    fontSize: hp("2%"),
    textAlign: "center",
  },

  phoneFooterTitle: {
    marginTop: 40,
    marginBottom: 20,
  },

  tabletFooterTitle: {
    marginTop: 100,
    marginBottom: 10,
  },

  recommendationContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
});
