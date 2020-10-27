class Config {

    static async setOptions(options) {
        browser.storage.local.set(options)
            .then(() => {
                console.log('saved')
            }, (e) => {
                console.log('error at saveing')
            })
    }

    static async getOption(key) {
        let gettingItem = await browser.storage.local.get({
            'replaceImages': true,
            'nekosLifeCategory': 'hentai'
        })

        var retData = await gettingItem[key].toString()

        return await retData
    }

    static async getOptions(callback) {
        let gettingItem = browser.storage.local.get({
            'replaceImages': true,
            'nekosLifeCategory': 'hentai',
            'useDiscordWebhook': false,
            'discordWebhookUrl': ''
        })
        gettingItem.then((items) => {
            return callback(false, items)
        }, async (error) => {
            return callback(true, error)
        })
    }

}