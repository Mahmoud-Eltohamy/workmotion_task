/// <reference types="cypress" />

describe("Add new employee", () => {
  beforeEach(() => {
    // Custom command for login.
    cy.login("aliaa+qahrmanager@workmotion.com", "Test1234");
  });

  it("HR should be able to addd new employee", () => {
    // Applicaiton throws uncaught exceptions in the console
    // suppressing the exception to avoid failuers.
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });

    const randomNum = Math.floor(Math.random() * 100000);

    // page 1 Create new employee.
    cy.get('[data-testid="add-employee-menu"]').click();
    cy.get('[data-testid="create-new-item"]').click();

    // page 2 employee details
    cy.get(".css-1wopavw-control").type("Germany");
    cy.get("#react-select-3-option-54").click();
    cy.contains("Get started").click();
    cy.get('[data-cy="product-selection-workglobal-option"]').click();
    cy.get('[data-cy="product-selection-begin-onboarding-btn"]').click();

    // page 3 Contract details
    cy.get('[data-cy="steps-candidate-first-name-input"]').type("Test" + randomNum);
    cy.get('[data-cy="steps-candidate-last-name-input"]').type("Test" + randomNum);
    cy.get("#\\31 ffb9724-40c5-3f5d-b7a3-5fb982b91455").clear().type("09/02/1985");
    cy.get('[value="Yes"]').check({ force: true });
    cy.get('[value="Yes"]').check({ force: true });
    cy.get('[data-cy="side-drawer-talent-is-senior-side-drawer-title"]').next().click();
    cy.get('[data-cy="steps-address-line-one-hr-input"]').type("address" + randomNum);
    cy.get('[data-cy="steps-address-line-two-hr-input"]').type("address" + randomNum);
    cy.get('[data-cy="steps-city-state-hr-input"]').type("Berlin");
    cy.get('[data-cy="steps-postal-code-hr-input"]').type("12345");
    cy.contains("Continue").click();

    // page 4 job details
    cy.get('[data-cy="steps-job-title-input"]').type("QA Lead");
    cy.get('[data-cy="steps-job-description-textarea"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    cy.get('[data-cy="steps-job-description-local-language-textarea"]').type("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
    cy.get('[data-cy="steps-employment-type-full-time-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[value="40"]').clear().type("48").trigger("change");
    cy.get('[data-cy="steps-contract-type-fixed-term-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get("#\\37 0c79f8a-3dbf-375d-bba7-68f1a625c41e").clear().type("22/03/2024");
    cy.get("#\\35 b942d27-7835-3871-866c-2c112fd28b4a").clear().type("09/02/2025");
    cy.get('[data-cy="steps-signatory-full-name-input"]').type("mahmoud eltohamy");
    cy.get('[data-cy="steps-signatory-title-input"]').type("Head of Marketing");
    cy.get('[data-cy="steps-telework-equipment-input"]').type("Hp labtop, mouse");
    cy.get('[data-cy="steps-cost-center-input"]').type("Cost Center");
    cy.get('[data-cy="steps-company-sub-entity-select-input"]').type("Nabil Test",{ force: true });
    cy.contains("Continue").click();

    // page 5 probation period
    cy.get('[value="20"]').clear().type("60");
    cy.get('[data-cy="steps-probation-period-selector-yes-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[data-cy="steps-probation-period-stepper-decrement-btn"]').click();
    cy.contains("Continue").click();

    // page 6 compensation
    cy.get('[data-cy="steps-benefit-private-health-insurance-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[data-cy="steps-esop-provided-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[data-cy="steps-annual-bonus-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[data-cy="steps-variable-bonus-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.get('[data-cy="steps-salary-gross-salary-input"]').type("4000");
    cy.get('[data-cy="steps-sign-on-bonus-input"]').type("4000");
    cy.get('[data-cy="steps-sign-on-bonus-payback-period-stepper-increment-btn"]').click();
    cy.get('[data-cy="steps-allowances-selector-no-radio"] > .MuiButtonBase-root > .PrivateSwitchBase-input').check({ force: true });
    cy.contains("Continue").click();

    // page 7 Invite employee
    const inviteEmail = "test" + randomNum + "@exmaple.com";
    cy.get('[placeholder="example@email.com"]').type(inviteEmail);
    cy.contains("Continue").click();

    // page 8 Summary Review
    cy.scrollTo("bottom", { easing: "linear", ensureScrollable: false, duration: 100 }).then(() => {
      cy.get(".sc-gtsqUy").parent().find('input').check({ force: true });
    });

    cy.get('[data-cy="steps-finish-btn"]').click();

    // Asserting the successfull message after employee creation.
    cy.get('.sc-hTUWRQ').should(($heading) => {
      expect($heading).to.have.text("Thank you for completing the onboarding experience!");

    });

    // Verify and Perform action.
    cy.get('[data-testid="go-to-talent-list-btn"]').click();
    cy.get('[data-cy="talents-name-head"]').should(($heading) => {
      expect($heading).to.have.text("Talent name");
    });

    //cy.pause();
    // cy.get('.sc-hkoqiW > [data-cy="header-notifications-button"]').click();
    // cy.get('[data-cy="filter-button-action-items"]')

  });
});
