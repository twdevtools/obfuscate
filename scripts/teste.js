let currentScriptUrl = document.currentScript.src;
    let scriptUrl = currentScriptUrl.split('url=')[1];
    let isAllowedSource = true;

if (!scriptUrl || !scriptUrl.startsWith('https://twscripts.dev/')) {
        isAllowedSource = false;
    }
