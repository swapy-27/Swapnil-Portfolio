const ele =  document.getElementById('change_text')

var currText = ele.innerText;
var length = currText.length;

var currIndex = 0;
function clearCurrentText (){
    var intervalID=setInterval(()=>{
        if(length==0){
            clearInterval(intervalID)
            setTimeout(()=>{
                addNewText();
            },1000)
            
        }
        ele.innerText=currText.slice(0,length)
        length-=1;
    
    },90) 
}
function selectText(){
    let arr = ['A Developer.','An Engineer.','An Explorer.','Swapnil.']
    return arr[currIndex]
}
function addNewText(){
    
      currText =  selectText();
    if (currIndex==3){
        currIndex=0;
    }
    else{
        currIndex+=1
    }
      length= currText.length
      let currLength = 0;
       var newIntervalID = setInterval(()=>{
        if(currLength>=length){
            clearInterval(newIntervalID)
            setTimeout(()=>{
                clearCurrentText();
            },1500)
        }
        ele.innerText=currText.slice(0,currLength)
        currLength+=1;
    
    },150) 
}
addNewText()
