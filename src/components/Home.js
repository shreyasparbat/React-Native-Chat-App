import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    StatusBar,
    Image,
} from 'react-native'

import {
    Actions
} from 'react-native-router-flux'

export default class Home extends React.Component {
    state = {
        name: '',
    };


    render() {
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" backgroundColor="#16a085" />
                <KeyboardAvoidingView behavior="padding" style={styles.container}>
                    <View style={styles.logoContainer}>
                        <Image style={styles.logo} source={require("./firebase.png")} />
                        <Text style={styles.subtext}>Chat Application</Text>
                    </View>
                    <KeyboardAvoidingView style={styles.keyboard}>
                        <TextInput
                            placeholder="Cool Username"
                            placeholderTextColor="rgba(255,255,255,0.7)"
                            value={this.state.name}
                            onChangeText={(name) => this.setState({ name })}
                        />
                        <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={ () => {
                            Actions.chatRoomList({
                                name: this.state.name
                            });
                        }}
                        >
                            <Text style={styles.buttonText}>LOGIN</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2c3e50"
    },
    logoContainer: {
      alignItems: "center",
      flexGrow: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    logo: {
      width: 400,
      height: 400
    },
    subtext: {
      color: "#ffffff",
      marginTop: 10,
      width: 160,
      textAlign: "center",
      opacity: 0.8
    },
    keyboard: {
      margin: 20,
      padding: 20,
      alignSelf: "stretch"
    },
    buttonContainer: {
      backgroundColor: "rgba(255,255,255,0.2)",
      paddingVertical: 15
    },
    buttonText: {
      textAlign: "center",
      color: "#FFF",
      fontWeight: "700"
    },
    button: {
      backgroundColor: "#27ae60",
      paddingVertical: 15
    },
    errorTextStyle: {
      color: "#E64A19",
      alignSelf: "center",
      paddingTop: 10,
      paddingBottom: 10
    }
  });