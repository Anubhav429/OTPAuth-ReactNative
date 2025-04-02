import React, { useState, useRef } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function LoginOTPForm() {
  // For storing the OTP digits
  const [otp, setOtp] = useState(['', '', '', '']);
  
  // References for OTP input fields to handle focus
  const inputRefs = useRef<Array<TextInput | null>>([]); 

  // Handles OTP for input change
  const handleOtpChange = (text: string, index: number) => {
    if (text.length > 1) return; // For Prevents pasting more than one character

    const newOtp = [...otp];
    newOtp[index] = text;
    setOtp(newOtp);

    if (text && index < otp.length - 1) {
      // Moves focus to the next input field for easy Nevigate
      inputRefs.current[index + 1]?.focus();
    } else if (!text && index > 0) {
      // Moves focus to the previous input field when deleting for easy Nevigate
      inputRefs.current[index - 1]?.focus();
    }
  };

  return (
    <View style={styles.otpContainer}>
      {/* Label for OTP input */}
      <Text style={styles.label}>Enter OTP</Text>
      
      {/* Horizontal line for separation */}
      <View style={styles.horizontalLine} />

      {/* OTP input fields */}
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)} // Assign ref for handling focus
            style={styles.otpInput}
            maxLength={1} // Allows only one digit per input field
            keyboardType="numeric" // Numeric keyboard for OTP input
            value={digit}
            onChangeText={(text) => handleOtpChange(text, index)}
            onKeyPress={({ nativeEvent }) => {
              if (nativeEvent.key === 'Backspace' && !otp[index] && index > 0) {
                // Moves focus to the previous input field when backspace is pressed
                inputRefs.current[index - 1]?.focus();
              }
            }}
            textContentType="oneTimeCode" // Helps with autofill prevention
            autoComplete="off"
            autoCorrect={false}
          />
        ))}
      </View>

      {/* Resend OTP text  Field*/}
      <Text style={styles.resend}>Resend OTP</Text>
      
      {/* Small horizontal line under resend text */}
      <View style={styles.horizontalLineotp} />
    </View>
  );
}

// Styles for the OTP form
const styles = StyleSheet.create({
  otpContainer: {
    backgroundColor: '#211f22ed', // background color 
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
    width: '100%',
  },
  label: {
    left: '-33%', // Align label CSS to the left C
    color: '#fff',
    fontSize: 16,
    marginTop: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
  otpInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#A020F0', 
    textAlign: 'center',
    fontSize: 20,
    color: '#fff',
    backgroundColor: '#ede8ec94', // Light transparent background for contrast
    borderRadius: 5,
    marginHorizontal: 5,
  },
  horizontalLine: {// Horizonlte line CSS
    width: '100%',
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginVertical: 10,
  },
  horizontalLineotp: {  // Horizonlte line CSS Resend
    width: '40%',
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    left: '-1%',
    marginVertical: 1,
  },
  resend: {
    color: 'white',
    marginTop: 10,
  },
});
