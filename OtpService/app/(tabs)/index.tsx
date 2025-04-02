import React from 'react';
import { View, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import LoginOTPForm from '@/components/LoginOTPForm';

// For Gettting the screen dimensions
const { width, height } = Dimensions.get('window');

export default function index() {
  return (
    <View style={styles.container}>
      {/* Top section containing the background image */}
      <View style={styles.topContainer}>
        <ImageBackground 
          source={require('@/assets/images/BG1.png')} 
          style={styles.topBackground} 
        />
      </View>

      {/* Background image for the bottom section */}
      <ImageBackground 
        source={require('@/assets/images/BG2.png')} 
        style={styles.bottomBackground} 
      />

      {/* OTP form Page */}
      <View style={styles.otpContainer}>
        <LoginOTPForm />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a', // Dark background
  },
  topContainer: { // Top scrren CSS
    width: '80%', 
    height: height * 0.5, 
    alignSelf: 'center',
    overflow: 'hidden', // Ensures background doesn't overflow
  },
  topBackground: { 
    top: '40%', 
    left: '15%',
    width: '80%', 
    height: '30%',
    resizeMode: 'contain',
  },
  bottomBackground: { // Top scrren CSS
    position: 'absolute',
    top: '37%', 
    bottom: 0,
    width: '100%',
    height: '80%',
    resizeMode: 'contain',
  },
  otpContainer: {
    position: 'absolute',
    top: '35%', 
    left: '4%', 
    right: '4%', 
    alignItems: 'center',
    padding: 20, 
    borderRadius: 20, // Rounded edges According to the design 
  },
});
