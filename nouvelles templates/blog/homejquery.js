$(function(){
  $(".ais-search-box").keypress(function() {
    $(".inactive-on-search").hide(400);
  })
});


$('.ais-search-box').blur(function()
{
    if( !$(this).val() ) {
          $("#MerciPhilippepourlejquery").show(400);
    }
});