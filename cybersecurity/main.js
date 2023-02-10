function cesar(element) {
    let newResult = "",
        startIndex = undefined,
        endIndex = undefined,
        alphabet = undefined;
    const value = document.getElementById("cesar-value").value.toUpperCase();
    const result = document.getElementById("cesar-result");
    const alphabetElement = document.getElementById("alphabet");
    const alphabetSelectedIndex = alphabetElement.options.selectedIndex;
    const alphabetSelectedValue = alphabetElement.options[alphabetSelectedIndex.toString()].value;
    switch (alphabetSelectedValue) {
        case "alphabetRussian":
            alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
            break;
        case "alphabetEnglish":
            alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        default:
            break;
    }
    result.textContent = "[*] " + value + "\n";
    for (let item of value) {
        startIndex = alphabet.indexOf(item);
        if (startIndex === -1) {
            newResult += item;
        } else {
            endIndex = startIndex + 3 > alphabet.length - 1 ? startIndex + 3 - alphabet.length : startIndex + 3;
            newResult += alphabet[endIndex];
            result.textContent += ">>> " + item + " --> " + alphabet[endIndex] + "\n";
        }
    }
    result.textContent += "[#] " + newResult;
}

function sentence(element) {
    let key = undefined,
        newNode = undefined,
        newElement = undefined,
        newTextContent = undefined,
        newKey = "",
        newValue = undefined,
        arrValue = [],
        newArrValue = [],
        tmp = [];
    key = document.getElementById("sentence-key").value.toUpperCase();
    const value = document.getElementById("sentence-value").value.toUpperCase();
    const result = document.getElementById("sentence-result");
    const valueBefore = document.getElementById("sentence-table-before");
    const valueAfter = document.getElementById("sentence-table-after");
    if (key.length === 0) {
        result.textContent = "";
    } else {
        for (let item of valueBefore.childNodes) {
            if (item.nodeName === "TR") {
                valueBefore.removeChild(item);
            }
        }
        for (let item of valueAfter.childNodes) {
            if (item.nodeName === "TR") {
                valueAfter.removeChild(item);
            }
        }
        newNode = document.createElement("tr");
        newNode.style.display = "block";
        newNode.style.width = "max-content";
        newNode.style.border = "solid 1px black";
        for (let item of key) {
            newElement = document.createElement("th");
            newElement.style.width = "2rem";
            newElement.style.border = "solid 1px gray";
            newTextContent = document.createTextNode(item);
            newElement.appendChild(newTextContent);
            newNode.appendChild(newElement);
        }
        valueBefore.appendChild(newNode);
        newValue = value;
        result.textContent = "[*] Value : " + value + "\n[*] Key : " + key + "\n";
        for (let i = 0; i < key.length; i++) {
            newArrValue.push(null);
        }
        if (newValue.length % key.length !== 0) {
            while (newValue.length % key.length !== 0) {
                newValue += "_";
            }
        }
        for (let i = 0; i < newValue.length; i+=newValue.length/key.length) {
            arrValue.push(value.slice(i, i+newValue.length/key.length))
        }
        for (let i = 0; i < newValue.length / key.length; i++) {
            newNode = document.createElement("tr");
            newNode.style.display = "block";
            newNode.style.width = "max-content";
            newNode.style.border = "solid 1px black";
            for (let item of arrValue) {
                newElement = document.createElement("td");
                newElement.style.width = "2rem";
                newElement.style.border = "solid 1px gray";
                newTextContent = document.createTextNode(item[i]);
                newElement.appendChild(newTextContent);
                newNode.appendChild(newElement);
            }
            valueBefore.appendChild(newNode);
        }
        for (let i = 0; i < key.length; i++) {
            tmp.push([key[i], i]);
        }
        tmp.sort();
        result.textContent += ">>> " + arrValue + "\n";
        for (let i = 0; i < tmp.length; i++) {
            newArrValue[i] = arrValue[tmp[i][1]];
            newKey += tmp[i][0];
        }
        newNode = document.createElement("tr");
        newNode.style.display = "block";
        newNode.style.width = "max-content";
        newNode.style.border = "solid 1px black";
        for (let item of newKey) {
            newElement = document.createElement("th");
            newElement.style.width = "2rem";
            newElement.style.border = "solid 1px gray";
            newTextContent = document.createTextNode(item);
            newElement.appendChild(newTextContent);
            newNode.appendChild(newElement);
        }
        valueAfter.appendChild(newNode);
        for (let i = 0; i < newValue.length / key.length; i++) {
            newNode = document.createElement("tr");
            newNode.style.display = "block";
            newNode.style.width = "max-content";
            newNode.style.border = "solid 1px black";
            for (let item of newArrValue) {
                newElement = document.createElement("td");
                newElement.style.width = "2rem";
                newElement.style.border = "solid 1px gray";
                newTextContent = document.createTextNode(item[i]);
                newElement.appendChild(newTextContent);
                newNode.appendChild(newElement);
            }
            valueAfter.appendChild(newNode);
        }
        result.textContent += ">>> " + newArrValue + "\n";
        result.textContent += "[#] Key : " + newKey + "\n" + "[#] Result : " + newArrValue + "\n";

    }
}

function shift(element) {
    let newResult = "",
        key = undefined,
        startIndex = undefined,
        endIndex = undefined,
        alphabet = undefined,
        newAlphabet = undefined;
    const value = document.getElementById("shift-value").value.toUpperCase();
    const result = document.getElementById("shift-result");
    const alphabetElement = document.getElementById("alphabet");
    const alphabetSelectedIndex = alphabetElement.options.selectedIndex;
    const alphabetSelectedValue = alphabetElement.options[alphabetSelectedIndex.toString()].value;
    key = document.getElementById("shift-key").value.toUpperCase();
    result.textContent = "[*] Value : " + value + "\n[*] Key : " + key + "\n";
    while (key.length < value.length) {
        for (let item of key) {
            if (key.length === value.length) {
                break;
            }
            key += item;
        }
    }
    switch (alphabetSelectedValue) {
        case "alphabetRussian":
            alphabet = "АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
            break;
        case "alphabetEnglish":
            alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            break;
        default:
            break;
    }
    for (let i = 0; i !== value.length; i++) {
        if (alphabet.indexOf(value[i]) !== -1) {
            startIndex = alphabet.indexOf(key[i]);
            endIndex = alphabet.indexOf(value[i]);
            newAlphabet = alphabet.slice(startIndex) + alphabet.slice(0, startIndex);
            result.textContent += ">>> " + value[i] + "+" + key[i] + " --> " + newAlphabet[endIndex] + "\n";
            newResult += newAlphabet[endIndex];
        } else {
            newResult += value[i];
        }
    }
    result.textContent += "[#] " + newResult;
}
