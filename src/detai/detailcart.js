import React,{useState, useEffect}  from 'react';
import { View,Text, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const detailcart = ({navigation}) =>{         
    return(
        <View style={{flex:1}}>
           
            <View 
            style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
                }}>
                <FontAwesome size={100} name='cart-arrow-down'/>
                <Text style={{fontSize:15,marginTop:20,}}>Không có sản phẩm trong giỏ hàng</Text>
                <TouchableOpacity 
                style={{width:400,
                height:50,
                paddingTop:20,
                backgroundColor:'#ffffff',
                marginTop:20,
                borderRadius:10,justifyContent:'center',alignItems:'center'

                }}
                onPress={()=>navigation.navigate("Home")}>
                    <Text style={{fontSize:20,fontWeight:'700',color:"#1e88e5"}}>VỀ TRANG CHỦ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
export default detailcart;