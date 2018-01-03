module.exports = {
    goodData: {
        input: {

            hdr: 'Johnsma7!',
            mke: 'Tu^&',
            oai: 'salam1234',
            name: 'Peter0777!',
            sex: 'M',
            race: 'W',
            hgt: '512',
            wgt: '183',
            hair: 'white',
            off: 'polo98!',
            dowv: '12242017',
            warrantID: '0123456789',
            reasonforCancellation: 'becauseof07',
            dateofcancellation: '12272017'
        },
        output: {
            header: 'Valid',
            errorList: {},
            queryTitle: 'Assembled Query:',
            textBlobText: "Johnsma7!.Tu^&.salam1234.Peter0777!.M.W.512.183.white.polo98!.12242017......",
            badDataResult: 'No results generated due to error.',
            modifywantedTextBlob: '0123456789.Johnsma7!.Tu^&.salam1234.Peter0777!.M.W.512.183.white.polo98!.12242017......',
            canceWantedTextBlob: '0123456789.becauseof07.12272017',
            cancelWantedBlankResult: 'Submit query for validation.'
        }

    },
    badData: {
        //the 'key' for the fields should match the key of the selectors in css_selectors
        input: {
            warrantID: '012345',
            dateofcancellation: '111',
            reasonforCancellation: '0035h',
            warrantID: '1235',
            hdr: '12345',
            mke: 'M',
            oai: 'CHI',
            nam: 'Ha',
            sex: '12',
            rac: '13',
            hgt: '07',
            wgt: '00',
            hai: ' *&po',
            off: 'on',
            dow: '02362017',
            oln: '',
            ols: '',
            oly: '',
            lic: '',
            lis: '',
            liy: ''
        },
        output: {
            header: 'Errors Received:',
            errorList: {
                oln: `If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.`
            },
            queryTitle: 'No results generated due to error.',
            assembledQuery: '',
        },

        blankFieldMessage: {
            dateofcancellation: '',
            reasonforCancellation: '',
            warrantID: '',
            hdr: '',
            mke: '',
            oai: '',
            nam: '',
            sex: '',
            rac: '',
            hgt: '',
            wgt: '',
            hai: ' ',
            off: '',
            dow: ''
        },


    }
}

