$(document).ready(function() 
{
	$('.uberMenuIcon').click(function() 
	{
		$('#listCategories').removeClass('uberItemSelected');
		$('#listLogin').removeClass('uberItemSelected');
		$('#listProfile').removeClass('uberItemSelected');
		$('#listPassword').removeClass('uberItemSelected');
		
		if( $('.uberMenuItems').css('display') == 'none' )
			$('.uberMenuItems').fadeIn("slow");
		else if( $('.uberMenuItems').css('display') == 'block' )
			$('.uberMenuItems').fadeOut("slow");
	});
});
function openUberPopUp(id)
{
	$(".forgotpass").css('display', 'none');
	$('#businessBox').css('display', 'none');
	$('#editBusinessBox').removeClass('divActive');
	$('#editBusinessBox').addClass('divInactive');
	$('#editBusinessBox').css('display', 'none');
	
	$('#signUpBox').css('display', 'none');
	$('#popupTitle').removeClass('divSuccess');
	$('#popupTitle').removeClass('headProfile');
	$('.headerSeparator').addClass('divInactive');
	$('#popupTitle1').addClass('divInactive');
	
	$('#contentPopUpContainer').removeClass('backgroundDisabled');
	$('#addBusinessBox').css('display', 'none');
	$('#flashMessageBox').css('display', 'none');
	
	$('.loader').removeClass('divActive');
	$('.loader').addClass('divInactive');
	
	/*$('#contentPopUp').css('display', 'none');
	$('#categoryBox').css('display', 'none');
	$('#loginBox').css('display', 'none');
	$('#profileBox').css('display', 'none');
	$('#addBusinessBox').css('display', 'none');*/
	
	if( id == 'listCategories' )
	{
		if( $('#categoryBox').css('display') == 'none' )
		{
			$('#'+id).addClass('uberItemSelected');
			$('#contentPopUp').css('display', 'none');
			$('#loginBox').css('display', 'none');
			$('#listLogin').removeClass('uberItemSelected');
			$('#profileBox').css('display', 'none');
			$('#listProfile').removeClass('uberItemSelected');
			$('#passwordBox').css('display', 'none');
			$('#listPassword').removeClass('uberItemSelected');
			$('#popupTitle').html('Categories');
			$('#contentPopUp').fadeIn('slow');
			$('#categoryBox').fadeIn('slow');
		}
		else
		{
			if( $('#categoryBox').css('display') == 'block' )
			{
				$('#'+id).removeClass('uberItemSelected');
				$('#categoryBox').css('display', 'none');
				$('#contentPopUp').fadeOut('slow');
			}
		}
	}
	else if( id == 'listLogin' )
	{
		if( $('#loginBox').css('display') == 'none' )
		{
			$('#'+id).addClass('uberItemSelected');
			$('#contentPopUp').css('display', 'none');
			$('#categoryBox').css('display', 'none');
			$('#listCategories').removeClass('uberItemSelected');
			$('#profileBox').css('display', 'none');
			$('#listProfile').removeClass('uberItemSelected');
			$('#passwordBox').css('display', 'none');
			$('#listPassword').removeClass('uberItemSelected');
			$('#addBusinessBox').css('display', 'none');
			$('#popupTitle').html('Login');
			$('#contentPopUp').fadeIn('slow');
			$('#loginBox').fadeIn('slow');
		}
		else
		{ 
			if( $('#loginBox').css('display') == 'block' )
			{
				$('#'+id).removeClass('uberItemSelected');
				$('#loginBox').css('display', 'none');
				$('#contentPopUp').fadeOut('slow');
			}
		}
	}
	else if( id == 'listProfile' )
	{
		if( $('#profileBox').css('display') == 'none' )
		{
			$('#'+id).addClass('uberItemSelected');
			$('#contentPopUp').css('display', 'none');
			$('#categoryBox').css('display', 'none');
			$('#listCategories').removeClass('uberItemSelected');
			$('#loginBox').css('display', 'none');
			$('#listLogin').removeClass('uberItemSelected');
			$('#passwordBox').css('display', 'none');
			$('#listPassword').removeClass('uberItemSelected');
			$('#addBusinessBox').css('display', 'none');
			$('#popupTitle').html('My Profile');
			$('#popupTitle').addClass('headProfile');
			$('#popupTitle').addClass('headActive');
			$('#popupTitle').attr('onclick', 'javascript:hideMyBusinesses();');
			$('.headerSeparator').removeClass('divInactive');
			$('#popupTitle1').removeClass('divInactive');
			$('#contentPopUp').fadeIn('slow');
			$('#profileBox').fadeIn('slow');
		}
		else
		{ 
			if( $('#profileBox').css('display') == 'block' )
			{
				$('#'+id).removeClass('uberItemSelected');
				$('#profileBox').css('display', 'none');
				$('#contentPopUp').fadeOut('slow');
			}
		}
	}
	else if( id == 'listPassword' )
	{
		$("#oldPwd").val('');
		$("#newPwd").val('');
		$("#confirmNewPwd").val('');
		$(".errorChangePwd").html('');
		
		$('input').removeClass('errorField');
		
		if( $('#passwordBox').css('display') == 'none' )
		{
			//$('#'+id).addClass('uberItemSelected');
			$('#contentPopUp').css('display', 'none');
			$('#categoryBox').css('display', 'none');
			$('#listCategories').removeClass('uberItemSelected');
			$('#loginBox').css('display', 'none');
			$('#listLogin').removeClass('uberItemSelected');
			$('#profileBox').css('display', 'none');
			//$('#listProfile').removeClass('uberItemSelected');
			$('#addBusinessBox').css('display', 'none');
			$('#popupTitle').html('Change Password');
			$('#contentPopUp').fadeIn('slow');
			$('#passwordBox').fadeIn('slow');
		}
		else
		{ 
			if( $('#passwordBox').css('display') == 'block' )
			{
				//$('#'+id).removeClass('uberItemSelected');
				$('#passwordBox').css('display', 'none');
				$('#contentPopUp').fadeOut('slow');
			}
		}
	}
	else 
	{
		$('#contentPopUpContainer').addClass('backgroundDisabled');
		$('#contentPopUp').css('display', 'none');
		
		$('.uberMenuItems').css('display', 'none');
		$('#categoryBox').css('display', 'none');
		$('#loginBox').css('display', 'none');
		$('#profileBox').css('display', 'none');
		$('#passwordBox').css('display', 'none');
		
		$('#listCategories').removeClass('uberItemSelected');
		$('#listLogin').removeClass('uberItemSelected');
		$('#listProfile').removeClass('uberItemSelected');
		$('#listPassword').removeClass('uberItemSelected');
		$('#contentPopUp').fadeIn('slow');
		
		if( id == 'listAddBusiness' )
		{
			resetBusinessForm();
			
			$('#businessSaveError').html('');
		    
		    $('input').removeClass('errorField');
		    $('select').removeClass('errorField');
		    
			$('#businessName').val('');
			$('#businessAddress').val('');
			$('#pincode').val('');
			$('#mobile1').val('');
			$('#mobile2').val('');
			$('#landline1').val('');
			$('#landline2').val('');
			$('#businessTwitterLink').val('');
			$('#businessGoogleplusLink').val('');
			$('#businessFacebookLink').val('');
			$('#businessPinterestLink').val('');
			$('#category').val('');
			$('hour > input').val('');
			
			$('#addBusinessBox').css('display', 'block');
			$('#popupTitle').html('Add Your Business');
			$('#addBusinessBox').fadeIn('slow');
		}
		else if( id == 'flashMessage' )
		{
			$('#flashMessageBox').css('display', 'block');
			$('#flashMessageBox').fadeIn('slow');
		}
	}
}
function closeUberPopUp()
{
	$('#contentPopUpContainer').removeClass('backgroundDisabled');
	
	$('#contentPopUp').fadeOut('slow');
	
	$('#loginBox').css('display', 'none');
	$('#listLogin').removeClass('uberItemSelected');
	
	$('#categoryBox').css('display', 'none');
	$('#listCategories').removeClass('uberItemSelected');
	
	$('#profileBox').css('display', 'none');
	$('#listProfile').removeClass('uberItemSelected');
	
	$('#passwordBox').css('display', 'none');
	$('#listPassword').removeClass('uberItemSelected');
	
	$('#addBusinessBox').css('display', 'none');
	
	$('.uberMenuItems').fadeOut('slow');
}
