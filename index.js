const tablinks = document.querySelectorAll(".tab-links");
const tabcontents = document.querySelectorAll(".tab-content");

function openTab(tabName){
tablinks.forEach((tab)=>{tab.classList.remove("active")});
tabcontents.forEach((tab)=>{tab.classList.remove("active-tab")});

event.currentTarget.classList.add("active");
document.getElementById(tabName).classList.add("active-tab");

}
