import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';

const Orders = () => {
  const router = useRouter();

  const orders = [
    { id: '1', name: 'Pizza', color: '#8ecd73' },
    { id: '2', name: 'Kropek', color: '#64b841' },
    { id: '3', name: 'Sisig', color: '#47832e' },
    { id: '4', name: 'Chicken ni Bai', color: '#2b4f1b' },

  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Order</Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[styles.item, { backgroundColor: item.color }]}
            onPress={() => Alert.alert('You selected ' + item.name)}
          >
            <Text style={styles.itemText}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => router.push('/')}
      >
        <Text style={{ color: 'white' }}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Orders;

const styles = StyleSheet.create({
  container: {
    
    padding: 130,
    backgroundColor: '#85a16a'
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    padding: 15,
    marginVertical: 6,
    borderRadius: 8,
  },
  itemText: {
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 20,
    backgroundColor: '#333',
    padding: 12,
    width: 130,
    alignItems: 'center',
    borderRadius: 6,
    alignSelf: 'center', 
  },
});