$("#size").hide();
$("#state").hide();
var placeArray = (window.location.pathname).split("/");
var vendorId = placeArray.slice(-1)[0];

// All "Accept" buttons have a vendor-id that matches the vendorId
$(".vendorAcceptBtn").attr("vendor-id", vendorId);

//When any "Accept" button is clicked...
$(".vendorAcceptBtn").on("click", function () {

  var vendorId = $(this).attr("vendor-id");
  var eventId = $(this).attr("event-id");
  var eventUpdate = {
    vendorid: vendorId,
    eventid: eventId
  };

  $.ajax("/api/event/" + eventId + "/" + vendorId, {
    type: "PUT",
    data: eventUpdate
  }).always(function () {
    window.location.reload();
  });
});

// IF THE MORE INFO BUTTON IS CLICKED
// grab the data-id attr and change the window location to match
// /event/btnID/vendorID
$(".moreInfoBtn").on("click", function () {
  var btnID = ($(this).attr("data-id"));
  window.location.href = "/event/" + btnID +"/"+ vendorId;
});

// SEARCH INPUTS 
$("#category").on("change", function () {
  if ($("#category").val() === "size") {
    $("#size").show();
    $("#state").hide();
  }
  else if ($("#category").val() === "state") {
    $("#state").show();
    $("#size").hide();
  }
});

$("#categorysize").on("change", function () {
  window.location.href = "/events/size/" + $("#categorysize").val() + "/" + vendorId + "";
});

$("#categorystate").on("change", function () {
  window.location.href = "/events/state/" + $("#categorystate").val() + "/" + vendorId + "";
});
