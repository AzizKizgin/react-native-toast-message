<!-- @format -->

# react-native-toast-message

react-native-toast-message is toast message for react native

## Installation

```bash
npm install @aziz_kizgin/react-native-toast-message
or
yarn add @aziz_kizgin/react-native-toast-message
```

## Usage

you should wrap your app with ToastMessageProvider

app.tsx

```javascript
import React from "react";
import YourApp from "./src/YourApp";
import { ToastMessageProvider } from "@aziz_kizgin/react-native-toast-message";

const App = () => {
  return (
    <ToastMessageProvider>
      <YourApp />
    </ToastMessageProvider>
  );
};

export default App;
```

YourApp.tsx

```javascript
import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useToast } from "./ToastMessage/ToastMessageContext";

const YourApp = () => {
  const { showToast } = useToast();
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => {
          showToast({
            message: "Hello There!",
            color: "info",
            duration: 2000,
            position: "bottom",
            textStyle: {
              fontSize: 20,
              color: "white",
            },
          });
        }}
      >
        <Text>Show Message</Text>
      </Pressable>
    </View>
  );
};

export default YourApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#0d5671",
    padding: 10,
  },
});
```

## License

MIT
