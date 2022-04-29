import React, { useState } from "react";
import {
  Button,
  FlatList,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import AppColors from "../config/AppColors";
import AppPickerItem from "./AppPickerItem";
import AppScreen from "./AppScreen";
import AppText from "./AppText";

function AppPicker({
  data,
  icon,
  placeholder,
  numColumns,
  selectedItem,
  onSelectedItem,
}) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && <MaterialCommunityIcons name={icon} size={30} />}
          <AppText style={styles.text}>
            {" "}
            {selectedItem ? selectedItem.title : placeholder}
          </AppText>
          <MaterialCommunityIcons name="chevron-down" size={30} />
        </View>
      </TouchableWithoutFeedback>

      <Modal visible={modalVisible} animationType="slide">
        <AppScreen style={styles.screenContainer}>
          <Button
            style={styles.button}
            title="Close"
            onPress={() => setModalVisible(false)}
            color={AppColors.otherColor}
          />

          <FlatList
            numColumns={numColumns}
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppPickerItem
                onPress={() => {
                  setModalVisible(false);
                  onSelectedItem(item);
                }}
                label={item.title}
                icon={item.iconName}
              />
            )}
          />
        </AppScreen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.lightColor,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 10,
    padding: 10,
    width: "100%",
    alignItems: "center",
  },
  text: {
    flex: 1,
    marginLeft: 10,
  },
  screenContainer: {
    backgroundColor: AppColors.tertiaryColor,
    marginTop: 0,
  },
  button: {
    alignItems: "center",
    backgroundColor: AppColors.secondaryColor,
    borderColor: AppColors.black,
    borderRadius: 20,
    borderWidth: 1,
    justifyContent: "center",
    paddingTop: 15,
    width: "100%",
  },
});

export default AppPicker;
