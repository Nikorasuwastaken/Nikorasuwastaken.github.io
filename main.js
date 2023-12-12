function hidey() {
  if (
    document.getElementById("jsInput").value.startsWith("http://") ||
    document.getElementById("jsInput").value.startsWith("https://")
  ) {
    var url = document.getElementById("jsInput").value;
  } else {
    var url = "http://" + document.getElementById("jsInput").value;
  }
  var a = window.open("about:blank", "_blank");
  a.document.documentElement.innerHTML =
    `
      <!DOCTYPE html>
      <html>
          <head>
              <title>Classes</title>
              <link rel="icon" type="image/png" href="https://https://resources.finalsite.net/images/f_auto,q_auto,t_image_size_1/v1605724037/k12albemarleorg/pxew6ig1yrz0zsgw5qet/schoologyicon.jpg">
          </head>
          <body style="margin: 0">
              <iframe height="100%" width="100%" src="` +
    url +
    `"frameborder="0" allowfullscreen></iframe>
          </body>
      </html>`;
}
