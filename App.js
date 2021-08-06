import 'react-native-gesture-handler';
import React from 'react';
import Login from './src/login-register/login';
import Register from './src/login-register/Register';
import Tab from './src/tab';
import Splash from './src/Splash';
import Detai from './src/detai/detail';
import Detaicart from './src/detai/detailcart';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


const Stack = createStackNavigator();


 const App = () => {
   return(

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" screenOptions={{headerShown: false}}>
        <Stack.Screen name ="Splash" component={Splash} options={{title:'Splash'}}/>
        <Stack.Screen name ="Login" component={Login} options={{title:'Login'}} />
        <Stack.Screen name ="Register" component={Register} options={{title:'Register'}}/>
        <Stack.Screen name ="Tab" component={Tab} options={{title:'Home'}}  />
        <Stack.Screen name ="Detai" component={Detai} options={{title:'Detai'}}  />
        <Stack.Screen name ="Detaicart" component={Detaicart} options={{title:'Detaicart'}}  />

      </Stack.Navigator>

    </NavigationContainer>

   );
 }
export default App;