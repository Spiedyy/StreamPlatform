let FetchedVideos = [];
let i = 0;

const cardcontainer = document.getElementById('cardcontainer');
const cardtoclone = document.getElementById('card');
const videoContainer = document.getElementById('videocontainer');
const episodegrid = document.getElementById('episodegrid');
const videosrc = document.getElementById('videossrc');
const titles = document.getElementById('titles');
const videocard = document.getElementById('videocard');

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
        clone.querySelector('#cardbtn').id = `cardbtn${i}`;
        clone.classList.remove('hidden');
        cardcontainer.appendChild(clone);

        // Create the media player for each anime
        clone.querySelector(`#cardbtn${i}`).addEventListener('click', () => {
            videoContainer.classList.remove('hidden');
            createMediaPlayer(anime);
        });

        videocard.remove();
        titles.remove();

        i++

        // Data for the card
        FetchedVideos.Animes[anime].forEach(video => {
            clone.querySelector('#title').innerHTML = anime;
            clone.querySelector('#imgsrc').src = video.img;
            clone.querySelector('#type').innerHTML = video.type;
        })
    }

    cardtoclone.remove();
}

// Creating the media player for each anime
function createMediaPlayer(anime) {
    const vidcontainer = videocard.cloneNode(true);
    vidcontainer.classList.remove('hidden');
    vidcontainer.querySelector('#videossrc').src = FetchedVideos.Animes[anime][0].source;
    videoContainer.appendChild(vidcontainer);

    const closevideo = document.getElementById('closevideo');
    closevideo.addEventListener('click', () => {
        videoContainer.classList.add('hidden');
        vidcontainer.remove();
    });

    const fetchepisodes = FetchedVideos.Animes[anime];
    fetchepisodes.forEach(episode => {
        const title = titles.cloneNode(true);
        title.querySelector('#title').innerHTML = episode.Name;
        document.getElementById('episodegrid').appendChild(title);
    });

}
