$(document).on('turbolinks:load', function(){
//      function buildHTML(message){
  // $(function(){
   function buildHTML(message){
     // var message_content = message.content ? `<p class="lower-message__content">${message.content)</p>` : "";
     var insertImage = (message.image)? '<img class="lower-message__image" src="${message.image}">' : "";
     var html =
      `<div class = "flex-message" "message_id = ${message.id}">
             <div class="upper-message">
               <div class="upper-message__user-name">${message.user_name}</div>
               <div class="upper-message__date">${message.date}</div>
             </div>
             <div class="lower-message">
               <div class="lower-message__content">${message.content}</div>
               ${insertImage}
             </div>
           </div>`;
     return html;
   }
    //   if ( message.image ) {
    //     var html =
    //      `<div class="message" data-message-id=${message.id}>
    //         <div class="upper-message">
    //           <div class="upper-message__user-name">
    //             ${message.user_name}
    //           </div>
    //           <div class="upper-message__date">
    //             ${message.date}
    //           </div>
    //         </div>
    //         <div class="lower-message">
    //           <p class="lower-message__content">
    //             ${message.content}
    //           </p>
    //         </div>
    //         <asset_path src=${message.image} >
    //       </div>`
    //     return html;
    //   } else {
    //     var html =
    //      `<div class="message" data-message-id=${message.id}>
    //         <div class="upper-message">
    //           <div class="upper-message__user-name">
    //             ${message.user_name}
    //           </div>
    //           <div class="upper-message__date">
    //             ${message.date}
    //           </div>
    //         </div>
    //         <div class="lower-message">
    //           <p class="lower-message__content">
    //             ${message.content}
    //           </p>
    //         </div>
    //       </div>`
    //     return html;
    //   };
    // }
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
       $('.form__submit').prop('disabled', false);
     })
     .fail(function(){
        alert('error');
      });
     .always(function(){
        $('.submit').prop("disabeled",false);
      })
  });
});

