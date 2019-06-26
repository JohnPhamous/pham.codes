// @ts-nocheck
$(document).ready(function() {
  $("#file-form").submit(function() {
    $(this).ajaxSubmit({
      error: function(xhr) {
        status("Error: " + xhr.status);
      },
      success: function(response) {
        console.log(response);
        location.reload();
      }
    });
    return false;
  });
});
