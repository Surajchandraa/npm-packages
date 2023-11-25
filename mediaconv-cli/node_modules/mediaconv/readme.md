# mediaconv
This project consists of functionalities to convert video files to audio and play audio files using Node.js and ffmpeg.


## Installation:
```bash
    npm install mediaconv
```

## Note:
Make sure you have ffmpeg installed on your system. The ffmpeg command-line tool is used for audio conversion and playback functionalities.
to download ffmpeg click on this--> https://ffmpeg.org/download.html


## Usage:
1. conversion-
To convert a video file to audio, use the converter function provided:
```bash
    const conv = require('mediaconv');

    // Example usage:
    conv.convert('input.mp4', 'output.mp3');
    conv.convert('input.mp4','out.wav');

```


2. playback-
To play audio or video file use 'play function'.

```bash
    const conv = require('mediaconv');

    // Example usage:
    conv.play('output.mp3');
    //inside play function give filename with extension.


```

## Acknowledgments:

- This project utilizes the ffmpeg library for audio conversion and playback.
- Special thanks to contributors and the open-source community.