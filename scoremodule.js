document.getElementById('flink').addEventListener('input', exexe);


function exexe() {
    dtfecher();
    console.log('Input changed:', document.getElementById('flink').value);
    updateConfig({ fotlink: document.getElementById('flink').value });
    mateeID = document.getElementById('flink').value;
    mateID = mateeID.split('#').pop();
    justtochangecolour = document.getElementById('jtcc');
    setInterval(dtfecher, 60000);
}
if (document.getElementById('flink').value) {
    exexe();
}

titleee = 'red'

homeGGGG = document.getElementById("hhss");
awayGGGG = document.getElementById("aass");

function dtfecher() {
    
    fetch(`https://noisy-frog-d056.chaudharyayush910.workers.dev/?matchid=${mateID}`)
        .then(response => {return response.json();})
        .then(data => {
            homeGGGG.textContent = data.header.teams[0].score;
            awayGGGG.textContent = data.header.teams[1].score;
            justtochangecolour.style.backgroundColor = 'limegreen';
        }
    )
    .catch(error => {
            console.error('Error fetching data:', error);
            justtochangecolour.style.backgroundColor = 'red';
        }
    );

}
