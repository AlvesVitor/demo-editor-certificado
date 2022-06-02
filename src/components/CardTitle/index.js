import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";

import "./index.scss"

export function CardTitlePdf({ contentTitle }) {
    return (
        <View style={styles.cardTitleContainer}>
            <Text style={contentTitle.titleStyle}>{contentTitle.title}</Text>
        </View>
    )
}

export function CardTitle({ contentTitle }) {
    return (
        <div className="cardTitleContainer">
            <p style={contentTitle.titleStyle}>{contentTitle.title}</p>
        </div>
    )
}

const styles = StyleSheet.create({
    cardTitleContainer: {
        paddingTop: 0,
        paddingHorizontal: 40,
        paddingBottom: 10
    },
})