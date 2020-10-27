//addToList([displayBadge(), displayFPS()])
setUp()

function setUp() {

    var infoContainer = document.createElement('div')
    infoContainer.id = '__torontoINFOCONTAINER'
    infoContainer.style.userSelect = 'none'
    infoContainer.style.zIndex = '1000'
    infoContainer.style.position = 'fixed'
    infoContainer.style.top = '6px'
    infoContainer.style.right = '6px'
    infoContainer.innerHTML = '<ul id="__torontoList" style="padding: 0; margin: 0; list-style: none;" ></ul>'
    document.body.appendChild(infoContainer)
}

function addToList(objs = []) {
    var __torontoList = document.getElementById('__torontoList')
    objs.forEach(obj => {
        var li = document.createElement('li')
        li.style.width = '100%'
        li.style.marginBottom = '2px !important'
        li.appendChild(obj)
        __torontoList.appendChild(li)
    })
}

function displayBadge() {
    var badge = document.createElement('span')
    badge.id = '__torontoBadge'
    badge.style.position = 'relative'
    badge.style.background = 'rgba(0, 0, 0, 0.5)'
    badge.style.borderRadius = '5px'
    badge.style.fontSize = '10px'
    badge.style.padding = '3px 8px'
    badge.style.fontFamily = 'Arial'
    badge.style.fontWeight = '700'
    badge.style.color = 'rgb(0, 255, 0)'
    badge.style.float = 'right'

    badge.innerText = 'TorontoBlock'

    return badge
}

function displayFPS() {

    var kFps = document.createElement('span')
    kFps.id = '__torontoFPS'
    kFps.style.position = 'relative'
    kFps.style.background = 'rgba(0, 0, 0, 0.5)'
    kFps.style.borderRadius = '5px'
    kFps.style.fontSize = '10px'
    kFps.style.padding = '3px 8px'
    kFps.style.fontFamily = 'Arial'
    kFps.style.fontWeight = '700'
    kFps.style.float = 'right'
    kFps.style.color = 'rgb(0, 255, 0)'

    let be = Date.now(), fps = 0;
    requestAnimationFrame(
        function loop() {
            let now = Date.now()
            fps = Math.round(1000 / (now - be))
            be = now
            requestAnimationFrame(loop)
            if (fps < 35) {
                kFps.style.color = "red"
                kFps.textContent = fps
            } if (fps >= 35 && fps <= 41) {
                kFps.style.color = "deepskyblue"
                kFps.textContent = fps + " FPS"
            } else {
                kFps.style.color = "rgb(0, 255, 0)"
                kFps.textContent = fps + " FPS"
            }
        }
    )

    return kFps
}