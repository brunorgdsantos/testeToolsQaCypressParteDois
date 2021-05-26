import 'cypress-file-upload';

Cypress.Commands.add("fillsForm", data => {
    cy.get("#firstName").type(data.firstName);
    cy.get("#lastName").type(data.lastName);
    cy.get("#userEmail").type(data.email);
    cy.get(".custom-control-label").click({ multiple: true });
    cy.get("#userNumber").type(data.mobile);
    cy.get("#subjectsContainer").type(data.subjects);
    const fixtureFile = 'cypressframework1.jpeg';
    cy.get("#uploadPicture").attachFile(fixtureFile);
    cy.get("#currentAddress").type(data.address);
    cy.get("#state").type(data.state);
    cy.get("#city").type(data.city);
    cy.get("#submit").click();
});

Cypress.Commands.add("fillsMandatoryFieldsWithFalseValues", dataOne => {
    cy.get("#firstName").type(dataOne.firstName);
    cy.get("#lastName").type(dataOne.lastName);
    cy.get("#userEmail").type(dataOne.email);
    cy.get(".custom-control-label").click({ multiple: true });
    cy.get("#userNumber").type(dataOne.mobile);
    cy.get("#submit").click();
});

class Form{

    fillsFormTrueValues(){
        const trueValues = {
            firstName: "Bruno",
            lastName: "Santos",
            email: "bruno@gmail.com",
            mobile: "9999999999",
            subjects: "Ola Mundo",
            address: "Hello Word",
            state: "NCR{enter}",
            city: "Delhi{enter}",
        };
        cy.fillsForm(trueValues);
    };  

    comparingForms(){
        cy.get("#example-modal-sizes-title-lg").should("contain","Thanks for submitting the form");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[1]/td[2]').should("contain","Bruno Santos");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[2]/td[2]').should("contain","bruno@gmail.com");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[3]/td[2]').should("contain","Other");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[4]/td[2]').should("contain","9999999999");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[5]/td[2]').should("contain","26 May,2021");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[7]/td[2]').should("contain","Sports, Reading, Music");
        cy.xpath('/html/body/div[3]/div/div/div[2]/div/table/tbody/tr[9]/td[2]').should("contain","Hello Word");
        cy.get("#closeLargeModal").click();
    };

    insertIcorrectValueFieldName(){
        const falseValueFieldName = {
            firstName: "01234",
            lastName: "56789",
            email: "brunogmail.com",
            mobile: "abcefghij",
        };
        cy.fillsMandatoryFieldsWithFalseValues(falseValueFieldName);
        cy.get("#example-modal-sizes-title-lg").should("not.exist");
    };
};
module.exports = Form 