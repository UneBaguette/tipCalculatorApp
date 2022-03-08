const column = document.querySelector('.column');
const people = document.querySelector('.input-people input');
const peopleE1 = document.querySelector('.input-people');
const peopleE2 = document.querySelector('.people h4');
const totalTip = document.querySelector('.total p');
const tipAmount = document.querySelector('.tip-amount p');
const resetDiv = document.querySelector('.reset');
const resetBtn = document.querySelector('.reset button');
const custom = `<div class="custom">Custom</div>`;
let inputs = document.querySelectorAll('.content input');
let tip = 0;
let total = 0;
let a;
let b;
let c;
let d;

function columns(){
    let col = document.querySelectorAll('.column div');
    col.forEach(c => {
        c.addEventListener('click', () => {
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
                for (let j = 0; j < col.length; j++){
                    col[j].classList.remove('col-active');
                }
                columns();
                checkI();
            } else {
                b = undefined;
                for (let i = 0; i < col.length; i++){
                    if (c === col[i] && !c.classList.contains('col-active')){
                        c.classList.add('col-active');
                    } else if (c === col[i] && c.classList.contains('col-active')){
                        c.classList.remove('col-active');
                    } else {
                        col[i].classList.remove('col-active');
                    }
                }
                if (document.querySelector('#custom') !== null){
                    document.querySelector('#custom').remove();
                    column.innerHTML += custom;
                    col = document.querySelectorAll('.column div');
                    columns();
                }
                d = c.innerText;
                let temp = d.replace('%', '');
                d = parseInt(temp);
                d = parseFloat(d) / 100;
                if (!c.classList.contains('col-active')) d = undefined;
                update();
            }
        })
    })
}

function checkI(){
    inputs.forEach(z => {
        if (document.querySelector('#custom') === null){
            z.value = '';
        }
        z.addEventListener('input', () => {
            if (z.id === 'bill'){
                a = z.valueAsNumber;
            } else if (z.parentNode === column){
                z.valueAsNumber = z.valueAsNumber < 0 ? 0 : z.valueAsNumber;
                b = z.valueAsNumber;
                b = parseFloat(b) / 100;
            } else if (z === people) {
                z.valueAsNumber = z.valueAsNumber < 0 ? 0 : z.valueAsNumber;
                c = z.valueAsNumber;
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
    if (a >= 1 && c >= 1 && b === undefined && d !== undefined || a >= 1 && b >= 0 && c >= 1){
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
    if (a !== 0 || b !== undefined || c !== 0 || d !== undefined){
        resetDiv.classList.remove('active-but');
        if (peopleE1.classList.contains('error')){
            peopleE1.classList.remove('error');
            peopleE2.style.display = 'none';
        }
        reset();
    } else {
        return;
    }
})

function reset(){
    inputs.forEach(z => {
        z.value = '';
    })
    if (document.querySelectorAll('.col-active') !== null){
        let col = document.querySelectorAll('.column div');
        for (let j = 0; j < col.length; j++){
            col[j].classList.remove('col-active');
        }
    }
    if (document.querySelector('#custom') !== null){
        document.querySelector('#custom').remove();
        column.innerHTML += custom;
        columns();
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
columns();