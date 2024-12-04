let TBody = document.getElementById("TBody");


let DummyDataForTest = [
    {
        id: 1,
        taskName: "Task a",
        description: "Description 1",
        level: 1
    },{
        id: 2,
        taskName: "Task 2",
        description: "Description 2",
        level: 2
    },{
        id: 3,
        taskName: "Task 3",
        description: "Description 3",
        level: 3
    }
]



function DislayToPage(data)
{
    TBody.innerHTML = "";

    for(let T of data)
    {
        TBody.innerHTML += `

        <tr>
            <td>${T.id}</td>
            <td>${T.title}</td>
            <td>${T.taskDescription}</td>
            <td>${T.level}</td>
            <td>
                <button class="btn btn-sm">Edit</button>
                <button class="btn btn-sm">Delete</button>
            </td>
        </tr>
        
        `
    }
}


// DislayToPage(DummyDataForTest);



async function GetData()
{
    let TaskList = await axios.get("http://localhost:5288/api/Tasks");
    console.log(TaskList.data);
    DislayToPage(TaskList.data)
}

GetData()