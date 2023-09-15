// background.js

function checkForUpdate() {
    fetch('https://github.com/Mshoaib-akhtar/Spark-extension/blob/v1.0.0.1/Spark%20SEO%20Tools/manifest.json')
      .then(response => response.json())
      .then(data => {
        const latestVersion = data.version;
        const currentVersion = chrome.runtime.getManifest().version;
  
        if (latestVersion > currentVersion) {
          // Download and apply the update
          downloadAndApplyUpdate();
        }
      })
      .catch(error => {
        console.error('Error checking for update:', error);
      });
  }
  
  function downloadAndApplyUpdate() {
    fetch('https://github.com/Mshoaib-akhtar/Spark-extension/blob/v1.0.0.1/Spark%20SEO%20Tools/')
      .then(response => response.text())
      .then(updatedScript => {
        // Replace the existing main.js with the updated script
        chrome.scripting.executeScript({
          target: { tabId: -1 },
          function: (script) => {
            const scriptElement = document.createElement('script');
            scriptElement.textContent = script;
            document.documentElement.appendChild(scriptElement);
          },
          args: [updatedScript],
        });
  
        // Reload the extension to apply changes
        chrome.runtime.reload();
      })
      .catch(error => {
        console.error('Error downloading and applying update:', error);
      });
  }
  
  // Check for updates when the extension is loaded or on a schedule
  chrome.runtime.onStartup.addListener(checkForUpdate);
  // You can also set up a periodic update check using setInterval
  // setInterval(checkForUpdate, 24 * 60 * 60 * 1000); // Check once a day
  
