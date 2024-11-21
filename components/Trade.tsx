import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { data } from "@/data";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import LinearGradient from "react-native-linear-gradient";

const Trade = () => {
  // List Item Renderer
  const listItem = ({ item }: { item: any }) => {
    return (
      <LinearGradient
        colors={["rgba(196,38,255,1)", "rgba(57,31,220,0.5970763305322129)"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        useAngle={true}
        angle={90}
        angleCenter={{ x: 0.5, y: 0.5 }}
        style={styles.item}
      >
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.profit}>{item.profit}%</Text>
        </View>

        <View style={styles.statsContainer}>
          <View>
            <Text style={styles.statsText}>Buy</Text>
            <Text style={styles.statsValue}>
              ₹{item.buyPriceFrom}-{item.buyPriceTo}
            </Text>
          </View>
          <View>
            <Text style={styles.statsText}>Stop Loss</Text>
            <Text style={styles.statsValue}>₹{item.stopLoss}</Text>
          </View>
          <View>
            <Text style={styles.statsText}>Target</Text>
            <Text style={styles.statsValue}>₹{item.target}</Text>
          </View>
        </View>
      </LinearGradient>
    );
  };

  return (
    <View style={styles.tradeContainer}>
      {/* FlatList for Scrolling */}
      <FlatList
        data={data}
        renderItem={listItem}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
      />

      <Text style={styles.tradeFooterText}>
        On executing this basket, buy orders along with stop loss and targets
        will be placed
      </Text>
    </View>
  );
};

export default Trade;

const styles = StyleSheet.create({
  tradeContainer: {
    height: hp(`40%`),
    backgroundColor: "#4F545E",
    borderRadius: 35,
    marginHorizontal: 10,
  },
  listContent: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  item: {
    padding: 15,
    opacity: 60,
    marginVertical: 5,
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
    color: "white",
  },

  profit: {
    fontSize: 20,
    color: "green",
    fontWeight: "bold",
  },

  statsValue: {
    color: "white",
    fontWeight: "bold",
  },

  statsText: {
    color: "white",
  },

  tradeFooterText: {
    color: "white",
    fontSize: 15,
    padding: 10,
    paddingHorizontal: 20,
  },

  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  statsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
