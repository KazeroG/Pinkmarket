<!DOCTYPE html>
<html data-wf-page="61849474cb0879b29a8da1fa" data-wf-site="618342fcf843b63d6784dcb3" lang="fr"
    data-wf-domain="web.pinkmarket.co">

<head>
    <base href="https://web.pinkmarket.co">
    <meta charset="utf-8">
    <title>@yield ('title')</title>
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="title" content="@yield ('title')">
    <meta name="description" content="@yield ('description')">
    <meta name="keywords" content="@yield ('keywords')">
    <meta name="author" content="@yield ('author')">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.pinkmarket.co/">
    <meta property="og:title" content="@yield ('title')">
    <meta property="og:description" content="@yield ('description')">
    <meta property="og:image" content="assets/images/favicon.ico">
    <meta property="og:image:alt" content="pkmt logo">
    <meta property="fb:app_id" content="">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://www.pinkmarket.co/">
    <meta property="twitter:title" content="@yield ('title')">
    <meta property="twitter:description" content="@yield ('description')">
    <meta property="twitter:image" content="assets/images/webclip.png'">

    <meta name="theme-color" content="#ee1588">

    <link href="assets/images/favicon.ico" rel="shortcut icon" type="image/x-icon">
    <link href="assets/images/webclip.png" rel="apple-touch-icon">

    <link href="assets/css/normalize.css" rel="stylesheet" type="text/css">
    <link href="assets/css/components.css" rel="stylesheet" type="text/css">
    <link href="assets/css/style.css" rel="stylesheet" type="text/css">

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
   integrity="sha512-xodZBNTC5n17Xt2atTPuE1HxjVMSvLVW9ocqUKLsCC5CXdbqCmblAshOMAS6/keqq/sMZMZ19scR4PsZChSR7A=="
   crossorigin=""/>
 <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
   integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
   crossorigin=""></script>
        

    <!-- [if lte IE 9]><script src="https://cdnjs.cloudflare.com/ajax/libs/placeholders/3.0.2/placeholders.min.js"></script><![endif] -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/mixitup/3.3.0/mixitup.min.js"></script>
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-Q9TQME96TF"></script>
    <script type="text/javascript">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-Q9TQME96TF', {
            'anonymize_ip': false
        });

    </script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bxslider/4.2.15/jquery.bxslider.min.css">
    <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBolki9zeE-faUNy7LUsZKgayA8w4xewvg"></script>
    <script>
        $(document).ready(function () {
            $('.carousel').bxSlider({
                pager: false,
                slideMargin: 30,
                controls: false,
                speed: 60000,
                useCSS: false,
                ticker: true,
                tickerHover: true,
                slideWidth: 300,
                responsive: false,
                minSlides: 1,
                maxSlides: 4,
            });
        });

    </script>
    <style>
        .marquee-track-2 {
            position: absolute;
            white-space: nowrap;
            will-change: transform;
            animation: marquee-horizontal 40s linear infinite;
            /* manipulate the speed of the marquee by changing "40s" line above*/
        }

        @keyframes marquee-horizontal {
            from {
                transform: translateX(0);
            }

            to {
                transform: translateX(-50%);
            }
        }

        @media only screen and (min-width: 992px) {
            .marquee-track:hover {
                animation-play-state: paused;
            }
        }

    </style>
    <style>
        ::selection {
            background: #000000;
            color: #FFFFFF;
            text-shadow: none;
        }

    </style>
    <!-- Memberstack
<script src="https://api.memberstack.io/static/memberstack.js?custom" data-memberstack-id="2818a99b921052f433eeb734562cb90b"> </script> -->

    @yield ('other')

</head>

<body>

    @extends ('assets.nav')

    @yield ('content')


    <script src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=618342fcf843b63d6784dcb3"
        type="text/javascript" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous">
    </script>
    <script src="assets/js/script.js" type="text/javascript"></script>
   <script src="assets/js/map.js"></script>
    <script>
        // Set the reference to the container
        const containerEl = document.querySelector(".mix-container")
        // Call the MixitUp to that container
        var mixer = mixitup(containerEl)
        var conv = function (str) {
            if (!str) {
                str = 'empty';
            }
            return str.replace(/[!\"#$%&'\(\)\*\+,\.\/:;<=>\?\@\[\\\]\^`\{\|\}~]/g, '')
                .replace(/ /g, "-")
                .toLowerCase()
                .trim();
        };

    </script>
</body>

</html>
