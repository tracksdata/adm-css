let users=[];


fetch('https://reqres.in/api/users')
    .then(response => response.json())
    .then(listofUsers => {
        users=listofUsers.data;
       // users.data.map(user =>{
          // document.getElementById('d1').innerHTML=displayUser(user);
       // })
    })

    document.getElementById('b1').addEventListener('click',()=>{
        console.log(users);

        users.forEach(user=>{
            document.getElementById('d1').innerHTML=displayUser(user);
        })
    })



    console.log(users);


    let name='Praveen';
    let age=98;
    let loc='hyderabad';

    console.log('user '+name+' is from '+loc+' and he is '+age+' years old');
    console.log(`User ${name} is from ${loc} and he is ${age} years old`);



    function displayUser(user){
        return `
        <div>
            <p> ${user.id}</p>
            <p>${user.first_name}</p>
            <p>${user.last_name}</p>
            <p>${user.email}</p>
            <p><img src='${user.avatar}'></p>
        </div>
        <hr/>
        
        `
      
    }
