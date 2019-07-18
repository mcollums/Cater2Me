// $(document).ready(function () {
    var placeArray = (window.location.pathname).split('/');
    var vendorId = placeArray.slice(-1)[0];
    console.log("VENDOR ID OUTSIDE CLICK FUNCTION: " + vendorId);

    //All "Accept" buttons have a data-id that matches the vendorId
    $(".vendorAcceptBtn").attr("data-id", vendorId);

    //When any "Accept" button is clicked...
    $(".vendorAcceptBtn").on("click", function () {
        console.log("VENDOR ID INSIDE THE CLICK FUNCTION: " + vendorId);
        console.log("I've been clicked");

        var eventId = $(this).attr('event-id');

        console.log("VENDOR ID: " + vendorId);
        console.log("EVENT ID: " + eventId);


        $.ajax("/api/event/" + eventId, {
            type: "PUT",
            data: vendorId
        }).then(function (res) {
            console.log("AJAX CALL CAME BACK");
            console.log(res);
        });
    });

    $(".moreInfoBtn").on("click", function () {
        console.log("I've been clicked");
        var btnID = ($(this).attr('data-id'));
        console.log(btnID);
        window.location.href = "/event/" + btnID;
    });

// });