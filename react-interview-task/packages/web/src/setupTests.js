// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

beforeEach(() => {
  document.body.innerHTML = `
    <style>
      #root {
        margin: 0 auto;
        width: 720px;
      }
    </style>
    <div id="root" />
  `;
})

// add missing `offsetWidth` property
Object.defineProperties(window.HTMLElement.prototype, {
  offsetLeft: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).marginLeft) || 0;
    },
  },
  offsetTop: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).marginTop) || 0;
    },
  },
  offsetHeight: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).height) || 0;
    },
  },
  offsetWidth: {
    get: function() {
      return parseFloat(window.getComputedStyle(this).width) || 0;
    },
  },
});
