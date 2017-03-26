# ShowYtVideo

ShowYtVideo is a small jQuery plugin to create a popup with video from YouTube.


# Quickstart

At least you need to determine ID of the YouTube video.

For example,

```
http://www.youtube.com/watch?v=N_r349riLEE
```
ID = 'N_r349riLEE'

```html
<head>
    <link rel="stylesheet" type="text/css" href="showYtVideo.css">
</head>
<body>
    <button type="button" class="show-modal">Show YoutTube Video</button>

    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
    <script src="jquery.showYtVideo.js"></script>
    <script>
        jQuery(document).ready(function ($) {
            $('.show-modal').on('click', function () {
                $.showYtVideo({
                    videoId: 'N_r349riLEE'
                });
            });
        });
    </script>
</body>
```


# Other options

```javascript
$.showYtVideo({
    modalSize: 'm',
    shadowOpacity: 0.5,
    shadowColor: '#000',
    clickOutside: 1,
    closeButton: 1,
    videoId: 'N_r349riLEE'
});
```

* modalSize - modal window dimensions

    * s - 500x300 (px)
    * m - 600x400 (px) default value
    * l - 700x500 (px)

* shadowOpacity - [0.1 - 1.0]
    * default value - 0.5

* shadowColor - shadow color, can be HEX value or keyword
    * default value - #000

* clickOutside - [0, 1] - close modal window by clicking outside the window
    * default value - 1

* closeButton - [0, 1] - add to modal window the close button
    * default value - 1