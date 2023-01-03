window.addEventListener("load", ()=> {
    let container = document.getElementById('loading-container');
    container.classList = "end-loading";
})

let indexValue = 0;

async function memePopular()
{
    const URL = "https://api.imgflip.com/get_memes";
    const res = await fetch(URL);
    const data = await res.json();
    const Box = document.getElementById('Box');

    for(let k = 0; k < 10; k++){
        const img = document.createElement('img');
        img.src = data.data.memes[k].url;
        img.width = "300";
        Box.appendChild(img);
        const name = document.createElement('p');
        name.innerHTML = data.data.memes[k].name;
        Box.appendChild(name);
    }
    
    showImg(indexValue);
}

memePopular();

function side_slide(n){showImg(indexValue += n);}
function showImg(n){
    const img = document.querySelectorAll('img');
    const p = document.querySelectorAll('p');
    if(n > img.length -1 ){indexValue = 0};
    if(n < 0){indexValue = img.length -1};
    for(let k=0; k < img.length; k++){
        img[k].style.display = "none";
        p[k].style.display = "none";
    }
    img[indexValue].style.display = "block";
    p[indexValue].style.display = "block";
}


