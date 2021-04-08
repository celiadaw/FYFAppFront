
const createElement = (el, cls) => {
    const element = createHtmlElement(el);
    if(cls !== undefined) {
        addClass(element, cls);
    }
    
    return element;
};
const remover = (el) => {
    el.remove();
};
const removeAll = (arr) => {
    arr.forEach( (cur) => {
        cur.remove();
    });
};
 

const createHtmlElement = ( el ) => {
    return document.createElement(el);
};

const createHtmlArrays = (el, num) => {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push( createHtmlElement(el) );
    }

    return arr;
}

const appendElement = (el1, el2) => {

    return el1.appendChild(el2);

};

const insertTextNode = (el1, textEl1) => {
    
    let elementText = document.createTextNode(textEl1);
    return el1.appendChild(elementText);
    
};

const addTextContent = (element, string) => {
    element.textContent = string;
}

const addClass = (el, cls) => {
    return el.classList.add(cls);
};

const addToggleClass = (el, cls) => {
    return el.classList.toggle(cls);
};

const addAttr = (el, attrType, attrName) => {
    return el.setAttribute(attrType, attrName);
};

const removeClass = (el, cls) => {
    return el.classList.remove(cls);
};

const appendChilds = ( arr, el2 ) => {
    arr.forEach( (c) => {
        appendElement( c, createHtmlElement(el2) );
    })
};

const querySelection = (el) => {
    return document.querySelector(el);
};

const querySelectionAll = (el) => {
    return document.querySelectorAll(el);
};

const replaceCont = (a, b) => {
    a.remove();
    b();
};




export {createElement, appendElement, querySelection, replaceCont, addClass, addAttr, createHtmlArrays, remover, removeAll};