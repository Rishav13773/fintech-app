import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Animated,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Add this for icons
import { SafeAreaView } from "react-native-safe-area-context";
import { tradeData } from "@/data";
import { Colors } from "@/constants/Colors";
import LinearGradient from "react-native-linear-gradient";

const TradeScreen = () => {
  const renderTradeItem = ({ item }: any) => (
    <LinearGradient
      colors={[Colors.tradeItemGradient_1, Colors.tradeItemGradient_2]}
      start={{ x: 0, y: 0 }}
      end={{ x: 0, y: 1 }}
      angle={90}
      angleCenter={{ x: 0.5, y: 0.5 }}
      style={styles.tradeItem}
    >
      {/* Stock Name and Status */}
      <View style={styles.row}>
        <View style={styles.row}>
          <Ionicons
            name="analytics"
            size={18}
            color="#007AFF"
            style={styles.icon}
          />
          <Text style={styles.stockName}>{item.stockName}</Text>
        </View>
        <Text
          style={[
            styles.status,
            item.status === "Ongoing" ? styles.ongoing : styles.completed,
          ]}
        >
          {item.status}
        </Text>
      </View>

      {/* Trade Details */}
      <View style={styles.detailsRow}>
        <View style={styles.detailItem}>
          <Ionicons
            name="pricetag"
            size={16}
            color="#888"
            style={styles.icon}
          />
          <Text style={styles.detailsText}>Buy: {item.buyPrice}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="layers" size={16} color="#888" style={styles.icon} />
          <Text style={styles.detailsText}>Qty: {item.quantity}</Text>
        </View>
        <View style={styles.detailItem}>
          <Ionicons name="wallet" size={16} color="#888" style={styles.icon} />
          <Text style={styles.detailsText}>
            Invested: {item.investedAmount}
          </Text>
        </View>
      </View>

      {/* Profit Section */}
      <View style={styles.row}>
        <Ionicons
          name={
            parseFloat(item.profitPercentage) >= 0
              ? "trending-up"
              : "trending-down"
          }
          size={18}
          color={parseFloat(item.profitPercentage) >= 0 ? "green" : "red"}
          style={styles.icon}
        />
        <Text
          style={[
            styles.profitText,
            parseFloat(item.profitPercentage) >= 0
              ? styles.profitPositive
              : styles.profitNegative,
          ]}
        >
          {item.profitPercentage} ({item.profitAmount})
        </Text>
      </View>
    </LinearGradient>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <LinearGradient
        colors={[Colors.heroSectionGradient_1, Colors.heroSectionGradient_2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={styles.header}
      >
        <Text style={styles.month}>April 2024</Text>
        <Text style={styles.totalInvested}>Total Invested: ₹4750</Text>
      </LinearGradient>

      {/* Date Selector */}
      <View style={styles.dateSelector}>
        {["11 Apr", "12 Apr", "13 Apr", "14 Apr", "15 Apr"].map((date) => (
          <TouchableOpacity key={date} style={styles.dateButton}>
            <Text style={styles.dateText}>{date}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Trade List */}
      <FlatList
        data={tradeData}
        keyExtractor={(item) => item.id}
        renderItem={renderTradeItem}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.tradeScreenBackground,
  },
  header: {
    padding: 15,
    // backgroundColor: "#FFFFFF",
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
    alignItems: "center",
  },
  month: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
  totalInvested: {
    fontSize: 14,
    color: "white",
    marginTop: 5,
  },
  dateSelector: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#FFFFFF",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  dateButton: {
    padding: 10,
  },
  dateText: {
    fontSize: 14,
    color: Colors.tint,
  },
  listContainer: {
    padding: 15,
  },
  tradeItem: {
    // backgroundColor: Colors.tradeItemBackground,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  detailsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  stockName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
  },
  status: {
    fontSize: 14,
    fontWeight: "500",
  },
  ongoing: {
    color: "#007AFF",
  },
  completed: {
    color: "#555",
  },
  detailsText: {
    fontSize: 14,
    color: "#555",
  },
  detailItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    marginRight: 5,
  },
  profitText: {
    fontSize: 16,
    fontWeight: "600",
  },
  profitPositive: {
    color: "green",
  },
  profitNegative: {
    color: "red",
  },
});

export default TradeScreen;
