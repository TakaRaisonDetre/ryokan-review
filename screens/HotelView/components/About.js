import React from 'react'
import { View, Text ,StyleSheet } from 'react-native'
import {gs, colors} from '../../../style'

const hotel ={
    name : "Arai Ryokan",
    price :"100,000 JPY",
    location: "Shuzenji",
    about: 'With more than 300 years of history, one of the most authentic ryokan in Izu Penninsula'

}

export default function About() {
    return (
        <View style={styles.container}>
            <Text style={gs.title}>{hotel.name}</Text>
            <Text style={styles.info}>
                {hotel.price} &#8226; {hotel.location}  
            </Text>
            <View style = {gs.divider}/>

            <Text style={gs.sectionTitle}> About {hotel.name}</Text>
            <Text style ={styles.about}>{hotel.about}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container :{
       ...gs.sectionContainer,
       backgroundColor: colors.darkBg
       
    },
    info :{
        color:colors.textSec,
        fontWeight: '600',
        marginTop: 4
    },
    about:{
        fontSize:13,
        fontWeight: '600',
        color: colors.textSec,
        marginTop:6, 
        lineHeight: 20
    }
})