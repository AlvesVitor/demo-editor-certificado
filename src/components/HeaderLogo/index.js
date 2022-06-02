import React from "react";
import { View, Image, StyleSheet } from "@react-pdf/renderer";

import "./index.scss"

export function HeaderLogoPdf({ headerLogo }) {

    return (
        <View style={[styles.headerLogoContainer, headerLogo.style]}>
            {headerLogo.logo === '' ?
                <View style={styles.headerLogo} />
                :
                <Image style={styles.headerLogo} src={headerLogo.logo} />
            }

        </View>

    )
}

export function HeaderLogo({ headerLogo }) {

    return (
        <div className="HeaderLogoContainer" style={headerLogo.style}>
            {headerLogo.logo === '' ?
                <div className="headerLogo"> </div>
                :
                <img className="headerLogo" src={headerLogo.logo} alt='logo' />
            }
        </div>
    )

}

const styles = StyleSheet.create({
    headerLogoContainer: {
        width: 'auto',
        display: 'flex',
        flexDirection: 'row',
        height: '100%',
        alignItems: 'center',
        paddingHorizontal: 40,
    },
    headerLogo: {
        width: 'auto',
        height: '70%'
    }

})