

function makeNote (e) {

        if (e.eventPhase === 2) {

        var postit = $('<div class="ui-widget-content newbox" style="top:' + e.pageY + 'px; left: ' + e.pageX + 'px;"><span id="close">Delete comment</span><p>Your comment:</p><textarea></textarea></div>').draggable();
           $('#board').append(postit);

       }

}

function deleteNote() {
    $(this).parent('#newbox').remove();
}


$(document).ready(function(){

    $('#board').click(function(e){
        makeNote(e);
    });


    $("#close").click(function () {
        deleteNote();
    });

});
