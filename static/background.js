let salesforceSessionId;

function getSalesforceSessionId() {
    return new Promise((resolve, reject) => {
        chrome.cookies.get({ url: 'https://areyatech7-dev-ed.lightning.force.com', name: 'sid' }, cookie => {
            if (cookie) {
                resolve(cookie.value);
            } else {
                reject(new Error('Salesforce session ID cookie not found'));
            }
        });
    }); 
}


getSalesforceSessionId()
    .then(sessionId => {
        console.log("Salesforce Session ID:==", sessionId);
        salesforceSessionId = sessionId; 
    })
    .catch(error => {
        console.error("Error:", error);
    });