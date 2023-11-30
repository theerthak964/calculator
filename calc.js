function buttonClick(val){
   document.querySelector("#screen").value+=val;
   console.log(val);

}
function displayClear(){
    document.querySelector("#screen").value=""
}
function equalClick(){
    let text=document.querySelector("#screen").value
    let result=eval(text)
    document.querySelector("#screen").value=result
}