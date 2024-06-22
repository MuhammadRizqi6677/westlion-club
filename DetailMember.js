import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Linking } from "react-native";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

const DetailMember = ({ route }) => {
  const { member } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.card}>
        <Image source={{ uri: member.image }} style={styles.image} />

        <View style={styles.cardContent}>
          <Text style={styles.title}>
            {member.firstName} {member.lastName}
          </Text>
          <View style={styles.iconTextContainer}>
            <Ionicons name="calendar-outline" size={20} color="#333" style={styles.icon} />
            <Text style={styles.description}>Birth Date: {member.birthDate}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <MaterialIcons name="email" size={20} color="#333" style={styles.icon} />
            <Text style={styles.description}>Email: {member.email}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Ionicons name="location-outline" size={20} color="#333" style={styles.icon} />
            <Text style={styles.description}>Address:</Text>
            <Text style={styles.indentedText}>{member.address.state}, {member.address.stateCode}</Text>
            <Text style={styles.indentedText}>{member.address.city}, {member.address.postalCode}</Text>
            <Text style={styles.indentedText}>{member.address.country}</Text>
          </View>
          <View style={styles.iconTextContainer}>
            <Ionicons name="call-outline" size={20} color="#333" style={styles.icon} />
            <Text style={styles.description}>Phone Number: {member.phone}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flexGrow: 1,
    padding: 16,
  },
  card: {
    backgroundColor: "#F8F8FF", // Slightly lighter background
    borderRadius: 15,  // More pronounced rounding
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5, // For Android shadow
  },
  image: {
    width: "100%",
    height: 200, // Adjusted image height for better proportions
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 20,
  },
  title: {
    fontSize: 28, // Larger font size
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16, 
    color: "#333", // Darker text for better contrast
    marginBottom: 5,
  },
  indentedText: {
    marginLeft: 20,
  },
  iconTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
});

export default DetailMember;
