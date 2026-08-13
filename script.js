const defaults={
 brandName:"Northstar Financial Gateway",
 brandSubtitle:"Fictional financial services portal",
 headline:"Secure account access",
 description:"Use the buttons below to access your fictional account portal.",
 footer:"© 2026 Northstar Financial Gateway · Fictional demonstration",
 logo:"N"
};

function loadSettings(){
 const saved=JSON.parse(localStorage.getItem("northstarSettings")||"null")||defaults;
 for(const key of Object.keys(defaults)){
   const el=document.getElementById(key);
   if(el) el.textContent=saved[key];
 }
}
function createAccount(e){
 e.preventDefault();
 const name=document.getElementById("name").value.trim();
 const result=document.getElementById("result");
 result.innerHTML="<strong>Fictional account created.</strong><br>Welcome, "+escapeHtml(name)+". No financial or identity information was stored.";
 result.classList.remove("hidden");
 return false;
}
function showMessage(message){alert(message)}
function escapeHtml(v){return v.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
loadSettings();
