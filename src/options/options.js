var checkboxReplaceImages = document.getElementById('checkboxReplaceImages')
var selectNekosLifeCategory = document.getElementById('selectNekosLifeCategory')
var checkboxUseDiscordWebhook = document.getElementById('checkboxUseDiscordWebhook')
var inputDiscordWebhookUrl = document.getElementById('inputDiscordWebhookUrl')
var buttonSubmit = document.getElementById('buttonSubmit')
var message = document.getElementById('message')

document.addEventListener('DOMContentLoaded', loadOptions)
buttonSubmit.addEventListener('click', saveOptions)
checkboxUseDiscordWebhook.addEventListener('change', checkboxUseDiscordWebhook_OnChange)

function loadOptions() {
    Config.getOptions((err, options) => {
        var replaceImages = options.replaceImages
        var nekosLifeCategory = options.nekosLifeCategory

        var useDiscordWebhook = options.useDiscordWebhook
        var discordWebhookUrl = options.discordWebhookUrl


        checkboxReplaceImages.checked = replaceImages
        selectNekosLifeCategory.value = nekosLifeCategory

        checkboxUseDiscordWebhook.checked = useDiscordWebhook
        inputDiscordWebhookUrl.value = discordWebhookUrl

        if (useDiscordWebhook == false) inputDiscordWebhookUrl.disabled = true

    })
}

function saveOptions() {

    Config.setOptions({
        'replaceImages': checkboxReplaceImages.checked,
        'nekosLifeCategory': selectNekosLifeCategory.value,
        'useDiscordWebhook': checkboxUseDiscordWebhook.checked,
        'discordWebhookUrl': inputDiscordWebhookUrl.value
    })
}

function checkboxUseDiscordWebhook_OnChange(e) {
    if (e.target.checked) {
        inputDiscordWebhookUrl.disabled = false
    } else {
        inputDiscordWebhookUrl.disabled = true
    }
}