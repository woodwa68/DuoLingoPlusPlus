chrome.runtime.onMessage.addListener(request => {

  if (request.type === 'repeatAudio') {

    let buttons = document.getElementsByTagName("Button");
    let index = buttons.length < 5 ? 0 : 1;
    buttons[index].click(); 

  }

  if (request.type === 'repeatAudioSlowly') {
    
    document.getElementsByTagName("Button")[0].click(); 

  }


});