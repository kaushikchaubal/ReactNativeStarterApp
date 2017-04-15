# React Native Starter App

This is a starter app using react-native + Firebase to store data

## Pre-requisites before starting

1. Install react-native CLI
```
npm install -g react-native-cli
```

2. Install yarn CLI
```
npm install -g yarn
```

3. Ensure android virtual machine (for 23.0.1) is setup (including ANDROID_HOME)


## Steps to start

1. Start the emulator from command line
```
emulator -avd Nexus_5X_API_23 -netdelay none -netspeed full
```
*Note: If you are running this behind a firewall, you will need to set the http-proxy flag (Details here: http://stackoverflow.com/questions/1570627/how-to-setup-android-emulator-proxy-settings)*

2. Start the React Packager
```
react-native start 
```
*Note: If you need to launch it on a different port, use the --port 8088 flag* (Details here: https://github.com/facebook/react-native/issues/10715)

3. Start the app on the appropriate OS. For eg, on android:
```
react-native run-android
```

*Note: If you are running this behind a firewall, you will need to set the http-proxy for gradle (details here: https://github.com/facebook/react-native/issues/2726)*

## Debugging

You can start seeing logs by using:
```
react-native log-android
```


