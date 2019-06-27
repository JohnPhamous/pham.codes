// @ts-nocheck
$(document).ready(function() {
  $("#file-form").submit(function() {
    $(this).ajaxSubmit({
      error: function(xhr) {
        alert("Error: " + xhr.status);
      },
      success: function(_response) {
        location.reload();
      }
    });
    return false;
  });
});
