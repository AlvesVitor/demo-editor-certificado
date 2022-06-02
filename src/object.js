
export const certificate = {
    header: {
        type: "Logo",
        logo: "",
        background: "",
        style: {
            justifyContent: 'flex-start',
            backgroundColor: '#000000'
        }
    },
    body: {
        title: "Certificado de conclusão",
        titleStyle: {
            fontSize: 40,
            fontWeight: 'bold',
            textAlign: 'center',
            color: '#000000'
        },
        description: "Certificamos que...",
        address: "José Boni.....",
        color: '#657176',
        descriptionStyle: {
            fontSize: 17,
            textAlign: 'justify'
        },
        addressStyle: {
            fontSize: 17,
            textAlign: 'justify'
        },
        signatures: [
            {
                image: "",
                label: "Aluno"
            },
            {
                image: "",
                label: "Diretor"
            }

        ]
    },
    footer: {
        type: "Texto",
        text: "Teste footer",
        background: "",
        backgroudColor: "#000000",
        textStyle: {
            fontSize: 15,
            color: "#657176",
            textAlign: 'center',
        }
    },
    verse: {
        title: "Conteúdo",
        details: "Descrição...",
        titleStyle: {
            textAlign: 'left',
            fontSize: 25,
            fontWeight: 'bold',
            color: "#000000"
        },
        detailsStyle: {
            textAlign: 'justify',
            fontSize: 20,
            color: '#657176'
        }

    },
}
