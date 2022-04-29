import React from "react";
import { StyleSheet, View } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";

import AppButton from "../components/AppButton";
import AppErrorText from "../components/AppErrorText";
import AppLogo from "../components/AppLogo";
import AppScreen from "../components/AppScreen";
import AppTextInput from "../components/AppTextInput";
import AppTitleText from "../components/AppTitleText";
import DataManager from "../config/DataManager";

const schema = Yup.object().shape({
  fullName: Yup.string().required().label("Full name"),
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(2).max(10).label("Password"),
});

const userExist = (id) => {
  let commonData = DataManager.getInstance();
  return commonData.userExist(id);
};

const addUser = (values) => {
  let commonData = DataManager.getInstance();
  const newUser = {
    id: values.username,
    username: values.username,
    password: values.password,
    name: values.fullName,
    image: require("../assets/defaultLego.jpg"),
  };
  commonData.addUser(newUser);
};

function RegisterScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.splashLogoContainer}>
        <AppLogo size={200} />
        <AppTitleText> Register </AppTitleText>
      </View>

      <Formik
        initialValues={{ fullName: "", username: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (!userExist(values.username)) {
            resetForm();
            addUser(values);
            navigation.navigate("Welcome");
          } else {
            resetForm();
            alert("User name exists!");
          }
        }}
        validationSchema={schema}
      >
        {({
          handleChange,
          handleSubmit,
          errors,
          setFieldTouched,
          touched,
          values,
        }) => (
          <>
            <View style={styles.textInputContainer}>
              <AppTextInput
                autoCorrect={false}
                icon="account-details"
                placeholder="Full name"
                onBlur={() => setFieldTouched("fullName")}
                onChangeText={handleChange("fullName")}
                value={values.fullName}
              />
              {touched.fullName && (
                <AppErrorText> {errors.fullName} </AppErrorText>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="account"
                placeholder="Username"
                onBlur={() => setFieldTouched("username")}
                onChangeText={handleChange("username")}
                value={values.username}
              />
              {touched.username && (
                <AppErrorText> {errors.username} </AppErrorText>
              )}
              <AppTextInput
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                placeholder="Password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
                secureTextEntry
                value={values.password}
              />
              {touched.password && (
                <AppErrorText> {errors.password} </AppErrorText>
              )}
            </View>

            <View style={styles.buttonContainer}>
              <AppButton
                color="otherColor"
                title="Sign up"
                onPress={handleSubmit}
              />
            </View>
          </>
        )}
      </Formik>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  splashLogoContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  textInputContainer: {
    alignSelf: "center",
    justifyContent: "space-between",
    width: "80%",
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "column",
    width: "70%",
  },
});

export default RegisterScreen;
