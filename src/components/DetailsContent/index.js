import React from "react";

import { View, Text, StyleSheet } from "@react-pdf/renderer";

import "./index.scss";

export function DetailsContentPdf({ verse }) {

    return (
        <View style={styles.detailsContentContainer} wrap={false}>
            <Text style={verse.titleStyle}>{verse.title}</Text>
            <Text style={[styles.text, verse.detailsStyle]}>{verse.details}</Text>
        </View>
    )
}

export function DetailsContent({ verse }) {

    return (
        <div className="detailsContentContainer">
            <p style={verse.titleStyle}>{verse.title}</p>
            <p style={verse.detailsStyle}>{verse.details}</p>
        </div>
    )


}

const styles = StyleSheet.create({
    detailsContentContainer: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 40,

    },
    text: {
        marginTop: 20
    }
})