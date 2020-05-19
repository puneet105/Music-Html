$(".album-poster").on('click' , function(e){
    var dataSwitchId = $(this).attr('data-switch');
    ap.list.switch(dataSwitchId);
    ap.play();
    $("#aplayer1").addClass('showPlayer');
});



const ap = new APlayer({
    container: document.getElementById('aplayer1'),
    listFolded: true,
    audio: [
    {
        name: '12_saal',
        artist: 'Bilaal Saeed',
        url: './music/12_saal.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Bewafa',
        artist: 'Imran  Khan',
        url: './music/Bewafa.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'chandigarh',
        artist: 'Ammy Virk',
        url: './music/chandigarh.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'channa_ve',
        artist: 'Sterio Nation',
        url: './music/channa_ve.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Dream_Girl',
        artist: 'J Star',
        url: './music/Dream_Girl.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'kangna',
        artist: 'RDB',
        url: './music/kangna.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Kannian',
        artist: 'No Info',
        url: './music/Kannian.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Panga',
        artist: 'Diljit Dosanjh',
        url: './music/Panga.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Peerh',
        artist: 'No Info',
        url: './music/Peerh.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'soniye_hiriye',
        artist: 'No Info',
        url: './music/soniye_hiriye.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Tere_Darshan',
        artist: 'Amrinder Gill',
        url: './music/Tere_Darshan.mp3',
        cover: 'ssd-preview.png'
    },
    {
        name: 'Yaar_Anmulle',
        artist: 'Sharry Mann',
        url: './music/Yaar_Anmulle.mp3',
        cover: 'ssd-preview.png'
    },


    ]
});