import React from "react";

import { Document, Page, View, StyleSheet } from '@react-pdf/renderer';

import { SignatureCardPdf } from "../SignatureCard";
import { HeaderBackgroundPdf } from "../HeaderBackground";
import { HeaderLogoPdf } from "../HeaderLogo";
import { CardTitlePdf } from "../CardTitle";
import { ContentCardPdf } from '../ContentCard';
import { FooterBackgroundPdf } from "../FooterBackground";
import { FooterTextPdf } from '../FooterText';
import { DetailsContentPdf } from "../DetailsContent";

export function CertificadoPdf({ certificate }) {
    const {
        header,
        body,
        signatures,
        footer,
        verse
    } = certificate;

    return (
        <Document>
            <Page
                size="A4"
                orientation="landscape"
                style={styles.page}
                wrap>
                {/*header */}
                <View style={styles.certificateTop}>
                    {header.type === 'Background' ?
                        <HeaderBackgroundPdf background={header.background} /> :
                        <HeaderLogoPdf headerLogo={{
                            logo: header.logo,
                            style: header.style
                        }} />
                    }
                </View>
                {/*content */}
                <View style={styles.certificateContent}>
                    <View>
                        <CardTitlePdf contentTitle={{
                            title: body.title,
                            titleStyle: body.titleStyle
                        }} />
                        <ContentCardPdf
                            contentDescription={{
                                description: body.description,
                                color: body.color,
                                address: body.address,
                                descriptionStyle: body.descriptionStyle,
                                addressStyle: body.addressStyle
                            }}
                        />
                    </View>

                    <View style={styles.containerSignature}>
                        {signatures.map((index, indice) => (
                            <SignatureCardPdf signature={index} key={indice} />
                        ))}
                    </View>
                </View>
                {/*footer */}
                <View style={styles.certificadoFooter}>
                    {footer.type === 'Background' ?
                        <FooterBackgroundPdf background={footer.background} /> :
                        <FooterTextPdf footerText={{
                            text: footer.text,
                            backgroudColor: footer.backgroudColor,
                            textStyle: footer.textStyle
                        }} />
                    }
                </View>
                {/*verso */}
                <DetailsContentPdf verse={verse} />
            </Page>
        </Document>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    containerSignature: {
        width: '100%',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-around'
    },
    certificateTop: {
        height: '15%'

    },
    certificateContent: {
        height: '70%',
        paddingVertical: 25,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'

    },
    certificadoFooter: {
        height: '15%'

    }
})