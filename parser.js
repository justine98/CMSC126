var form = document.getElementById('url-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var uri = document.getElementById('uri-box').value;
    var uriParts = parseUri(uri);
    render(uriParts);
});

function render(uriParts) {
    document.getElementById('parts').className = '';
    for (var key in uriParts) {
        document.getElementById(key + '-value').innerHTML = uriParts[key];
    }
}

function parseUri(uri) {
    var uriParts = {
        scheme: '',
        authority: '',
        path: '',
        query: '',
        fragment: ''
    };

    var uriCopy = uri;
    uriParts.scheme = uriCopy.substring(0, uriCopy.indexOf("://"));
    uriCopy = uriCopy.substring(uriCopy.indexOf("://") + 3, uriCopy.length)
    uriParts.authority = uriCopy.substring(0, uriCopy.indexOf("/"));
    uriCopy = uriCopy.substring(uriCopy.indexOf("/") + 1, uriCopy.length);
    if(uriCopy.indexOf('?') < 0){
        uriParts.path = uriCopy.substring(0, uriCopy.indexOf("#"));
    } else {
        uriParts.path = uriCopy.substring(0, uriCopy.indexOf("?"));
    }
    if(uriParts.path == '' && uriCopy.indexOf('?') != 0 && uriCopy.indexOf('#') != 0){
        uriParts.path = uriCopy;
    } else {
        uriCopy = uriCopy.substring(uriCopy.indexOf("?") + 1, uriCopy.length);
        uriParts.query = uriCopy.substring(0, uriCopy.indexOf("#"));
        if(uriParts.query == '' && uriCopy.indexOf('#') != 0){
            uriParts.query = uriCopy;
        } else {
            uriCopy = uriCopy.substring(uriCopy.indexOf("#") + 1, uriCopy.length);
            uriParts.fragment = uriCopy;
        }
    }


    return uriParts;
}


function getScheme(uri) {
    var scheme = uri.substring(0, uri.indexOf("://"));

    return scheme;
}

function getAuthority(uri) {
    var authority = "authority"

    return authority;
}

function getPath(uri) {
    var path = "path";

    return path;
}

function getQuery(uri) {
    var query = "query";

    return query;
}

function getFragment(uri) {
    var fragment = "fragment";

    return fragment;
}