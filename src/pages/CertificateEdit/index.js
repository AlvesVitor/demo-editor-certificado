import React, { useState } from 'react';

import { PDFDownloadLink } from '@react-pdf/renderer';

import { SignatureCard } from "../../components/SignatureCard";
import { HeaderBackground } from "../../components/HeaderBackground";
import { HeaderLogo } from "../../components/HeaderLogo";
import { CardTitle } from "../../components/CardTitle";
import { ContentCard } from '../../components/ContentCard';
import { FooterBackground } from "../../components/FooterBackground";
import { FooterText } from '../../components/FooterText';
import { DetailsContent } from "../../components/DetailsContent";
import upload from "../../components/img/file.png";
import removeIcon from "../../components/img/remover.png";

import { CertificadoPdf } from "../../components/ExportCertificatePdf";

import { certificate } from "../../object";

export function CertificateEdit() {
    const [header, setHeader] = useState(certificate.header);
    const [footer, setFooter] = useState(certificate.footer);
    const [body, setBody] = useState(certificate.body);
    const [signatures, setSignatures] = useState(certificate.body.signatures)
    const [verse, setVerse] = useState(certificate.verse)
    const [verso, setVerso] = useState(false);

    function selectTypeHeader() {
        const typeHeader = document.getElementById("typeHeader").value;
        setHeader(prevState => ({
            ...prevState,
            type: typeHeader
        }))
    }

    function selectHeaderJustify() {
        const headerJustify = document.getElementById("headerJustify").value;
        setHeader((prevState) => ({
            ...prevState,
            style: {
                ...prevState.style,
                justifyContent: headerJustify
            }
        }))
    }

    function selectTitleJustify() {
        const bodyTitleJustify = document.getElementById('bodyTitleJustify').value;
        setBody((prevState) => ({
            ...prevState,
            titleStyle: {
                ...prevState.titleStyle,
                titleStyle: bodyTitleJustify
            }
        }))
    }

    function selectContentFooterJustify() {
        const contentFooterJustify = document.getElementById('contentFooterJustify').value;
        setFooter((prevState) => ({
            ...prevState,
            titleStyle: {
                ...prevState.titleStyle,
                titleStyle: contentFooterJustify
            }
        }))
    }

    function selectTypeFooter() {
        const typeFooter = document.getElementById('typeFooter').value;
        setFooter((prevState) => ({
            ...prevState,
            type: typeFooter
        }))
    }


    function selectContentVersoJustify() {
        const verseTitleJustify = document.getElementById('verseTitleJustify').value;
        setVerse((prevState) => ({
            ...prevState,
            titleStyle: {
                ...prevState.titleStyle,
                textAlign: verseTitleJustify
            }
        }))
    }


    function selectBodyAddressJustify() {
        const bodyAddressJustify = document.getElementById('bodyAddressJustify').value;

        setBody((prevState) => ({
            ...prevState,
            addressStyle: {
                ...prevState.addressStyle,
                textAlign: bodyAddressJustify
            }
        }))
    }

    const uploadImage = (e) => {
        if (e.target.files[0].size <= 2457600) {
            return URL.createObjectURL(e.target.files[0])
        } else {
            return ''
        }
    }

    function addSignature() {
        if (body.signatures.length <= 4) {
            setSignatures((prevState) => ([...prevState, {
                img: '',
                label: 'Assinatura'
            }]))
        } else {
            alert("Limite de assinaturas atingida")
        }
    }

    function removeSignature(indice) {
        let array = [...signatures];
        array.splice(indice, 1)
        setSignatures(array)
    }

    return (
        <div className="App">
            <div className='containerCertificado'>
                <div className="gerarPdf">

                    <PDFDownloadLink document={<CertificadoPdf certificate={{
                        header: header,
                        footer: footer,
                        body: body,
                        signatures: signatures,
                        verse: verse

                    }} />} fileName="certificado.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Carregando...' : "Download!"
                        }

                    </PDFDownloadLink>
                </div>

                <div className="certificado">

                    {!verso ?
                        <>
                            <ul>
                                <li className='certificado-topo'>
                                    {header.type === 'Background' ?
                                        <HeaderBackground background={header.background} /> :
                                        <HeaderLogo headerLogo={{
                                            logo: header.logo,
                                            style: header.style
                                        }} />
                                    }
                                </li>

                                <li className='certificado-conteudo'>
                                    <div>
                                        <CardTitle contentTitle={{
                                            title: body.title,
                                            titleStyle: body.titleStyle
                                        }} />
                                        <ContentCard
                                            contentDescription={{
                                                description: body.description,
                                                descriptionStyle: body.descriptionStyle,
                                                address: body.address,
                                                addressStyle: body.addressStyle,
                                                color: body.color
                                            }}
                                        />
                                    </div>
                                    <div className="containerAssignatures">
                                        {signatures.map((index, indice) => (
                                            <SignatureCard signature={index} key={indice} />
                                        ))}
                                    </div>
                                </li>

                                <li className='certificado-footer'>
                                    {footer.type === 'Background' ?
                                        <FooterBackground background={footer.background} /> :
                                        <FooterText footerText={{
                                            text: footer.text,
                                            backgroudColor: footer.backgroudColor,
                                            textStyle: footer.textStyle
                                        }} />
                                    }
                                </li>
                            </ul>
                        </>
                        :
                        <>
                            <ul>
                                <li className='certificado-verso'>
                                    <DetailsContent verse={verse} />
                                </li>
                            </ul>
                        </>
                    }

                </div>

            </div>

            <div className='box-options'>

                <div className='session'>

                    <h4>Edição Certificado</h4>

                    <div className="tab">
                        <button className="tabLinks"
                            style={{ filter: verso ? 'brightness(0.5)' : '' }}
                            onClick={() => setVerso(false)}
                        >Frente</button>

                        <button
                            style={{ filter: !verso ? 'brightness(0.5)' : '' }}
                            className="tabLinks"
                            onClick={() => setVerso(true)}
                        >Verso</button>

                    </div>

                </div>

                {!verso ?
                    <>
                        <div className="session">
                            <h4>Header</h4>

                            <div className="label-input">
                                <label>Tipo </label>
                                <select className='input select-option-hiden' id="typeHeader" onChange={() => selectTypeHeader()}>
                                    <option value={header.type}>{header.type}</option>
                                    <option value="Logo">Logo</option>
                                    <option value="Background">Background</option>
                                </select>
                            </div>
                            
                            {header.type === 'Background' ?

                                <div className="btn">
                                    {header.background &&
                                        <button type="button" className='btn-remove' onClick={() => setHeader(prevState => ({ ...prevState, background: '' }))}> <img alt='icone' src={removeIcon} /> </button>
                                    }
                                    <div className='box-img'>
                                        <img src={header.background || upload} alt="background" />
                                    </div>
                                    <input
                                        id="headerBackground"
                                        className='input-img'
                                        type='file'
                                        name="headerBackground"
                                        accept=".jpeg, .png, .jpg"
                                        onChange={(e) => setHeader(prevState => ({ ...prevState, background: uploadImage(e) }))}
                                    />
                                </div>
                                :
                                <>
                                    <div className="btn">
                                        {header.logo &&
                                            <button type="button" className='btn-remove' onClick={() => setHeader((prevState) => ({
                                                ...prevState,
                                                logo: ''
                                            }))}> <img src={removeIcon} alt='icone' /> </button>
                                        }
                                        <div className='box-img'>
                                            <img src={header.logo || upload} alt="logo" />
                                        </div>
                                        <input
                                            id="headerLogo"
                                            className='input-img'
                                            type='file'
                                            value={''}
                                            name="headerLogo"
                                            accept=".jpeg, .png, .jpg"
                                            onChange={(e) => setHeader((prevState) => ({
                                                ...prevState,
                                                logo: uploadImage(e)
                                            }))}
                                        />
                                        <input
                                            id="headerColor"
                                            className='input-color'
                                            type='color'
                                            name="headerColor"
                                            value={header.style.backgroundColor}
                                            onChange={(e) => setHeader((prevState) => ({
                                                ...prevState,
                                                style: {
                                                    ...prevState.style,
                                                    backgroundColor: e.target.value
                                                }
                                            }))}
                                        />
                                    </div>

                                    <div className="label-input">
                                        <label>Alinhar </label>
                                        <select className='input select-option-hiden' id="headerJustify" onChange={() => selectHeaderJustify()}>
                                            <option value={header.type}>Selecione</option>
                                            <option value="flex-start">Esquerda</option>
                                            <option value="center">Centro</option>
                                            <option value="flex-end">Direita</option>
                                        </select>
                                    </div>

                                </>

                            }

                        </div>
                        <div className="session">
                            <h4>Título</h4>

                            <div className="label-input">
                                <label>Título</label>
                                <input
                                    id="bodyTitle"
                                    className='input'
                                    type="text"
                                    maxLength={40}
                                    name="bodyTitle"
                                    value={body.title}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        title: e.target.value
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Cor </label>
                                <input
                                    id="bodyTitleCor"
                                    className='input'
                                    type='color'
                                    name="bodyTitleCor"
                                    value={body.titleStyle.color}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        titleStyle: {
                                            ...prevState.titleStyle,
                                            color: e.target.value
                                        }
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Alinhar </label>
                                <select id="bodyTitleJustify" className='input select-option-hiden' onChange={() => selectTitleJustify()}>
                                    <option value={body.titleStyle.textAlign}>Selecione</option>
                                    <option value="center">Centro</option>
                                    <option value="left">Esquerda</option>
                                    <option value="right">Direita</option>
                                </select>
                            </div>

                            <div className="label-input">
                                <label>Fonte .</label>
                                <input
                                    id="bodyTitleFonte"
                                    className='input'
                                    type="number"
                                    name="bodyTitleFonte"
                                    min={10}
                                    max={42}
                                    value={body.titleStyle.fontSize}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        titleStyle: {
                                            ...prevState.titleStyle,
                                            fontSize: Number(e.target.value)
                                        }
                                    }))}
                                />
                            </div>
                        </div>
                        <div className="session">
                            <h4>Conteúdo</h4>

                            <div className="label-input">
                                <label>Conteúdo </label>
                                <textarea
                                    id="bodyDescription"
                                    className='input'
                                    type="textarea"
                                    maxLength={550}
                                    name="bodyDescription"
                                    value={body.description}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        description: e.target.value
                                    }))}

                                />
                            </div>

                            <div className="label-input">
                                <label>Fonte Conteúdo </label>
                                <input
                                    id="bodyDescriptionStyleFont"
                                    className='input'
                                    type="number"
                                    min={10}
                                    max={20}
                                    name="bodyDescriptionStyleFont"
                                    value={body.descriptionStyle.fontSize}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        descriptionStyle: {
                                            ...prevState.descriptionStyle,
                                            fontSize: Number(e.target.value)
                                        }
                                    }))}

                                />
                            </div>

                            <div className="label-input">
                                <label>Endereço </label>
                                <textarea
                                    id="bodyAddress"
                                    className='input'
                                    type="textarea"
                                    maxLength={80}
                                    name="bodyAddress"
                                    value={body.address}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        address: e.target.value
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Fonte Endereço </label>
                                <input
                                    id="bodyAddressStyleFont"
                                    className='input'
                                    type="number"
                                    min={10}
                                    max={20}
                                    name="bodyAddressStyleFont"
                                    value={body.addressStyle.fontSize}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        addressStyle: {
                                            ...prevState.addressStyle,
                                            fontSize: Number(e.target.value)
                                        }
                                    }))}

                                />
                            </div>

                            <div className="label-input">
                                <label>Alinhar Endereço </label>
                                <select className='input select-option-hiden' id="bodyAddressJustify" onChange={() => selectBodyAddressJustify()}>
                                    <option value={body.addressStyle.textAlign}>Selecione</option>
                                    <option value="left">Esquerda</option>
                                    <option value="center">Centro</option>
                                    <option value="right">Direita</option>
                                </select>
                            </div>

                            <div className="label-input">
                                <label>Cor </label>
                                <input
                                    id="bodyDescriptionColor"
                                    className='input'
                                    type='color'
                                    name="bodyDescriptionColor"
                                    value={body.color}
                                    onChange={(e) => setBody((prevState) => ({
                                        ...prevState,
                                        color: e.target.value
                                    }))}
                                />
                            </div>
                        </div>

                        <div className="session">
                            <h4>Assinatura <button className='btn-assinatura' type="button" onClick={addSignature}> Adicionar </button></h4>

                            {signatures.map((index, indice) => (
                                <>
                                    <div className="label-input" key={indice}>
                                        <label>Label </label>
                                        <input
                                            id={`signatureLabel${indice}`}
                                            className='input'
                                            type="text"
                                            maxLength={30}
                                            name={`signatureLabel${indice}`}
                                            value={index.label}
                                            onChange={(e) => {
                                                const newState = [...signatures];
                                                newState[indice].label = e.target.value;
                                                setSignatures(newState)
                                            }}

                                        />
                                        <button type="button" className='btn-remove' onClick={() => removeSignature(indice)}> <img src={removeIcon} alt='icon' /> </button>
                                    </div>

                                    <div className="btn">

                                        {signatures[indice].img &&
                                            <button type="button" className='btn-remove' onClick={() => {
                                                const newState = [...signatures];
                                                newState[indice].img = ''
                                                setSignatures(newState)
                                            }}> <img src={removeIcon} alt='icon' /> </button>
                                        }
                                        <div className='box-img'>
                                            <img src={signatures[indice].img || upload} alt='img' />
                                        </div>
                                        <input
                                            id="signatureImg"
                                            className='input-img'
                                            type='file'
                                            value={''}
                                            name="signatureImg"
                                            accept=".jpeg, .png, .jpg"
                                            onChange={(e) => {
                                                const newState = [...signatures];
                                                newState[indice].img = uploadImage(e);
                                                setSignatures(newState)
                                            }}
                                        />
                                    </div>
                                </>
                            ))}

                        </div>
                        <div className="session">
                            <h4>Footer</h4>
                            <div className="label-input">
                                <label>Tipo </label>
                                <select className='input select-option-hiden' id="typeFooter" onChange={() => selectTypeFooter()}>
                                    <option value={footer.type}>{footer.type}</option>
                                    <option value="Texto">Texto</option>
                                    <option value="Background">Background</option>
                                </select>
                            </div>

                            {footer.type === 'Background' ?

                                <div className="btn" style={{ marginBottom: 50 }}>
                                    {footer.background &&
                                        <button type="button" className='btn-remove' onClick={() => setFooter((prevState) => ({
                                            ...prevState,
                                            background: ''
                                        }))}> <img src={removeIcon} alt='icon' /> </button>
                                    }
                                    <div className='box-img'>
                                        <img src={footer.background || upload} alt='background' />
                                    </div>
                                    <input
                                        id="footerBackground"
                                        className='input-img'
                                        type='file'
                                        name="footerBackground"
                                        accept=".jpeg, .png, .jpg"
                                        onChange={(e) => setFooter((prevState => ({
                                            ...prevState,
                                            background: uploadImage(e)
                                        })))}
                                    />
                                </div>
                                :
                                <>
                                    <div className="label-input">
                                        <label>Texto</label>
                                        <textarea
                                            id="footerText"
                                            className='input'
                                            type="text"
                                            name="footerText"
                                            maxLength={300}
                                            value={footer.text}
                                            onChange={(e) => setFooter((prevState) => ({
                                                ...prevState,
                                                text: e.target.value
                                            }))}
                                        />
                                    </div>

                                    <div className="label-input">
                                        <label>Alinhar </label>
                                        <select className='input select-option-hiden' id="contentFooterJustify" onChange={() => selectContentFooterJustify()}>
                                            <option value={footer.textStyle.textAlign}>Selecione</option>
                                            <option value="center">Centro</option>
                                            <option value="left">Esquerda</option>
                                            <option value="right">Direita</option>
                                        </select>
                                    </div>

                                    <div className="label-input">
                                        <label>Fonte </label>
                                        <input
                                            id="footerTextFonte"
                                            className='input'
                                            type="number"
                                            min={10}
                                            max={20}
                                            name="footerTextFonte"
                                            value={footer.textStyle.fontSize}
                                            onChange={(e) => setFooter((prevState) => ({
                                                ...prevState,
                                                textStyle: {
                                                    ...prevState.textStyle,
                                                    fontSize: Number(e.target.value)
                                                }
                                            }))}
                                        />
                                    </div>

                                    <div className="label-input">
                                        <label>Cor Texto </label>
                                        <input
                                            id="footerTextCorTexto"
                                            className='input'
                                            type='color'
                                            name="footerTextCorTexto"
                                            value={footer.textStyle.color}
                                            onChange={(e) => setFooter((prevState) => ({
                                                ...prevState,
                                                textStyle: {
                                                    ...prevState.textStyle,
                                                    color: e.target.value
                                                }
                                            }))}
                                        />
                                    </div>

                                    <div className="label-input" style={{ marginBottom: 50 }}>
                                        <label>Background Color </label>
                                        <input
                                            id="contentFooterBackgroundCor"
                                            className='input'
                                            type='color'
                                            name="contentFooterBackgroundCor"
                                            value={footer.backgroudColor}
                                            onChange={(e) => setFooter((prevState) => ({
                                                ...prevState,
                                                backgroudColor: e.target.value

                                            }))}
                                        />
                                    </div>

                                </>
                            }
                        </div>

                    </>
                    :
                    <>
                        <div className="session">
                            <h4>Título</h4>
                            <div className="label-input">
                                <label>Título </label>
                                <input
                                    id="verseTitle"
                                    className='input'
                                    type="text"
                                    maxLength={50}
                                    name="verseTitle"
                                    value={verse.title}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        title: e.target.value
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Cor </label>
                                <input
                                    id="verseTitleCor"
                                    className='input'
                                    type='color'
                                    name="verseTitleCor"
                                    value={verse.titleStyle.color}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        titleStyle: {
                                            ...prevState.titleStyle,
                                            color: e.target.value
                                        }
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Alinhar </label>
                                <select className='input select-option-hiden' id="verseTitleJustify" onChange={() => selectContentVersoJustify()}>
                                    <option value={verse.titleStyle.textAlign}>Selecione</option>
                                    <option value="left">Esquerda</option>
                                    <option value="center">Centro</option>
                                    <option value="right">Direita</option>
                                </select>
                            </div>

                            <div className="label-input">
                                <label>Fonte </label>
                                <input
                                    id="verseTitleSize"
                                    className='input'
                                    type="number"
                                    min={10}
                                    max={45}
                                    name="verseTitleSize"
                                    value={verse.titleStyle.fontSize}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        titleStyle: {
                                            ...prevState.titleStyle,
                                            fontSize: Number(e.target.value)
                                        }
                                    }))}
                                />
                            </div>

                        </div>

                        <div className='session'>
                            <h4>Conteúdo</h4>

                            <div className="label-input">
                                <label>Conteúdo</label>
                                <textarea
                                    id="verseDetails"
                                    className='input'
                                    type="textarea"
                                    name="verseDetails"
                                    maxLength={1000}
                                    value={verse.details}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        details: e.target.value
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Cor </label>
                                <input
                                    id="verseDetailsCor"
                                    className='input'
                                    type="color"
                                    name="verseDetailsCor"
                                    value={verse.detailsStyle.color}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        detailsStyle: {
                                            ...prevState.detailsStyle,
                                            color: e.target.value
                                        }
                                    }))}
                                />
                            </div>

                            <div className="label-input">
                                <label>Fonte </label>
                                <input
                                    id="verseDetailsSize"
                                    className='input'
                                    type="number"
                                    min={10}
                                    max={20}
                                    name="verseDetailsSize"
                                    value={verse.detailsStyle.fontSize}
                                    onChange={(e) => setVerse((prevState) => ({
                                        ...prevState,
                                        detailsStyle: {
                                            ...prevState.detailsStyle,
                                            fontSize: Number(e.target.value)
                                        }
                                    }))}
                                />
                            </div>
                        </div>
                    </>
                }

            </div>
        </div>
    );
}
