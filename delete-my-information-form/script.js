document
  .getElementById("delete-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var email = document.getElementById("email").value.trim();
    var fullName = document.getElementById("full-name").value.trim();
    var details = document.getElementById("details").value.trim();

    var bodyLines = [
      "I am requesting deletion of my personal information under GDPR.",
      "",
      "Email: " + email,
    ];
    if (fullName) {
      bodyLines.push("Full name: " + fullName);
    }
    if (details) {
      bodyLines.push("", "Additional details:", details);
    }

    var subject = encodeURIComponent("Data Deletion Request");
    var body = encodeURIComponent(bodyLines.join("\n"));

    window.location.href =
      "mailto:privacy@securifyapp.com?subject=" +
      subject +
      "&body=" +
      body;
  });
