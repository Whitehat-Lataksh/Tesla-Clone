import React from 'react';
import {View, Text, ImageBackground, Alert } from 'react-native';
import styles from './styles';
import StyledButton from "../StyledButton";


const Caritem = (props) => {


    const {name, tagline, taglineCTA ,image} = props.car;
    return(
        <View style={styles.carContainer}>
            <ImageBackground
                source={image}
                style = {styles.image}
            />
            <View style={styles.title}>
                <Text style ={styles.heading} > {name} </Text>
                <Text style ={styles.subtitle}> {tagline} {' '}
                    <Text style = {styles.taglineCTA}>
                        {taglineCTA}
                    </Text>
                </Text>
            </View>
            <View style = {styles.buttonStyles}>
                <StyledButton type ="primary" content = "Custom Order" onPress = {()=> {
                    Alert.alert("This app is currently under showcase!!!")
                }
                }/>

                <StyledButton type ="secondary" content = "Existing Inventory" onPress = {()=> {
                    Alert.alert("This app is currently under showcase!!!")
                }
                }/>
            </View>

        </View>
    )
}

export default Caritem