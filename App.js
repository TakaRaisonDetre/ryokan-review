import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {colors} from './style'
import HotelView from './screens/HotelView/index'
import ProfileView from './screens/ProfileView/index'

export default function App() {
  return (
    <ScrollView style={styles.container}>
       <ProfileView/>
       {/* <HotelView/> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBg,
  },
});
