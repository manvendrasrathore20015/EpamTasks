const express = require('express')
const user = require('./user.js')
const users = require('./user.js').users
var currentUsers = []
const app = express()
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.get('/',(req,res)=> { 
    res.write('<h1> The app includes following functionalities :- </h1>')
    res.write("<p>=> http://localhost:8080/<b>get</b> - To get all the data</p>" )
    res.write("<p>=> http://localhost:8080/<b>get/:id</b> - To get the user with particular id.</p>")
    res.write("<p>=> http://localhost:8080/<b>delete</b> - To delete the user of particular id.</p>")
    res.write("<p>=> http://localhost:8080/<b>update</b> - To replace the user details.</p>")
    res.write("<p>=> http://localhost:8080/<b>create</b> - To add a new user.</p>")
    res.write("<p>=> http://localhost:8080/<b>getAutoSuggest</b> - To get auto suggestion with a substring and limit.</p>")    
    res.send();
})
// To get all users
app.get('/get', (req, res) => {
    getAvailableUsers();
    res.json(currentUsers);
    res.send();
})
// To get available users by checking isDeleted property
function getAvailableUsers(){
    currentUsers = [];
    for (let i = 0; i < users.length; i++) {
        const element = users[i];
        if(!element.isDeleted)
            currentUsers.push(element);
    }
}
// To get user based on id specified
app.get('/get/:id',(req,res) => {
    let id = req.params.id;
    let userData = {};
    for(let i=0; i<users.length; i++ ) {
        if(users[i].id == id) {
            userData = users[i];
            break;
        }
    }
    res.json(userData);
    res.send(); // sets content type as specified.
})

/* => To delete the user with given id
reqest format
{     "id": integer,
 }
*/
app.put('/delete',(req, res) => {
    const id = req.body.id;
    for(let i = 0; i < users.length; i++){
        const element = users[i];  
        if(element.id == id) {
            element.isDeleted = true;
            break;
        }
    }
    getAvailableUsers();
    res.json(currentUsers);
})

/* => To add the new user
 req format
{
    "id": integer,
    "login": string,
    "password": string,
    "age": integer,
    "isDeleted": boolean,
}   */
app.post('/create',(req, res) => {
    const data = req.body;
    console.log(data);
    let idPresent = idExist(data.id);
    if(!idPresent) {
        users.push(data);
        getAvailableUsers();
        res.json(currentUsers);
    }
    else {
        res.send(`User with ${data.id} id already exits !!`);
    }
})
// To get whether given id is present in users or not
function idExist(id) {
    for(let i=0; i<users.length; i++) {
        if(users[i].id == id) {
            return true;
        }
    }
    return false;
}
/* => To update the users data, if specified id not present -> create new user
req format
{
     "id": integer,
     "login": string,
     "password": string,
     "age": integer,
     "isDeleted": boolean
}   */
app.put('/update',(req, res) => {
    const data = req.body;
    let check = false;
    for(let i=0; i<users.length; i++) {
        if(user[i].id == data.id) {
            check = true;
            users[ind].login = data.login;
            users[ind].password = data.password;
            users[ind].age = data.age;
            users[ind].isDeleted = data.isDeleted;
            break;
        }
    }
    if(!check)
        users.push(data);
    getAvailableUsers();
    res.json(currentUsers);
})

// To get suggestions based on a string and limit specified.
/* request format
 {
     "substring": string,
     "limit": integer,
 }  */
app.post('/getAutoSuggest',(req,res)=>{
    const substring = req.body.substring;
    var limit = req.body.limit;
    var list = [];
    for (let ind = 0; ind < users.length; ind++) {
        const element = users[ind];
        
        if(element.login.includes(substring) && limit){
            limit-=1;
            list.push(element);
        }
    }
    res.json(list);     
})

app.listen(8080)