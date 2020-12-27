import React from 'react'
import { View, Text, StyleSheet, BackHandler, ImageBackground } from 'react-native'
import {Feather, Entypo} from '@expo/vector-icons'
import {gs, colors} from '../../../style'

const starColors =["#e3ab53", "#e3ab53", "#e3ab53", "#e3ab53", "#8b6f43"]

const Circle = props =>{
    return <View style={[styles.circle, props.style]}/>
}


export default function Stats() {
    return (
        <View style={styles.container}>
             <View style ={styles.wetherContainer}>
                 <Feather name="sun" size={24} color= {colors.darkHl} />

                 <View style={{marginLeft:10}}>
                     <Text style={styles.title}>22°</Text>
                     <Text style={styles.subTitle}>Sunny</Text>
                 </View>
             </View>
             <View >
                 <Text style = {styles.title}>
                     8.4 <Text style={[styles.subTitle, {paddingLeft:10}]} >&nbsp;&nbsp; + 6k votes</Text>
                 </Text>

                 <View style={gs.rowCenter}>
                     {starColors.map((clr,index)=>{
                    return ( 
                    <Entypo name="star" size ={14} color={clr} key={index} style={{marginHorizontal:2}}/>
                    );
                     })}
                 </View>
             </View>

             <View style={styles.circleContainer}>
                 <Circle style={{backgroundColor:"#999", marginRight: -10, zIndex:3}}/>
                 <Circle style={{backgroundColor:"#888", marginRight: -10, zIndex:3}}/>
                 <Circle style={{backgroundColor:"#777", marginRight: -10, zIndex:3}}/>
                
             </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        ...gs.rowCenter,
        ...gs.sectionContainer
    },
    wetherContainer :{
        ...gs.rowCenter,
        marginRight:14,
        borderRightColor: "#444",
        borderRightWidth:1
    },
    title :{
        color:colors.text,
        fontSize:18,
        fontWeight: "600"
    },
    subTitle:{
        color: colors.textSec,
        fontSize :12,
        fontWeight: "700"
    },
    circleContainer :{
        flex:1,
        flexDirection:'row',
        justifyContent:'flex-end'
    },
    circle :{
        width: 36,
        height:36,
        borderRadius: 36/2,
        borderWidth:2,
        borderColor:colors.lightBg
    }

})