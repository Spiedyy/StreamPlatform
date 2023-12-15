# Streamplatform Video Player

This code represents a simple video player application that fetches video data from a JSON file and displays it on a web page.

## Overview

The main purpose of this code is to:

- Fetch video data from a 'Videos.json' file.
- Generate cards dynamically for each anime fetched from the JSON data.
- Display information about each anime (such as title, image, and type) in the generated cards.
- Create a media player for each anime that allows users to watch episodes.
- Switch between episodes by clicking on the episode titles.
- Close the video player and stop playback when needed.

## Setup and Usage

1. **Prerequisites:** Ensure you have a 'Videos.json' file structured appropriately with anime and episode data.
2. **Implementation:** Integrate this code into your web application.
3. **Running the Code:** Once integrated, this code will automatically fetch video data and generate a UI for video playback.
4. **Interacting with the UI:**
   - Click on an anime card to start watching its episodes.
   - Click on episode titles to switch between episodes.
   - Close the video player using the provided close button or the 'Escape' key.

## Code Structure

- `FetchedVideos`: Array to store fetched video data.
- `i`: Counter variable for unique card IDs.
- Functions:
  - `getvideos()`: Fetches video data from 'Videos.json' and initiates the card cloning process.
  - `clonecard()`: Clones cards for each anime and sets up event listeners for video playback.
  - `createMediaPlayer(anime)`: Generates a media player for the selected anime and handles episode selection.

  ## JSON Data Structure

The structure of the `Videos.json` file should follow this format:

```json
{
    "Animes": {
        "Seven Deadly Sins": [
            {
                "Name": "Seven Deadly Sins Episode 1",
                "Description": "The Seven Deadly Sins were once an active group of knights in the region of Britannia...",
                "source": "YOUR_PATH.mp4",
                "img": "YOUR_PATH.jpg",
                "type": "Tv Series"
            }
        ],
        "Jujutsu Kaisen": [
            {
                "Name": "Jujutsu Kaisen Episode 1",
                "Description": "Jujutsu Kaisen is a Japanese manga series written and illustrated by Gege Akutami...",
                "source": "YOUR_PATH.mp4",
                "img": "YOUR_PATH.jpg",
                "type": "Tv Series"
            }
        ]
    }
}
```

## Usage Notes

- Ensure the 'Videos.json' file is correctly formatted with anime and episode details.
- Customize the CSS and UI elements as per your application's design requirements.
- Handle error cases and edge scenarios appropriately, especially with fetch requests and missing data.

## Contributing

Feel free to contribute to this code by:
- Adding new features.
- Fixing bugs or optimizing existing code.
- Improving UI/UX for better user interaction.


## Screenshots
![Homepage](/ReadmePictures/Homepage.png)
![Mediaplayer](/ReadmePictures/Mediaplayer.png)
