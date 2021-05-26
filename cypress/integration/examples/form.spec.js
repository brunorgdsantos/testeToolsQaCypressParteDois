const Form = require('../../support/page-objects/commands')

describe('Testing Fills Form', () => {
    let form;
    form = new Form();

    beforeEach(() => cy.visit("https://demoqa.com/automation-practice-form"));

    it('Fills and comparing form with true values', () => {
        form.fillsFormTrueValues();
        form.comparingForms();
    });

    it('Test mandatory fields with false values', () => {
        form.insertIcorrectValueFieldName();
    });

    
});