const { expect } = require('@wdio/globals')
const HelloPage = require('../pageobjects/hello.page');

describe('Hello example', () => {
    it('should toggle', async () => {
        await HelloPage.open()

        await HelloPage.toggleTitleWithInput('hello')
        await expect(HelloPage.helloTitle).toBeExisting()
        await HelloPage.toggleButton.click()
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
    it('should not toggle', async () => {
        await HelloPage.open()

        await HelloPage.toggleTitleWithInput('adasdff')
        await expect(HelloPage.helloTitle).not.toBeExisting()
    })
})

