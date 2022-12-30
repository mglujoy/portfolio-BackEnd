fetch('http://127.0.0.1:5500/portfolio-BackEnd/machines.json')
.then((response) => response.json())
.then((data) => console.log(JSON.stringify(data)));

fetch('http://127.0.0.1:5500/portfolio-BackEnd/machines.json')
.then((response) => response.json())
.then((data) => console.log(data))

fetch('http://127.0.0.1:5500/portfolio-BackEnd/machines.json')
.then((response) => response.json())
.then((machines) => {
    const machinesNames = machines.map((machine) => machine.name);
    console.log(machinesNames);
});