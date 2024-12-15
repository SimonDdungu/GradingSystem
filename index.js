let Marks;
const Feedback = document.querySelector(".Feedback");
const Grade = document.querySelector(".Grade");
const Submit = document.querySelector(".Submit");

function getGrades(Marks){

    Feedback.textContent = "You got a ";

    switch(Marks){
        case (Marks>=90 && Marks <=100) && Marks:{
            Grade.textContent = "A";
            break;
        }
        case (Marks>=80 && Marks <=89) && Marks: {
            Grade.textContent = "B";
            break;
        }
        case (Marks>=70 && Marks <=79) && Marks: {
            Grade.textContent = "C";
            break;
        }
        case(Marks>=60 && Marks <=69) && Marks: {
            Grade.textContent = "D";
            break;
        }
        case (Marks<60) && Marks: {
            Grade.textContent = "F";
            break;
        }
        default: {
            Feedback.classList.add("error");
            Feedback.textContent = "Invalid Marks!";
            Grade.textContent = "";
            break;
        }
    }
}

Submit.addEventListener("click", (e)=> {
    e.preventDefault();
    Marks = document.querySelector(".Marks").value;

    Feedback.style.display = "block";
    
    if(Marks == ''){
        Feedback.textContent = "Please Enter your Marks!";
        Feedback.classList.add("error");
        Grade.textContent = "";
    }else{
        Feedback.classList.remove("error");
        getGrades(Marks);
        console.log(Marks);
    }
});