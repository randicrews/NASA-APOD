//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/


document.querySelector('button').addEventListener('click', getMedia)

// Thanks Raphaël Balet for the code to default to today's date! https://stackoverflow.com/users/11135174/rapha%c3%abl-balet
var date = new Date();

var day = date.getDate();
var month = date.getMonth() + 1;
var year = date.getFullYear();

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;       
document.querySelector('input').value = today;

function getMedia(){
    document.querySelector('img').src = ''
    let selection = document.querySelector('input').value
    const url = (`https://api.nasa.gov/planetary/apod?api_key=7cdI8umLfPCwFOIZW8yacCV2QHgUVxezzHjaDUxK&date=${selection}`)
    fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        console.log(data)
        console.log(selection)
        if ( data.title == undefined){
            document.querySelector('h2').innerText = 'Please enter a valid date'
            document.getElementById('explain').innerText = ''
        } else {
      document.querySelector('h2').innerText = data.title
      document.querySelector('h3').innerText = data.explanation
      document.querySelector('img').src = data.hdurl
    }
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}
 