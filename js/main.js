const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

// function getDetails() {
//     let avatar = document.getElementById('avatar') 
//     let bio = document.getElementById('bio')
//     let hireable = document.getElementById('hireable')

//     fetch('https://api.github.com/users/jasih')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         avatar.src = data.avatar_url
//         bio.innerHTML = data.bio
//         hireable.innerHTML = 'Hireable: ' + data.hireable
//     })
// }

// getDetails();


function getAvatar() {
    let photo = document.getElementById('avatar')

    let url = 'https://api.github.com/users/jasih'
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data)
        photo.src = data.avatar_url
    })        
}

getAvatar();


function getBio() {
    let bio = document.getElementById('bio')

    let url = 'https://api.github.com/users/jasih'
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data)
        bio.innerHTML = data.bio
    })  
}

getBio();


function getHireable() {
    let hireable = document.getElementById('hireable')

    let url = 'https://api.github.com/users/jasih'
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data)
        hireable.innerHTML = 'Hireable: ' + data.hireable
    })  
}

getHireable();


function PageTransitions(){
    //Button click active class
    for(let i = 0; i < sectionBtn.length; i++){
        sectionBtn[i].addEventListener('click', function(){
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }

    //Sections active class
    allSections.addEventListener('click', (e) =>{
        const id = e.target.dataset.id;
        if(id) {
            //remove selected from the other buttons
            sectionBtns.forEach((btn) =>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            //hide other sections
            sections.forEach((section)=>{
                section.classList.remove('active')
            })

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    })
}

PageTransitions();