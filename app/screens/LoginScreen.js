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
  username: Yup.string().required().label("Username"),
  password: Yup.string().required().min(2).max(10).label("Password"),
});

const getUsers = () => {
  let commonData = DataManager.getInstance();
  return commonData.getUsers();
};

const users = getUsers();

const validateUser = ({ username, password }) => {
  return (
    users.filter(
      (user) => user.username === username && user.password === password
    ).length > 0
  );
};

const getUser = ({ username }) => {
  return users.find((user) => user.username === username);
};

const createUser = ({ username }) => {
  let commonData = DataManager.getInstance();
  let userId = getUser({ username }).id;
  commonData.setUserId(userId);
};

function LoginScreen({ navigation }) {
  return (
    <AppScreen>
      <View style={styles.splashLogoContainer}>
        <AppLogo size={200} />
        <AppTitleText> Login </AppTitleText>
      </View>

      <Formik
        initialValues={{ username: "", password: "" }}
        onSubmit={(values, { resetForm }) => {
          if (validateUser(values)) {
            resetForm();
            createUser(values);
            navigation.navigate("AuthAccount", {
              screen: "Account",
              params: {
                paramUsername: values.username,
                paramFullname: getUser(values).name,
                paramImage: getUser(values).image,
              },
            });
          } else {
            resetForm();
            alert("Invalid Login Details");
          }
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
            <View style={styles.textInputContainer}>
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
                color="primaryColor"
                title="Log in"
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
  logo: {
    height: 200,
    width: 200,
  },
  textInputContainer: {
    alignSelf: "center",
    justifyContent: "space-between",
    height: 150,
    width: "80%",
  },
  buttonContainer: {
    marginTop: 20,
    alignSelf: "center",
    flexDirection: "column",
    width: "70%",
  },
});

export default LoginScreen;
