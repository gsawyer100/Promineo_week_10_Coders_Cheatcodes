console.log("click_here")
const submitbtn = document.getElementById("click_here");
console.log(submitbtn)

submitbtn.addEventListener("click", (event)=>{
    console.log(event)
    event.preventDefault()
console.log("clickingonbutton")
const Additional_Websites = document.getElementById("Additional_Websites").value;
console.log(Additional_Websites)
const Website_Description = document.getElementById("Website_Description").value;
console.log(Website_Description)

});
