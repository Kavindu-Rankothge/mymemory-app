import React, { useState } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import AppCard from "../components/AppCard";
import AppHeader from "../components/AppHeader";
import AppItemSeparator from "../components/AppItemSeparator";
import AppScreen from "../components/AppScreen";
import DataManager from "../config/DataManager";

function AllMemoriesScreen({ navigation }) {
  const [refreshing, setRefreshing] = useState(false);

  const getMemories = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserId();
    return commonData.getMemories(user, "All");
  };

  const initialMemories = getMemories();

  const [memoriesList, setMemories] = useState(initialMemories);

  const handleDelete = (memory) => {
    const newMemories = memoriesList.filter(
      (item) => item.memoryId !== memory.memoryId
    );
    setMemories(newMemories);
  };

  return (
    <AppScreen>
      <AppHeader title="Memories" />
      <View style={styles.cardContainer}>
        <FlatList
          data={memoriesList}
          keyExtractor={(memories) => memories.memoryId.toString()}
          refreshing={refreshing}
          onRefresh={() => setMemories(initialMemories)}
          renderItem={({ item }) => (
            <AppCard
              image={item.image}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category}
              date={item.date}
              editPress={() => {
                navigation.navigate("Memories", {
                  screen: "MemorySaveScreen",
                  params: {
                    paramId: item.Id,
                    paramImage: item.image,
                    paramTitle: item.title,
                    paramSubTitle: item.subtitle,
                    paramCategory: item.category,
                  },
                });
              }}
              deletePress={() => {
                handleDelete(item);
              }}
            />
          )}
          ItemSeparatorComponent={() => <AppItemSeparator size={10} />}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    padding: 20,
    marginBottom: 50,
  },
});

export default AllMemoriesScreen;
