import React from "react";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

import "./index.scss";

export function ContentCardPdf({ contentDescription  }) {
    return (
        <View style={[styles.contentCardContainer, { color: contentDescription.color }]}>
            <Text style={contentDescription.descriptionStyle}>{contentDescription.description}</Text>

            <Text style={contentDescription.addressStyle}>{contentDescription.address}</Text>
        </View>
    )
}

export function ContentCard({ contentDescription }) {

    return (
        <div className="contentCardContainer" style={{ color: contentDescription.color }}>
            <p style={contentDescription.descriptionStyle}>{contentDescription.description}</p>

            <p style={contentDescription.addressStyle}>{contentDescription.address}</p>
        </div>
    )

}

const styles = StyleSheet.create({
    contentCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingVertical: 0,
        paddingHorizontal: 50,
       
    },

})