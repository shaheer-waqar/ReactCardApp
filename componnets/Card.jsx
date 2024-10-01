import React from 'react'
import { Button, Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';

function Card({data}) {
  return (
    <View style={[style.container,]}>
        <Image style={{width:"100%", height:250,objectFit:"cover"}} source={{uri:data.image}}/>
        <View style={style.cardDetail}>
        <Text style={{fontSize:16,fontWeight:'600'}}>{data.title.slice(0,40)}..</Text>
        <Text>{data.description.slice(0,50)}..</Text>
        <TouchableOpacity>
            <Text style={{backgroundColor:"blue",color:"white" ,paddingVertical:5,textAlign:'center'}}>Buy now</Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width:"100%",
        borderWidth:1,
        borderColor:"black",
        borderRadius:5,
        overflow:"hidden"
    },
    cardDetail:{
      padding:5,
      paddingVertical:10,
      gap:3
    }

})

export default Card