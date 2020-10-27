// var imgType = 'lewd'//'cum_jpg'
log('ready')

browser.browserAction.setBadgeText({ text: `0` })
browser.browserAction.setBadgeBackgroundColor({ color: '#7a1ea9' })

var blockList = [
    "*://area23wbi5xf5shptuoocokv7z5xhjxktzkkmdzdzif7zgvnnyt522qd.onion/*",
    "*://3bbad7fauom4d6sgppalyqddsqbf5u5p56b5k5uk2zxsy3d6ey2jobad.onion/static/ads/*",
    "*://3ka3jenp6w3qdviidxwlnujeybk4divhb3y67eeq5lquki4g6jqmc5ad.onion/*",
    "*://ci7lskssaclenp2pf4rt72pptvayudy3u4nv3f6ihhnu224ik4dz7tad.onion/adverts/*",
    "*://wwfy2om6nbel3ags.onion/images/*",
    "*://lolwuc3342535625.onion/*"
]

browser.webNavigation.onBeforeNavigate.addListener(onBeforeNavigate, { url: [{ hostSuffix: '.onion' }] })
browser.webRequest.onBeforeRequest.addListener(redirectImages, { urls: blockList, types: ["image"] }, ["blocking"])
async function redirectImages(requestDetails) {

    var _url = requestDetails.url

    var nekosLifeCategory = await Config.getOption('nekosLifeCategory')
    var replaceImages = await Config.getOption('replaceImages')

    if (!replaceImages) return { cancle: true }

    let response = await fetch(`https://nekos.life/api/v2/img/${nekosLifeCategory}`)
    let json = await response.json()
    var url = json.url

    return { redirectUrl: url }

}

function onBeforeNavigate(details) {
    browser.browserAction.setBadgeText({ text: `0` })
}

function log(message) {
    console.log('[toronto]', message)
}