
function translit(event){
    const dictionary = {
            'а':'a', 'q':'q',
            'б':'b', 'w':'w',
            'в':'v', 'e':'e',
            'г':'g', 'r':'r',
            'д':'d', 't':'t',
            'е':'e', 'y':'y',
            'ё':'e', 'u':'u',
            'ж':'g', 'i':'i',
            'з':'z', 'o':'o',
            'и':'i', 'p':'p',
            'й':'y', 'a':'a',
            'к':'k', 's':'s',
            'л':'l', 'd':'d',
            'м':'m', 'f':'f',
            'н':'n', 'g':'g',
            'о':'o', 'h':'h',
            'п':'p', 'j':'j',
            'р':'r', 'k':'k',
            'с':'s', 'l':'l',
            'т':'t', 'z':'z',
            'у':'u', 'x':'x',
            'ф':'f', 'c':'c',
            'х':'kh','v':'v',
            'ц':'cs','b':'b',
            'ч':'ch','n':'n',
            'ш':'sh','m':'m',
            'щ':'sch',
            'ь':"'",
            'ъ':'',
            'ы':'i', 
            'э':'e',
            'ю':'yu',
            'я':'ya',
            ' ':' ',
            ',':',',
            '!':'!',
            '?':'?',
            ':':':',
    }

    // let k = event.key
    let text = document.querySelector('.field').value
    let str = '';
    for ( let i = 0; i < text.length; i++){
        let k = text[i]
        if ( dictionary[k] != undefined){
            str += dictionary[k]
            // document.querySelector('.rus-translite').innerHTML
        }
        else {
            if(dictionary[k] === dictionary[k.toUpperCase()]){
                let s = dictionary[k.toLowerCase()]
                str += s.toUpperCase()
                // document.querySelector('.rus-translite').innerHTML
            }
        }
    } 
    return str
}

let button  = document.querySelector('.input-button')
let input = document.querySelector('.field')


button.addEventListener('click', addWord);
input.addEventListener('keydown', (event) => {
  if (event.code === 'Enter') {
    addWord()
  }
});



function addWord() {
    let input = document.querySelector('.field')
    input = input.value;
    let divRu = document.querySelector('.column-ru') 
    // достаем див с колонкой рус
    
    let rusTranslite = document.createElement('div')
    rusTranslite.className = 'rus-translite'

    let rusTransliteNum = document.createElement('div')
    rusTransliteNum.className = "rus-translite-num"
    rusTranslite.append(rusTransliteNum)

    let rusTransliteText = document.createElement('div')
    rusTransliteText.className = "rus-translite-text"
    rusTranslite.append(rusTransliteText)
    let rusTransliteLength = document.querySelectorAll('.rus-translite')
    let engTransliteLength = document.querySelectorAll('.eng-translite')
    // console.log(rusTransliteLength.length)
    for (let i = 0; i < rusTransliteLength.length; i++){
        rusTransliteLength[i].style.borderRadius = '0px'
        engTransliteLength[i].style.borderRadius = '0px'
    }
    rusTransliteNum.innerText = `${rusTransliteLength.length + 1}`
    rusTransliteText.innerText = input
    rusTranslite.style.borderTop = "1px solid black"
    rusTranslite.style.borderRadius = '0px 0px 0px 8px'
    let idRusTranslit = document.querySelector('#id-rus-translit')
    idRusTranslit.style.borderRadius = '8px 0px 0px 0px'

    let divEng = document.querySelector('.column-eng') 
    // достаем див с колонкой рус
    let engTranslite = document.createElement('div')
    engTranslite.className = 'eng-translite'

    let engTransliteNum = document.createElement('div')
    engTransliteNum.className = "eng-translite-text"
    engTranslite.append(engTransliteNum)

    

    let engTransliteBotton = document.createElement('BUTTON')
    engTransliteBotton.className = "img-delete"
    engTransliteBotton.onclick = function deleteElement(){
        let rusTransliteLength = document.querySelectorAll('.rus-translite')
        let engTransliteLength = document.querySelectorAll('.eng-translite')
        let rustranslitenum = document.querySelectorAll('.rus-translite-num')
        
            for (let i=0; i<engTransliteLength.length; i++){
                if (engTransliteLength[i] == engTransliteBotton.parentElement){
                    rusTransliteLength[i].remove()
                    engTransliteBotton.parentElement.remove()
                }
            }
            let listOfdiv = document.querySelectorAll('.rus-translite-num')
            for( let i = 0; i < listOfdiv.length ; i++){
                listOfdiv[i].innerText = i+1
            }
        if ((rusTransliteLength.length - 1) === 1){
            rusTransliteLength[0].style.borderRadius = '8px 0px 0px 8px';
        }
        if ((rusTransliteLength.length - 1) === 1){
            engTransliteLength[0].style.borderRadius = '0px 8px 8px 0px';
        }if (((rusTransliteLength.length - 1) > 1)){
            let columnRu = document.querySelector('.column-ru')
            let lastChild = columnRu.lastElementChild
            lastChild.style.borderRadius = '0px 0px 0px 8px'
            let columnEng = document.querySelector('.column-eng')
            let lastChildEng = columnEng.lastElementChild
            lastChildEng.style.borderRadius = '0px 0px 8px 0px'
        }
    }
    engTranslite.append(engTransliteBotton)

    engTransliteNum.innerText = translit(input)
    engTransliteBotton.innerHTML = `<img src="icons/SF Symbol.svg" alt=""></img>`
    engTranslite.style.borderTop = "1px solid black"
    engTranslite.style.borderRadius = '0px 0px 8px 0px'
    let idEngTranslit = document.querySelector('#id-eng-translit')
    idEngTranslit.style.borderRadius = '0px 8px 0px 0px'
    if ( input.length > 7){
        rusTransliteText.innerText = input.slice(0,7) + '...'
        rusTranslite.id = 'rusTitleLength'
        let windowRus = document.createElement('div')
        windowRus.className = 'rusTip'
        windowRus.innerText = input
        rusTranslite.append(windowRus)
    }
    if ( input.length > 7){
        engTransliteNum.innerHTML = engTransliteNum.innerHTML.slice(0,7) + '...'
        engTranslite.id = 'EngTitleLength'
        let windowEng = document.createElement('div')
        windowEng.className = 'tip'
        windowEng.innerText = translit(input)
        engTranslite.append(windowEng)
    }
    divRu.append(rusTranslite)
    divEng.append(engTranslite)
    let delInpit = document.querySelector('.field')
    delInpit.value = ""
}; 

let removeTranslitDiv = document.querySelectorAll(".translite")
let allDelete = document.querySelector('.delete-all-button')
allDelete.addEventListener('click', function() {
    let ruDelete = document.querySelectorAll(".rus-translite")
    let engDelete = document.querySelectorAll(".eng-translite")
    for (let i = 1; i < ruDelete.length; i++){
        ruDelete[i].remove()
        engDelete[i].remove()
    }
    let idEngTranslit = document.querySelector('#id-eng-translit')
    idEngTranslit.style.borderRadius = '0px 8px 8px 0px'
    let idRusTranslit = document.querySelector('#id-rus-translit')
    idRusTranslit.style.borderRadius = '8px 0px 0px 8px'
})





