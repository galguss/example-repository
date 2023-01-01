async function memePopular()
{
    const URL = "https://api.imgflip.com/get_memes";
    const res = await fetch(URL);
    const data = await res.json();
    let populer = data.data.memes[0];

    for(let k = 1; k < data.data.memes.length; k++){
        if(populer.box_count < data.data.memes[k].box_count)
        {
            populer = data.data.memes[k];
        }
    }

    console.log(populer);
    const Box = document.getElementById('Box');

    const img = document.createElement('img');
    img.src = populer.url;
    Box.appendChild(img);
    const name = document.createElement('p');
    name.innerHTML = populer.name;
    Box.appendChild(name);
    
}

memePopular();