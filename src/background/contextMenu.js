Config.getOptions((options) => {
    if (options.useDiscordWebhook) {

        browser.menus.create({
            id: "itemShare_01",
            title: "Share with Discord server",
            contexts: ["selection"]
        })

        browser.menus.create({
            id: "itemShare_02",
            title: "Share with Discord server",
            contexts: ["link"]
        })

        browser.menus.create({
            id: "itemShare_03",
            title: "Share with Discord server",
            contexts: ["image"]
        })

    }
})

browser.menus.onClicked.addListener(function (info, tab) {
    var tabUrl = tab.url
    var tabTitle = tab.title


    switch (info.menuItemId) {
        case 'itemShare_01':
            if (!isUrl(info.selectionText)) {
                sendToDiscord({
                    username: "Toronto Block",
                    avatar_url: "http://nikinik.bplaced.net/images/toronto_icon_x1024.png",
                    content: 'test',
                    embeds: [
                        {
                            title: `${tabTitle.substring(0, 15).trim()}`,
                            url: `${tabUrl}`,
                            description: `\`\`\`${info.selectionText}\`\`\``,
                            color: 8003241,
                            footer: {
                                text: `shared with TorontoBlock`
                            },
                        }
                    ]
                })
                return
            }

            sendToDiscord({
                username: "Toronto Block",
                avatar_url: "http://nikinik.bplaced.net/images/toronto_icon_x1024.png",
                embeds: [
                    {
                        description: `${info.selectionText}`,
                        color: 8003241,
                        footer: {
                            text: `shared with TorontoBlock`
                        },
                    }
                ]
            })
            break;

        case 'itemShare_02':
            sendToDiscord({
                username: "Toronto Block",
                avatar_url: "http://nikinik.bplaced.net/images/toronto_icon_x1024.png",
                embeds: [
                    {
                        //title: `${info.linkUrl}`,
                        //url: `${info.linkUrl}`,
                        description: `[**${info.linkText}**](${info.linkUrl})`,
                        color: 8003241,
                        footer: {
                            text: `shared with TorontoBlock`
                        },
                    }
                ]
            })
            break;

        case 'itemShare_03':
            var imgSrc = info.srcUrl

            if (imgSrc.startsWith('https') || imgSrc.startsWith('http')) {
                sendToDiscord({
                    username: "Toronto Block",
                    avatar_url: "http://nikinik.bplaced.net/images/toronto_icon_x1024.png",
                    embeds: [
                        {
                            title: `${tabTitle.substring(0, 40).trim()}`,
                            url: `${tabUrl}`,
                            image: {
                                url: `${imgSrc}`
                            },
                            color: 8003241,
                            footer: {
                                text: `shared with TorontoBlock`
                            },
                        }
                    ]
                })
            }

            break;

        default:
            break;
    }
})


function sendToDiscord(embed) {
    Config.getOptions((options) => {
        var url = "https://discordapp.com/api/webhooks/" + options.discordWebhookUrl //"https://discordapp.com/api/webhooks/768948681617047573/vVGI8KoY_Lh0kipUh33yK8MyeeRZHzMOS9JNTz-DpwamaD58uXVGNyGkzQX4gX4yZOH6"

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(embed)
        })
    })
}

function isUrl(url) {
    var regexp = /^((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)$/
    return regexp.test(url.trim())
}