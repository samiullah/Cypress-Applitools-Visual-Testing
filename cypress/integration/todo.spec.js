describe('todo filtering spec', ()=>{

    beforeEach(()=>{

        Cypress.env("APPLITOOLS_API_KEY"),

        cy.eyesOpen({
            appName: 'TODOMVC',
            testName: "My first test with applitools",
            browser: {
                width: 800,
                height: 600

            },
        })
    })
     
    it('first filter test', ()=>{

        cy.visit('http://todomvc-app-for-testing.surge.sh/')
        cy.get('.new-todo').type('hello sami tcbzxhjcbhzxbchbzxchjzxbcjzhbchzbxcjh one{enter}')
        cy.eyesCheckWindow();
        // cy.get('label').should('have.text','hello sami testing one')


    })

    afterEach(()=>{

        cy.eyesClose()

    })

})