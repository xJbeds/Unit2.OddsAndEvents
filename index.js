const state = {
  bank: [],
  odds: [],
  evens: [],
};

const appDiv = document.querySelector(`#app`);

appDiv.innerHTML = `
<h1>Odds and Events</h1>
<form>
  <label>Add a number to the bank</label>
  <input />
  <button>Add number</buttton>
  <button>Sort 1</button>
  <button>Sort All</button>
</form>

<h2>Bank</h2>
<output></output>

<h2>Odds</h2>
<output></output>

<h2>Evens</h2>
<output></output>

`;

// user types in to the input box
// we need to grab the form
// add the submit event listener to the form
// grab what the suer typed in
// store that bumber in the bank
// re-render the page

// const numbers = {
//   numberBank: [],
//   oddNumbers: [],
//   evenNumbers: [],
// };

// const addNumber = (Number) => {};

// const sortOne = () => {};

// const sortAll = () => {};

// const render = () => {};
