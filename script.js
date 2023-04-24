//your JS code here. If required.
let level = document.querySelectorAll("ul>li")
console.log(level)
for(let i=0;i<level.length;i++){
   
        if(level[i].id=="level"){
            
                window.alert("The level of the element is: "+(i+1))
            
        }
    
}