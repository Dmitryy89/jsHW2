var dataInput = document.querySelector('input[type="text"]');
var ulSpisok = document.getElementById("menu-list");
var spans = document.getElementsByTagName('span');
var saveBtn = document.getElementById('save');
var clearBtn = document.getElementById('clear');
var myName = document.getElementById('MyName');
var lis = document.getElementsByTagName('h6');
//addEventListener -  обработчик события с вывовом возвращающей значени функции

myName.onclick = function(){
    alert('Овчинников Дмитрий');
}
/*function lineTodo(){
    for(let i of lis){    
        i.style.textDecoration = "none";
    }
}*/
function liTodo(){
    for(let i of lis){
        i.onclick = function(){
            if( i.style.textDecoration == "line-through"){
                i.style.textDecoration = "none";
            }
            else {
            i.style.textDecoration = "line-through";
            }
        }
    }
}
function deleteTodo(){
    for(let span of spans){
        span.addEventListener('click', function(){
            span.parentElement.remove();
            event.stopPropagation();     // перехват события
        })
    }
}

function loadTodo(){
    if(localStorage.getItem('TodoApp')){
        ulSpisok.innerHTML = localStorage.getItem('TodoApp');
    }
    deleteTodo();
    liTodo();
}

dataInput.addEventListener('keypress', function(keyPressed){
    if(keyPressed.which === 13){
        let empty = dataInput.value.trim();
        if(empty == ""){

        }
        else if(empty !==""){
        var newLi = document.createElement('li');
        var newSpan = document.createElement('span');
        var newp = document.createElement('p');
        var now = new Date();
        var month = Number(now.getMonth()) + 1;
        switch(month) {
            case 1:        
                month = 'jan'; 
                 break;   
            case 2:       
                month = 'feb';
                 break;   
            case 3:     
                month = 'mar';
                 break;  
            case 4:      
                month = 'apr';
                 break;   
            case 5:       
                month = 'may';
                 break;   
            case 6:       
                month = 'jun';
                 break;  
            case 7:      
                month = 'jul'; 
                 break;    
            case 8:       
                month = 'aug';  
                 break;    
            case 9:       
                month = 'sep';
                 break; 
            case 10:       
                month = 'oct';
                 break;   
            case 11:      
                month = 'nov';
                 break;  
            default:      
                month = 'dec';
                 break;   
        } 
        var dates =  now.getDate() + " " + month + " " + now.getFullYear();
        var newText = document.createElement('H6');
        newSpan.innerHTML = "Delete";
        newp.innerHTML = dates;

        var newItem = this.value; // получение данных из поля input
        this.value = " ";
        newText.innerHTML = newItem;

        ulSpisok.appendChild(newLi).append(newSpan, newText, newp);
        }
    } 

    liTodo() 
    deleteTodo();
})

saveBtn.addEventListener('click', function(){
      localStorage.setItem('TodoApp', ulSpisok.innerHTML );  
});

clearBtn.addEventListener('click', function(){
    ulSpisok.innerHTML = ' ';
    localStorage.setItem('TodoApp', ulSpisok.innerHTML);
});
liTodo();
deleteTodo();
loadTodo();


