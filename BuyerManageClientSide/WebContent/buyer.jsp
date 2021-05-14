
<%@page import="com.Buyer"%>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
   
	

<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Buyer Management</title>

<link rel="stylesheet" href="Views/bootstrap.min.css">
<script src="Components/jquery-3.2.1.min.js"></script>
<script src="Components/buyer.js"></script>

</head>
<body>
	<div class="container"> 
 		<div class="row">
 			<div class="col-8"> 
 				<h1 class="m-3">Buyer's Buying Details</h1> 
 				<form id="formBuyer">
 				
 				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
 						<span class="input-group-text" id="byrName">Buyer Id: </span>
					</div>
					<input type="text" id="txtid" name="txtid">
				</div>
	
	
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
			 			<span class="input-group-text" id="byrName">Buyer Name: </span>
					</div>
					<input type="text" id="txtname" name="txtname">
				</div>
	
	
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
			 			<span class="input-group-text" id="byrName">Product Name: </span>
					</div>
					<input type="text" id="txtpname" name="txtpname">
				</div>
	
	
				<div class="input-group input-group-sm mb-3">
					<div class="input-group-prepend">
			 			<span class="input-group-text" id="byrName">Quentity: </span>
					</div>
					<input type="text" id="txtquentity" name="txtquentity">
				</div>
				
				<br>
	
				<input id="btnSave" name="btnSave" type="button" value="Save & Order" class="btn btn-primary">
				<input type="hidden" id="hidBuyerIDSave" name="hidBuyerIDSave" value="">
				
				<input id="btnUpdate" name="btnUpdate" type="button" value="Update" class="btn btn-primary">
				
				<input id="btnDelete" name="btnDelete" type="button" value="Delete" class="btn btn-primary">

 				 
 				</form>
 				
 				<div id="alertSuccess" class="alert alert-success"></div>
				
				
				<div id="alertError" class="alert alert-danger"></div>
				
				<br>
				
				<div id="divBuyerGrid">
					 <%
					 Buyer buyerObj = new Buyer(); 
					 out.print(buyerObj.readBuyerData()); 
					 %>
				</div>
				
				
 				
 			</div>
 		</div>
 
 <br> 
 
 
 	<div class="row">
		<div class="col-12" id="colBuyer">
 
		</div>
	</div>
	
	</div>
	
</body>
</html>