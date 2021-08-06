import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TextInput,
  ProductItem,
  Button,
  Dimensions,
  StatusBar,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';


import FontAwesome from 'react-native-vector-icons/FontAwesome';
const msi = require('../../image/msi.jpg');
const asus = require('../../image/asus.jpg');
const dell = require('../../image/dell.jpg');
const macbook = require('../../image/macbook.jpg');
const acer = require('../../image/acer.jpg');

const dataCategories = [
  {id: 0, brand: 'Tất cả'},
  {id: 1, brand: 'MSI'},
  {id: 2, brand: 'ASUS'},
  {id: 3, brand: 'DELL'},
  {id: 4, brand: 'MACBOOK'},
  {id: 5, brand: 'ACER'},
];
const datalaptop = [
  {
    id: 1,
    name: 'MSI Gaming GL65 Leopard 10SCXK i7 10750H (217VN)',
    price: '24.490.000₫',
    image: msi,
    gift: '240.490₫',
    note: 'Được chế tác bằng chất liệu chủ đạo là nhôm phay xước, Laptop MSI Gaming GL65 Leopard 10SCXK là chiếc laptop gaming hiện đại được thiết kế theo xu hướng mới hiện nay: mỏng nhẹ và tinh tế. Với các chỉ số ấn tượng như trọng lượng 1.86kg và kích thước 21.7mm, bạn có thể mang theo và chơi game ở bất kỳ đâu cùng bạn bè.',
    id_category: 1,
  },

  {
    id: 2,
    name: 'Asus ZenBook UX425EA i7 1165G7 (KI439T)',
    price: '30.190.000₫',
    image: asus,
    gift: '300.190₫',
    note: 'Laptop Asus ZenBook UX425EA i7 1165G7 mang trên mình một sự trang nhã trong thiết kế với màu hồng thanh lịch, với trọng lượng 1.28kg và kích thước 318 x 218 x 15.9 mm khiến chiếc laptop này vô cùng gọn nhẹ, rất phù hợp với các đối tượng như học sinh, sinh viên hay nhân viên văn phòng vì tính chất thân thiện với nhu cầu di chuyển của mình. Các đường nét của chiếc laptop này vô cùng vuông vức, các mặt phẳng được gia công trơn nhẵn vô cùng tỉ mỉ.',
    id_category: 2,
  },
  {
    id: 3,
    name: 'Dell Gaming G3 15 i7 10750H (P89F002G3500C)',
    price: '27.290.000₫',
    image: dell,
    gift: '270.290₫',
    note: 'Laptop Dell Gaming G3 15 i7 10750H (Core i7-1165G7/ 16GB/ 512GB SSD/ 13.3 inch UHD Touch/ Win10) - Hàng Chính Hãng nhỏ gọn với bộ vi xử lý Intel Core i7-1165G7 thế hệ 10 cùng với bộ nhớ RAM 16GB. Ổ cứng SSD PCIe 512GB giúp khởi động máy và ứng dụng một cách nhanh chóng cũng như lưu trữ dữ liệu lớn',
    id_category: 3,
  },
  {
    id: 4,
    name: 'MacBook Pro M1 2020 Space Grey (Z11C)',
    price: '42.690.000₫',
    image: macbook,
    gift: '420.690₫',
    note: 'MacBook Air mới sử dụng chip M1 có CPU 8 lõi, được chia thành 4 lõi hiệu suất cao (High Performance) và 4 lõi hiệu quả (High Efficiency) cùng với Neural Engine 16 lõi.',
    id_category: 4,
  },
  {
    id: 5,
    name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H',
    price: '28.990.000₫',
    image: acer,
    gift: '280.990₫',
    note: 'Laptop Acer Aspire 3 A315-56-37DV NX.HS5SV.001 (Core i3-1005G1/ 4GB RAM/ 256GB SSD/ 15 FHD/ Win10) - Hàng Chính Hãng có thiết kế màu sắc nổi bật trẻ trung cực thu hút ánh nhìn và trong từng cái chạm, Aspire 3 với trọng lượng ấn tượng chưa đến 2kg sẽ trở thành người bạn đồng hành trong mọi chuyến đi.',
    id_category: 5,
  },
  {
    id: 6,
    name: 'Acer Nitro 5 Gaming AN515 57 727J i7 11800H',
    price: '28.990.000₫',
    image: acer,
    gift: '280.990₫',
    note: 'Laptop Acer Aspire 3 A315-56-37DV NX.HS5SV.001 (Core i3-1005G1/ 4GB RAM/ 256GB SSD/ 15 FHD/ Win10) - Hàng Chính Hãng có thiết kế màu sắc nổi bật trẻ trung cực thu hút ánh nhìn và trong từng cái chạm, Aspire 3 với trọng lượng ấn tượng chưa đến 2kg sẽ trở thành người bạn đồng hành trong mọi chuyến đi.',
    id_category: 5,
  },
];

