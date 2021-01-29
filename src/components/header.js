import React from 'react'
import { View, Text, Image } from 'react-native'
import {Icons} from '../../assets'
export default function Header() {
    return (
        <>
        <View style={{
            backgroundColor:"white",
            height:50,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
           paddingHorizontal:10,
           elevation:3
            }}>
            <View style={{flex:1}}>
                <Image source={Icons.user} style={{height:24, width:24}}/>
            </View>
            <View style={{flex:5, alignItems:"center"}}>
            <Image source={Icons.logo} />
            </View>
            <View style={{flex:1}}></View>
        </View>

        <View style={{
            backgroundColor:"#F4F4F4",
            height:40,
            flexDirection:"row",
            justifyContent:"center",
            alignItems:"center",
           paddingHorizontal:10,
            }}>
            <View style={{flex:1}}>
                <Image source={Icons.location} style={{height:20, width:12}} />
            </View>
            <View style={{flex:8}}>
            <Text>BOGOR</Text>
            </View>
            <View style={{flex:1}}>
            <Image source={Icons.arrow_down}/>
            </View>
        </View>
        </>
    )
}
