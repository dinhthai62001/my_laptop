import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Dimensions,
  ToastAndroid,
  Image,
  StatusBar,
} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

const login = () => {
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const navigation = useNavigation();

  const checkLogin = (email, pass) => {
    if (email == '1' && pass == '1') {
      navigation.navigate('Tab');
      ToastAndroid.show('Login success', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Xem lai email or pass', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={styles.allContainer}>
      <StatusBar backgroundColor="#050F2C"  />
      <Image source={require('../../image/anh11.jpg')}  style={{width:'100%' , height:'60%'}} />

      <Text style={styles.textlogin}>Login</Text>

      <View style={styles.container}>
        <TextInput
          style={styles.input}
          value={email}
          placeholder="Email"
          onChangeText={text => setemail(text)}></TextInput>
        <TextInput
          style={styles.input}
          value={pass}
          placeholder="Pass"
          secureTextEntry
          onChangeText={text => setpass(text)}></TextInput>

        <View style={styles.Viewbutton}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => checkLogin(email, pass)}>
            <Text style={styles.text}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Register')}>
            <Text style={styles.text}>Regiter</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default login;
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  allContainer: {
    flex: 1,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },

  hinhnenContainer: {
    justifyContent: 'center',
  },
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 30,
    paddingHorizontal: 20,
  },

  textlogin: {
    fontSize: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    alignContent: 'center',
    marginBottom: 1,

    flexDirection: 'row',
    marginTop: 0,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
  },
  button: {
    padding: 10,
    marginTop: 10,
    marginBottom: 10,
    width: width / 3,
    height: height / 20,
    borderRadius: 10,
    borderWidth: 1,
    alignItems: 'center',
    marginHorizontal: 10,
    backgroundColor: 'black',
    borderColor:'#0000CD',
    backgroundColor:'#050F2C'
  },
  input: {
    padding: 10,
    marginTop: 35,
    borderWidth: 1,
    width: width / 1.2,
    height: height / 15,
    borderRadius: 10,
    borderColor:'#0000CD'
  },
  Viewbutton: {
    flexDirection: 'row',
    
  },
  text: {
    color: 'white',
    fontSize: 15,
  },
});
