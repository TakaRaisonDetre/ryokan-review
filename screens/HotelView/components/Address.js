import React from 'react'
import { View, Text , StyleSheet, TouchableOpacity, Image} from 'react-native'
import {Entypo} from '@expo/vector-icons'
import {gs, colors} from '../../../style'

export default function Address() {
    return (
        <View>
          <View style={{backgroundColor:"000"}}>
          {/* <Image source = {require('../../../assets/map.png')} stylle={{height:200, opacity:0.2}}/> */}

          </View>
   
          <View style={styles.addressContainer}>
              <Text style={styles.address} >{`970 Shuzenji, Izu-shi, Shizuoka 410-2416\n`}</Text>
          </View>

        </View>
    )
}


const styles = StyleSheet.create({
    addressContainer:{
      ...gs.absoluteFull,
      flexDirection:'row',
      paddingHorizontal:32,
      paddingVertical: 16
    }
})