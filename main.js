
let tasks=[
        {
            "title":"قراءة كتاب",
            "data":"2020/3/2",
            "isDone":false
        },
        {
            "title":"انجاز المشروع",
            "data":"2020/3/2",
            "isDone":false
        },
        {
            "title":"حل التحدي",
            "data":"2020/3/2",
            "isDone":true
        },
        {
            "title":"اختبار برمجي",
            "data":"2020/3/2",
            "isDone":false
        }
    ]

    function getTask(){      
            let r=JSON.parse(localStorage.getItem("task"))
            if(r==null){
                tasks=[]
            }
            else{
                tasks=r
            }
        
        }  
        getTask();

    function addTasks(){
        document.getElementById('parent').innerHTML=" "
        var index=0;
        for(i in tasks){
            
            let content=`  
                    <div class="task ${tasks[i].isDone? "done " : " "} id="task" >
                    <div class="name-task">
                        <h3 class="name">${tasks[i].title}</h3>
                        <span class="data">
                            <i class="fa fa-calendar" style="color: gray;"></i>
                           ${tasks[i].data}
                        </span>
                    </div>
                    <div class="icons">
                    
                        <button class="btn" onclick="deleteTask(${index})" style="background-color:red"; ><i class="fa fa-trash"></i></button>

                        ${tasks[index].isDone ? ` <button class="btn" id="check-btn" onclick="checkTask(${index})" style="background-color:#4CAF50;">
                        <i class="fa fa-check"></i></button>` : `
                        <button class="btn" id="check-btn" onclick="checkTask(${index})" style="background-color:#723ab7;;">
                        <i class="fa fa-times"></i></button>
                        `}

                        <button class="btn" onclick="editTask(${index})" style="background-color:#2196F3;;"><i class="fa fa-pencil"></i></button>
                    </div>
                    </div>  `
                    document.getElementById("parent").innerHTML+=content;
                    index++;
                }
    }
  

    addTasks();
    //add task

    document.getElementById("add-btn").addEventListener("click",function(){
        let now=new Date();
        let date=now.getFullYear()+"/"+(now.getMonth()+1)+"/"+now.getDate()
        console.log(date)
        let cont= prompt("Enter The Title of task");
        let taskName={
            "title":cont,
            "data":date,
            "isDone":false,
        }
        tasks.push(taskName)
        storeTask()
        addTasks();
    })
function checkBtn(val){
    if(val){
        document.getElementById("check-btn").style.backgroundColor="red",
        document.getElementById("check-btn").innerHTML=`<i class="fa fa-times"></i>`
    }

}
// delete task
function deleteTask(index){
var del=confirm(" هل تريد حذف مهمة"+ tasks[index].title+"!")

if(del){
    tasks.splice(index,1)
    storeTask()
}
addTasks()
}

//edit
function editTask(index){
 var val=prompt("الرجاء ادخال المهمة الجديدة ", tasks[index].title)
    tasks[index].title=val
    storeTask()
    addTasks()
}

//check and compleat
function checkTask(index){
    let task=tasks[index];
   if(task.isDone){
    task.isDone=false;
   }
   else{
    task.isDone=true
   }
  
    addTasks();
    storeTask()
}

//store task

function storeTask(){
    let taskN=JSON.stringify(tasks)
    localStorage.setItem("task",taskN)
}