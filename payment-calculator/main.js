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
receipt(pals[0], (13.10), true);
receipt(pals[1], (4.10), true);
