const loadBuddies = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()

const displayBuddies = (data) =>{
    const element = data.results;
    const buddyHolder = document.getElementById('buddies');
    for(const buddy of element){
        const p = document.createElement('p');
        p.innerText = `name : ${buddy.name.title} ${buddy.name.first} ${buddy.name.last}
        email: ${buddy.email}`;
        buddyHolder.appendChild(p);
    }

}