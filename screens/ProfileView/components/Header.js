import React from 'react'
import { Text, View , StyleSheet, ScrollView, Image} from 'react-native'
import {LinearGradient} from 'expo-linear-gradient'
import {gs, colors} from '../../../style'
import {Ionicons, Entypo} from '@expo/vector-icons'



 class Header extends React.Component {
  render(){
       const user = this.props.user
       console.log(this.props.user)
    
   const name = `${user.name.first} ${user.name.last}`
    return (
        <LinearGradient colors={[colors.lightPurple, colors.DarkPurple]} star={[0,0]} end={[1,1]}>
        <View style={{marginHorizontal:32, paddingVertical:64}}>
            <View style={gs.rowBetween}>
         <Ionicons name="md-arrow-back" color={colors.text} size={32} />
         <Entypo name="dots-three-vertical" color = {colors.text} size ={24}/>
            </View>
           
            <View style={styles.imageContainer}>
                <View >
                    <View style={styles.check}>
                        <Ionicons name="md-checkmark" size={20} color={colors.lightPurple}/>
                    </View>
               <Image 
               source={{uri: user.picture.large}} 
               style={{width:100, height:100, borderRadius:50}}/> 
                </View>
            </View>
  
            <View style={[gs.center, {marginVertical:12}]}>
                <Text style={gs.title}>{name}</Text>
               <Text style={[gs.subTitle,]}>Traveller / Blogger </Text>
            </View>
        </View>
        </LinearGradient>
    )
  }
}   
export default Header

const styles = StyleSheet.create({
    imageContainer:{
        ...gs.center,
        marginTop:16,
        shadowColor: colors.darkbg,
        shadowOffset: {height:4, width:1},
        shadowOpacity:0.5,
    },
    check:{
        ...gs.center,
        backgroundColor: colors.text,
        borderRadius:100,
        width:28,
        height:28,
        shadowColor:colors.darkBg,
        shadowOffset: {height:4, width:1},
        shadowOpacity:0.3,
        position:'absolute',
        zIndex:1,
        right:-16,
        bottom:3

    }
})