import { Button, Text, View, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const HalamanUtama = ({ navigation }) => {
  const users = [
    {
      name: "brynn",
      avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg",
    },
  ];
  const handleLogout = () => {
    
    navigation.navigate("Login");
  };
  return (
    <ImageBackground
      source={require('./assets/yt.jpg')} // Ganti dengan path gambar Anda
      style={styles.backgroundImage}
      blurRadius={5}
      >

      <View style={styles.aboutSection}>
        <Text style={styles.aboutText}>
        WestLion adalah klub sepak bola profesional yang berdedikasi untuk mencapai keunggulan di dalam dan di luar lapangan. Didirikan pada tahun 2022, klub ini memiliki sejarah panjang dalam mengembangkan bakat-bakat muda dan berkompetisi di level tertinggi.
        </Text>
      </View>  
      
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate("Profile", { name: "Muhammad Rizqi" })
          }
        >
          <Ionicons name="person-sharp" size={50} color="white" />
          <Text style={styles.buttonLabel}>Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => 
            navigation.navigate("DaftarMember")}
        >
          <Ionicons name="people-sharp" size={50} color="white" />
          <Text style={styles.buttonLabel}>Data Member</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button]}>
          <Ionicons name="settings-sharp" size={50} color="white" />
          <Text style={[styles.buttonLabel]}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.logoutButton]} // Style khusus untuk tombol Keluar
          onPress={handleLogout}
        >
          <Ionicons name="log-out-sharp" size={50} color="white" />
          <Text style={[styles.buttonLabel]}>Keluar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutSection}>
      <Text style={styles.sectionTitle}>©copyright rizqi.id</Text>
      </View>  
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  aboutSection: {
    padding: 30,
    backgroundColor: 'white',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  aboutText: {
    lineHeight: 24,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // Sesuaikan mode resize sesuai kebutuhan
    justifyContent: 'center', // Pusatkan konten secara vertikal
  },
  logoutButton: {
    flex: 1, // Key for equal width: each button takes 1 share of space
    aspectRatio: 1, // Ensures a square shape
    backgroundColor: "#CB1140",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5, // Added for spacing between buttons
  },
  container: {
    flex: 1,
    padding: 20, // Increased padding for better spacing
    justifyContent: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  button: {
    flex: 1, // Key for equal width: each button takes 1 share of space
    aspectRatio: 1, // Ensures a square shape
    backgroundColor: "#007BFF",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5, // Added for spacing between buttons
  },
  icon: {
    marginBottom: 5,
  },
  buttonLabel: {
    color: "white",
    fontWeight: "bold",
  },
});

export default HalamanUtama;
