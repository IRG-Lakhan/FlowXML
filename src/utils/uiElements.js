
export const elements = {
    button: {
        callToAction: getButtonElement({
            id: 'cta-button' + generateRandomeId(),
            label: 'Flow Scanner', 
            title: 'Flow Scanner', 
            className: 'fs-cta-button slds-button slds-utility-bar__action'
        }, getIcon('extension/flowscanner-bw.png')),
        startScan: getButtonElement({
            id: 'scan-button' + generateRandomeId(),
            label: 'Scan Flow', 
            title: 'Scan Flow', 
            className: 'slds-button slds-button_brand'
        }, getIcon('ui/scan.png'))
    },
    div: {
        utilBar: getElement('div', {
            id: 'util-bar' + generateRandomeId(),
            className: 'fs-util-bar'
        }),
        utilBarItem: getElement('div', {
            id: 'util-bar-item' + generateRandomeId(),
            className: 'fs-util-bar-item slds-utility-bar__item'
        }),
        popup: getElement('div', {
            id: 'popup' + generateRandomeId(),
            className: 'fs-popup fs-popup-closed'
        }),
        startScan: getElement('div', {
            id: 'popup-start-scan' + generateRandomeId(),
            className: 'fs-popup-start-scan slds-utility-panel__body slds-align_absolute-center'
        }),
        scanResultsContainer: getElement('div', {
            id: 'scan-results-container' + generateRandomeId(),
            className: 'fs-scan-results-container slds-hide'
        }),
    }
};

function getButtonElement(btnSpecs, iconSrc) {
    let btn = getElement("button", btnSpecs);
    btn.innerHTML = (
        iconSrc ? getButtonIcon(iconSrc) : ''
    ) + '<span class="slds-p-horizontal--small">' + btnSpecs.label + '</span>';
    return btn;
}

function getElement(elementType, specs) {
    let element = document.createElement(elementType);
    return updateElementSpecs(element, specs);
}

function updateElementSpecs(element, specs) {
    for (var key in specs) {
        if(specs[key]) {
            element[key] = specs[key];
        }
    }
    return element;
} 

function getButtonIcon(iconUrl) {
    return '<img src="' + iconUrl +
        '" class="slds-button__icon_large"' +
        '/>';
}

function generateRandomeId() {
    return (Math.floor(Math.random() * 100) + 1) * (new Date().getTime());
}

function getIcon(url) {
    return chrome.runtime.getURL('/assets/icons/' + url);
}