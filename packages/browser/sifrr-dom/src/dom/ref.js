// based on https://github.com/Freak613/stage0/blob/master/index.js

const TREE_WALKER = window.document.createTreeWalker(window.document, window.NodeFilter.SHOW_ALL, null, false);
const { HTML_ATTR } = require('./constants');

function isHtml(el) {
  return el.hasAttribute && el.hasAttribute(HTML_ATTR);
}

TREE_WALKER.nextNonfilterNode = function(node, isSifrrElement) {
  if (!isSifrrElement) {
    return this.nextNode();
  } else {
    if (isHtml(node)){
      node = this.nextSibling() || (this.parentNode(), this.nextSibling());
    } else node = this.nextNode();
    return node;
  }
};

TREE_WALKER.roll = function(n, isSifrrElement) {
  let node = this.currentNode;
  while(--n) {
    node = this.nextNonfilterNode(node, isSifrrElement);
  }
  return node;
};

function collect(element, stateMap, isSifrrElement = true) {
  const refs = [], l = stateMap.length;
  TREE_WALKER.currentNode = element;
  for (let i = 0; i < l; i++) {
    refs.push(TREE_WALKER.roll(stateMap[i].idx, isSifrrElement));
  }
  return refs;
}

function create(node, fxn, isSifrrElement = true) {
  let indices = [], ref, idx = 0;
  TREE_WALKER.currentNode = node;
  while(node) {
    // eslint-disable-next-line no-cond-assign
    if (ref = fxn(node, isHtml, isSifrrElement)) {
      indices.push({ idx: idx+1, ref });
      idx = 1;
    } else {
      idx++;
    }
    node = TREE_WALKER.nextNonfilterNode(node, isSifrrElement);
  }

  return indices;
}

module.exports = {
  collect,
  create
};
