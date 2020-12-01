chrome.runtime.onInstalled.addListener(() => {
  chrome.browserAction.onClicked.addListener((tab) => {
    let action_url = "https://9xbud.com/" + tab.url;
    chrome.tabs.create({ url: action_url });
  });
});
