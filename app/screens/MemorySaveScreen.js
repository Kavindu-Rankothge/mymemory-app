import React, { useState } from "react";
import { Button, Image, StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import * as ImagePicker from "expo-image-picker";

import AppBoldText from "../components/AppBoldText";
import AppButton from "../components/AppButton";
import AppColors from "../config/AppColors";
import AppErrorText from "../components/AppErrorText";
import AppHeader from "../components/AppHeader";
import AppScreen from "../components/AppScreen";
import AppText from "../components/AppText";
import AppTextInput from "../components/AppTextInput";
import DataManager from "../config/DataManager";

const schema = Yup.object().shape({
  title: Yup.string().required().label("Title"),
});

function MemorySaveScreen({ navigation, route }) {
  const currentDate = new Date().toDateString();
  const category = route.params.paramCategory;
  const [imageSelected, setImage] = useState();
  const editTitle = route.params.paramTitle;
  const editSubTitle = route.params.paramSubTitle;

  const addMemory = (values) => {
    let commonData = DataManager.getInstance();
    let userId = commonData.getUserId();
    const memoryId = commonData.getFreeMemoryId(userId);
    const newMemory = {
      userId: userId,
      memoryId: memoryId,
      title: values.title,
      date: currentDate,
      subtitle: values.details,
      image:
        imageSelected == null ? require("../assets/apple.jpg") : imageSelected,
      category: category,
    };
    commonData.addMemory(newMemory);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  return (
    <AppScreen>
      <AppHeader title="Memory" />

      <View style={styles.detailContainer}>
        <AppBoldText> {route.params.paramCategory} </AppBoldText>
        <AppText> {currentDate} </AppText>
      </View>

      <View style={styles.imageContainer}>
        {imageSelected && (
          <Image source={{ uri: imageSelected }} style={styles.image} />
        )}
        <AppButton title="Pick Image" onPress={pickImage} color="lightColor" />
      </View>

      <Formik
        initialValues={{ title: editTitle, details: editSubTitle }}
        onSubmit={(values, { resetForm }) => {
          addMemory(values);
          resetForm();
          navigation.goBack();
        }}
        validationSchema={schema}
      >
        {({
          errors,
          handleChange,
          handleSubmit,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <View style={styles.formContainer}>
              <AppTextInput
                icon="format-text"
                placeholder="Memory Title"
                onBlur={() => setFieldTouched("title")}
                onChangeText={handleChange("title")}
                value={values.title}
              />
              {touched.title && <AppErrorText> {errors.title} </AppErrorText>}
              <AppTextInput
                icon="text"
                placeholder="Memory Details"
                multiline={true}
                value={values.details}
                onBlur={() => setFieldTouched("details")}
                onChangeText={handleChange("details")}
              />
              {touched.details && (
                <AppErrorText> {errors.details} </AppErrorText>
              )}
            </View>
            <View style={styles.buttonContainer}>
              <View style={styles.saveButton}>
                <AppButton
                  color="primaryColor"
                  title="Save"
                  onPress={handleSubmit}
                />
              </View>
              <View style={styles.exitButton}>
                <AppButton
                  color="otherColor"
                  title="Exit"
                  onPress={() => navigation.goBack()}
                />
              </View>
            </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",

    width: "80%",
    alignSelf: "center",
    paddingVertical: 10,
    alignItems: "center",
  },
  image: {
    height: 80,
    width: 80,
    borderRadius: 25,
    marginBottom: 10,
  },
  detailContainer: {
    padding: 20,
    marginBottom: 10,
    borderColor: AppColors.black,
    backgroundColor: AppColors.primaryColor,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-around",
  },
  formContainer: {
    alignSelf: "center",
    justifyContent: "space-between",
    height: 140,
    width: "80%",
  },
  buttonContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    paddingBottom: 20,
  },
  saveButton: {
    width: "25%",
  },
  exitButton: {
    width: "25%",
  },
});

export default MemorySaveScreen;
