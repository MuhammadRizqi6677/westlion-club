import React from "react";
import { 
View, 
Text, 
StyleSheet, 
TouchableOpacity, 
ScrollView,
TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const SettingsScreen = ({navigation}) => {
return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
    <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        
        <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="person-circle-outline" size={24} color="#007bff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Edit Profile</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#888" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="key-outline" size={24} color="#007bff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Change Password</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#888" style={styles.arrowIcon} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem}>
        <Ionicons name="notifications-outline" size={24} color="#007bff" style={styles.menuIcon} />
        <Text style={styles.menuText}>Notifications</Text>
        <Ionicons name="chevron-forward-outline" size={24} color="#888" style={styles.arrowIcon} />
        </TouchableOpacity>
    </View>
    </ScrollView>
);
};

const styles = StyleSheet.create({
scrollViewContent: {
    flexGrow: 1,
    padding: 20,
},
container: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 3, // Add shadow (Android)
},
title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333', // Darker title color
},
menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: StyleSheet.hairlineWidth, 
    borderBottomColor: '#eee',
},
menuIcon: {
    marginRight: 15,
},
menuText: {
    flex: 1, // Allow text to take up remaining space
    fontSize: 16,
},
arrowIcon: {
    marginLeft: 10,
},
});

export default SettingsScreen;
