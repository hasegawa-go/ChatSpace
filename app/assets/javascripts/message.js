$(document).on('turbolinks:load', function(){
   function buildHTML(message){
     // var messageContent = message.content ? `<p class="lower-message__content">${message.content}</p>` : "";
     var insertImage = (message.image) ? `<img class="lower-message__image" src="${message.image}">` : "";
     var html =
      `<div class = "messages" data-message-id = ${message.id}>
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


// 自動更新

  var interval = setInterval(function() {
    var LastMsgId = $('.messages:last').data('message-id');
    console.log(LastMsgId);
    var messageUrl = location.href;

    if (window.location.href.match(/\/groups\/\d+\/messages/)) {
      $.ajax({
        url: window.location.href,
        type: "GET",
        data: { id: LastMsgId },
        dataType: "json"
      })

      .done(function(data){
        var insertHTML = ''
        data.forEach(function(message){
          insertHTML = buildHTML(message);
        // $('#upload-text').val('')
        $('.message').append(insertHTML);
        $('.messages').animate({scrollTop: $('.messages')[0].scrollHeight}, 'fast');
        $("#button").removeAttr("disabled");
        });
      })
      .fail(function(){
        alert("自動更新に失敗しました")
      })
    } else {
      clearInterval(interval);
    }
  }, 5000 );
});
