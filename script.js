const col = document.querySelectorAll('.column div');
const column = document.querySelector('.column');
const people = document.querySelector('.input-people input');
const totaltip = document.querySelector('.total p');
const tipAmount = document.querySelector('.tip-amount p');
let inputs = document.querySelectorAll('.content input');
let tip = 0;
let total = 0;
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
            console.log(c)
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
        }
        if (document.querySelector('#custom') !== null){
            for (let j = 0; j < col.length; j++){
                console.log(col[j])
                col[j].classList.remove('col-active');
            }
        }
    })
})

function checkI(){
    inputs.forEach(z => {
        z.addEventListener('input', () => {
            z.value = z.value < 0 ? 0 : z.value;
            if (z.id === 'bill'){
                a = z.valueAsNumber;
            } else if (z.parentNode === column){
                b = z.valueAsNumber;
            } else if (z === people) {
                c = z.valueAsNumber;
                const peopleE1 = document.querySelector('.input-people');
                const peopleE2 = document.querySelector('.people h4');
                if (people.valueAsNumber === 0){
                    peopleE1.classList.add('error');
                    peopleE2.style.display = 'inline';
                } else {
                    peopleE1.classList.remove('error');
                    peopleE2.style.display = 'none';
                }
            }
            console.log(a);
            console.log(b);
            console.log(c);
            if (a >= 1 && c >= 1 && b === undefined && d !== undefined || a >= 1 && b >= 1 && c >= 1){
                if (document.querySelector('#custom') !== null){
                    
                } else {

                }
                console.log('good');
            } else {
                return;
            }
        })
    })
}

checkI();