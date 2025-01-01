const theme1 = document.getElementById('theme1');
const theme2 = document.getElementById('theme2');
const theme3 = document.getElementById('theme3');
const toggler = document.querySelector('.toggler');
const togglers = document.querySelector('.togglers');


togglers.addEventListener('click', themeChanger)


function themeChanger(e) {
    if(theme1 === e.target) {
        toggler.classList.add('theme1pos');
        toggler.classList.remove("theme2pos");
        toggler.classList.remove("theme3pos");
        document.body.classList.remove("theme3");
        document.body.classList.remove("theme2");
    }
    else if(theme2 === e.target) {
        toggler.classList.add('theme2pos');
        toggler.classList.remove("theme1pos");
        toggler.classList.remove("theme3pos");
        document.body.classList.add('theme2');
        document.body.classList.remove('theme3');
    }
    else if(theme3 === e.target) {
        toggler.classList.add('theme3pos');
        toggler.classList.remove("theme1pos");
        toggler.classList.remove("theme2pos");
        document.body.classList.add("theme3");
        document.body.classList.remove("theme2");
    }
}


const keysContainer = document.querySelector(".keys-container");
const resultEl = document.querySelector(".result input");
const equals = document.querySelector(".equals");
const deleteEl = document.querySelector(".delete");
const buttons = document.querySelectorAll('.btns');


keysContainer.addEventListener('click', (e) => {
    let clickedKey = e.target.closest(".btns");
    if(!clickedKey) return;
    else{

        if(deleteEl !== e.target) {
            let userInput = resultEl.value += e.target.innerHTML;
            let expression = userInput.slice(0, userInput.length - 1);
    
            if(equals == e.target) {
                resultEl.value = eval(expression);
            }
        }
    
        else if (deleteEl == e.target) {
            resultEl.value = resultEl.value.slice(0, -1);
        }
        // if (e.target.tagName !== "SPAN" && e.target.tagName !== "INPUT") {
        //     resultEl.value = '';
        // }
    }
			
})