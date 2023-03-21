function getPeople(){
    fetch(' https://swapi.dev/api/people')
    .then(res => res.json())
    .then(result => {
        console.log(result)
        const blockPeople = document.querySelector('.blockPeople');
        const objPeople = result.results;
        for(let i = 0; i < objPeople.length; i++){
            const blockForPerson = createElement('tr', null, null, null, blockPeople);
            createElement('th', null, null, objPeople[i].name, blockForPerson);
            createElement('th', null, null, objPeople[i].height, blockForPerson);
            createElement('th', null, null, objPeople[i].birth_year, blockForPerson);
            createElement('th', null, null, objPeople[i].gender, blockForPerson);
            createElement('th', null, null, objPeople[i].mass, blockForPerson);
            createElement('th', null, null, objPeople[i].hair_color, blockForPerson);
            createElement('th', null, null, objPeople[i].created, blockForPerson);
        }
    });
}

getPeople();