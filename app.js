const closeBtn = document.querySelectorAll(".close");

const nameVar = document.querySelectorAll(".name");

for (let i=0 ; i<closeBtn.length; i++){

    for(let j=0 ; j < nameVar.length; j++){

        closeBtn[i].addEventListener('click', () => {

            console.log("HHH")
            if(i===j){
                nameVar[j].style.display = "none";
            }
            
        })
    }
    
}


