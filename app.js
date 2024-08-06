let navs = document.querySelectorAll('.navLinks');
let sideScreenMenu = document.querySelector('.sideScreenMenu');
let menuItems = document.querySelector('.menuItems');

let outputContent = getId('outputContent');
let routeSection1 = getId('routeSection1');
let routeSection2 = getId('routeSection2');
let PPbusStations = getId('PPbusStations');

let OutputScreen = getId('OutputScreen');
let outputBusStopPart1 = getId('outputBusStopPart1');
let outputBusStopPart2 = getId('outputBusStopPart2');

// FONT SIZE HANDLING HANDLES
let StopNameHead = getId('StopNameHead');
let StopNameSub = getId('StopNameSub');

// Suggesions List
let input1 = getId('input1');
let input2 = getId('input2');
let suggessionsList = getId('suggessionsList');

// From to Section Handles
let swapIconContainer = getId('swapIconContainer');
let input2Container = getId('input2Container');
let FromToSuggesions = getId('FromToSuggesions');

// Referance Arrays and Variables
let suggessionsArray = routesArray;

function navigation(ref) {
    removeActiveLinks();
    removeActiveMenus();
    ref.classList.add('activeLink');
    hideHomeScreenSections();
    switch (ref.value) {
        case 1:
            // Routes
            input1.setAttribute('placeholder', 'Search By Route No...');
            routeSection1.classList.remove('close');
            routeSection2.classList.remove('close');

            suggessionsArray = routesArray;
            break;
        case 2:
            // Bus Stop
            input1.setAttribute('placeholder', 'Search By Bus Stop...');
            PPbusStations.classList.remove('close');

            suggessionsArray = SHD;
            break;
        case 3:
            // From - To
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            break;
        case 4:
            // Fare Chart
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            break;

        default:
            break;
    }
}

function menuItemsClick(ref) {
    removeActiveMenus();
    ref.classList.add('active');
    changeIcons(ref);
    sideScreenMenu.classList.toggle('open');
    console.log(ref.value);

    removeActiveLinks();
    hideHomeScreenSections();
    switch (ref.value) {
        case 1:
            // Alternate Route
            swapIconContainer.classList.remove('hide');
            input2Container.classList.remove('hide');
            FromToSuggesions.classList.remove('hide');
            input1.setAttribute('placeholder', 'Travelling From...');

            suggessionsArray = SHD;
            break;

        default:
            break;
    }
}

function hideHomeScreenSections() {
    swapIconContainer.classList.add('hide');
    input2Container.classList.add('hide');
    routeSection1.classList.add('close');
    routeSection2.classList.add('close');
    PPbusStations.classList.add('close');
    FromToSuggesions.classList.add('hide');
    suggessionsList.classList.add('hide');
    suggessionsList.innerHTML = "";
    input1.value = '';
    input2.value = '';
}

function viewStop(ref) {
    OutputScreen.classList.remove('close');
    let main;
    let sub;
    if (ref.value == 1) {
        main = 'SECUNDERABAD';
        sub = ref.innerHTML;
        outputBusStopPart2.classList.add('hide');
        outputBusStopPart1.classList.remove('hide');
    } else if (ref.innerHTML.includes('CBS')) {
        main = 'CBS';
        sub = 'CENTRAL BUS STATION';
    } else if (ref.innerHTML.includes('JBS')) {
        main = 'JBS';
        sub = 'JUBLIE BUS STATION';
    } else {
        main = ref.innerHTML;
        sub = '';
    }
    handleFontSize(main, sub);
}

function handleFontSize(ref, subref) {
    StopNameHead.innerHTML = ref;
    StopNameSub.innerHTML = subref;
    if (subref == '' || subref == undefined) {
        StopNameSub.style.display = "none";
    } else {
        StopNameSub.style.display = "block";
    }

    if (ref.length <= 4) {
        StopNameHead.style.fontSize = "66px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 7) {
        StopNameHead.style.fontSize = "52px";
        StopNameHead.style.letterSpacing = "10px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 8) {
        StopNameHead.style.fontSize = "48px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-15px";
    } else if (ref.length <= 9) {
        StopNameHead.style.fontSize = "38px";
        StopNameHead.style.letterSpacing = "8px";
        StopNameSub.style.marginTop = "-13px";
    } else if (ref.length <= 12) {
        StopNameHead.style.fontSize = "36px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 14) {
        StopNameHead.style.fontSize = "34px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-10px";
    } else if (ref.length <= 16) {
        StopNameHead.style.fontSize = "28px";
        StopNameHead.style.letterSpacing = "2px";
        StopNameSub.style.marginTop = "-8px";
    }
}

function showSuggesions(ref) {
    const filterValue = ref.value.toUpperCase();
    const filteredArray = suggessionsArray.filter((item) =>
        item.toUpperCase().startsWith(filterValue)
    );
    displayList(filteredArray);
}

function displayList(filteredArray) {
    suggessionsList.style.display = "flex";
    suggessionsList.innerHTML = "";

    filteredArray.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        listItem.setAttribute('onclick', 'viewRoute(this)');
        suggessionsList.appendChild(listItem);
    });
}

function createListDropDown(dataArray, List, Mode) {
    dataArray.forEach(element => {
        let listItem = document.createElement("li");
        listItem.textContent = element;
        if (Mode == 1) {
            listItem.setAttribute('onclick', 'viewRoute(this)');
        } else if (Mode == 2) {
            listItem.setAttribute('onclick', 'viewStop(this)');
        }
        List.appendChild(listItem);
    });
}

function swapInputValues() {
    let temp;
    temp = input1.value;
    input1.value = input2.value;
    input2.value = temp;
}

function openMenu() {
    sideScreenMenu.classList.toggle('open');
}

function closeOutputScreen() {
    OutputScreen.classList.add('close');
}

function removeActiveLinks() {
    navs[0].classList.remove('activeLink');
    navs[1].classList.remove('activeLink');
    navs[2].classList.remove('activeLink');
    navs[3].classList.remove('activeLink');
}

function removeActiveMenus() {
    menuItems.children[0].classList.remove('active');
    menuItems.children[1].classList.remove('active');
    menuItems.children[2].classList.remove('active');
    menuItems.children[3].classList.remove('active');
    menuItems.children[4].classList.remove('active');

    menuItems.children[0].children[0].src = 'images/icons/altRouteWhite.png';
    menuItems.children[1].children[0].src = 'images/icons/idWhite.png';
    menuItems.children[2].children[0].src = 'images/icons/helpWhite.png';
    menuItems.children[3].children[0].src = 'images/icons/contactWhite.png';
    menuItems.children[4].children[0].src = 'images/icons/moreWhite.png';
}

function changeIcons(ref) {
    switch (ref.value) {
        case 1:
            ref.children[0].src = 'images/icons/altRouteBlack.png';
            break;
        case 2:
            ref.children[0].src = 'images/icons/idBlack.png';
            break;
        case 3:
            ref.children[0].src = 'images/icons/helpBlack.png';
            break;
        case 4:
            ref.children[0].src = 'images/icons/contactBlack.png';
            break;
        case 5:
            ref.children[0].src = 'images/icons/moreBlack.png';
            break;

        default:
            break;
    }
}

function getId(item) {
    return document.getElementById(item);
}