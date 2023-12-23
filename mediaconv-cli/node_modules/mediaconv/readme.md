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
```js
    const conv = require('mediaconv');

    // Example usage:
    conv.convert('input.mp4', 'output.mp3');
    conv.convert('input.mp4','out.wav');

```


2. playback-
To play audio or video file use 'play function'.

```js
    const conv = require('mediaconv');

    // Example usage:
    conv.play('output.mp3');
    //inside play function give filename with extension.


```

3. click-
To click the picture use 'click function'.

```js
    const conv = require('mediaconv');
    //conv.click(width,height,time_delay,"image_name")

    conv.click(1000,500,4,"output.jpg");

    //here 1000 refers to the width (x-axis) of the image to be click.

    //here 500 refers to the height (y-axis) of the image.


    //4 referes the time delay it means if u call click function image will taken after 4 seconds. for instant click use 0 at the play of 4.

    //"output.jpg" image name.
```

4. video-
To record video use 'video function'.

```js
     const conv = require('mediaconv');

     //conv.video(delay,"duration of video","filename");
     conv.video(5,"00:00:4","example.mp4");
     // video recording will started after 5 seconds after calling video function.
     //"00:00:4" 4 seconds of video will be recorded.
     //"example.mp4" video file name.


```

## Acknowledgments:

- This project utilizes the ffmpeg library for audio conversion and playback.
- Special thanks to contributors and the open-source community.