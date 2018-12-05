
var dataElement = `<tbody>`
var mainObj = [
    {
        name:"Kapil",
        age:"20",
        city: "winnipeg",
        habit:"reading",
        state:"Active" 
    },
    {
        name:"Jay",
        age:"19",
        city: "winnipeg",
        habit:"running",
        state:"Active" 
    },
    {
        name:"Rose",
        age:"18",
        city: "winnipeg",
        habit:"swimming",
        state:"Inactive" 
    },
    {
        name:"Tom",
        age:"21",
        city: "London",
        habit:"rocking",
        state:"Active" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
    {
        name:"Jack",
        age:"22",
        city: "Toronto",
        habit:"rocking",
        state:"Inactive" 
    },
];
for(i= 0; i < mainObj.length; i++){
    dataElement +=`<tr>`;
    dataElement +=`<td>` + mainObj[i].name + `</td>`;
    dataElement +=`<td>` + mainObj[i].age + `</td>`;
    dataElement +=`<td>` + mainObj[i].city + `</td>`;
    dataElement +=`<td>` + mainObj[i].habit + `</td>`;
    dataElement +=`<td>` + mainObj[i].state + `</td>`;
}
dataElement +=`</tbody>`;
document.querySelector('#dataElement').innerHTML = dataElement;

$(document).ready( function () {
    $(`#table_id`).DataTable( {
        "paging":   true,
        "ordering": true,
        "info":     true,
        "order": [[ 4, "desc"]]
    });
} );