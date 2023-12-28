//So what is happening is that it is a recursive funciton and has to pop out a list of 60000 so what we can do is nest the function inside the if statement in a setTimeout funciton which will stop the stack overflow issue.

const list = new Array(60000).join('1.1').split('.');

function removeItemsFromList() {
  var item = list.pop();

  if (item) {
    setTimeout(() => {
      removeItemsFromList();
    }, 500);
  }
}

removeItemsFromList();
