document.getElementById('copy-ip-btn').addEventListener('click', () => {
    const textToCopy = 'https://www.roblox.com/groups/10232644/Skive-Studios#!/about';
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
  
    const popupMessage = document.getElementById('popup-message');
    popupMessage.classList.add('show');
    setTimeout(() => {
      popupMessage.classList.remove('show');
    }, 2000);
  });
  