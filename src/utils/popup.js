import { getButton } from './button.js'
import { elements } from "./uiElements.js";
import { initFlowScanProcess } from "./scan.js";

const popupCloseClass = "fs-popup-closed";

export function addPopup(container = document?.body) {
    container.appendChild(getStartScanScreen());
}

export function togglePopup() {
    document.getElementById(elements.div.popup.id)
        .classList
        .toggle(popupCloseClass);
}

function getStartScanScreen() {
    addStartScanButton(elements.div.popup);
    return elements.div.popup;
}

function addStartScanButton(popup) {
    popup.appendChild(getButton(
        elements.div.startScan, 
        elements.button.startScan, 
        startScanHandler
    ));
}

function startScanHandler(event) {
    initFlowScanProcess();
}

function isStartScanScreen() {
    return isElementPresent(elements.div.startScan.id);
}

function isScanResultScreen() {
    return isElementPresent(elements.div.scanResultsContainer);
}

function isElementPresent(elementId) {
    return Boolean(document.getElementById(elementId))
}