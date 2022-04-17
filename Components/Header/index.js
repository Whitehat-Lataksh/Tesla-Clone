import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const Header = (props) => {
    return(
        <View style={styles.container}>
            <Image source = {require('../../assets/images/logo.png')} style = {styles.logo}/>
            <Image style = {styles.hamBurger} source = {require('../../assets/images/menu.png')}/>
        </View>
    )
}

export default Header