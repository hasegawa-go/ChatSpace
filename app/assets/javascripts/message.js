$(document).on('turbolinks:load', function(){
   function buildHTML(message){
     // var messageContent = message.content ? `<p class="lower-message__content">${message.content}</p>` : "";
     var insertImage = (message.image) ? `<img class="lower-message__image" src="${message.image}">` : "";
     var html =
      `<div class = "messages" "message_id = ${message.id}">
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
    // for(item of formData) console.log(item);
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
      $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
      $('#new_message')[0].reset();
      $('.form__submit').prop('disabled',false);
    })
    .fail(function(){
      alert('error');
    })
  })
});

