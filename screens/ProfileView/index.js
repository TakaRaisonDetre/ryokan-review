import React, { Component } from 'react'
import { Text, View , StyleSheet, ScrollView, StatusBar, ActivityIndicator} from 'react-native'
import Header from './components/Header'
import {gs, colors} from '../../style'



export default class index extends Component {
  state ={
       user:{},
       isLoading: true
  }
  
  async componentDidMount(){
      try {
        let res = await fetch("https://randomuser.me/api/?inc=name,picture,location&noinfo")
        let users = await res.json();
        console.log(users)
  
           this.setState({user: users.results[0]},()=>{
               this.setState({isLoading: false})

           })

      }catch(err){
        console.log("error at fetching",err)
      }
  }
  
    render() {
     if(this.state.isLoding){
         return(
             <View style={[gs.center, styles.container]}>
                 <StatusBar barStyle="light-content"/>
                
             <ActivityIndicator size="large" />
             </View>
         )
     }

        return (
            <View style={styles.container}>

                <Header user={this.state.user}/>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
       backgroundColor: colors.darkBg
    }
})