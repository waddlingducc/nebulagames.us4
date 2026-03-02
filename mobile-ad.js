(function() {
  if (window.innerWidth > 728) return;

  var container = document.createElement('div');
  container.id = 'mobile-sticky-ad';
  container.style.cssText = 'position:fixed;bottom:0;left:0;width:100%;z-index:999999;display:flex;justify-content:center;background:transparent;pointer-events:none;';

  var inner = document.createElement('div');
  inner.style.cssText = 'pointer-events:auto;';

  var adScript1 = document.createElement('script');
  adScript1.textContent = "atOptions = {'key':'c54e657c8c23d8157b2524fb92074aea','format':'iframe','height':50,'width':320,'params':{}};";

  var adScript2 = document.createElement('script');
  adScript2.src = 'https://creaturefeaturesmouse.com/c54e657c8c23d8157b2524fb92074aea/invoke.js';

  inner.appendChild(adScript1);
  inner.appendChild(adScript2);
  container.appendChild(inner);

  if (document.body) {
    document.body.appendChild(container);
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      document.body.appendChild(container);
    });
  }
})();
