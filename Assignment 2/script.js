const sentence = document.getElementById("sentence");
const letter = document.getElementById("letter");
const btSubmit = document.getElementById("submit");
const output = document.getElementById("output");
const btClear = document.getElementById("clear");


btSubmit.onclick=()=>{
    let text = sentence.value;

    if(sentence.value&&letter.value){
        for(i=0;i<text.length;i++){
            if(letter.value===text[i]){
                newtext=text.substr(i+1);
                break;
            }else{
                newtext="";
            }
        }
        if(newtext.length>0)
            {output.value=newtext;
            }else{
                output.value="The letter does not exist in the sentence"}
    }else{
            output.value="Fill all fields"
    }
}

btClear.onclick=()=>{
    sentence.value="";
    letter.value="";
    output.value="";
}
letter.onkeyup=()=>{
    let lett=letter.value;
    if(letter.value)
        letter.value=lett[0];  
}