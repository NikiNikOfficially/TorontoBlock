browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    switch (message.type) {
        case 'get__count':
            sendResponse(replacedCounter)
            break;

        default:
            break;
    }
})