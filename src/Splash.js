import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  LinearGradient,
  StatusBar,
} from 'react-native';

const Splash = ({navigation}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#ffffff" />
      <View style={styles.header}>
        <Image
          source={require('../image/splash.jpg')}
          style={{height: '50%', width: '50%'}}
          resizeMode="stretch"
        />
      </View>
      <View style={styles.footer}>
        <Text style={styles.text}>Stay connected with everone</Text>
        <Text>Sign in with account</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <View style={styles.signView}>
            <Text style={styles.sign}>Agreed</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 60,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 30,
  },
  signView: {
    height: 40,
    width: 150,
    backgroundColor:'#050F2C',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 50,
    marginHorizontal: 250,
  },
  sign: {
    fontSize: 15,
    color: '#fff',
  },
});
