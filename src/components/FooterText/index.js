import React from "react";
import { View, StyleSheet, Text } from "@react-pdf/renderer";

import "./index.scss"

export function FooterTextPdf({ footerText }) {

    return (
        <View style={[styles.footerTextContainer, { backgroundColor: footerText.backgroudColor }]}>
            <Text style={footerText.textStyle}>{footerText.text}</Text>
        </View>

    )
}

export function FooterText({ footerText }) {

    return (
        <div className="footerTextContainer" style={{backgroundColor: footerText.backgroudColor}}>
            <p style={footerText.textStyle}>
                {footerText.text}
            </p>
        </div>

    )
}

const styles = StyleSheet.create({
    footerTextContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        paddingHorizontal: 40,
        overflow: 'hidden'
    },

})