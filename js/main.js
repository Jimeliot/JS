//this is the way an event listner is setup//
document.getElementById("myform").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    var Name = document.getElementById("name").value;
    var Url = document.getElementById("url").value;

    var bookmark = {
        name: Name,
        url: Url
    }

    if (localStorage.getItem("bookmarks") === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify("bookmarks"));
    }
    else {
        bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify("bookmarks"));
    }
console.log('bookmarks');
    e.preventDefault();
}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    var render=document.getElementById('filed_items');
    render.innerHTML='bookmarks'; 

}
