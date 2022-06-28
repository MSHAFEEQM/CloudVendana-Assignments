
const firstName = document.getElementById("firstname");
const lastName = document.getElementById("lastname");
const cityName = document.getElementById("city");
const countryName = document.getElementById("country");

const btAddTop = document.getElementById("addTop");
const btAddBottom = document.getElementById("addBottom");



btAddBottom.onclick = ()=>{

    if(firstName.value&&lastName.value&&cityName.value&&countryName.value){
    var row = `<tr>
    <td class="serial">0</td>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${cityName.value}</td>
    <td>${countryName.value}</td>
</tr>`;

document.getElementById("table").innerHTML+=row;

        clearall();
        reArrange();

    }else{
        alert("Please fill all fields");
    }

}

btAddTop.onclick = ()=>{
    if(firstName.value&&lastName.value&&cityName.value&&countryName.value){
    var row = `<tr>
    <td class="serial">0</td>
    <td>${firstName.value}</td>
    <td>${lastName.value}</td>
    <td>${cityName.value}</td>
    <td>${countryName.value}</td>
</tr>`;

const headerRow = document.getElementById("headRow");
headerRow.insertAdjacentHTML("afterend",row)

        clearall();
        reArrange();
    }else{
        alert("Please fill all fields");
    }
    
}
function clearall(){
    firstName.value=lastName.value=cityName.value=countryName.value="";
}

function reArrange(){
    const serialArray = document.getElementsByClassName("serial");
    for(i=0;i<serialArray.length;i++){
        serialArray[i].innerHTML=i+1;
    }
}