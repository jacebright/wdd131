// Summer Programs List and js

const programs = [
    {
        name: "Fun in the Sun",
        date: "July 19 2024",
        maxAge: 7,
        minAge: 1,
        theme: "Beach",
        imageUrl: "https://cdn.pixabay.com/photo/2021/03/19/04/49/kid-6106557_1280.jpg"
    },
    {
        name: "Safari Adventures",
        date: "July 24 2024",
        maxAge: 10,
        minAge: 3,
        theme: "Animals",
        imageUrl: "https://cdn.pixabay.com/photo/2012/03/04/00/09/lions-21787_1280.jpg"
    },
    {
        name: "Bubble Magician",
        date: "July 26 2024",
        maxAge: 7,
        minAge: 1,
        theme: "Bubbles",
        imageUrl: "https://cdn.pixabay.com/photo/2017/08/04/20/28/soap-bubbles-2581375_1280.jpg"
    },
    {
        name: "Math is Fun!",
        date: "July 31 2024",
        maxAge: 12,
        minAge: 6,
        theme: "Math",
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/29/01/16/abacus-1866497_1280.jpg"
    },
    {
        name: "Disney Day",
        date: "August 2 2024",
        maxAge: 5,
        minAge: 1,
        theme: "Princesses",
        imageUrl: "https://cdn.pixabay.com/photo/2016/11/20/09/12/castle-1842324_1280.jpg"
    },
    {
        name: "Back to School",
        date: "August 7 2024",
        maxAge: 7,
        minAge: 12,
        theme: "School",
        imageUrl: "https://cdn.pixabay.com/photo/2016/08/26/18/02/back-to-school-1622789_1280.jpg"
    }
]

function dateInFuture(firstDate, secondDate) {
    if(secondDate.setHours(0,0,0,0) <= firstDate.setHours(0,0,0,0)) {
        return true;
    } 
    else {
        return false;
    }
}



function displayCard(programs) {
    const today = new Date();
    programs.forEach(program => {
        if (dateInFuture(new Date(program.date), today)) {
            const programCard = document.createElement("section")
            programCard.innerHTML = `<h2>${program.name}</h2><img 
            src=${program.imageUrl} alt=${program.name} loading="lazy"><table><tr>
            <td class="label">Date:</td><td>${program.date}</td></tr><tr><td 
            class="label">Age Range:</td><td>${program.minAge}-${program.maxAge}
            </td></tr><tr><td class="label">Theme:</td><td>${program.theme}</td></tr>
            </table>`;
    
            document.getElementById("programs").appendChild(programCard);
        }
        else {
            const programCard = document.createElement("section")
            programCard.innerHTML = `<h2>${program.name}</h2><img 
            src=${program.imageUrl} alt=${program.name} loading="lazy"><table><tr>
            <td class="label">Date:</td><td>Past</td></tr><tr><td 
            class="label">Age Range:</td><td>${program.minAge}-${program.maxAge}
            </td></tr><tr><td class="label">Theme:</td><td>${program.theme}</td></tr>
            </table>`;

            document.getElementById("programs").appendChild(programCard);
        }
});
}

displayCard(programs);