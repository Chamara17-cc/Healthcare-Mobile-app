import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const AddAppointment = ({ route, navigation }) => {
  const { doctorName } = route.params;
  const [fever, setFever] = useState(false);
  const [selectedDay, setSelectedDay] = useState(new Date().getDate());
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '2:00 PM', '2:30 PM',
    '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM',
  ];

  const handleSubmit = () => {
    if (!selectedTimeSlot) {
      alert('Please select a time slot');
      return;
    }

    const selectedDate = new Date(selectedYear, selectedMonth - 1, selectedDay);
    console.log({
      doctorName,
      fever,
      date: selectedDate.toLocaleDateString(),
      timeSlot: selectedTimeSlot,
    });
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
              <Text style={styles.label}>Select Date</Text>
              <View style={styles.pickerRow}>
                <Picker
                  selectedValue={selectedDay}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedDay(itemValue)}
                >
                  {Array.from({ length: 31 }, (_, i) => (
                    <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={selectedMonth}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                >
                  {Array.from({ length: 12 }, (_, i) => (
                    <Picker.Item key={i + 1} label={`${i + 1}`} value={i + 1} />
                  ))}
                </Picker>
                <Picker
                  selectedValue={selectedYear}
                  style={styles.picker}
                  onValueChange={(itemValue) => setSelectedYear(itemValue)}
                >
                  {Array.from({ length: 5 }, (_, i) => {
                    const year = new Date().getFullYear() + i;
                    return <Picker.Item key={year} label={`${year}`} value={year} />;
                  })}
                </Picker>
              </View>
            </View>

            <View style={styles.fieldGroup}>
              <Text style={styles.label}>Available Time Slots</Text>
              <View style={styles.timeSlotContainer}>
                {timeSlots.map((slot) => (
                  <TouchableOpacity
                    key={slot}
                    style={[
                      styles.timeSlot,
                      selectedTimeSlot === slot && styles.selectedTimeSlot,
                    ]}
                    onPress={() => setSelectedTimeSlot(slot)}
                  >
                    <Text
                      style={[
                        styles.timeSlotText,
                        selectedTimeSlot === slot && styles.selectedTimeSlotText,
                      ]}
                    >
                      {slot}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <TouchableOpacity
              onPress={handleSubmit}
              style={[
                styles.submitButton,
                !selectedTimeSlot && styles.disabledButton,
              ]}
              disabled={!selectedTimeSlot}
            >
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
    backgroundColor: '#f9f9f9',
  },
  scroll: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  doctorSection: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 8,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  fieldGroup: {
    marginBottom: 16,
  },
  toggleButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    backgroundColor: '#ddd',
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#007bff',
  },
  toggleText: {
    fontSize: 16,
    color: '#333',
  },
  activeToggleText: {
    color: '#fff',
  },
  pickerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  picker: {
    flex: 1,
    height: 50,
    marginHorizontal: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    marginTop: 8,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 12,
    margin: 4,
  },
  selectedTimeSlot: {
    backgroundColor: '#007bff',
    borderColor: '#0056b3',
  },
  timeSlotText: {
    fontSize: 14,
    color: '#333',
  },
  selectedTimeSlotText: {
    color: '#fff',
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  submitText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});


export default AddAppointment;
