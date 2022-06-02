import React from "react";
import { Image, Text, View, StyleSheet } from '@react-pdf/renderer';

import "./index.scss";

export function SignatureCardPdf({ signature }) {


    return (
        <View style={styles.signatureCardContainer}>

            <View style={styles.signatureCardContainerImg}>
                {signature.img === '' ?
                    <View style={styles.containerImg} />
                    :
                    <Image src={signature.img} />
                }
            </View>

            <View style={styles.signatureCardContainerLabel}>
                <Text style={styles.labelText}>{signature.label}</Text>
            </View>

        </View>
    )

}

export function SignatureCard({ signature }) {

    return (
        <div className="signatureCardContainer">
            <div className='signatureCardContainerImg'>
                {signature.img === '' ?
                    <div className='signatureCardContainerImg'>
                    </div>
                    :
                    <img src={signature.img} alt='img'/>
                }
            </div>

            <div className="signatureCardContainerLabel">
                <p >{signature.label}</p>
            </div>


        </div>
    )
}

const styles = StyleSheet.create({
    signatureCardContainer: {
        display: 'flex',
        flexDirection: 'column',
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'flex-end'

    },
    signatureCardContainerImg: {
        display: 'flex',
        width: 120,
        height: 50,
        justifyContent: 'center'
    },
    containerImg: {
        width: 'auto',
        height: 50
    },
    signatureCardContainerLabel: {
        width: '100%',
        alignItems: 'center',
        borderTopWidth: 0.5,
        borderTopColor: '#657176'

    },
    labelText: {
        fontSize: 10,
        textAlign: 'center',
        color: '#657176'
    }

})