
	require 'vendor/autoload.php';

	define('SITE_URL', '');
	$returnUrl = '';
	$shipping = 0.00;
	$paymentDesc = 'PayForSomething Payment.';

	$paypal = new \PayPal\Rest\ApiContext(
	    new \PayPal\Auth\OAuthTokenCredential(
	        '', 
	        ''
	    )
	);
