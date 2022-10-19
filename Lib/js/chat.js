$.ajax({
  type: "GET",
  url: "../Lib/php/sender.php",
  data: userDetails,

  success: function (response) {
    console.log(response);
  },
});

setInterval(() => {
  $.ajax({
    type: "GET",
    url: "../Lib/php/sender.php",
    data: userDetails,

    success: function (response) {
      console.log(response);
    },
  });
}, 500);

const userDetails = {
  name: "miguel",
  lastName: "orfao",
  email: "orfao.miguel@gmailicom",
};

$.ajax({
  type: "POST",
  url: "../Lib/php/chat.php",
  data: userDetails,

  success: function (response) {
    console.log(response);
  },
});
