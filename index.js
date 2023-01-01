async function memePopular()
{
    const URL = "https://api.imgflip.com/get_memes";
    const res = await fetch(URL);
    const data = await res.json();
    const Box = document.getElementById('Box');

    const img = document.createElement('img');
    img.src = data.data.memes[0].url;
    img.width = "300";
    Box.appendChild(img);
    const name = document.createElement('p');
    name.innerHTML = data.data.memes[0].name;
    Box.appendChild(name);
    
}

memePopular();