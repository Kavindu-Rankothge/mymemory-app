import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import AppHeader from "../components/AppHeader";
import AppIcon from "../components/AppIcon";
import AppItemSeparator from "../components/AppItemSeparator";
import AppListItem from "../components/AppListItem";
import AppProfileItem from "../components/AppProfileItem";
import AppScreen from "../components/AppScreen";
import DataManager from "../config/DataManager";

const categories = [
  {
    id: 1,
    title: "Me",
    subtitle: "My memories",
    iconName: "mother-heart",
  },
  {
    id: 2,
    title: "Family",
    subtitle: "Memories with family",
    iconName: "human-female-boy",
  },
  {
    id: 3,
    title: "Friends",
    subtitle: "Memories with friends",
    iconName: "account-group",
  },
  {
    id: 4,
    title: "All",
    subtitle: "All memories",
    iconName: "apps",
  },
];

const getMemoryNum = () => {
  let commonData = DataManager.getInstance();
  let user = commonData.getUserId();
  return commonData.getMemoryNum(user);
};

function AccountScreen({ navigation, route }) {
  const [memoryNum, setMemoryNum] = useState(getMemoryNum());

  return (
    <AppScreen>
      <AppHeader
        title="MyMemory"
        icon
        onPress={() => {
          DataManager.removeInstance();
          navigation.navigate("Welcome");
        }}
      />
      <View style={styles.profileContainer}>
        <AppProfileItem
          image={route.params.paramImage}
          username={route.params.paramUsername}
          fullName={route.params.paramFullname}
          memoryNumber={memoryNum}
        />
      </View>

      <View style={styles.categoryContainer}>
        <FlatList
          data={categories}
          keyExtractor={(categories) => categories.id.toString()}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              subtitle={item.subtitle}
              IconComponent={<AppIcon name={item.iconName} size={50} />}
              onPress={() => {
                navigation.navigate("Categories", {
                  screen: "CategorySave",
                  params: {
                    paramCategory: item.title,
                  },
                });
              }}
            />
          )}
          ItemSeparatorComponent={() => <AppItemSeparator size={5} />}
        />
      </View>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    paddingBottom: 10,
    paddingLeft: 20,
    paddingTop: 20,
  },
  categoryContainer: {
    alignSelf: "center",
    height: 350,
    justifyContent: "space-evenly",
    marginTop: 10,
    width: "95%",
  },
});

export default AccountScreen;
