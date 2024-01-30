function encodeAndDecodeMessages() {

    let btns = Array.from(document.querySelectorAll('button'));

    btns[0].addEventListener('click', encode);
    btns[1].addEventListener('click', decode);

    let textBoxes = Array.from(document.querySelectorAll('textarea'))

    let msgRef = textBoxes[0]
    let receivedMsgRef = textBoxes[1]
    function encode() {
        let string = msgRef.value.split("")
            .map(el => el = el.charCodeAt() + 1)
            .map(el => String.fromCharCode(el))
            .join("");
        receivedMsgRef.textContent = string;
        msgRef.value = ''

    }

    function decode() {

        let encodedMsg = receivedMsgRef.textContent;
        let decoded = encodedMsg.split("")
            .map(el => el = el.charCodeAt() - 1)
            .map(el => String.fromCharCode(el))
            .join("");
        receivedMsgRef.textContent = decoded;
    }
}