import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator, // Added for loading state
} from "react-native";
import axios from "axios";
import { Ionicons } from '@expo/vector-icons'; // Added for icons

const DaftarMember = ({ navigation }) => {
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/users")
      .then((response) => {
        setMembers(response.data.users);
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false)); // Set loading to false after fetching
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailMember", { member: item })}
      style={styles.memberItem}
    >
      <View style={styles.memberContent}>
        <Ionicons name="person-circle-outline" size={32} color="#007AFF" style={styles.memberIcon} />
        <Text style={styles.memberName}>{item.firstName} {item.lastName}</Text> 
      </View>
    </TouchableOpacity>
  );

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  return (
    <FlatList
      data={members}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={styles.listContent} // Added for content padding
    />
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContent: {
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  memberItem: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 3, // Add a subtle shadow (Android)
  },
  memberContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  memberIcon: {
    marginRight: 10,
  },
  memberName: {
    fontSize: 18,
    fontWeight: '500', // Slightly bolder font
  },
});

export default DaftarMember;
