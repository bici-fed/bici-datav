var Cookie = /** @class */ (function () {
    function Cookie() {
    }
    Cookie.get = function (name) {
        var arr;
        var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
        if ((arr = document.cookie.match(reg))) {
            return decodeURIComponent(arr[2]);
        }
        else {
            return '';
        }
    };
    // options: {
    //   expires?:number,
    //   path?:string,
    //   domain?:string
    // }
    Cookie.set = function (name, value, options) {
        var myWindow = window;
        var cookieStr = myWindow.escape(name) + '=' + myWindow.escape(value) + ';';
        if (!options) {
            options = {};
        }
        if (options.expires) {
            var dtExpires = new Date(new Date().getTime() + options.expires * 1000 * 60 * 60 * 24);
            cookieStr += 'expires=' + dtExpires.toUTCString() + ';';
        }
        if (options.path) {
            cookieStr += 'path=' + options.path + ';';
        }
        if (options.domain) {
            cookieStr += 'domain=' + options.domain + ';';
        }
        document.cookie = cookieStr;
    };
    // options: {
    //   path?:string,
    //   domain?:string
    // }
    Cookie.delete = function (name, options) {
        if (Cookie.get(name)) {
            if (!options) {
                options = {};
            }
            options.expires = -1;
            Cookie.set(name, '', options);
        }
    };
    return Cookie;
}());
export { Cookie };
//# sourceMappingURL=cookie.js.map