import React ,{useState} from 'react';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,Dimensions} from 'react-native';
import auth from '@react-native-firebase/auth';

const Register = () =>{
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
const register = (email,pass) => {

    auth()
    .createUserWithEmailAndPassword(email,pass)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
  
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
  
      console.error(error);
    });
};
    
    
    return(
        <View style={styles.container}>
            <Text style={styles.textlogin}>REGISTER</Text>
            <TextInput style={styles.input} value={email} placeholder="Email" onChangeText={(text)=> setemail(text)}></TextInput>
            <TextInput style={styles.input} value={pass} placeholder="Pass" onChangeText={(text)=> setpass(text)}></TextInput>


          <View style={styles.Viewbutton}>
        
            <TouchableOpacity style={styles.button}
            onPress={() => register(email,pass)}>
            <Text style={styles.text}>Regiter</Text>    
            </TouchableOpacity>
          </View>
        </View>


    );

    }
export default Register;
const {width , height} =Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: '#ffffff',

    },
    textlogin: {
        fontSize:20,
        
    },
    button:{
        padding:10,
        marginTop:10,
        marginBottom:10,
        width: width / 3 ,
        height : height / 20,
        borderRadius:10,
        borderWidth:1,
        alignItems:'center',
        marginHorizontal:10,
        backgroundColor:'black',
        


    },
    input:{
        padding:20,
        marginTop:30,
        borderWidth:1,
        width : width/ 1.2 ,
        height : height /15,
        borderRadius:10,
 
    },
    Viewbutton:{
        flexDirection:'row',
        

    },
    text:{
        color:'white',
        fontSize:15,
        
    },

  


})
