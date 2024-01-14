let patients_data = [
    {
        'index': 0,
        'name': 'Tom Cruise',
        'image': 'face3.png',
        'phone-no': '3928374637',
        'password': 'best543',
        'appointments': [{
            // 'doctor': doctors_data[0],
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




let doctors_data = [
    {
        'index': 0,
        'name': 'Sam Murray',
        'image': 'face1.png',
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
        'image': 'face2.png',
        'phone-no': '3495837293',
        'password': 'iamthebest34',
        'specialization': 'pediatrician',
        'appointments': []
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
    newElement2.setAttribute('src', doctors_data[x]['image']);
    let newElement3 = document.createElement('p');
    newElement3.innerHTML = 'Full Name : '+doctors_data[x]['name'];
    let newElement4 = document.createElement('p');
    newElement4.innerHTML = 'Mobile Number : '+doctors_data[x]['phone-no'];
    let newElement5 = document.createElement('p');
    newElement5.innerHTML = 'Specialization : '+doctors_data[x]['specialization'];
    
    cont.appendChild(newElement1);
    cont.appendChild(newElement2);
    cont.appendChild(newElement3);
    cont.appendChild(newElement4);
    cont.appendChild(newElement5);


    let len2 = doctors_data[0]['appointments'].length;
    console.log('len2 '+len2);
    for (let j = 0; j<len2; j++){
        console.log(doctors_data[j]['name']);
        let newElemtnt = document.createElement('div');
        newElemtnt.classList.add('doctor');
        newElemtnt.innerHTML = '<img src='+doctors_data[x]['appointments'][j]['patient']['image']+'><div><p>Name : <span class="imp">'+doctors_data[x]['appointments'][j]['patient']['name']+'</span></p><br><p>Date/Time: <span class="imp">'+patients_data[x]['appointments'][j]['date-time']+'</span></p></div>'
        document.querySelector('.appointments').appendChild(newElemtnt);
    }

})

