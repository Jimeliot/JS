//this is the way an event listner is setup//
document.getElementById("myform").addEventListener("submit", savebookmark);

function savebookmark(e){
 var siteName = document.getElementById("name").value;
 var siteUrl = document.getElementById("url").value;
console.log(siteName, siteUrl);
e.preventDefault();
}