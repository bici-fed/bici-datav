import { Store } from '@bici-topology/store-utils';
export function createDiv(node) {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.outline = 'none';
    div.style.left = '-9999px';
    div.style.bottom = '-9999px';
    div.style.width = node.rect.width + 'px';
    div.style.height = node.rect.height + 'px';
    if (node.elementId) {
        div.id = node.elementId;
    }
    return div;
}
export function createLayerDiv(node) {
    var div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.outline = 'none';
    div.style.left = '-9999px';
    div.style.bottom = '-9999px';
    div.style.width = node.rect.width + 'px';
    div.style.height = node.rect.height + 'px';
    div.style.backgroundColor = "#ccc";
    if (node.elementId) {
        div.id = node.elementId + "-layer";
    }
    return div;
}
export function loadJS(url, callback, render) {
    var loaderScript = document.createElement('script');
    loaderScript.type = 'text/javascript';
    loaderScript.src = url;
    loaderScript.addEventListener('load', function () {
        if (callback) {
            callback();
        }
        // how to do
        if (render) {
            Store.set('LT:render', true);
        }
    });
    document.body.appendChild(loaderScript);
}
//# sourceMappingURL=dom.js.map