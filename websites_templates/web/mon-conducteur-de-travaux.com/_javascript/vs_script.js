
$(document).ready(function() {
jssmoothmenu.init({
	mainmenuid: 'menuCan',
	classname: 'enu',
	orientation: 'h',
	arrows: false
});

$('#smartsearch2').before( '<label>' + $('.sssSubmitButton').val() + '</label>' );
$('.sssSubmitButton').val('');
$('.webUserHookOuterLoggedOut .webUserHookButton input').val('Login');
$('select').magicSelect();
$('input[type="file"]').fileUpload();
$('input[type="text"], input[type="password"], textarea').not('.outer *').inputLabel();

// HERE COMES THE PAIN!!! //

$('.t5i').each(function(i){
$(this).addClass( 't5'+i );
});

$('.candidateItemForNr').append('<div class="bar enabled"></div>');

$('.cslItemContainer').each
(
	function()
	{
		if($(this).find('.cslKwMcVal span:contains(Labels pour les sites:)').length)
		{
			$(this).find('.cslKwMcVal span:contains(Labels pour les sites:)').parent().hide();

			var $text = $(this).find('.cslKwMcVal').text().toLowerCase();
			
			if ( $text.indexOf('plac') > -1  )
			{
				$(this).append('<div class="mcIco Deja" />');
				$(this).find('.candidateItemForNr .bar').removeClass('enabled');
			}

			if ( $text.indexOf('permis') > -1  )
			{
				$(this).append('<div class="mcIco Permis" />');
			}
			
			if ( $text.indexOf('hicule personnel') > -1  )
			{
				$(this).append('<div class="mcIco Vehicle" />');
			}
			
			if ( $text.indexOf('test de personnalit') > -1  )
			{
				$(this).append('<div class="mcIco Perso" />');
			}
			
			if ( $text.indexOf('tests techniques') > -1  )
			{
				$(this).append('<div class="mcIco Tech" />');
			}

		}
});

$('.actSROf .facetListTitle>a').each(function(i,that){
		if( $(that).parent().next(':visible').length ){
			$(that).parent().addClass('opened');
		}
		$(that).click(function(){
			$(that).parent().toggleClass('opened');
		});
	});

$('#homeBis h1:contains(Home)').parent().parent().hide();

$('.mCCustomer').prependTo('.actSResultsCont');
$('.actTitle').prependTo('.actSResultsCont');

$('.cslKwDescr').each(function(){
	$(this).find('span').text('').addClass('shtIco');
	$(this).before( $(this).find('.shtIco') );
	$(this).prev().append( $(this) );
})
$('.cslItemContainer:lt(12)').show();


$(document).scroll(function(){
	a = $(document).height() - $(window).height() - 50;
	
	if( $('.cslItemContainer:not(:visible)').length && $(document).scrollTop() > a ){
	
	
	$('.cslItemContainer:not(:visible):lt(6)').show(600);
	}

});


});