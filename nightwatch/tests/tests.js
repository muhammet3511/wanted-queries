
// const functions = require('../test_data/functions')
const selectors = require('../test_data/selectors')
const data = require('../test_data/test_data')


module.exports = {
    beforeEach: browser => {
        browser
            .url('http://localhost:3000')
        // browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.queryTitle)
    },
    after: browser => {
        browser.end()
    },
    'Testing valid good data for all required fields enter wanted': browser => {


        browser
            .waitForElementVisible(selectors.enterWanted.entrWnt, 3000)
            .click(selectors.enterWanted.entrWnt)

           
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.goodData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.goodData.input.hdr)
            
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.goodData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.goodData.input.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.goodData.input.oai)
            .verify.value(selectors.enterWanted.ori, data.goodData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.goodData.input.name)
            .verify.value(selectors.enterWanted.nam, data.goodData.input.name)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.goodData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.goodData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.goodData.input.race)
            .verify.value(selectors.enterWanted.rac, data.goodData.input.race)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.goodData.input.hgt)
            .verify.value(selectors.enterWanted.heig, data.goodData.input.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.goodData.input.wgt)
            .verify.value(selectors.enterWanted.wiig, data.goodData.input.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.goodData.input.hair)
            .verify.value(selectors.enterWanted.hair, data.goodData.input.hair)
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.goodData.input.off)
            .verify.value(selectors.enterWanted.offns, data.goodData.input.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.goodData.input.dowv)
            .verify.value(selectors.enterWanted.dowv, data.goodData.input.dowv)
            

            .click(selectors.enterWanted.submit)
           
            browser.waitForElementVisible(selectors.enterWanted.textBlobText, 1000)
        browser.expect.element(selectors.enterWanted.textBlobText).text.to.equal(data.goodData.output.textBlobText)
        browser.click(selectors.enterWanted.clear)
        

    },
    'testing bad data for all input fields Wanted Queries Enter Wanted': browser => {
        browser
            .waitForElementVisible(selectors.enterWanted.entrWnt, 1000)
            .click(selectors.enterWanted.entrWnt)

            
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.badData.input.oai)
            .verify.value(selectors.enterWanted.ori, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.badData.input.hgt)
            .verify.value(selectors.enterWanted.heig, data.badData.input.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.badData.input.wgt)
            .verify.value(selectors.enterWanted.wiig, data.badData.input.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.badData.input.hai)
            .verify.value(selectors.enterWanted.hair, data.badData.input.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.badData.input.off)
            .verify.value(selectors.enterWanted.offns, data.badData.input.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.badData.input.dow)
            .verify.value(selectors.enterWanted.dowv, data.badData.input.dow)
           

            .click(selectors.enterWanted.submit)
          
            .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
        browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
          
    },

    'testing bad data for input fields Wanted Queries Enter Wanted Error list present': browser => {
        browser
            .waitForElementVisible(selectors.enterWanted.entrWnt, 1000)
            .click(selectors.enterWanted.entrWnt)

            
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.badData.input.oai)
            .verify.value(selectors.enterWanted.ori, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            // .clearValue(selectors.enterWanted.rac)
            // .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            // .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            // .clearValue(selectors.enterWanted.heig)
            // .setValue(selectors.enterWanted.heig, data.badData.input.hgt)
            // .verify.value(selectors.enterWanted.heig, data.badData.input.hgt)
            // .clearValue(selectors.enterWanted.wiig)
            // .setValue(selectors.enterWanted.wiig, data.badData.input.wgt)
            // .verify.value(selectors.enterWanted.wiig, data.badData.input.wgt)
            // .clearValue(selectors.enterWanted.hair)
            // .setValue(selectors.enterWanted.hair, data.badData.input.hai)
            // .verify.value(selectors.enterWanted.hair, data.badData.input.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            // .clearValue(selectors.enterWanted.offns)
            // .setValue(selectors.enterWanted.offns, data.badData.input.off)
            // .verify.value(selectors.enterWanted.offns, data.badData.input.off)
            // .clearValue(selectors.enterWanted.dowv)
            // .setValue(selectors.enterWanted.dowv, data.badData.input.dow)
            // .verify.value(selectors.enterWanted.dowv, data.badData.input.dow)
           

            .click(selectors.enterWanted.submit)
            browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.hdr)
            browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.mke)
            browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.oai)
            browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.nam)
            browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.sex)
            // browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.rac)
            // browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.hgt)
            // browser.expect.element(selectors.errorList.errorList1).text.to.contain(data.badData.errorList.off)



    },



    'testing blank space for all input fields Wanted Queries Enter Wanted': browser => {
        browser
            .waitForElementVisible(selectors.enterWanted.entrWnt, 1000)
            .click(selectors.enterWanted.entrWnt)

           
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
           
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
            .verify.value(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
            .verify.value(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
            .verify.value(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai)
            .verify.value(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
            .verify.value(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)
            .verify.value(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)
            

            .click(selectors.enterWanted.submit)
          
            .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
        browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)

    },

    'Testing valid good data for all required fields modifyWanted': browser => {
          browser
           
            .click(selectors.modifyWanted.modifyWanted1)

            .clearValue(selectors.modifyWanted.warrantID)
            .setValue(selectors.modifyWanted.warrantID, data.goodData.input.warrantID)
            .verify.value(selectors.modifyWanted.warrantID, data.goodData.input.warrantID)

            
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.goodData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.goodData.input.hdr)
          
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.goodData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.goodData.input.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.goodData.input.oai)
            .verify.value(selectors.enterWanted.ori, data.goodData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.goodData.input.name)
            .verify.value(selectors.enterWanted.nam, data.goodData.input.name)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.goodData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.goodData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.goodData.input.race)
            .verify.value(selectors.enterWanted.rac, data.goodData.input.race)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.goodData.input.hgt)
            .verify.value(selectors.enterWanted.heig, data.goodData.input.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.goodData.input.wgt)
            .verify.value(selectors.enterWanted.wiig, data.goodData.input.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.goodData.input.hair)
            .verify.value(selectors.enterWanted.hair, data.goodData.input.hair)
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.goodData.input.off)
            .verify.value(selectors.enterWanted.offns, data.goodData.input.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.goodData.input.dowv)
            .verify.value(selectors.enterWanted.dowv, data.goodData.input.dowv)
        

            .click(selectors.enterWanted.submit)
           
            .waitForElementVisible(selectors.enterWanted.textBlobText, 1000)
        browser.expect.element(selectors.enterWanted.textBlobText).text.to.equal(data.goodData.output.modifywantedTextBlob)
        browser.click(selectors.enterWanted.clear)
        

    },

    'testing bad data for all input fields Wanted Queries Modify Wanted': browser => {
        browser
            .click(selectors.modifyWanted.modifyWanted1)
            .clearValue(selectors.modifyWanted.warrantID)
            .setValue(selectors.modifyWanted.warrantID, data.badData.input.warrantID)
            .verify.value(selectors.modifyWanted.warrantID, data.badData.input.warrantID)

           
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.input.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.input.hdr)
          
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.input.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.input.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.badData.input.oai)
            .verify.value(selectors.enterWanted.ori, data.badData.input.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.input.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.input.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.input.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.input.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.input.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.input.rac)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.badData.input.hgt)
            .verify.value(selectors.enterWanted.heig, data.badData.input.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.badData.input.wgt)
            .verify.value(selectors.enterWanted.wiig, data.badData.input.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.badData.input.hai)
            .verify.value(selectors.enterWanted.hair, data.badData.input.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.badData.input.off)
            .verify.value(selectors.enterWanted.offns, data.badData.input.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.badData.input.dow)
            .verify.value(selectors.enterWanted.dowv, data.badData.input.dow)
           

            .click(selectors.enterWanted.submit)
           
            .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
        browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)
           
    },
    'testing blank space for all input fields Wanted Queries Modify Wanted': browser => {
        browser
            
            .click(selectors.modifyWanted.modifyWanted1)
            .clearValue(selectors.modifyWanted.warrantID)
            .setValue(selectors.modifyWanted.warrantID, data.badData.blankFieldMessage.warrantID)
            .verify.value(selectors.modifyWanted.warrantID, data.badData.blankFieldMessage.warrantID)

           
            .clearValue(selectors.enterWanted.hdr)
            .setValue(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            .verify.value(selectors.enterWanted.hdr, data.badData.blankFieldMessage.hdr)
            
            .clearValue(selectors.enterWanted.mke)
            .setValue(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .verify.value(selectors.enterWanted.mke, data.badData.blankFieldMessage.mke)
            .clearValue(selectors.enterWanted.ori)
            .setValue(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
            .verify.value(selectors.enterWanted.ori, data.badData.blankFieldMessage.oai)
            .clearValue(selectors.enterWanted.nam)
            .setValue(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .verify.value(selectors.enterWanted.nam, data.badData.blankFieldMessage.nam)
            .clearValue(selectors.enterWanted.sex)
            .setValue(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .verify.value(selectors.enterWanted.sex, data.badData.blankFieldMessage.sex)
            .clearValue(selectors.enterWanted.rac)
            .setValue(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .verify.value(selectors.enterWanted.rac, data.badData.blankFieldMessage.rac)
            .clearValue(selectors.enterWanted.heig)
            .setValue(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
            .verify.value(selectors.enterWanted.heig, data.badData.blankFieldMessage.hgt)
            .clearValue(selectors.enterWanted.wiig)
            .setValue(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
            .verify.value(selectors.enterWanted.wiig, data.badData.blankFieldMessage.wgt)
            .clearValue(selectors.enterWanted.hair)
            .setValue(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai)
            .verify.value(selectors.enterWanted.hair, data.badData.blankFieldMessage.hai) // it should throw out error message but does not, bug has been reported restest after bug fixed
            .clearValue(selectors.enterWanted.offns)
            .setValue(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
            .verify.value(selectors.enterWanted.offns, data.badData.blankFieldMessage.off)
            .clearValue(selectors.enterWanted.dowv)
            .setValue(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)
            .verify.value(selectors.enterWanted.dowv, data.badData.blankFieldMessage.dow)
           

            .click(selectors.enterWanted.submit)
           
            .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
        browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
        browser.click(selectors.enterWanted.clear)

    },
    
    'Testing valid good data for all required fields Cancel Wanted': browser => {
        browser
          
          .click(selectors.cancelWanted.cancelWanted1)

          .clearValue(selectors.cancelWanted.warrantID)
          .setValue(selectors.cancelWanted.warrantID, data.goodData.input.warrantID)
          .verify.value(selectors.cancelWanted.warrantID, data.goodData.input.warrantID)

      
          .clearValue(selectors.cancelWanted.reasonForCancel)
          .setValue(selectors.cancelWanted.reasonForCancel, data.goodData.input.reasonforCancellation)
          .verify.value(selectors.cancelWanted.reasonForCancel, data.goodData.input.reasonforCancellation)
          
          .clearValue(selectors.cancelWanted.dateOfCancel)
          .setValue(selectors.cancelWanted.dateOfCancel, data.goodData.input.dateofcancellation)
          .verify.value(selectors.cancelWanted.dateOfCancel, data.goodData.input.dateofcancellation)
          .click(selectors.enterWanted.submit)
       
            .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
        browser.expect.element(selectors.enterWanted.textBlobText).text.to.equal(data.goodData.output.canceWantedTextBlob)
        browser.click(selectors.enterWanted.clear)

    },
    'testing bad data for all input fields Wanted Queries Cancel Wanted': browser => {
        browser
        .click(selectors.cancelWanted.cancelWanted1)

        .clearValue(selectors.cancelWanted.warrantID)
        .setValue(selectors.cancelWanted.warrantID, data.badData.input.warrantID)
        .verify.value(selectors.cancelWanted.warrantID, data.badData.input.warrantID)

       
        .clearValue(selectors.cancelWanted.reasonForCancel)
        .setValue(selectors.cancelWanted.reasonForCancel, data.badData.input.reasonforCancellation)
        .verify.value(selectors.cancelWanted.reasonForCancel, data.badData.input.reasonforCancellation)
       
        .clearValue(selectors.cancelWanted.dateOfCancel)
        .setValue(selectors.cancelWanted.dateOfCancel, data.badData.input.dateofcancellation)
        .verify.value(selectors.cancelWanted.dateOfCancel, data.badData.input.dateofcancellation)
        .click(selectors.enterWanted.submit)
         
          .waitForElementVisible(selectors.enterWanted.textBlobTitle, 1000)
      browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.badDataResult)
      browser.click(selectors.enterWanted.clear)
},
'testing blank space for all input fields Wanted Queries Cancel Wanted': browser => {
    browser
    .click(selectors.cancelWanted.cancelWanted1)

        .clearValue(selectors.cancelWanted.warrantID)
        .setValue(selectors.cancelWanted.warrantID, data.badData.blankFieldMessage.warrantID)
        .verify.value(selectors.cancelWanted.warrantID, data.badData.blankFieldMessage.warrantID)

    
        .clearValue(selectors.cancelWanted.reasonForCancel)
        .setValue(selectors.cancelWanted.reasonForCancel, data.badData.blankFieldMessage.reasonforCancellation)
        .verify.value(selectors.cancelWanted.reasonForCancel, data.badData.blankFieldMessage.reasonforCancellation)
        .clearValue(selectors.cancelWanted.dateOfCancel)
        .setValue(selectors.cancelWanted.dateOfCancel, data.badData.blankFieldMessage.dateofcancellation)
        .verify.value(selectors.cancelWanted.dateOfCancel, data.badData.blankFieldMessage.dateofcancellation)
        .click(selectors.enterWanted.submit)
          .pause(2000)
          .waitForElementVisible(selectors.enterWanted.textBlobTitle, 2000)
          browser.expect.element(selectors.enterWanted.textBlobTitle).text.to.equal(data.goodData.output.cancelWantedBlankResult)
          browser.click(selectors.enterWanted.clear)
     
},
}

