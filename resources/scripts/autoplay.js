$(document).ready(function(){
    var nowPlaying = "none";

        $('.gun').hover(function(){
              nowPlaying = $(this).find('iframe').attr('src');
                   $(this).find('iframe').attr('src',nowPlaying+'&autoplay=1');
        }, function(){
            $(this).find('iframe').attr('src',nowPlaying);
        });
});