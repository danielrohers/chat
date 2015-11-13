;(function (window, document, undefined) {

  'use strict';

  var Post = (function () {

    var _new = function (message) {
      
      var content = document.createElement('p');
      content.innerHTML = message;

      var description = document.createElement('div');
      description.classList.add('post-description');
      description.appendChild(content);

      var post = document.createElement('section');
      post.classList.add('post');
      post.appendChild(description);

      return post;

    };

    return {

      new: _new

    }

  })();

  window.post = Post;

})(window, document);