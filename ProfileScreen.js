import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Linking,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons"; 

const ProfileScreen = ({ navigation, route }) => {
  const openExternalLink = () => {
    const url = "https://github.com/MuhammadRizqi6677";
    Linking.openURL(url).catch((err) =>
      console.error("An error occurred", err)
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <ImageBackground 
        source={require("./assets/background.jpg")} 
        style={styles.headerBackground}
        blurRadius={5}
      >
        <View style={styles.profileContainer}>
          <Image
            source={require("./assets/profile.png")}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>{route.params.name}</Text>
          <TouchableOpacity onPress={openExternalLink} style={styles.githubLink}>
            <Ionicons name="logo-github" size={24} color="white" />
            <Text style={styles.githubLinkText}>My GitHub Page</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

      <View style={styles.aboutSection}>
        <Text style={styles.sectionTitle}>About Me</Text>
        <Text style={styles.aboutText}>
          Selamat datang di profil saya! Saya Muhammad Rizqi, seorang siswa SMKN 12 Malang dengan pengalaman 1 tahun di bidang Mobile Developer. Saya bersemangat untuk Mengembangkan keahlian saya. Mari berkolaborasi dan menciptakan hal-hal hebat bersama!
        </Text>
      </View>

      <View style={styles.projectsSection}>
        <Text style={styles.sectionTitle}>Projects</Text>
        <View style={styles.projectRow}>
          <ProjectCard 
            imageSource={require("./assets/RV-project.jpeg")} 
            title="Android Recycler View" 
            iconName="view-list"
          />
          <ProjectCard 
            imageSource={require("./assets/Network-project.jpeg")} 
            title="Android Network" 
            iconName="access-point-network"
          />
        </View>
        <View style={styles.projectRow}>
          <ProjectCard 
            imageSource={require("./assets/PKDK-project.png")} 
            title="Game Development" 
            iconName="gamepad-variant"
          />
        </View>
      </View>
    </ScrollView>
  );
};

const ProjectCard = ({ imageSource, title, iconName }) => (
  <View style={styles.projectCard}>
    <Image source={imageSource} style={styles.projectImage} />
    <View style={styles.projectContent}>
      <MaterialCommunityIcons name={iconName} size={24} color="#007BFF" style={styles.projectIcon} />
      <Text style={styles.projectTitle}>{title}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
  },
  headerBackground: {
    padding: 20,
    alignItems: 'center',
  },
  profileContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  githubLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  githubLinkText: {
    color: 'white',
    marginLeft: 5,
  },
  aboutSection: {
    padding: 20,
    backgroundColor: 'white',
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  aboutText: {
    lineHeight: 24,
  },
  projectsSection: {
    padding: 20,
    backgroundColor: 'white',
  },
  projectRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
  },
  projectCard: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    overflow: 'hidden',
    width: '45%', // Adjust width for two columns
  },
  projectImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
  },
  projectContent: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  projectIcon: {
    marginRight: 8,
  },
  projectTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
