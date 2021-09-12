const loadContact = () => {
    const contact = getContact()
    
    for(const item of contact){
        const {first, last, number, location } = item;
        displayProduct(first, last, number, location)
    }
}
function $(name){
    return document.getElementById(name)
}
function addItem(){
    const firstNameField = $('fname')
    const lastNameField = $('lname')
    const numberField = $('number')
    const locationField = $('location')
    const firstName = firstNameField.value
    const lastName = lastNameField.value
    const number = numberField.value
    const location = locationField.value;
    if(!firstName || !lastName || !number || !location){
        return
    }
    displayProduct(firstName, lastName, number, location)
    addContact(firstName, lastName, number, location)
    firstNameField.value = ''
    lastNameField.value = ''
    numberField.value = ''
    locationField.value = ''
}

function displayProduct(first, last, number, location){
    const table = $('table')
    let tr = document.createElement('tr')
    tr.innerHTML = `
                <td>${first}</td>
                <td>${last}</td>
                <td>${number}</td>
                <td>${location}</td>
                 `
    table.appendChild(tr)
}

const getContact = () => {
    const contact = localStorage.getItem('contact')

    let contactObj;
    if(contact){
        contactObj = JSON.parse(contact)
    }
    else{
        contactObj = []
    }
    return contactObj;
}
const contact = getContact()
const addContact = (first, last, number, location) => {
    
    let contactObj = {first, last, number, location}
    contact.push(contactObj)
    localStorage.setItem('contact', JSON.stringify(contact))
    console.log(contact)
}
loadContact()

// delete all contacts
const deleteAll = () => {
    const table = $('table')
    table.innerHTML = ''
    
    localStorage.removeItem('contact')
}
















// function $(name){
//     return document.getElementById(name)
// }
// const firstName = $('fname')
// const lastName = $('lname')
// const number = $('number')
// const save = $('save')
// const table = $('table')
// save.addEventListener('click', saveNumber)
// function saveNumber(){
//     let fname = firstName.value;
//     let lname = lastName.value;
//     let num = number.value;
//     let tr = document.createElement('tr')
//     tr.innerHTML = `
//                 <td>${fname}</td>
//                 <td>${lname}</td>
//                 <td>${num}</td>
//                  `
//     table.appendChild(tr)
//     firstName.value = ''
//     lastName.value = ''
//     number.value = ''
   
    
//     const nameObj = {
//         fname, 
//         lname,
//         num
//     }
//     localStorage.setItem('contact', JSON.stringify(nameObj))
// }

// function displayContact(){
//     let contact = localStorage.getItem('contact')
//     let singleContact = JSON.parse(contact)
// }


// document.getElementById('save').addEventListener('click', saveContact)

// function saveContact(){
//     const getInputValue = id => document.getElementById(id).value;
//     const firstName = getInputValue('fname')
//     const lastName = getInputValue('lname')
//     const number = getInputValue('number')

//     const contact = {firstName, lastName, number}
//     let contacts = []
//     if(localStorage.getItem('contacts')){
//         contacts = JSON.parse(localStorage.getItem('contacts'))
//     }
//     contacts.push = contact;
//     localStorage.setItem('contacts', JSON.stringify(contacts))
//     fetchContacts()
// }

// function fetchContacts(){
//     let contacts = JSON.parse(localStorage.getItem('contacts'))
//     const table = document.getElementById('table')
//     table.innerHTML = ''
//     for(var i = 0; i < contacts.length; i++){
//         const {firstName, lastName, number} = contacts[i]
//         table.innerHTML += `
//         <tr>
//         <td>${firstName}</td>
//         <td>${lastName}</td>
//         <td>${number}</td>
//         </tr>
        
//         `
//     }
// }
