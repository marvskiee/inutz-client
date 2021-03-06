import colors from "../config/colors";
import { Platform } from "react-native";
import { StatusBar } from "expo-status-bar";

export const externalStyle = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  containerNotCenter: {
    paddingTop: 100,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  splashText1: {
    fontWeight: "bold",
    color: colors.black,
    fontSize: 35,
    paddingVertical: 5,
  },
  splashText2: {
    color: colors.violet,
    fontSize: 50,
  },
  splashImage: {
    height: 350,
    width: 350,
  },
  splashButton: {
    marginTop: 10,
    borderRadius: 50,
    backgroundColor: colors.violet,
    paddingTop: 15,

    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
  },
  splashButtonText: {
    textAlign: "center",
    color: colors.white,
    fontSize: 20,
  },
  splashForm: {
    width: "80%",
    elevation: 20,
    shadowColor: "#52006A",
  },
  splashInput: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: "100%",
    marginBottom: 15,
    borderColor: colors.lightgray,
    borderRadius: 50,
  },
  link: {
    textDecorationLine: "underline",
    color: colors.violet,
  },
  text: {
    paddingVertical: 5,
    color: colors.black,
  },
  bottomNav: {
    position: "absolute",
    bottom: 20,
    right: 20,
    justifyContent: "space-evenly",
  },
  bottomButton: {
    height: 70,
    width: 70,
  },
  topNav: {
    backgroundColor: colors.white,
    padding: 20,
    marginTop: 20,
    position: "absolute",
    top: 0,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  navLogo: {
    fontSize: 30,
    color: colors.violet,
    fontWeight: "bold",
  },
  navAvatar: {
    borderRadius: 50,
    height: 35,
    width: 35,
  },
  profileAvatar: {
    borderRadius: 500,
    borderWidth: 5,
    width: 150,
    height: 150,
    borderColor: colors.violet,
  },
  card: {
    // shadowColor: "#171717",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.2,
    // shadowRadius: 3,
    backgroundColor: "#f5f3f9",
    width: "100%",
    padding: 20,
    marginVertical: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 15,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  cardBody: {
    lineHeight: 25,
    color: colors.textColor,
  },
  composeNav: {
    position: "absolute",
    padding: 20,
    marginTop: 20,
    top: 0,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  profileNav: {
    position: "absolute",
    padding: 20,
    marginTop: 20,
    top: 0,
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
  },
  input: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    width: "100%",
    marginBottom: 15,
    borderColor: colors.lightgray,
    borderRadius: 10,
  },
  buttonPlain: {
    padding: 10,
    color: colors.black,
  },
  profileHeader: {
    marginVertical: 15,
    fontWeight: "bold",
    fontSize: 20,
  },
  profileButton: {
    marginBottom: 30,
    padding: 15,
    backgroundColor: colors.violet,
    borderRadius: 10,
  },
  profileButtonText: {
    textAlign: "center",
    color: colors.white,
  },
  label: {
    paddingVertical: 5,
  },
  profileInfo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    backgroundColor: colors.lightviolet,
    borderRadius: 10,
  },
  errorText: {
    color: colors.violet,
    fontSize: 15,
    padding: 15,
  },
  backButton: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
};
