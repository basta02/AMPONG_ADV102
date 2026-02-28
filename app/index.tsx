import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  FlatList,
  Button,
  TouchableOpacity,
  KeyboardAvoidingView,
  Modal,
  Alert,
  StyleSheet,
  TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import SearchBar from './components/SearchBar';

const Home = () => {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [inputText, setInputText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  

  const closeModal = () => {
    setModalVisible(false);
    Alert.alert('Modal Closed');
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>Home</Text>

        {/* SearchBar at the top with subtle background */}
        <View style={styles.searchWrapper}>
          <SearchBar
            value={search}
            onChangeText={setSearch}
            placeholder="Search here..."
          />
        </View>

        
        

        {/* Input Section */}
        <Text style={{ marginTop: 20 }}>Enter Something:</Text>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type here..."
        />

        {/* Buttons */}
        <TouchableOpacity
          style={styles.webButton}
          onPress={() => {
            Alert.alert('Going to Orders');
            router.push('/orders');
          }}
        >
          <Text style={styles.webButtonText}>Go to Orders</Text>
        </TouchableOpacity>

        
          
        {/* Modal Button */}
        <TouchableOpacity
          style={styles.webButton}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.webButtonText}>Show Modal</Text>
        </TouchableOpacity>

        {/* Modal */}
        <Modal visible={modalVisible} transparent animationType="slide">
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text>This is a modal</Text>

              <Button title="Close" onPress={closeModal} color= '#85a16a'/>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 115,
    alignItems: 'center',
    backgroundColor: '#85a16a',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#222',
  },
  searchWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 8,
    marginBottom: 15,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  listItemWrapper: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  webButton: {
    width: '100%',
    backgroundColor: '#228b22',
    padding: 15,
    borderRadius: 8,
    marginBottom: 12,
    alignItems: 'center',
  },
  webButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#228b22',
    padding: 20,
    borderRadius: 20,
    height: 100,
    width: 300,
    alignItems: 'center',
  },
});