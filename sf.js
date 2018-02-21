var SF = {
  API: {
    getHTTP: function(url, params, callback, failure, type) {
      params = typeof params == 'undefined' ? {} : params;
      let ans = Object.keys(params).map(function(k) {
          return encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
        }).join('&'),
        noload = false;
      let http = new XMLHttpRequest(),
        lfres;
      http.onload = function() {
        if (http.status > 199 && http.status < 400) {
          let result = JSON.parse(http.responseText);
          if (typeof callback == "function") {
            callback(result);
          }
          return result;
        } else {
          if (typeof failure == "function") {
            failure(http.status);
          }
          return false;
        }
      };
      http.onerror = function(e) {
        if (!noload) {
          Console.log("Network Error, try again.");
        }
      };
      http.ontimeout = function(e) {
        if (!noload) {
          Console.log('Request timed out');
        }
      }
      http.onprogress = function(e) {
      }
      http.open(type, url + '?' + ans, true);
      http.setRequestHeader("accept", "application/json");
      http.send();
    },
    get: function(url, params, callback, failure) {
      return SF.API.getHTTP(url, params, callback, failure, "GET");
    },
    post: function(url, params, callback, failure) {
      return SF.API.getHTTP(url, params, callback, failure, "POST");
    },
    put: function(url, params, callback, failure) {
      return SF.API.getHTTP(url, params, callback, failure, "PUT");
    },
    delete: function(url, params, callback, failure) {
      return SF.API.getHTTP(url, params, callback, failure, "DELETE");
    }
  },
  loadCustomElement: function(elements) {
    forEach(elements, function(element){
      let link = document.createElement('link');
      link.rel = 'import';
      link.href = './elements/' + element + '.html';
      link.setAttribute('async', '');
      link.onload = function(e) {
        let proto = Object.create(HTMLElement.prototype);
        proto.createdCallback = function() {
          let template = link.import.querySelector('template');
          let clone = document.importNode(template.content, true);
          let root = this.createShadowRoot();
          root.appendChild(clone);
          let defaultBind = SF.defaultBind[element] ? SF.defaultBind[element] : {};
          let html = this.shadowRoot.innerHTML;
          this.dataset.originalHTML = html;
          SF.replaceBindData(this, defaultBind);
        };
        proto.attributeChangedCallback = function(attrName, oldVal, newVal) {
          if (attrName == "data-bind") {
            let html = SF.replaceBindData(this, {});
          }
        };
        document.registerElement(element, {prototype: proto});
      };
      link.onerror = function(e) {
        console.log(e);
      };
      document.head.appendChild(link);
    });
  },
  replaceBindData: function(target, data){
    target.dataset.bindOld = target.dataset.bindOld ? target.dataset.bindOld : "{}";
    target.dataset.bind = target.dataset.bind ? target.dataset.bind : "{}";
    Object.assign(data, JSON.parse(target.dataset.bindOld), JSON.parse(target.dataset.bind));
    let html = target.dataset.originalHTML;
    target.dataset.bindOld = JSON.stringify(data);
    for (let key in data) {
      let replaced = '#{bind.' + key + '}';
      html = html.replace(replaced, data[key]);
    }
    target.shadowRoot.innerHTML = html;
  },
  defaultBind: {}
}
var forEach = function(array, callback) {
  if (typeof array == 'object' && array != null && array) {
    for (var key in array) {
      if (array.hasOwnProperty(key) && array[key] && key != "length") {
        callback.call(array[i], array[key], key);
      }
    }
  } else if(array) {
    if (array.length < 1) {
      return false;
    }
    for (var i = 0; i < array.length; i++) {
      callback.call(array[i], array[i], i);
    }
  }
};