// @ts-nocheck
$(document).ready(function() {
  $("#file-form").submit(function() {
    const uploadingPrompt = document.getElementById("uploading-prompt");
    const fileFormContainer = document.getElementById("file-form-container");

    uploadingPrompt.style.display = "block";
    fileFormContainer.style.display = "none";
    $(this).ajaxSubmit({
      error: function(xhr) {
        alert("Error: " + JSON.stringify(xhr));
        uploadingPrompt.style.display = "none";
        fileFormContainer.style.display = "block";
      },
      success: function(_response) {
        location.reload();
      }
    });
    return false;
  });
});
