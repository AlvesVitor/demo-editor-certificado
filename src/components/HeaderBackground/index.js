import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";

import "./index.scss"

export function HeaderBackgroundPdf({ background }) {

    return (
        <View style={styles.headerBackgroundContainer}>
            {background === '' ?
                <View style={styles.container} />
                :
                <Image style={styles.container} src={background} />
            }
        </View>

    )
}

export function HeaderBackground({ background }) {

    return (
        <div className="headerBackgroundContainer">
            {background === '' ?
                <div className="headerBackgroundContainer">
                </div> :
                <img className="headerBackgroundContainer" src={background} alt='img'/>
            }

        </div>
    )

}

const styles = StyleSheet.create({
    headerBackgroundContainer: {
        width: '100%',
        height: '100%'
    },
})