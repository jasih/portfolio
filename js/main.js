const sections = document.querySelectorAll('.section');
const sectionBtns = document.querySelectorAll('.controls');
const sectionBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

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
    let description = document.getElementById('bio')

    let url = 'https://api.github.com/users/jasih'
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data)
        description.src = data.bio
    })  
}

getBio();

function getHireable() {
    let isHired = document.getElementById('bio')

    let url = 'https://api.github.com/users/jasih'
    fetch(url).then(res=>res.json()).then(data=>{
        console.log(data)
        isHired.src = data.hireable
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