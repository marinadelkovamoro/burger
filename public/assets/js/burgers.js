// jQuery based on on."Click"

// ajax call --> "PUT"

$(function () {
    $(".change-devoured").on("click", function (event) {
        var id = $(this).data("id");
        var newStatus = $(this).data;

        var newDevouredStatus = {
            devoured: 1
        };

        // Send the PUT request.
        $.ajax("/burger/" + id, {
            type: "PUT",
        }).then(
            function () {
                console.log("changed to eaten", newStatus);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});
