import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const AddAppointment = ({ route, navigation }) => {
  const { doctorName } = route.params;
  const [fever, setFever] = useState(false);
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log({ doctorName, fever, date, timeSlot });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.scroll}>
        <View style={styles.container}>
          <View style={styles.card}>
            <Text style={styles.heading}>Book Appointment</Text>
            
            <View style={styles.doctorSection}>
              <Text style={styles.label}>Doctor</Text>
              <Text style={styles.doctorName}>{doctorName}</Text>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Do you have fever?</Text>
              <TouchableOpacity
                style={[styles.toggleButton, fever && styles.activeButton]}
                onPress={() => setFever(!fever)}
              >
                <Text style={[styles.toggleText, fever && styles.activeToggleText]}>
                  {fever ? 'Yes' : 'No'}
                </Text>
              </TouchableOpacity>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Appointment Date</Text>
              <TextInput
                placeholder="Select Date"
                style={styles.input}
                value={date}
                onChangeText={setDate}
                placeholderTextColor="#999"
              />
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Preferred Time</Text>
              <TextInput
                placeholder="Select Time Slot"
                style={styles.input}
                value={timeSlot}
                onChangeText={setTimeSlot}
                placeholderTextColor="#999"
              />
            </View>

            <TouchableOpacity onPress={handleSubmit} style={styles.submitButton}>
              <Text style={styles.submitText}>Book Appointment</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
    paddingBottom: 32,
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 24,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 24,
    textAlign: 'center',
  },
  doctorSection: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 12,
    marginBottom: 24,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#2196f3',
    marginTop: 4,
  },
  fieldGroup: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#333',
  },
  toggleButton: {
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
  activeButton: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  toggleText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  activeToggleText: {
    color: '#fff',
  },
  submitButton: {
    padding: 18,
    backgroundColor: '#2196f3',
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 8,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default AddAppointment;