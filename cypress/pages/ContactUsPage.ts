class ContactUsPage {
    elements = {
        reasonForContact: () => cy.get('#Reason_for_Contact__c'),
        firstName: () => cy.get('#FirstName'),
        lastName: () => cy.get('#LastName'),
        email: () => cy.get('#Email'),
        phoneNumberExtension: () => cy.get('#Phone_Number_Extension__c'),
        phoneNumberBase: () => cy.get('#Phone_Number_Base__c'),
        website: () => cy.get('#Website'),
        howDidYouHear: () => cy.get('#How_did_you_hear_about_Telnyx_Open__c'),
        additionalInfo: () => cy.get('#Form_Additional_Information__c'),
        submitButton: () => cy.get('.mktoButton'),
        successMsg: () => cy.get('h1 .c-PJLV'),
        howHelpErrorMsg: () => cy.get('#ValidMsgReason_for_Contact__c'),
        firstNameErrorMsg: () => cy.get('#ValidMsgFirstName'),
        lastNameErrorMsg: () => cy.get('#ValidMsgLastName'),
        emailErrorMsg: () => cy.get('#ValidMsgEmail'),
        websiteErrorMsg: () => cy.get('#ValidMsgWebsite'),
        describeRequestErrorMsg: () => cy.get('#ValidMsgForm_Additional_Information__c'),
        howHearAboutErrorMsg: () => cy.get('#ValidMsgHow_did_you_hear_about_Telnyx_Open__c'),
        phoneNumberErrorMsg: () => cy.get('#ValidMsgPhone_Number_Base__c'),
        countryErrorMsg: () => cy.get('#ValidMsgPhone_Number_Extension__c'),
        marketingEmailsCheckbox: () => cy.get('[name="Subscription_Opt_In__c"]'),
    };

    selectReasonForContact(option: string) {
        this.elements.reasonForContact().select(option, { force: true });
    }

    typeFirstName(name: string) {
        this.elements.firstName().type(name, { delay: 0 });
    }

    typeLastName(name: string) {
        this.elements.lastName().type(name, { delay: 0 });
    }

    typeEmail(email: string) {
        this.elements.email().type(email, { delay: 0 });
    }

    selectCountry(country: string) {
        this.elements.phoneNumberExtension().select(country, { force: true });
    }

    typePhoneNumber(number: string) {
        this.elements.phoneNumberBase().type(number, { delay: 0 });
    }

    typeWebsite(url: string) {
        this.elements.website().type(url, { delay: 0 });
    }

    typeHowDidYouHear(info: string) {
        this.elements.howDidYouHear().type(info, { delay: 0 });
    }

    typeAdditionalInfo(info: string) {
        this.elements.additionalInfo().type(info, { delay: 0 });
    }

    toggleMarketingEmailsCheckbox(select = true) {
        const checkbox = this.elements.marketingEmailsCheckbox();
        if (select) {
            checkbox.check();
        } else {
            checkbox.uncheck();
        }
    }

    clickSubmitBtn() {
        this.elements.submitButton().click();
    }
}

export default new ContactUsPage();


