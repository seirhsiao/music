$(document).ready(function() {

    var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jplayer_N",
        cssSelectorAncestor: "#jp_container_N"
    }, [{
        title: "月半小夜曲",
        artist: "Lawrence",
        mp3: "audios/halfmoon-serenade.mp3",
        poster: "audios/piano-pieces.png"
    }, {
        title: "In The Moment of Inspiration",
        artist: "pinkzebra",
        mp3: "audios/In the Moment of Inspiration.mp3",
        poster: "audios/golden-wheat-field.jpg"
    }, {
        title: "Inspiring Ideas into Motion",
        artist: "pinkzebra",
        mp3: "audios/Inspiring Ideas into Motion.mp3",
        poster: "audios/sunny-day.jpg"
    }, {
        title: "Peaceful Dawn",
        artist: "pinkzebra",
        mp3: "audios/Peaceful Dawn.mp3",
        poster: "audios/desert-sunrise.jpg"
    }, {
        title: "Soaring Spirit",
        artist: "pinkzebra",
        mp3: "audios/Photos and Memories.mp3",
        poster: "audios/dandelion.jpg"
    }, {
        title: "Photos and Memories",
        artist: "pinkzebra",
        mp3: "audios/Soaring Spirit.mp3",
        poster: "audios/tulips.jpg"
    }, {
        title: "River Song",
        artist: "Pianochocolate",
        mp3: "audios/Pianochocolate - River Song.mp3",
        poster: "audios/river-song.png"
    }, {
        title: "暗香",
        artist: "林海",
        mp3: "audios/林海 - 暗香.mp3",
        poster: "audios/anxiang.jpg"
    }, {
        title: "守候",
        artist: "林海",
        mp3: "audios/林海 - 守候.mp3",
        poster: "audios/shouhou.png"
    }, {
        title: "诗意",
        artist: "伍国忠",
        mp3: "audios/伍国忠 - 诗意.mp3",
        poster: "audios/shiyi.jpg"
    }, {
        title: "诗意",
        artist: "DJ OKAWARI",
        mp3: "audios/DJ OKAWARI - Luv Letter.mp3",
        poster: "audios/luv-letter.png"
    }, {
        title: "雪千寻",
        artist: "胡伟立",
        mp3: "audios/胡伟立 - 雪千寻 - 纯音乐版.mp3",
        poster: "audios/xuequnxun.png"
    }, {
        title: "从夏天开始到夏天结束",
        artist: "孙子涵",
        mp3: "audios/孙子涵 - 从夏天开始到夏天结束.mp3",
        poster: "audios/yinianyidudexia.png"
    }, {
        title: "天之痕",
        artist: "轻音乐",
        mp3: "audios/纯音乐 - 天之痕 - 钢琴版.mp3",
        poster: "audios/tianzhihen.png"
    }, {
        title: "深谷幽兰",
        artist: "周子雷",
        mp3: "audios/周子雷 - 深谷幽兰.mp3",
        poster: "audios/qiannianfengya.png"
    }, {
        title: "夜的钢琴曲",
        artist: "石进",
        mp3: "audios/纯音乐 - 夜的钢琴曲5.mp3",
        poster: "audios/yedegangqinqu.png"
    }, {
        title: "The Mass",
        artist: "Era",
        mp3: "audios/轻音乐 - The Mass.mp3",
        poster: "audios/the-mass.jpg"
    }, {
        title: "My Soul",
        artist: "July",
        mp3: "audios/July - My Soul - 纯音乐版.mp3",
        poster: "audios/my-soul.png"
    }, {
        title: "开场曲",
        artist: "群星",
        mp3: "audios/哼唱 - 开场曲.mp3",
        poster: "audios/kaichangqu.jpg"
    }, {
        title: "斯卡布罗集市",
        artist: "卡洛儿",
        mp3: "audios/卡洛儿 - 斯卡布罗集市.mp3",
        poster: "audios/sikabuluojishi.jpg"
    }, {
        title: "奇异恩典",
        artist: "卡洛儿",
        mp3: "audios/王珺 - 奇异恩典.mp3",
        poster: "aaudios/qiyiendian.jpg"
    }, {
        title: "知不知道",
        artist: "卡洛儿",
        mp3: "audios/卡洛儿 - 知道不知道.mp3",
        poster: "audios/zhibuzhidao.jpg"
    }, {
        title: "黑色星期天",
        artist: "Gloomy Sunday",
        mp3: "audios/黑色星期天原版.mp3",
        poster: "audios/heisexingqitian.jpg"
    }, {
        title: "The Colour Of The Night",
        artist: "Brett Anderson",
        mp3: "audios/影视原声 - The Colour Of The Night.mp3",
        poster: "audios/the-color-of-night.jpg"
    }, {
        title: "I have Never Been To Me",
        artist: "Charlene",
        mp3: "audios/哼唱 - I've Never Been To Me.mp3",
        poster: "audios/i-have-never-been-to-me.jpg"
    }, {
        title: "舒伯特小夜曲",
        artist: "舒伯特",
        mp3: "audios/舒伯特 - 舒伯特小夜曲.mp3",
        poster: "audios/xiaoyequ.jpg"
    }], {
        playlistOptions: {
            enableRemoveControls: true,
            autoPlay: true
        },
        swfPath: "js/jPlayer",
        supplied: "webmv, ogv, m4v, oga, mp3",
        smoothPlayBar: true,
        keyEnabled: true,
        audioFullScreen: false
    });

    $(document).on($.jPlayer.event.pause, myPlaylist.cssSelector.jPlayer, function() {
        $('.musicbar').removeClass('animate');
        $('.jp-play-me').removeClass('active');
        $('.jp-play-me').parent('li').removeClass('active');
    });

    $(document).on($.jPlayer.event.play, myPlaylist.cssSelector.jPlayer, function() {
        $('.musicbar').addClass('animate');
    });

    $(document).on('click', '.jp-play-me', function(e) {
        e && e.preventDefault();
        var $this = $(e.target);
        if (!$this.is('a')) $this = $this.closest('a');

        $('.jp-play-me').not($this).removeClass('active');
        $('.jp-play-me').parent('li').not($this.parent('li')).removeClass('active');

        $this.toggleClass('active');
        $this.parent('li').toggleClass('active');
        if (!$this.hasClass('active')) {
            myPlaylist.pause();
        } else {
            var i = Math.floor(Math.random() * (1 + 7 - 1));
            myPlaylist.play(i);
        }

    });



    // video

    $("#jplayer_1").jPlayer({
        ready: function() {
            $(this).jPlayer("setMedia", {
                title: "Big Buck Bunny",
                m4v: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.m4v",
                ogv: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.ogv",
                webmv: "http://flatfull.com/themes/assets/video/big_buck_bunny_trailer.webm",
                poster: "images/m41.jpg"
            });
        },
        swfPath: "js",
        supplied: "webmv, ogv, m4v",
        size: {
            width: "100%",
            height: "auto",
            cssClass: "jp-video-360p"
        },
        globalVolume: true,
        smoothPlayBar: true,
        keyEnabled: true
    });

});

