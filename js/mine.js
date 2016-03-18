//<![CDATA[

$(document).ready(function(){

   
    $('#btnName').click(function(){
    var text = $('#inputName').val();
    if(text.length){
        // adds the new list item
        $('<li />', {html: text}).appendTo('ul#sortable')
        // adds the class to the list item
        $( 'li' ).addClass( 'ui-state-default');
        // checks if a button is in list item. if not add one
        $('.ui-state-default:not(:has(button))').append('<button id="hide" onclick="parentNode.remove()">Delete</button><button id="bought" onclick="parentNode.style.background=\'#00e500\'">Bought</button>');
        // clear the input form
        $("#inputName").val('');
    }
});

    $(function() {
    $( "#sortable" ).sortable({
      revert: true
    });
    $( "ul, li" ).disableSelection();
  });
});
//]]>