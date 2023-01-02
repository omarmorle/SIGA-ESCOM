chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete' && /^http/.test(tab.url)) {
        chrome.scripting.executeScript({
            target: { tabId: tabId },
            files: ['./calculate.js']
        })
            .then(() => {
                console.log('Script ejecutado con éxito');
            })
            .catch(err => console.log(err));
    }
});