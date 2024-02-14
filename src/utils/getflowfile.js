export async function getFlowXMLFile(container) {
    const currentUrl = window.location.href;
    const domainUrl = currentUrl.split('.')[0] + '.my.salesforce.com/';
    const flowId = extractFlowIdFromUrl(currentUrl);
    const sessionId = '00D5g000005LFS1EAO!ARQAQCzJY99UMjCQ6BFRl1NiEsDoJYLwsn_URFbqx2BfHRtCVjR_PxfB6uoQKJ8bK4fW8rp9_nM9kxNCN4BEDBbnZxnZaPSV';

    const jsforce = require('jsforce');
    const conn = new jsforce.Connection({
        serverUrl: domainUrl,
        sessionId: sessionId
    });

    try {
        if(flowId){
            const result = await conn.tooling.query("SELECT Id, Metadata, MasterLabel FROM flow WHERE id = '" + flowId + "'");
            const flows = result.records;
            const targetFlow = flows[0]; 
            const flowMetadata = targetFlow.Metadata;
            const fullName = targetFlow.MasterLabel;
            console.log(fullName);
            console.log(flowMetadata);
        }
    } catch (err) {
        console.error('Error querying Flow:', err);
    }
}

function extractFlowIdFromUrl(url) {
    const params = new URLSearchParams(new URL(url).search);
    return params.get('flowId');
}