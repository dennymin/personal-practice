const deliveryCosts = cost => (cost * 0.3) + 1.5;
const regularCosts = cost => cost * 0.3;
const receipt = (person, cost, del) => {
  let total = cost;
  if (del === true) {
    total = deliveryCosts(cost);
  } else {
    total = regularCosts(cost);
  }
  console.log(`${person} please venmo me ${total}`)
}
const pals = ['Isaac', 'Paul', 'Heesoo'];
receipt(pals[0], (9.99 + 11.99 + 7.19));
receipt(pals[1], (9.99 + 13.18 + 4.59))
