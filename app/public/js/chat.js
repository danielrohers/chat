;(function (window, document, undefined) {

  'use strict';

  var chat = io();

  var posts = document.querySelector('.posts');

  var form = document.querySelector('form');
  var slug = form.querySelector('#slug').value;

  chat.on('connect', function () {

    form.querySelector('#message').disabled = false;
    form.querySelector('button').disabled = false;

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var message = this.message.value;
      
      chat.emit('chat message', {
        slug: slug,
        message: message
      });
      
      this.reset();
    });

    chat.on(slug, function(message){
      posts.appendChild(post.new(message));
    });

  });

})(window, document);