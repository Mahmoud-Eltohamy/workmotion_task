# workmotiontest

- solution for programming challenge for Login for applying some E2E test-cases using javascript and cypress framework.
   - URL: https://beta.workmotion.com/login
   - Username: aliaa+qahrmanager@workmotion.com
   - Password: Test1234
- the user role is HR manager so he will be able to add new employee
   - Add new Talent > Create new -> Select country "Germany"
   - Select WorkGlobal
   - Fill all the onboarding steps
   - Check the action items section for this HR manager after confirming the employee onboarding on our platform
   - Mark the action that been received and assert that its been done

### Prerequisites and Installation

1. Download and install node, npm, git and IDE of your choice
2. navigate to your project folder
3. Install Cypress via npm ``` npx install cypress --save-dev ```
4. Open Cypress test runner: ``` npx cypress open ```
5. A simple github actions pipeline is done for cross browser testing 'firefox and chrome' plz check github actions for reports and successful runs 'plz do not trigger too much github actions as this will end up my quota in rate limit'

[![Cypress Tests](https://github.com/Mahmoud-Eltohamy/workmotiontest/actions/workflows/cypress-report.yaml/badge.svg)](https://github.com/Mahmoud-Eltohamy/workmotiontest/actions/workflows/cypress-report.yaml)

### Next steps
1. harden the test code to have page action pattern and enhance it with some assertion for each step.
2. enhance test execution for better performance and reliability
3. convert running to be in docker to sure unified execution of tests
4. add responsive test cases for different view ports using galen framework.