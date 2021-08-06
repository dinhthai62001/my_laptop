import * as React from 'react';
import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  Button,
  TouchableOpacity,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {} from 'react-native-gesture-handler';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const profile = () => {
  return (
    <View>

      <ScrollView>
        <View style={styles.Container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}> Cá Nhân </Text>
          </View>
          
        </View>

        <View style={styles.bodyContainer}>
          <View style={styles.userContainer}>
            <FontAwesome name="user" size={30} color="#1e88e5" />
          </View>

          <View>
            <View style={styles.DnContainer}>
              <Text style={styles.userText}> Họ và tên</Text>
              <Text style={styles.DNText}> Đăng Nhập/Đăng kí</Text>
            </View>
          </View>

          <View style={styles.chevronContainer}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </View>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Đơn mua</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Voucher</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Vẫn chuyển hàng</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Trung tâm hộ trợ</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Trò chuyện với Shop</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bdy}
          onPress={() => ToastAndroid.show('Mở', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Đánh giá</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
        
          style={styles.bdy}
          onPress={() => ToastAndroid.show(alert='th', ToastAndroid.SHORT)}>
           <View style={styles.pasteContainer}>
            <FontAwesome name="paste" size={30} color="#1e88e5" />
            <Text style={styles.pasteText}>Đăng xuất</Text>
          </View>
          <View style={styles.chevronPaste}>
            <FontAwesome name="chevron-right" size={30} color="#1e88e5" />
          </View>
        </TouchableOpacity>
      
       

    
      </ScrollView>
    </View>
  );
};
export default profile;
const styles = StyleSheet.create({
  Container: {
    flex: 1,        
    borderRadius: 5,
    flexDirection: 'row',
    fontSize: 20,
  },
  headerContainer: {
    paddingBottom: 40,
     flex: 1,
     justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'#050F2C',
    
  },
  headerText: {
    marginTop:40,
    fontSize: 20,
    fontWeight: '700',
    color:'#ffff',
    
  },
  cartContainer: {
    marginTop: 15,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },

  bodyContainer: {
    flex: 2,
    backgroundColor: '#ffffff',
    paddingBottom: 30,

    flexDirection: 'row',
  },
  userContainer: {
    marginTop: 15,
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  DnContainer: {
    flex: 1,
    marginRight: 160,
    marginTop: 20,
  },
  userText: {
    fontSize: 20,
  },
  DNText: {
    marginTop: 10,
    color: '#1e88e5',
    fontSize: 20,
  },
  chevronContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 35,
    marginRight: 10,
  },
  pasteContainer: {
    flexDirection: 'row',
    padding: 20,
  },
  pasteText: {
    marginLeft: 20,
    fontSize: 17,
  },
  chevronPaste: {
    flexDirection:'row',
    marginTop: 12,
  },
  bdy: {
    borderTopWidth: 0.6,
    paddingBottom:10,
    backgroundColor:'#ffffff',
    
      flexDirection: 'row',
      padding: 3,
  },

});
