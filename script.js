// -------------------Function for rendering Game---------------------//

function rendergameboard() {
    let Arr=[-1,-2,-3,-4,-5,-6,-7,-8,-9];
    let gamearea = document.querySelector(".gamearea");
    let topthree = document.createElement("div");
    topthree.className = "topthree";
    let one = document.createElement("div")
    one.className = "one"

    let two = document.createElement("div")
    two.className = "one"
    
    let three = document.createElement("div")
    three.className = "one"
    
    
    topthree.appendChild(one);
    topthree.appendChild(two);
    topthree.appendChild(three);
    gamearea.appendChild(topthree);

    let middlethree = document.createElement("div");
    middlethree.className = "middlethree";
    let four = document.createElement("div")
    four.className = "one"
    let five = document.createElement("div")
    five.className = "one"
    let six = document.createElement("div")
    six.className = "one"
    middlethree.appendChild(four);
    middlethree.appendChild(five);
    middlethree.appendChild(six);
    gamearea.appendChild(middlethree);

    let bottomthree = document.createElement("div");
    bottomthree.className = "bottomthree";
    let seven = document.createElement("div")
    seven.className = "one"
    let eight = document.createElement("div")
    eight.className = "one"
    let nine = document.createElement("div")
    nine.className = "one"
    bottomthree.appendChild(seven);
    bottomthree.appendChild(eight);
    bottomthree.appendChild(nine);


  

    
    
    gamearea.appendChild(bottomthree)
    let flag = false;
    selecteddiv = document.querySelectorAll('.one');
    let isBoxSelected = false
    let total = 0;
    for(let i =0; i<selecteddiv.length; i++){
    
    
    selecteddiv[i].addEventListener('click', () => {

        if(!selecteddiv[i].firstChild){

            let H1 = document.createElement("h1");
            H1.innerHTML = flag?"1":"0";
            Arr[i] = H1.innerHTML;
            flag = !flag;
            total+=1;
            selecteddiv[i].appendChild(H1)
            let name= H1.innerHTML;
            setTimeout(()=>{
                winCheck(name);
            
            },200)

                            }
                            
    
                })
        
    }

    function winCheck(name) {
        let isWin = false;
        
        if(Arr[0] === Arr[1] && Arr[1] === Arr[2]){
            alert( name + " win");
            isWin = true;
        }
        if(Arr[0] === Arr[3] && Arr[3] === Arr[6]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[0] === Arr[4] && Arr[4] === Arr[8]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[2] === Arr[4] && Arr[4] === Arr[6]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[2] === Arr[5] && Arr[5] === Arr[8]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[6] === Arr[7] && Arr[7] === Arr[8]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[1] === Arr[4] && Arr[4] === Arr[7]){
            alert( name + " win")
            isWin = true;
        }
        if(Arr[3] === Arr[4] && Arr[4] === Arr[5]){
            alert( name + " win")
            isWin = true;
        }

        if(isWin){
            isBoardRendered = false;
            document.querySelector(".gamearea").innerHTML = null;

        }

    }




}




// -------------Functionality added to PLay Button --------------

let play = document.querySelector(".playbutton")
var isBoardRendered = false;
play.addEventListener('click',() => {
    
    console.log(isBoardRendered)
    if(isBoardRendered === false){
        rendergameboard()
        isBoardRendered = true;
    }
    
    console.log(isBoardRendered)
    

})



// ------------------Factory Function for controling the game flow--------------//
const gameBoard = (() =>{
    


    
}
)

