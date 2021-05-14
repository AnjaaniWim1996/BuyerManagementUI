$(document).ready(function()
{ 
 	$("#alertSuccess").hide(); 
 	$("#alertError").hide(); 
});


// Save button
$(document).on("click", "#btnSave", function(event) 
{ 
	// Clear status msges-------------
	 $("#alertSuccess").text(""); 
	 $("#alertSuccess").hide(); 
	 $("#alertError").text(""); 
	 $("#alertError").hide(); 

	// Form validation----------------
	var status = validateBuyerForm(); 
	
	// If not valid-------------------
	if (status != true) 
	 { 
	 $("#alertError").text(status); 
	 $("#alertError").show(); 
	 return; 
	 } 

	// If valid------------------------
	var type = ($("#hidBuyerIDSave").val() == "") ? "POST" : "PUT"; 
	
 	$.ajax( 
 	{ 
		 url : "BuyerAPI", 
		 type : type, 
		 data : $("#formBuyer").serialize(), 
		 dataType : "text", 
		 complete : function(response, status) 
 		{ 
	
 			onItemSaveComplete(response.responseText, status); 
 		} 
 	}); 
});


// REMOVE==========================================
$(document).on("click", ".btnRemove", function(event)
{ 
	 $.ajax( 
	 { 
		 url : "BuyerAPI", 
		 type : "DELETE", 
		 data : "buyerID=" + $(this).data("buyerid"),
		 dataType : "text", 
		 complete : function(response, status) 
	 	{ 
	 		onBuyerDeleteComplete(response.responseText, status); 
	 	} 
		}); 
 });

//validate buyer data
function validateBuyerForm()
{ 
	// id
	if ($("#txtid").val().trim() == "") 
	{ 
	 	return "Enter buyer Id."; 
	}
	 
	// name
	if ($("#txtname").val().trim() == "") 
	{ 
	 	return "Enter buyer name."; 
	} 
	
	// product name
	if ($("#txtpname").val().trim() == "") 
	{ 
	 	return "Enter product name."; 
	}
	
	// quentity
	if ($("#txtquentity").val().trim() == "") 
	{ 
	 	return "Enter quentity."; 
	} 
	
	return true; 
}





// SAVE ============================================
$(document).on("click", "#btnSave", function(event) 
{ 
// Clear alerts---------------------
 $("#alertSuccess").text(""); 
 $("#alertSuccess").hide(); 
 $("#alertError").text(""); 
 $("#alertError").hide();
 
// Form validation-------------------
var status = validateBuyerForm(); 
if (status != true) 
 { 
	 $("#alertError").text(status); 
	 $("#alertError").show(); 
 return; 
 }
 
// If valid-------------------------
 $("#formBuyer").submit(); 
});


// UPDATE==========================================
$(document).on("click", ".btnUpdate", function(event)
{ 
	 $("#hidBuyerIDSave").val($(this).data("buyerid")); 
	 $("#buyerId").val($(this).closest("tr").find('td:eq(0)').text()); 
	 $("#buyerName").val($(this).closest("tr").find('td:eq(1)').text()); 
	 $("#productName").val($(this).closest("tr").find('td:eq(2)').text()); 
	 $("#quentity").val($(this).closest("tr").find('td:eq(3)').text()); 
});


// Buyer-MODEL================================================================
function validateBuyerForm() 
{ 
// BUYER ID
if ($("#buyerId").val().trim() == "") 
 { 
 return "Insert Buyer Id."; 
 }
 
// BUYER NAME
if ($("#buyerName").val().trim() == "") 
 { 
 return "Insert Buyer Name."; 
 }
 
// PRODUCT NAME-------------------------------
if ($("#productName").val().trim() == "") 
 { 
 return "Insert Product Name."; 
 } 

// QUENTITY-------------------------------
if ($("#quentity").val().trim() == "") 
 { 
 return "Insert Quentity."; 
 } 
  
return true; 
}


function onBuyerSaveComplete(response, status)
{ 

	if (status == "success") 
 	{ 
 		
		var resultSet = JSON.parse(response); 
		
 		if (resultSet.status.trim() == "success") 
 		{ 
			 $("#alertSuccess").text("Successfully saved."); 
			 $("#alertSuccess").show(); 
			 $("#divItemsGrid").html(resultSet.data);
		 
 		} 
		else if (resultSet.status.trim() == "error") 
 		{ 
 
			$("#alertError").text(resultSet.data); 
 			$("#alertError").show();
		 
 		} 
 	} 
	else if (status == "error") 
 	{
			 
		 $("#alertError").text("Error while saving."); 
		 $("#alertError").show();
	 
 	} 
	else
 	{
	 
		 $("#alertError").text("Unknown error while saving.."); 
		 $("#alertError").show(); 
	
 	}
 	
	$("#hidBuyerIDSave").val(""); 
 	$("#formBuyer")[0].reset();
 
}


function onBuyerDeleteComplete(response, status)
{ 
	
	if (status == "success") 
	{ 
	 	var resultSet = JSON.parse(response);
	 
	 	if (resultSet.status.trim() == "success") 
	 	{ 
			 $("#alertSuccess").text("Successfully deleted."); 
			 $("#alertSuccess").show(); 
			 $("#divBuyerGrid").html(resultSet.data); 
	 	} 
		else if (resultSet.status.trim() == "error") 
	 	{ 
			 $("#alertError").text(resultSet.data); 
			 $("#alertError").show(); 
	 	} 
	 } 
	 else if (status == "error") 
	 { 
		 $("#alertError").text("Error while deleting."); 
		 $("#alertError").show(); 
	 }
	 else
	 { 
		 $("#alertError").text("Unknown error while deleting.."); 
		 $("#alertError").show(); 
	 } 
}




