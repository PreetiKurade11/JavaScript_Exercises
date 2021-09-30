document.addEventListener("DOMContentLoaded",function(){

    
    //add tasks
    const addForm = document.forms['add-task'];
    addForm.addEventListener('submit',function(e){
        e.preventDefault();
        const val=addForm.querySelector('input[type="text"]').value;
        //console.log(val);
        //check the input value
        if(val.trim()==""){
            alert("Please Enter your task");
        }
        else{
        //create elements
        const li=document.createElement('li');
        const taskname= document.createElement('input');
        taskname.type = "text";
        const editbtn= document.createElement('span');
        const deletebtn = document.createElement('span');
            
        const deleteicon= document.createElement('i');
        const editicon= document.createElement('i');

        //add content                        
        
       // taskname.textContent=val;
        taskname.value = val;
        taskname.disabled=true;

        
        //add classes
        taskname.classList.add('name');
        editbtn.classList.add('edit');
        deletebtn.classList.add('delete');
        
        taskname.setAttribute('id','input');

        deleteicon.className='fas fa-trash';
        deletebtn.append(deleteicon);

        editicon.className='fas fa-pen';
        editbtn.append(editicon);
       
        //append to document
        li.appendChild(taskname);
        li.appendChild(deletebtn);
        li.appendChild(editbtn);
        list.appendChild(li); 

        var inputtag=document.getElementsByClassName("name");
        inputtag.value=val;
        inputtag.disabled=true;
      //  console.log(inputtag);
        
       
            
        }
    });
    

        
    
    //deletetasks
    const list= document.querySelector('#task-list ul');
    //  const forms = document.forms;
    list.addEventListener('click',function(e){
     //   console.log(e.target);
        if(e.target.className == 'delete'){
           
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    });

    //Delete All Tasks
    
    const deletetask= document.querySelector('#page-banner');
    deletetask.addEventListener('click',function(e){
        if(e.target.className == 'delall'){
            const tasks = document.querySelectorAll('#task-list li');
            tasks.forEach(function(task){
                task.parentNode.removeChild(task);   
            });           
        }
    });

    
    //edit tasks

    const change= document.querySelector('#task-list ul');
   
    change.addEventListener('click',function(e){
        var inputval= document.getElementsByClassName("name").value;
        
        if(e.target.className == 'edit'){

           inputid=document.getElementsByClassName("name").id;
        
            const spantag = document.querySelectorAll('#task-list li .name');
            spantag.forEach(function(tag){
              
            inputtag=e.target.previousElementSibling.previousElementSibling.disabled;
                //li.parentNode.innerHTML=editval;
            if(inputtag==true){
               // console.log(inputtag);
                if (e.target.previousElementSibling.previousElementSibling == tag){
                   // console.log(e.target.previousElementSibling.previousElementSibling);
                  //  document.getElementById('input').disabled = false;
                   // document.getElementById('input').style.background="#ddd";

                    e.target.previousElementSibling.previousElementSibling.disabled= false;
                    e.target.previousElementSibling.previousElementSibling.style.background="#ddd";

                    document.getElementById('input').focus();
                    document.getElementById('input').select();
                    
                    var inputval= document.getElementsByClassName("name").value;
                  //  console.log(inputval);
                  //     tag.innerHTML = inputval;  

                }
            }
            if(inputtag==false){
                if (e.target.previousElementSibling.previousElementSibling == tag){
               // document.getElementById('input').disabled=true;
              // document.getElementById('input').style.background="white";
              e.target.previousElementSibling.previousElementSibling.disabled= true;
                e.target.previousElementSibling.previousElementSibling.style.background="white";
                //console.log(document.getElementById('input').disabled);
                }
            }

            });   
        }  
        
    });




    });