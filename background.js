var isChallengeQuestionShown = true;


chrome.commands.onCommand.addListener(function(command) {
 
    chrome.tabs.query({'url':'https://www.duolingo.com/*'}, tabs => {

            chrome.tabs.sendMessage(tabs[0].id, {type: command});

            if(command === 'toggleChallengeText'){
                let hideCSS = `button + span[data-test="hint-sentence"]{
                    display:none !important;
                }`;

                let showCSS = `button + span[data-test="hint-sentence"]{
                    display:inline !important;
                }`;
                chrome.tabs.insertCSS(tabs[0].id, {'code': isChallengeQuestionShown === true ? hideCSS : showCSS } )
                isChallengeQuestionShown = !isChallengeQuestionShown;
            }
    });


  });