const images = [
  'https://media.istockphoto.com/photos/digital-marketing-concept-online-advertisement-picture-id1284549946',
  'https://media.istockphoto.com/photos/hand-of-businessman-using-laptop-with-icon-social-media-and-social-picture-id1201069511',
  'https://media.istockphoto.com/photos/searching-browsing-data-information-network-concept-businessman-using-picture-id1264839512',
];
const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

const home = ({navigation}) => {
  const [categories, setCategories] = useState(dataCategories);

  const [datalistlaptop, setdatalistlaptop] = useState(datalaptop);

  function onSelectCategories(item) {
    if (item.id == 0) {
      setdatalistlaptop(datalaptop);
    } else {
      let laptoplist = datalaptop.filter(data => data.id_category == item.id);

      setdatalistlaptop(laptoplist);
    }
  }
  function redercontainer(item) {
    return (
      <View style={{}}>
        <SafeAreaView
          style={{
            backgroundColor: '#050F2C',
            alignItems: 'center',
          }}>
          <StatusBar hidden={true} />
          <Text
            style={{
              justifyContent: 'center',
              marginTop: 10,
              alignItems: 'center',
              fontSize: 20,
              color: '#fff',
            }}>
            My Laptop
          </Text>
          <SafeAreaView
            style={{flexDirection: 'row', paddingTop: 20, paddingBottom: 10}}>
            <View
              style={{
                flex: 1,
                marginLeft: 15,
                alignContent: 'center',
                marginBottom: 1,
                backgroundColor: '#fff',
                flexDirection: 'row',

                paddingHorizontal: 10,
                paddingVertical: 5,
                borderRadius: 5,
              }}>
              <FontAwesome name="search" size={30} />
              <TextInput
                style={{
                  marginLeft: 8,
                  color: '#969696',
                  fontWeight: '500',
                  padding: 4,

                  fontSize: 20,
                }}
                placeholder="">
                {' '}
              </TextInput>
            </View>
            <TouchableOpacity
              style={{paddingHorizontal: 20, marginTop: 15, marginBottom: 4}}
              onPress={() => navigation.navigate('Detaicart', {item})}>
              <FontAwesome color="#ffff" name="shopping-cart" size={30} />
            </TouchableOpacity>
          </SafeAreaView>
        </SafeAreaView>
      </View>
    );
  }

  function renderHeader() {
    onchange = nativeEvent => {};
    return (
      <View>
        <ScrollView>
          <View style={{paddingHorizontal: 12, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: '700'}}>
              {' '}
              Máy tính bảng
            </Text>
            <View style={styles.wrap}>
              <ScrollView
                onScroll={({nativeEvent}) => onchange(nativeEvent)}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                horizontal
                style={{width: WIDTH, height: HEIGHT * 0.2}}>
                {images.map((e, index) => (
                  <Image
                    key={e}
                    resizeMode="stretch"
                    style={{width: WIDTH, height: HEIGHT * 0.2}}
                    source={{uri: e}}
                  />
                ))}
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
  function renderCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: '#000000',
            paddingHorizontal: 10,
            primary: '#ffff',
            borderRadius: 15,
            paddingVertical: 10,
            marginRight: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={() => {
            onSelectCategories(item);
          }}>
          <View>
            <Text style={{fontSize: 20, color: '#ffff'}}>{item.brand}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{padding: 10}}>
        <FlatList
          data={categories}
          horizontal
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      </View>
    );
  }
  function renderlistlaptop() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{paddingBottom: 20}}
          onPress={() => navigation.navigate('Detai', {item})}>
          <View>
            <Image
              style={{height: 150, width: '100%', borderRadius: 20}}
              source={item.image}
              resizeMode="cover"
            />
            <View
              style={{
                position: 'absolute',
                bottom: 0,
                height: 80,
                width: 200,
                backgroundColor: '#ffff',
                borderRadius: 20,
                alignItems: 'center',
              }}>
              {/* {item.categories(categoryID)=>{
                      return(
                          <View style={{flexDirection:'row'}} keyExtractor={categoryID}> 
                          <Text>{getCategoryNameID(categoryID)}</Text>
                          </View>
                        
                      )
                  }} */}
              <Text
                style={{
                  fontSize: 20,
                }}>
                {item.name}{' '}
              </Text>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '700',
            }}>
            Giá:{item.price}{' '}
          </Text>
          <Text
            style={{
              fontSize: 15,
            }}>
            Quà tặng:{item.gift}{' '}
          </Text>
        </TouchableOpacity>
      );
    };
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={datalistlaptop}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 30,
          }}
        />
      </View>
    );
  }
  return (
    <SafeAreaView style={{flex: 1}}>
      {redercontainer()}
      {renderHeader()}
      {renderCategories()}
      {renderlistlaptop()}
    </SafeAreaView>
  );
};

export default home;
const styles = StyleSheet.create({});
