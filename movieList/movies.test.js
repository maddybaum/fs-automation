const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// First we're going to navigate to Google.com
beforeAll(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

// And after our test has completed, we want to close our browser
afterAll(async () => {
    await driver.quit()
})

test('I can add movies', async () => {
    const addMovie = async (driver)=> {
        await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')
    
    
    const movie = await driver.findElement(By.xpath('//li'))
        const displayed = movie.displayed()
    
        expect(displayed).toBeTruthy()
    }
    
    module.exports = {
        addMovie: addMovie
    }
})