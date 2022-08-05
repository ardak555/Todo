const input = document.getElementById("todo");


var yap = new Array();



function add() {


   var yeni = input.value;
    yap.push(yeni)
    console.log(yap);

    
    document.getElementById('liste').appendChild(makeUL(yap));
    
    yap.shift();
    input.value="";

}

function makeUL(array) {

    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        var item = document.createElement('li');
        item.setAttribute("id","lis")

        var div = document.createElement("span");
        div.setAttribute("id","span1")


        var btn = document.createElement('button');
        btn.setAttribute("class", "btn1");
        btn.innerText="Sil"

        btn.onclick=function(){
            var silinecek = this.parentElement;
            silinecek.remove();

        }


        var btn2 = document.createElement('button');
        btn2.setAttribute("class", "btn1");
        btn2.innerText="Upd"
        btn2.onclick=function(){
            
            var update;
            console.log(this)
            
            
            update= prompt();
            this.parentElement.querySelector("#span1").innerHTML=update;
            // document.getElementById("span1").innerHTML=update;

        }
       

        var btn3 = document.createElement('button');
        btn3.setAttribute("class", "btn1");
        btn3.innerText="Done"
            
        btn3.onclick=function(){
            var done = this.parentElement;
            done.classList.add('show');
           
        } 

        item.appendChild(div);
        div.appendChild(document.createTextNode(array[i]));
        item.appendChild(btn);
        item.appendChild(btn2);
        item.appendChild(btn3);
        list.appendChild(item);
    }

    return item;
}



function clr(){
     var clrall = document.querySelectorAll("li");
     for(i=0;i<clrall.length;i++){
        clrall[i].remove();
     }

    }
