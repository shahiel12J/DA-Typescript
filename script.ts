let num = document.getElementById("num") as HTMLBodyElement;


function game3(num1 :number):string{
    if(num1 % 3 == 0 && num1 % 5 == 0) {
        return "Fizz-Buzz!"
    }else if(num1 % 5 == 0){
        return "Buzz!"
    }else if (num1 % 3 == 0){
        return "Fizz!"
    }else{
        return "Next Number"
    }
}

function submit(){
    console.log("gggg")
    console.log(game3(this.num))
}

