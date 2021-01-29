import React from 'react'
import { View, Text, Image } from 'react-native'
import {Icons} from '../../assets'
export default function Header() {
    return (
        <View style={{
            backgroundColor:"white",
            height:50,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
           paddingHorizontal:10
            }}>
            <View style={{flex:1}}>
                <Image source={Icons.user}/>
            </View>
            <View style={{flex:5, alignItems:"center"}}>
            <Image source={Icons.logo} />
            </View>
            <View style={{flex:1}}></View>
        </View>
    )
}
