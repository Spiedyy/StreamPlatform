let FetchedVideos = [];
let i = 0;

const videoContainer = document.getElementById('cardcontainer');
const cardtoclone = document.getElementById('card');


function getvideos() {
    fetch('../Videos.json')
        .then(response => response.json())
        .then(data => {
            FetchedVideos = data;
            clonecard();
        })
}

getvideos();

// Create a function to clone the card for each video
function clonecard() {

    for (const anime in FetchedVideos.Animes) {
        console.log(anime); // Logs the name of the anime

        // Create a card for each title
        const clone = cardtoclone.cloneNode(true);
        clone.id = `card${i}`;
        clone.querySelector('#title').innerHTML = anime;
        clone.classList.remove('hidden');
        videoContainer.appendChild(clone);

        i++


        FetchedVideos.Animes[anime].forEach(video => {
            console.log(video.Name) // Logs the Name of all the episode
            console.log(video.img); // Logs the image of all the episode
            console.log(video.type); // Logs the type of all the episode

            clone.querySelector('#title').innerHTML = anime;
            clone.querySelector('#imgsrc').src = video.img;
            clone.querySelector('#type').innerHTML = video.type;
        })
    }

    cardtoclone.remove();
}