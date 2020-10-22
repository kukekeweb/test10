function play_se(){
    var フォトナのダンス = new Audio('フォトナのダンス.mp3');
    フォトナのダンス.play();
}


$(function(){
    $('#10曲目').click(play_se);
});