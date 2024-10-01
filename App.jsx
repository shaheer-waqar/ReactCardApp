import React, { useEffect, useState } from 'react'
import { Button, SafeAreaView, ScrollView, Text, View } from 'react-native';
import Card from './componnets/Card';
import axios from 'axios';
// import axios from 'axios';

function App() {
  const [data,setData] = useState([]);
  const getData =()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res => setData(res.data))
    .catch(err => console.log(err))
  }
  useEffect(()=>{
    getData()
  },[])

  return (
    <SafeAreaView>
    <ScrollView style={{padding:0,marginTop:5,paddingHorizontal:15}}>
      <Text style={{fontSize:25,marginBottom:5,textAlign:'center',fontWeight:"bold"}}>All Products</Text>
    <View style={{gap:5}}>
      {data.map((e,i)=>{
        return(
          <Card key={i} data={e}/>

        )
      })}
    </View>
    </ScrollView>
    </SafeAreaView>
  )
}

export default App