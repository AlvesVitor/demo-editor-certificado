import React from 'react';

import { View, Image, StyleSheet } from "@react-pdf/renderer";

import "./index.scss"

export function FooterBackgroundPdf({ background }) {

    return (
        <View style={styles.footerBackground}>
            {background === '' ?
                <View style={styles.footerBackground} />
                :
                <Image style={styles.footerBackground} src={background} />
            }
        </View>
    )
}

export function FooterBackground({ background }) {

    return (
        <div className="footerBackground">
            {background === '' ?
                <div className="footerBackground">
                </div>
                : <img className="footerBackground" src={background} alt='img' />
            }
        </div>
    )
}

const styles = StyleSheet.create({
    footerBackground: {
        width: '100%',
        height: '100%'
    },
})