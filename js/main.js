//this is the way an event listner is setup//
document.getElementById("myform").addEventListener("submit", saveBookmark);

function saveBookmark(e) {
    var Name = document.getElementById("name").value;
    var Url = document.getElementById("url").value;

    if(!formValidate(Name,Url))
        {
            return false;
        }

    var bookmark = {
        name: Name,
        url: Url
    }

    if (localStorage.getItem("bookmarks") === null) {
        var bookmarks = [];
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    else {
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        bookmarks.push(bookmark);
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    }
    document.getElementById('myForm').reset();
    fetchBookmarks();
    e.preventDefault();
}

function deleteBookmark(Url) {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    for (var i = 0; i < bookmarks.length; i++) {
        if (bookmarks[i].url == Url) {
            bookmarks.splice(i, 1);
        }

    }
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

    fetchBookmarks();
}

function fetchBookmarks() {
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    var bookRender = document.getElementById('filed_items');
    bookRender.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
          var name = bookmarks[i].name;
    var url = bookmarks[i].url;
        bookRender.innerHTML += '<div class="well">'+'<h3>' + name + ' <a class="btn btn-success" target="_blank" href="' + url + '">visit</a>' + ' <button onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger">Del</button>'+'</h3>'+'</div>';
    }
}

function formValidate(Name,Url){

    if (!Name || !Url){
        alert('Please Enter All Details')
        return false;       
    }

    if (!Url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/)){
        alert('Please Enter a valid URL');
        return false;
    }

    return true;
}

/*
function fetchBookmarks(){
  var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
  var bookmarksResults = document.getElementById('bookmarksResults');
  bookmarksResults.innerHTML = '';
  for(var i = 0; i < bookmarks.length; i++){
    var name = bookmarks[i].name;
    var url = bookmarks[i].url;
    bookmarksResults.innerHTML += '<div class="well">'+
                                  '<h3>'+name+
                                  ' <a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                                  ' <a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger" href="#">Delete</a> ' +
                                  '</h3>'+
                                  '</div>';
  }
}
*/