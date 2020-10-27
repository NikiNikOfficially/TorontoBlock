var spanImagesRplaceCategory = document.getElementById('spanImagesRplaceCategory')
var spanReplacedImages = document.getElementById('spanReplacedImages')
var buttonUpdate = document.getElementById('buttonUpdate')

document.addEventListener('DOMContentLoaded', loadData)
buttonUpdate.addEventListener('click', loadData)


async function loadData() {

    var resReplaceCounter = browser.runtime.sendMessage({ "type": "get__count" })

    resReplaceCounter.then((data) => {
        spanReplacedImages.innerText = data
    })

    let gettingItem = browser.storage.local.get({
        'replaceImages': true,
        'nekosLifeCategory': 'hentai'
    })

    gettingItem.then((items) => {
        spanImagesRplaceCategory.innerText = items['nekosLifeCategory']
    }, async (error) => {

    })
}