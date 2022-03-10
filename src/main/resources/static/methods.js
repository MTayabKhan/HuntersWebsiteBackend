function getAll() {
    fetch(`http://localhost:8080/getAll`)
        .then((response) => {
            if (response.status !== 200) {
                console.log(`getAll does not work.Status Code: ${response.status}`);
                return;
            }
            response.json()
                .then(res => {
                    console.log(res);

                    refTable = document.createElement("table");
                    refTable.classList.add("table","table-primary");
                    
                    let refRow = document.createElement("tr")
                    let refTd1 = document.createElement("td")
                    let refTd2 = document.createElement("td")
                    let refTd3 = document.createElement("td")
                
                    
                    refTd1.innerHTML="<b>Name<b>"
                    refTd2.innerHTML="<b>Echoes</b> "
                    refTd3.innerHTML="<b>Old Blood Feared</b> "       
                
                    refRow.appendChild(refTd1);
                    refRow.appendChild(refTd2);
                    refRow.appendChild(refTd3);
                
                    refTable.appendChild(refRow)
                    for (let i = 0; i < res.length; i++) {
                        showRecord(res[i].name, res[i].echoes, res[i].oldBloodFeared)
                    }


                })
                .catch(err => console.error(`Fetch Error :-S ${err}`));
        })
}


function showRecord(name1, echoes1, obf1) {
    refTable.border = 3;
    refTable.classList.add("table");
    refTable.bgcolor="white";
    let refRow = document.createElement("tr")
    let refTd1 = document.createElement("td")
    let refTd2 = document.createElement("td")
    let refTd3 = document.createElement("td")

    refTd1.innerHTML = name1
    refTd2.innerHTML = echoes1
    refTd3.innerHTML = obf1    

    refRow.appendChild(refTd1);
    refRow.appendChild(refTd2);
    refRow.appendChild(refTd3);

    refTable.appendChild(refRow)
    document.body.appendChild(refTable)
}

function get() {
    let HunterID = document.getElementById("hunterID").value
    fetch('http://localhost:8080/get/' +HunterID)
        .then((response) => {
            if (response.status !== 200) {
                console.log(`Looks like there was a problem.Status Code: ${response.status}`);
                return;
            }
            response.json()
                .then(data => {
                        console.log(data);

                        refTable = document.createElement("table");
                        refTable.border = 1
                        refTable.classList.add("table");
                        
                        showRecord(data.name, data.echoes, data.oldBloodFeared)
                        


                    })
                .catch(err => console.error(`Fetch Error :-S ${err}`));
        })
}

document.getElementById("superform").addEventListener("submit",function(e) {
    e.preventDefault()
    fetch("http://localhost:8080/create", { 
        method: 'post', 
        headers: {
            "Content-type": "application/json" 
        },
        body: JSON.stringify( 
            {
                "name": this.hunterName.value,
                "echoes": this.hunterEchoes.value,
                "oldBloodFeared": this.hunterOBF.value
            }
        )
    })
  .then(res => res.json())
        .then((data) => console.log(`Request succeeded with JSON response ${data}`))
        .catch((error) => console.log(`Request failed ${error}`))
});

document.getElementById("superform1").addEventListener("submit",function(e) {
    e.preventDefault()
    let HunterID = document.getElementById("hunterID1").value
    fetch("http://localhost:8080/replace/"+HunterID, { //1
        method: 'put', //2
        headers: {
            "Content-type": "application/json" //3
        },
        body: JSON.stringify( //4
            {
                "name": this.hunterName1.value,//5
                "echoes": this.hunterEchoes1.value,
                "oldBloodFeared": this.hunterOBF1.value
            }
        )
    })
  .then(res => res.json())
        .then((data) => console.log(`Request succeeded with JSON response ${data}`))
        .catch((error) => console.log(`Request failed ${error}`))
});

function deleteRecord(){
    let id = document.getElementById("hunterID").value;
      fetch("http://localhost:8080/remove/"+id, { 
          method: 'delete' 
        })
        .then((data) => {
          console.log(`Request succeeded with JSON response ${data}`);
        
        })
        .catch((error) => console.log(`Request failed ${error}`));
}


