import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Ionicons } from '@expo/vector-icons';

type ButtonProp = {
    title: string
    iconName: string
    buttonStyle?: any
    textStyle?: any
    containerStyle?: any
}

const CustomButton = ({title, iconName} : ButtonProp) => {
  return (
    <TouchableOpacity style={styles.btnContainer}>
       <Ionicons name={`${iconName}`} style={styles.icon}/>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: 'black',
        borderRadius: 10,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        gap: 5,
        alignItems: 'center',
        width: wp('25%'),
    },
    containerStyle: {
    },
    icon: {
        fontSize: wp(3.5),
        color: '#fff',  
    },
    text: {
        fontSize: wp(3),
        fontWeight: 'bold',
        color: '#fff',
    },
})