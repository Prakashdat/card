var card = [{text:1,color:'#2B8EAD'},{text:2,color:'#6F98A8'},{text:3,color:'#BFBFBF'},{text:4,color:'#6F98A8'},
{text:5,color:'#BFBFBF'},{text:6,color:'#2F454E'},{text:7,color:'#2F454E'},{text:8,color:'#2B8EAD'},{text:9,color:'#BFBFBF'}];
let container;
container = document.getElementById('cardContainer');
// get mobile container ref
let mobContainer = document.getElementById('mobileContainer');
let stripcard =  mobContainer.children[2];
//let mobBoxContainer = mobContainer.children[2];
let cardStripContainer;
let boxContainer = container.children[0];
function createCard(cardArr) {
    for(let i=0;i<cardArr.length;i++){
        let ele= document.createElement('div');
        ele.classList.add("card","col-lg-4");
        ele.style.backgroundColor = cardArr[i].color;
        let span = document.createElement('span');
        span.appendChild(document.createTextNode(cardArr[i].text));
        span.classList.add("cardNum");
        ele.appendChild(span);
        boxContainer.appendChild(ele);
        }
        container.appendChild(boxContainer);
    }
// for mobile creation
function mobileList(cardArr) {
    for(let i=0;i<cardArr.length;i++){
        cardStripContainer= document.createElement('div');
        cardStripContainer.classList.add("mob-container","col-xs-12");
        let mobEle= document.createElement('div');
        let stripEle = document.createElement('div');
        stripEle.classList.add("strip");
        mobEle.classList.add("mob-card","col-xs-12");
        stripEle.style.backgroundColor = cardArr[i].color;
        mobEle.appendChild(document.createTextNode(cardArr[i].text));
        cardStripContainer.appendChild(stripEle);
        cardStripContainer.appendChild(mobEle);
        stripcard.appendChild(cardStripContainer);
    }
   
}
mobileList(card);
//
function jumble(){
    //clone the array
    let cloneArray = [...card];
    cloneArray.sort(() => Math.random() - 0.5);
    removeAllChildNodes(container.children[2]);
    removeAllChildNodes(mobContainer.children[2]);
    createCard(cloneArray);
    mobileList(cloneArray);
}
function sortCards(){
    removeAllChildNodes(container.children[2]);
    removeAllChildNodes(mobContainer.children[2]);
    createCard(card);
    mobileList(card);
}
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
} 
createCard(card);