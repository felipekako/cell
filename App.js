import { SafeAreaView, FlatList, Image, StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';
import styled from 'styled-components/native';
export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: "#4F4F4F",
    flex:1,
  },
  divider:{
    height: StyleSheet.hairlineWidth,
    backgroundColor: "#DCDCDC",
    marginHorisontal: 16,
    marginTOp: 16,

  }
})