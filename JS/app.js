
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

var btns=document.querySelectorAll('#book-list .delete');
btns.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const li = e.target.parentNode;
        li.parentNode.removeChild(li)
    });
});
*/
const link= document.querySelector('#page-banner a');
link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navigation to ',e.target.textContent, 'was prevented');
})

const list= document.querySelector('#book-list ul');
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
})
/*
const list=document.querySelectorAll('#book-list ul');
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li=e.target.parentElement;
        list.removeChild(li);
    }
});
*/