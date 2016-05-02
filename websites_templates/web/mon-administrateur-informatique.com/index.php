<?

//ini_set('include_path','.:/usr/local/lib/php:'.'/opt/otysfrontoffice/HTML/include'); 
//ini_set('include_path',ini_get('include_path').':'.'/opt/otysfrontoffice/HTML/classes'); 

//if ($REMOTE_ADDR == "80.127.127.127") print ini_get('include_path');

$optpath					= "/opt/";
$HTTP_GET_VARS['code']		= "recrut";
$SiteId						= 3;

include ($optpath."otysfrontoffice/HTML/include/cms_includelist.php");

?>

