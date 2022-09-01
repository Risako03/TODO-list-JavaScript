import "./styles.css";

const onClickAdd = () => {
  // to get text from the input box, and initialize
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// to delete element from incomplete list
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// function to add incomplete list
const createIncompleteList = (text) => {
  //create HTML DOM in JavaScript
  // to create div tag
  const div = document.createElement("div");
  div.className = "list-row";

  // to create <li> tag
  const li = document.createElement("li");
  li.innerText = text;

  // to create button tag
  const completeButton = document.createElement("button");
  completeButton.innerText = "complete";
  completeButton.addEventListener("click", () => {
    // delete <div> from incomplete list
    deleteFromIncompleteList(completeButton.parentNode);

    //to add Complete list
    const addTarget = completeButton.parentNode;

    // to get text of TODO
    const text = addTarget.firstElementChild.innerText;

    // to initialize below <div>
    addTarget.textContent = null;

    // to create <li> tag
    const li = document.createElement("li");
    li.innerText = text;

    // to create <button>
    const backButton = document.createElement("button");
    backButton.innerText = "return";

    // to return Incomplete list
    backButton.addEventListener("click", () => {
      //to delete <div> tag of return buttton from Complete list
      const deleteTarget = backButton.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget);

      //to get text of TODO
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    // to set each element as child element of div tag
    div.appendChild(li);
    div.appendChild(backButton);

    //to add incomplete list
    document.getElementById("complete-list").appendChild(div);
  });

  // to create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "delete";
  deleteButton.addEventListener("click", () => {
    // delete <div> from incomplete list
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // to set each element as child element of div tag
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //to add incomplete list
  document.getElementById("incomplete-list").appendChild(div);
};

// to click adding button
document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
