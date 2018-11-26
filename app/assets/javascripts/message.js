$(document).on('turbolinks:load', function(){
   function buildHTML(message){
     var insertImage = (message.image)? '<img class="lower-message__image" src="${message.image}">' : "";
     var html =
      `<div class = "message" "message_id = ${message.id}">
          <div class="upper-message">
            <div class="upper-message__user-name">${message.user_name}</div>
            <div class="upper-message__date">${message.date}</div>
          </div>
          <div class="lower-message">
            <div class="lower-message__content">${message.content}</div>
            ${insertImage}
          </div>
        </div>`
     return html;
  }

$('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.message').append(html);
      $('.message').animate({scrollTop: $('.message')[0].scrollHeight}, 'fast');
      $('form')[0].reset();
    })
    .fail(function(){
      alert('error');
    })
    .always(function(){
      $('.form__submit').prop('disabled',false);
    });
  });
});

