$(document).ready(function(){
$('#text').on('keyup', function(){
var countEl = $('#text').val().trim().split(' ');
$('#count').text(countEl.length);
})

$('#clear').click(function(){
$('#text').val("");
$('#count').text('0');
 })
   
});

