function getTarget(e) {
  if (!e) {
    e = window.event;
  }
  return e.target || .srcElement;
}

function delete_items(e) {
  if (!e) {
    e = window.event;
  }
  var target, parentElement, grandParentElement;
  target = getTarget(e);
  parentElement = target.parentNode;
  grandParentElement = target.parentNode.parentNode;
  grandParentElement.removeChild(parentElement);
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}
if (el.addEventListener) {
  el.addEventListener('blur', function(e) {
    delete_item(e);
  }, false);
} else {
  el.attachEvent('onblur', function(e) {
    delete_item(e);
  });
}