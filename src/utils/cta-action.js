import { getButton } from './button.js';
import { elements } from "./uiElements.js";
import { togglePopup } from './popup.js';

export function addCallToActionButton(container) {
    const currentUrl = window.location.href;
    var domainUrl = currentUrl.split('.')[0] + '.my.salesforce.com/';
    const flowId = extractFlowIdFromUrl(currentUrl);
    const sessionId = '00D5g000005LFS1EAO!ARQAQCzJY99UMjCQ6BFRl1NiEsDoJYLwsn_URFbqx2BfHRtCVjR_PxfB6uoQKJ8bK4fW8rp9_nM9kxNCN4BEDBbnZxnZaPSV';
    var jsforce = require('jsforce');
    var conn = new jsforce.Connection({
    serverUrl : domainUrl,
    sessionId : sessionId

    });

    conn.tooling.query("SELECT Id, Metadata,MasterLabel FROM flow WHERE id = '" + flowId + "'", function(err, result) {
        if (err) {
            return console.error('Error querying FlowDefinitions:', err);
        }
        const flows = result.records;
        const targetFlow = flows[0]; 
        const flowMetadata = targetFlow.Metadata;
        const fullName = targetFlow.MasterLabel;
        alert(fullName);
        const flowXML = document.getElementById('flowXML');
        flowXML.innerHTML = JSON.stringify(flowMetadata);
    });
}


function extractFlowIdFromUrl(url) {
    const params = new URLSearchParams(new URL(url).search);
    return params.get('flowId');
}