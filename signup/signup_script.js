const CheckUser = () => {

    var num = document.getElementById("mob-no").value;
    var password = document.getElementById("password").value;



    fetch('http://127.0.0.1:8000/login_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'username': num, 'password': password}),
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
        if( data.outcome == 'success' ) {
            if(data.type=='patient'){
                window.open('../customer_page/customer_page.html', '_self');
            }
            else{
                window.open('../doctor_page/doctor_page.html', '_self');
            }


    }
    else{
        window.open('../register/register.html', '_self');
    }})
    .catch(err => {
        console.log(err);
    });




};