import React, { useState } from "react";
import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    Alert, 
    TouchableOpacity, 
    ImageBackground 
} from "react-native";
import { Ionicons } from '@expo/vector-icons';

const HalamanLogin = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const validUsername = "demo";
    const validPassword = "demo";

    if (username === validUsername && password === validPassword) {
      navigation.navigate("Home");
    } else {
      Alert.alert(
        "Login Gagal",
        "Masukkan username dan password yang benar"
      );
    }
  };

  return (
    <ImageBackground
      source={require('./assets/login-bg.jpg')} // Ganti dengan gambar background yang sesuai
      style={styles.backgroundImage}
      blurRadius={5}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Selamat Datang</Text>
        
        <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={24} color="gray" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={setUsername}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={24} color="gray" style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            onChangeText={setPassword}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Masuk</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'contain'
    justifyContent: 'center',
  },
  container: {
    backgroundColor: 'rgba(255,255,255,0.7)', // Semi-transparent white background
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 30,
    color: '#333',
    textAlign: 'center', // Center the title
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 50,
    fontSize: 16,
  },
  loginButton: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default HalamanLogin;
