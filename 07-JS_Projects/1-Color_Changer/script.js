const buttons = document.querySelector('button');
const body = document.querySelector('body');

buttons.forEach(function(button){
    button.addEventListner('click', function(e){
        if(e.target.id === 'green'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'blue'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'red'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'grey'){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === 'black'){
            body.style.backgroundColor = e.target.id
        }
    });
});