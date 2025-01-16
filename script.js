let keyPressed = document.getElementById('keyPressed');

let keyCode = document.getElementById('keyCode');

document.addEventListener('keydown',(e) => {
    e.preventDefault();
    let keyPress = e.key ;
    let keycd = e.keyCode ;
    pressing(keyPress,keycd);
});

let pressing = (keyPress,keycd) => {
    keyPressed.innerHTML = `You Pressed <span style="color:rgb(5, 133, 90);;">${keyPress}</span>`;
    keyCode.innerText = keycd ;
    keyCode.style.display = 'block';
}
