const openNav = () => {
    document.getElementById("mySidenav").style.width = "100%"
}

/* Close/hide the sidenav */
function closeNav() {
    document.getElementById("mySidenav").style.width = "0"
}

const setOpenFunc = () => {
    document.getElementById('settings').style.display = ' flex'
}

const setQuitFunc = () => {
    document.getElementById('settings').style.display = 'none'
}


// DARKMODE

// NAV THEME

const darkNav = () => {
    document.getElementById('nav').style.backgroundColor = '#262626'
    document.getElementById('nav').style.color = 'white'
}

const lightNav = () => {
    document.getElementById('nav').style.backgroundColor = 'white'
    document.getElementById('nav').style.color = 'black'
}

// HEADER THEME

const headDark = () => {
    document.getElementById('header').style.backgroundColor = '#262626'
    document.getElementById('header').style.color = 'white' 
}

const headLight = () => {
    document.getElementById('header').style.backgroundColor = 'white'
    document.getElementById('header').style.color = 'black'
}

// SET DISPLAY THEME 

const darkSet = () => {
    document.getElementById('settings').style.backgroundColor = '#262626'
    document.getElementById('settings').style.color = 'white'
}

const lightSet = () => {
    document.getElementById('settings').style.backgroundColor = 'white'
    document.getElementById('settings').style.color = 'black'
}

let cb = document.getElementById('cb')
const crdLst = {
    "1" : document.getElementById('cards-1'),
    "2" : document.getElementById('cards-2'),
    "3" : document.getElementById('cards-3'),
    "4" : document.getElementById('cards-4'),
    "5" : document.getElementById('cards-5'),
    "6" : document.getElementById('cards-6'),
    "7" : document.getElementById('cards-7'),
    "8" : document.getElementById('cards-8'),
}

const funcDarkCrdLst = () => {
    // 1
    crdLst[1].style.backgroundColor = '#262626'
    crdLst[1].style.color = 'white'

    // 2
    crdLst[2].style.backgroundColor = '#262626'
    crdLst[2].style.color = 'white'

    // 3
    crdLst[3].style.backgroundColor = '#262626'
    crdLst[3].style.color = 'white'

    // 4
    crdLst[4].style.backgroundColor = '#262626'
    crdLst[4].style.color = 'white'

    // 5
    crdLst[5].style.backgroundColor = '#262626'
    crdLst[5].style.color = 'white'

    // 6
    crdLst[6].style.backgroundColor = '#262626'
    crdLst[6].style.color = 'white'

    // 7
    crdLst[7].style.backgroundColor = '#262626'
    crdLst[7].style.color = 'white'

    // 8
    crdLst[8].style.backgroundColor = '#262626'
    crdLst[8].style.color = 'white'
}

const funcLightCrdLst = () => {
    // 1
    crdLst[1].style.backgroundColor = 'white'
    crdLst[1].style.color = 'black'

    // 2
    crdLst[2].style.backgroundColor = 'white'
    crdLst[2].style.color = 'black'

    // 3
    crdLst[3].style.backgroundColor = 'white'
    crdLst[3].style.color = 'black'

    // 4
    crdLst[4].style.backgroundColor = 'white'
    crdLst[4].style.color = 'black'

    // 5
    crdLst[5].style.backgroundColor = 'white'
    crdLst[5].style.color = 'black'

    // 6
    crdLst[6].style.backgroundColor = 'white'
    crdLst[6].style.color = 'black'

    // 7
    crdLst[7].style.backgroundColor = 'white'
    crdLst[7].style.color = 'black'

    // 8
    crdLst[8].style.backgroundColor = 'white'
    crdLst[8].style.color = 'black'
}



const themeMode = () => {
    if (
        cb.checked == true
    ) {localStorage.setItem (
        'theme',
        'dark'
    )} else {localStorage.setItem (
        'theme',
        'light'
    )}
    if (localStorage.getItem (
        'theme'
    ) == 'dark') {
        darkNav()
        funcDarkCrdLst()
        headDark()
        darkSet()
        funcDarkWrp()

    } else {
        lightNav()
        lightSet()
        headLight()
        funcLightCrdLst()
        funcLightWrp()

    }
}

const reThemeMode = () => {
    if (localStorage.getItem (
        'theme'
    ) == 'dark') {
        cb.checked = true
    } else if (localStorage.getItem (
        'theme'
    ) == 'light') {
        cb.checked = false
    }
    // STATEMENT DARKMODE
    if (localStorage.getItem (
        'theme'
    ) == 'dark') {
        darkNav()
        headDark()
        funcDarkCrdLst()
        darkSet()

    } else {
        lightNav()
        headLight()
        funcLightCrdLst()
        lightSet()

    }
}

reThemeMode()
