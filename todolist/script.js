let todolist=[{
    item:'car',
    date:'20/11/2023'
},
{
    item:'cricket',
    date:'21/11/2023'
},];
display();
function addtodo(){
    let inp=document.querySelector('#todi');
    let todoitem=inp.value;
    let inpdat=document.querySelector('#dt')
    let tododate=inpdat.value;
    todolist.push({item:todoitem,date:tododate});
    inp.value='';
    inpdat.value=''
    display();
}
 
function display(){
    let ele=document.querySelector('#cont');

    let newHtml='';
    
    for(let i=0;i<todolist.length;i++)

    {   let {item,date}=todolist[i];
        
        newHtml=newHtml+`
    <span>${item}</span>
    <span>${date}</span>
    <button id="btn" onclick="todolist.splice(${i},1);display(); ">Delete</button>
    `;
    
     

    }
    document.querySelector('#cont').innerHTML=newHtml;
}
