describe('Add Liquidity', () => {
  it('loads the two correct tokens', () => {
    cy.visit('/add/0x5ce9680bddc91d955a51b959f5cabaf466b0be5a-0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'SOLAR')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('contain.text', 'WAVAX')
  })

  it('does not crash if SOLAR is duplicated', () => {
    cy.visit('/add/0x5ce9680bddc91d955a51b959f5cabaf466b0be5a-0x5ce9680bddc91d955a51b959f5cabaf466b0be5a')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'SOLAR')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('not.contain.text', 'SOLAR')
  })

  it('token not in storage is loaded', () => {
    cy.visit('/add/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7-0xd586e7f844cea2f87f50152665bcbc2c279d8d70')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'WAVAX')
    cy.get('#add-liquidity-input-tokenb .token-symbol-container').should('contain.text', 'DAIe')
  })

  it('single token can be selected', () => {
    cy.visit('/add/0xd586e7f844cea2f87f50152665bcbc2c279d8d70')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'DAIe')
    cy.visit('/add/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7')
    cy.get('#add-liquidity-input-tokena .token-symbol-container').should('contain.text', 'WAVAX')
  })

  it('redirects /add/token-token to add/token/token', () => {
    cy.visit('/add/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/add/0xb290b2f9f8f108d03ff2af3ac5c8de6de31cdf6d/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('redirects /add/WAVAX-token to /add/WAVAX-address/token', () => {
    cy.visit('/add/0xc778417E063141139Fce010982780140Aa0cD5Ab-0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85')
    cy.url().should(
      'contain',
      '/add/0xc778417E063141139Fce010982780140Aa0cD5Ab/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85'
    )
  })

  it('redirects /add/token-WAVAX to /add/token/WAVAX-address', () => {
    cy.visit('/add/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85-0xc778417E063141139Fce010982780140Aa0cD5Ab')
    cy.url().should(
      'contain',
      '/add/0xF9bA5210F91D0474bd1e1DcDAeC4C58E359AaD85/0xc778417E063141139Fce010982780140Aa0cD5Ab'
    )
  })
})
