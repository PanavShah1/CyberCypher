let doctors_data = [
    {
        'index': 0,
        'name': 'Sam Murray',
        'phone-no': '2398475619',
        'password': 'redfish123',
        'specialization': 'orthopedic',
        'appointments': [
            {
                'patient': patients_data[0],
                'date-time': '23/2/23 12:00'
            }
        ]
    },
    {
        'index': 1,
        'name': 'Danial Smith',
        'phone-no': '3495837293',
        'password': 'iamthebest34',
        'specialization': 'pediatrician',
        'appointments': []
    }
]

let patients_data = [
    {
        'index': 0,
        'name': 'Tom Cruise',
        'phone-no': '3928374637',
        'password': 'best543',
        'appointments': [{
            'doctor': doctors_data[0],
            'date-time': '23/2/23 12:00'
        }

        ]
    }
]




x = 0;

document.addEventListener('DOMContentLoaded', function() {
    // Your script code here
    let len = doctors_data.length;
    console.log('len1 '+len);
    for (let i = 0; i<len; i++){
        console.log(doctors_data[i]['name']);
        let newElemtnt = document.createElement('div');
        newElemtnt.classList.add('doctor');
        newElemtnt.innerHTML = '<img src="face.png" alt=""><div><p>Name : <span class="imp">'+doctors_data[i]['name']+'</span></p><p>Specialization : <span class="imp">'+doctors_data[i]['specialization']+'</span></p></div>'
        document.querySelector('.right').appendChild(newElemtnt);

        let newButton = document.createElement('button');
        newButton.classList.add('appointment-but');
        newButton.classList.add('doctor-'+i);
        newButton.addEventListener('click', function(){
            appo(i);
        });
        newButton.innerHTML = 'Get appointment';
        document.querySelector('.right').appendChild(newButton);
    }

    let len2 = patients_data[0]['appointments'].length;
    console.log('len2 '+len2);
    for (let j = 0; j<len2; j++){
        console.log(doctors_data[j]['name']);
        let newElemtnt = document.createElement('div');
        newElemtnt.classList.add('doctor');
        newElemtnt.innerHTML = '<img src="face.png" alt=""><div><p>Name : <span class="imp">'+patients_data[x]['appointments'][j]['doctor']['name']+'</span></p><p>Specialization : <span class="imp">'+doctors_data[j]['specialization']+'</span></p><br><p>Date/Time: <span class="imp">'+patients_data[x]['appointments'][j]['date-time']+'</span></p></div>'
        document.querySelector('.appointments').appendChild(newElemtnt);
    }

})



let num = 0;


function appo(n){
    num = n;
    console.log(n);
    var hiddenDiv = document.getElementById('register-form');
    hiddenDiv.style.display = 'block';
}

function submit(event){

    let inputElement = document.querySelector('#date-time');
    let inputValue = inputElement.value;
    let date_time = inputValue;
    console.log(date_time);
    let regForm = document.querySelector('#register-form')
    regForm.style.display = 'none';
    patients_data[x]['appointments'].push({'doctor':doctors_data[num], 'date-time': date_time});
    inputElement.value = '';
    console.log(patients_data[x]['appointments'])
    // updateAppo(0, num);
    // event.preventDefault();
}
// console.log(patients_data[x]['appointments']);
function updateAppo(pat, doc){
    console.log('hello');
    
}