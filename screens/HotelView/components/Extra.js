import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import {gs, colors} from '../../../style'

export default function Extra() {
    const extra = [
        "Payment at Checkout",
        "Wi-Fi network is off by 12:00 am",
        "No private onsen after 10:00 pm",
        "No more than 2 bad og luggage"

    ]
    return (
        <View style={styles.container}>
            <Text style={gs.sectionTitle}>Before you go </Text>
            <View style={styles.list}>
                {extra.map((extra,key)=>{
                    return <Text style={styles.listItem} key={key}>
                        &mdash; {extra}
                        </Text>
                })}
            </View>

            <View style={{marginTop: 32}}>
               <TouchableOpacity style={styles.filterButton}>
                   <Text style={{fontWeight:"700", color:"#fff"}}>Filter</Text>
               </TouchableOpacity>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        ...gs.sectionContainer,
        marginTop:8,
        marginBottom: 64
    },
    list :{
        marginTop:16,
        marginLeft: 8,

    },
    listItem: {
        color: colors.textSec,
        marginVertical:8
    },
    filterButton :{
        ...gs.button,
        paddingVertical:16
    }
})