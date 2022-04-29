import React, { useState, useEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity, View } from "react-native";

import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppHeader from "../components/AppHeader";
import AppIcon from "../components/AppIcon";
import AppItemSeparator from "../components/AppItemSeparator";
import AppListItem from "../components/AppListItem";
import AppPicker from "../components/AppPicker";
import AppScreen from "../components/AppScreen";
import DataManager from "../config/DataManager";

function CategoriesScreen({ navigation, route }) {
  const [category, setCategory] = useState();

  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (memory) => {
    const newMemories = memoriesList.filter(
      (item) => item.memoryId !== memory.memoryId
    );
    setMemories(newMemories);
  };

  const getMemories = () => {
    let commonData = DataManager.getInstance();
    let user = commonData.getUserId();
    if (category == null) {
      return commonData.getMemories(user, "All");
    }
    return commonData.getMemories(user, category.title);
  };

  const getCategories = () => {
    let commonData = DataManager.getInstance();
    return commonData.getCategories();
  };

  const categories = getCategories();

  const initialMemories = getMemories();

  const [memoriesList, setMemories] = useState(initialMemories);

  useEffect(() => {
    setMemories(initialMemories);
  }, [category]);

  return (
    <AppScreen>
      <AppHeader title="Categories" />
      <View style={styles.pickerContainer}>
        <AppPicker
          selectedItem={category}
          onSelectedItem={(item) => setCategory(item)}
          data={categories}
          placeholder="All"
          icon="menu"
          numColumns={3}
        />
      </View>

      <View style={styles.cardContainer}>
        <FlatList
          data={memoriesList}
          keyExtractor={(memories) => memories.memoryId.toString()}
          refreshing={refreshing}
          extraData={category}
          onRefresh={() => setMemories(initialMemories)}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              image={item.image}
              onSwipeLeft={() => (
                <View style={styles.deleteView}>
                  <TouchableOpacity onPress={() => handleDelete(item)}>
                    <AppIcon name="trash-can" />
                  </TouchableOpacity>
                </View>
              )}
            />
          )}
          ItemSeparatorComponent={() => <AppItemSeparator size={10} />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <AppButton
          color="primaryColor"
          title="Add Memory"
          onPress={() => {
            navigation.navigate("Categories", {
              screen: "MemorySaveScreen",
              params: {
                paramCategory: category == null ? "All" : category.title,
              },
            });
          }}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    marginTop: 10,
    padding: 10,
  },
  cardContainer: {
    padding: 20,
    flex: 1,
  },
  deleteView: {
    alignItems: "center",
    backgroundColor: AppColors.otherColor,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    justifyContent: "center",
    marginLeft: -15,
    width: 75,
  },
  buttonContainer: {
    width: "40%",
    alignSelf: "center",
    paddingBottom: 20,
  },
});

export default CategoriesScreen;
