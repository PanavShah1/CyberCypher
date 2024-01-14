
const apiUrl = 'https://websitename';

fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        soln = data; //converts the file to a dictionary
        console.log(soln);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });






let doctors_data = [
    {
        'index': 0,
        'name': 'Sam Murray',
        'image': 'face1.png',
        'phone-no': '2398475619',
        'password': 'redfish123',
        'specialization': 'Orthopedic',
        'appointments': [
            {
                // 'patient': patients_data[0],
                'date-time': '23/2/23 12:00'
            }
        ]
    },
    {
        'index': 1,
        'name': 'Danial Smith',
        'image': 'face2.png',
        'phone-no': '3495837293',
        'password': 'iamthebest34',
        'specialization': 'Pediatrician',
        'appointments': []
    }
]

let patients_data = [
    {
        'index': 0,
        'name': 'Mary Cruise',
        'image': 'face3.png',
        'phone-no': '3928374637',
        'password': 'best543',
        'appointments': [{
            'doctor': doctors_data[0],
            'date-time': '23/2/23 12:00'
        } 
        ]
    },
    {
        'index': 1,
        'name': 'Will Smith',
        'image': 'face4.png',
        'phone-no': '7384756473',
        'password': 'slap989',
        'appointments': [
        ]
    }
]

let x = 0;





document.addEventListener('DOMContentLoaded', function() {
    // Your script code here

    // <h2>Your Profile</h2>
    //             <img src="face1.png" alt="">
    //             <p>Full Name: name</p>
    //             <p>Mobile Number: 9876543210</p>
    let cont = document.querySelector('.profile');
    let newElement1 = document.createElement('h2');
    newElement1.innerHTML = 'Your Profile';
    let newElement2 = document.createElement('img');
    newElement2.setAttribute('src', patients_data[x]['image']);
    let newElement3 = document.createElement('p');
    newElement3.innerHTML = 'Full Name : '+patients_data[x]['name'];
    let newElement4 = document.createElement('p');
    newElement4.innerHTML = 'Mobile Number : '+patients_data[x]['phone-no'];
    cont.appendChild(newElement1);
    cont.appendChild(newElement2);
    cont.appendChild(newElement3);
    cont.appendChild(newElement4);


    
    let len = doctors_data.length;
    console.log('len1 '+len);
    for (let i = 0; i<len; i++){
        console.log(doctors_data[i]['name']);
        let newElemtnt = document.createElement('div');
        newElemtnt.classList.add('doctor');
        newElemtnt.innerHTML = '<img src='+doctors_data[i]['image']+'><div><p>Name : <span class="imp">'+doctors_data[i]['name']+'</span></p><p>Specialization : <span class="imp">'+doctors_data[i]['specialization']+'</span></p></div>'
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
        newElemtnt.innerHTML = '<img src='+patients_data[x]['appointments'][j]['doctor']['image']+'><div><p>Name : <span class="imp">'+patients_data[x]['appointments'][j]['doctor']['name']+'</span></p><p>Specialization : <span class="imp">'+doctors_data[j]['specialization']+'</span></p><br><p>Date/Time: <span class="imp">'+patients_data[x]['appointments'][j]['date-time']+'</span></p></div>'
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

function submit(){

    let inputElement = document.querySelector('#date-time');
    let inputValue = inputElement.value;
    let date_time = inputValue;
    console.log(date_time);
    let regForm = document.querySelector('#register-form')
    regForm.style.display = 'none';
    patients_data[x]['appointments'].push({'doctor':doctors_data[num], 'date-time': date_time});
    inputElement.value = '';
    console.log(patients_data[x]['appointments'])
    alert('Appointment scheduled')

    
    patients_data[x]['appointments'].push({
        'doctor': doctors_data[1],
        'date-time': '15/1/24 15:00'
    })
    // console.log(doctors_data[j]['name']);
    let newElemtnt = document.createElement('div');
    newElemtnt.classList.add('doctor');
    console.log(patients_data[x]['appointments'][1]['date-time']);
    newElemtnt.innerHTML = '<img src='+patients_data[x]['appointments'][1]['doctor']['image']+'><div><p>Name : <span class="imp">'+patients_data[x]['appointments'][1]['doctor']['name']+'</span></p><p>Specialization : <span class="imp">'+doctors_data[1]['specialization']+'</span></p><br><p>Date/Time: <span class="imp">'+patients_data[x]['appointments'][2]['date-time']+'</span></p></div>'
    document.querySelector('.appointments').appendChild(newElemtnt);
    
    // updateAppo(0, num);
    // event.preventDefault();
}

