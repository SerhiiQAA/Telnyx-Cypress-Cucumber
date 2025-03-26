class GlobalCoveragePage {
  elements = {
    firstName: () => cy.get('#FirstName'),
    lastName: () => cy.get('#LastName'),
    companyEmail: () => cy.get('#Email'),
    receiveEmailsCheckbox: () => cy.get('#mktoCheckbox_14265_0'),
    submitButton: () => cy.get('[type="submit"]'),
    successMsg: () => cy.get('h1 .c-PJLV'),
    firstNameErrorMsg: () => cy.get('#ValidMsgFirstName'), 
    lastNameErrorMsg: () => cy.get('#ValidMsgLastName'),
    emailErrorMsg: () => cy.get('#ValidMsgEmail'),
  };

  typeFirstName(name: string) {
    this.elements.firstName().type(name, { delay: 0 });
  }

  typeLastName(name: string) {
    this.elements.lastName().type(name, { delay: 0 });
  }

  typeCompanyEmail(email: string) {
    this.elements.companyEmail().type(email, { delay: 0 });
  }

  toggleReceiveEmailsCheckbox(select: boolean = true) {
    const checkbox = this.elements.receiveEmailsCheckbox();
    if (select) {
      checkbox.check({ force: true });
    } else {
      checkbox.uncheck({ force: true });
    }
  }

  clickSubmitButton() {
    this.elements.submitButton().click();
  }
}

export default new GlobalCoveragePage();
