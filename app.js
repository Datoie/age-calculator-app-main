const input = document.querySelectorAll('.number');
const btn = document.getElementsByTagName('img')[0];
const label = document.getElementsByTagName('label');
const currentTime = document.getElementsByClassName('current-time');
const vaildLable = document.querySelectorAll('#vaild');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
// variable to make fucntion true
let curentInputBool = false;

for(let i = 0; i <input.length; i++){
    let curentInput = 0;
    // rule 1: max length _2_ 4
    input[i].addEventListener('input',function (){
        if(i == 2){
            errorFunc(2, 4, 4, currentYear);
        }else if(i == 1){{
            errorFunc(1, 2, 2, 12);
            };
        }else if(i == 0){
            errorFunc(0, 0, 2, 31);
        };
});

    input[i].addEventListener('blur', function () {
        input[i].style.border = '1px solid  hsl(0, 0%, 86%)';
    });
    input[i].addEventListener('focus',function(){
        input[i].style.border = '1px solid hsl(259, 100%, 65%)';
    });

// -- x -- == index of input --- l --- == label input len == ---- len ---- of input value --- s --- for size 
    function errorFunc (x, l, len, s) {
        if(input[x].value.length > len){
    
            input[x].value = input[x].value.slice(0, len);
    
        }else if(input[x].value > s){

        // this alogrithm makes oure text red until it not become true
            input[x].style.border = '1px solid red';
            label[l].style.color = 'red';
            
        // if we click ouside the button it stay red, until this alogrithm works
            input[x].addEventListener('blur', function () {
                input[x].style.border = '1px solid red';;
            });

            vaildLable[x].style.display = 'block';
    
        }else{

        // after len less than client current vale it changes color to original
            input[x].style.border = '1px solid hsl(259, 100%, 65%)';
            label[l].style.color = 'inherit';
        
        // if we click ouside the button is become original color still and if we focus it become focus color
            input[x].addEventListener('blur', function () {
                input[x].style.border = '1px solid  hsl(0, 0%, 86%)';
            });
            vaildLable[x].style.display = 'none';
            curentInput++;

        }
        if(input[x].value == 0){
    // if clien input value eqauls 0 it become original button as it was
            input[x] = input[i].style.border = '1px solid hsl(259, 100%, 65%)';
            label[l].style.color = 'inherit';
            input[x].addEventListener('blur', function () {
                input[x].style.border = '1px solid  hsl(0, 0%, 86%)';
                });
            };
            curentInput = 0;
            
        };
    
};
btn.addEventListener('click',function () {
    let dd = 31 - input[0].value;
    let mm = 12 - input[1].value;
    let yy = String(currentYear - input[2].value);

    if (dd < 0 || mm < 0 || yy < 0){
        console.log('Davia is Goar')
    }else if(yy.length == 2 && yy != 2023){
        currentTime[0].innerHTML = yy;
        currentTime[1].innerHTML = mm;
        currentTime[2].innerHTML = dd;

        input[0].style.border = '1px solid hsl(0, 0%, 86%)'
        input[1].style.border = '1px solid hsl(0, 0%, 86%)'
        input[2].style.border = '1px solid hsl(0, 0%, 86%)'
        
        label[0].style.color = 'inherit'
        label[2].style.color = 'inherit'
        label[4].style.color = 'inherit'

    }else if(yy.length == 4){
        input[0].style.border = '1px solid red'
        input[1].style.border = '1px solid red'
        input[2].style.border = '1px solid red'
       
        label[0].style.color = 'red'
        label[2].style.color = 'red'
        label[4].style.color = 'red'
    }
    console.log(yy.length)
})