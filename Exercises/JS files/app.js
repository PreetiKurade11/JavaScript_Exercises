document.addEventListener("DOMContentLoaded",function(){
    
/*
const wrap = document.querySelector("#wrapper");
console.log(wrap);

const sun = document.querySelector('#book-list li:nth-child(3) .name');
console.log(sun);

var books = document.querySelectorAll('#book-list li .name');
console.log(books);

var books = document.querySelectorAll('#book-list li .name');
Array.from(books).forEach(function(book){
    book.textContent += '(book-title)';
});

const booklist = document.querySelector("#book-list");
//booklist.innerHTML='<h2> Books and more books.. </h2>';
booklist.innerHTML += '<p> HTML added </p>'

const banner = document.querySelector('#page-banner');

console.log('#page-banner Node Typer is: ',banner.nodeType);
console.log('#page-banner Node Name is: '+banner.nodeName);
console.log('#page-banner has child node: '+banner.hasChildNodes());

const clonedBanner = banner.cloneNode(true);
console.log(clonedBanner);


const booklist=document.querySelector('#book-list');
console.log('the parent node is:',booklist.parentNode);
console.log('the parent element is:',booklist.parentElement.parentElement);

console.log(booklist.childNodes);
console.log(booklist.children);

const booklist=document.querySelector('#book-list');
console.log('book-list next sibling is: ', booklist.nextSibling);
console.log('book-list next element sibling is: ', booklist.nextElementSibling);
console.log('book-list previous element sibling is: ', booklist.previousSibling);
console.log('book-list previous element sibling is: ', booklist.previousElementSibling);

booklist.previousElementSibling.querySelector('p').innerHTML += '<br> Too cool for everyone else';

const banner = document.querySelectorAll(".title");
console.log(banner);
banner.forEach(function(ban){
    ban = ban.firstChild;
    console.log("Node type: ", ban.nodeType);
    console.log("Node value: ", ban.nodeValue);
   // console.log("Node name: ", ban.nodeName);
})  

const link= document.querySelector('#page-banner a');
link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navigation to ',e.target.textContent, 'was prevented');
});
*/

var btns=document.querySelectorAll('#book-list .delete');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentNode;
        li.parentNode.removeChild(li)
    });
});

//deletebooks
const list= document.querySelector('#book-list ul');
//  const forms = document.forms;
list.addEventListener('click',function(e){
 //   console.log(e.target);
    if(e.target.className == 'delete'){
       
        const li = e.target.parentElement;
        li.parentNode.removeChild(li);
    }
});

//delete all books
const list1= document.querySelector('#book-list ul');
//  const forms = document.forms;
list1.addEventListener('click',function(e){
 //   console.log(e.target);
    if(e.target.className == 'deleteall'){ 
        const li = e.target.parentElement;
        const del=document.querySelectorAll("#book-list li ");
        del.forEach(function(book){
        //console.log(del);
          book.parentNode.removeChild(book);
        });
    }
});


//add books

const addForm = document.forms['add-book'];
addForm.addEventListener('submit',function(e){
    
    e.preventDefault();
    const val=addForm.querySelector('input[type="text"]').value;
    
    if(val==""){
        alert("Enter the Book Name");
    }
    else{

    //create elements
    const li=document.createElement('li');
    const bookname= document.createElement('span');
    const editbtn= document.createElement('span');
    const deletebtn = document.createElement('span');

    
    //add content
   
    editbtn.textContent='Edit';
    deletebtn.textContent='Delete';
    bookname.textContent=val;
 
    //add classes
    editbtn.classList.add('edit');
    bookname.classList.add('name');
    deletebtn.classList.add('delete');

    //append to document
    li.appendChild(bookname);
    li.appendChild(deletebtn);
    li.appendChild(editbtn);
    list.appendChild(li); 

    }   

});


//hidebooks
const hideBox=document.querySelector('#hide');
hideBox.addEventListener('change',function(e){
    if(hideBox.checked==true){
        list.style.display="none";
    }
    else{
        list.style.display="initial";
    }
});

//filterbooks
const searchBar= document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup',function(e){
    const term=e.target.value.toLowerCase();
    const books=list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display='block';
        }
        else{
            book.style.display='none';
        }
    });
});

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e){
  if(e.target.tagName == 'LI'){
    const targetPanel = document.querySelector(e.target.dataset.target);
    Array.from(panels).forEach((panel) => {
      if(panel == targetPanel){
        panel.classList.add('active');
      }else{
        panel.classList.remove('active');
      }
    });
  }
});


//edit 
/*const change= document.querySelector('#book-list ul');
change.addEventListener('click',function(e){
    if(e.target.className == 'edit'){
        const list = e.target.parentElement;
        const edittext= change.querySelector('span').value;
        const inputtext= document.createElement('input');
        inputtext.textContent=edittext;
        document.write(edittext);
        
    }
});

*/

const change= document.querySelector('#book-list ul');
change.addEventListener('click',function(e){

    if(e.target.className == 'edit'){
        var editval = prompt('edit the selected item');
        
        const spantag = document.querySelectorAll('#book-list li .name');
        spantag.forEach(function(tag){
            //console.log(spantag);
           // tag.innerHTML=editval;     
           // const li = e.target;
         //  console.log(tag);
         // console.log(e.target.previousElementSibling.previousElementSibling);
         
            //li.parentNode.innerHTML=editval;
            if (e.target.previousElementSibling.previousElementSibling == tag){
                
                tag.innerHTML = editval;
            }
        });   
    }        
});


});