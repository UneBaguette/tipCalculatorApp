const col = document.querySelectorAll('.column div');
const column = document.querySelector('.column');
const people = document.querySelector('.input-people input');
const totalTip = document.querySelector('.total p');
const tipAmount = document.querySelector('.tip-amount p');
const resetDiv = document.querySelector('.reset');
const resetBtn = document.querySelector('.reset button');
let inputs = document.querySelectorAll('.content input');
let tip = 0;
let total = 0;
let temp;
let a;
let b;
let c;
let d;

col.forEach(c => {
    c.addEventListener('click', function test() {
        let col = document.querySelectorAll('.column div');
        if (c.classList.contains('custom')){
            c.remove();
            const input = 
            `
            <input type="number" name="custom" id="custom" placeholder="0">
            `;
            column.innerHTML += input;
            document.querySelector('#custom').focus();
            inputs = document.querySelectorAll('.content input');
            b = document.querySelector('#custom').valueAsNumber;
            col = document.querySelectorAll('.column div');
            checkI();
        } else {
            for (let i = 0; i < col.length; i++){
                if (c === col[i] && !c.classList.contains('col-active')){
                    c.classList.add('col-active');
                } else if (c === col[i] && c.classList.contains('col-active')){
                    c.classList.remove('col-active');
                } else {
                    col[i].classList.remove('col-active');
                }
            }
            d = c.innerText;
            temp = d.replace('%', '');
            d = parseInt(temp);
            d = parseFloat(d) / 100;
            update();
        }
        if (document.querySelector('#custom') !== null){
            for (let j = 0; j < col.length; j++){
                col[j].classList.remove('col-active');
            }
        }
    })
})

function checkI(){
    inputs.forEach(z => {
        if (document.querySelector('#custom') === null){
            z.value = '';
        }
        z.addEventListener('input', () => {
            // z.value = z.value < 0 ? 0 : z.value;
            if (z.id === 'bill'){
                a = z.valueAsNumber;
            } else if (z.parentNode === column){
                b = z.valueAsNumber;
                b = parseFloat(b) / 100;
            } else if (z === people) {
                z.valueAsNumber = z.valueAsNumber < 0 ? 0 : z.valueAsNumber;
                c = z.valueAsNumber;
                const peopleE1 = document.querySelector('.input-people');
                const peopleE2 = document.querySelector('.people h4');
                if (people.valueAsNumber <= 0){
                    peopleE1.classList.add('error');
                    peopleE2.style.display = 'inline';
                } else {
                    peopleE1.classList.remove('error');
                    peopleE2.style.display = 'none';
                }
            }
            update();
        })
    })
}

function update(){
    if (a >= 1 && c >= 1 && b === undefined && d !== undefined || a >= 1 && b >= 0.01 && c >= 1){
        resetDiv.classList.add('active-but');
        if (document.querySelector('#custom') !== null){
            tip = (a / c) * b;
        } else {
            tip = (a / c) * d;
        }
        total = (a / c) + tip;
        tipAmount.innerText = '$' + tip.toFixed(2);
        totalTip.innerText = '$' + total.toFixed(2);
    } else {
        tip = 0;
        total = 0;
        tipAmount.innerText = '$' + tip.toFixed(2);
        totalTip.innerText = '$' + total.toFixed(2);
    }
}

resetBtn.addEventListener('click', () => {
    if (a !== 0){
        resetDiv.classList.remove('active-but');
        reset();
    } else {
        return;
    }
})

function reset(){
    inputs.forEach(z => {
        z.value = '';
    })
    if (document.querySelector('.col-active') !== null){
        for (let j = 0; j < col.length; j++){
            col[j].classList.remove('col-active');
        }
    }
    a = undefined;
    b = undefined;
    c = undefined;
    d = undefined;
    tip = 0;
    total = 0;
    tipAmount.innerText = '$' + tip.toFixed(2);
    totalTip.innerText = '$' + total.toFixed(2);
}

checkI();