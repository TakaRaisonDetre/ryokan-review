import React from 'react';
import { StyleSheet, View, Text, ScrollView , Image } from 'react-native';
import {AntDesign, Entypo } from '@expo/vector-icons';
import {gs} from '../../../style'


const Header = () => {
    return (
       <View >
           <Image 
           source ={require('../../../assets/arai.jpg')}
           style={{width:"100%", height:400}}
           />

           <View style={styles.topButtons}>
            <AntDesign name="close" size={24} color="#fff"/>
             
             <View style={gs.rowCenter}>
                 <AntDesign name="save" size={24} style={styles.topButtonsRight}/>
                 <AntDesign name="sharealt" size={24} style={styles.topButtonsRight}/>
                 <Entypo name="dots-three-vertical" size={18} style={styles.topButtonsRight}/>
             </View>

           </View>
       </View>
    )
}
export default Header 

const styles = StyleSheet.create({
    topButtons :{
       ...gs.rowBetween,
       position: 'absolute',
       top: 64,
       left:32,
       right: 32
    },
    topButtonsRight :{
        marginLeft:22,
        color:"#fff"
    }

})
  

