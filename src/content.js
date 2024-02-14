
import { elements } from "./utils/uiElements.js";
//import { addCallToActionButton } from './utils/cta-action.js';
import { getFlowXMLFile } from './utils/getflowfile.js';
import { addPopup } from "./utils/popup.js";
//import { getSalesforceSessionId } from "../static/background.js";


init();

async function init() {
    let container = elements.div.utilBar;
    await getFlowXMLFile(container);
    addPopup(container);
    document.body.appendChild(container);
}