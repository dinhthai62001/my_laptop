import React, {useState, useEffect} from 'react';
import {View, Text, SafeAreaView, TouchableOpacity,Image, TextInput} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const detail = ({route, navigation}) => {
  const [detailaptop, setdetailaptop] = useState(null);
  useEffect(() => {
    let {item} = route.params;
    setdetailaptop(item);
   
});
 
  function renderHeader() {
    return (
      <View style={{flexDirection: 'row',paddingBottom:40,backgroundColor:'#050F2C'}}>
        <TouchableOpacity
          style={{
            width: 50,
            paddingLeft: 20,           
            justifyContent: 'center',
          }}
          onPress={() => navigation.goBack()}>
          <FontAwesome
            style={{marginTop: 20}}
            name="long-arrow-left"
            size={40}
            color="#ffff"
          />
        </TouchableOpacity>
        <View 
        style={{
            flex:1,
            marginTop:20,
            marginLeft:20,        
            justifyContent:'center',
                
            }}>
            <Text style={{fontSize:25,color:'#ffff'}}>DetaiLaptop</Text>
        </View>
      </View>
    );
  }

  function renderItemLaptop(){
      return(
          <View 
            style={{
                marginLeft:40,
                width:'80%',
                height:400,
                backgroundColor:'#4231',
                marginTop:10,
                

          }}>
          
           <View style={{flex:1}}>
           <Text 
           style={{
               fontWeight:'500',
               fontSize:25,
               
               }}>{detailaptop?.name}</Text>
           <Image 
           style={{ 
               marginTop:30,
               marginLeft:40,
           }}
           resizeMode="cover"
           source={detailaptop?.image} />
           <Text 
           style={{
               fontSize:20,
               fontWeight:'700',
               marginTop:30,
               
               }}>Giá:{detailaptop?.price}</Text>
           <Text style={{fontSize:15,fontWeight:'500'}}>Quà tặng:{detailaptop?.gift}</Text>
           <Text style={{marginTop:10,color:'#6699FF'}}>Free Ship+Miễn phí vẫn chuyển</Text>
          
            </View> 
           
            
           </View>
           
   

      )
  }

function renderFoot(item){
    return(
        <View style={{flex:1,marginVertical:10,marginLeft:10,}}>
            <Text style={{fontSize:20,fontWeight:'700'}}>Mô tả sản phẩm</Text>
            <Text style={{fontSize:15,}}>{detailaptop?.note}</Text>
            <Text style={{fontSize:20,marginTop:20,borderTopWidth: 0.5,}}>Số Lượng</Text>
         
            <View 
            style={{
              flex:1,
              flexDirection:'row',
              backgroundColor: '#ffff',
              width:100,
              alignContent:'center',
              paddingHorizontal: 10,
             
              paddingVertical: 10,
              


              }}>
          
              <Text style={{fontSize:20,color:'#000000',marginRight: 15,borderRadius: 15,}}>-</Text>
              <Text  style={{fontSize:20,color:'#000000',marginRight: 15,borderRadius: 15,}}>1</Text>
              <Text  style={{fontSize:20,color:'#000000',marginRight: 15,borderRadius: 15,}} >+</Text>
            </View>


            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            
              <TouchableOpacity 
              style={{
                width:150,
                height:60,
                backgroundColor:'#FF3300',
                borderRadius:10,
                alignItems:'center'}}
                // onPress={() => navigation.navigate('Detaicart', {item})}>
                >
                <Text style={{fontSize:35,color:'#ffff'}}>Buy</Text>
              </TouchableOpacity>
              
            </View>
        </View>
    )
}
  return (
  <SafeAreaView style={{flex:1}}>

  {renderHeader()}
  {renderItemLaptop()}
  {renderFoot()}
  </SafeAreaView>
  )
}
export default detail;
