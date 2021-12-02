let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count ;
  countEl.textContent= 0;


  if(count<8){

      let number = document.createElement('p')
      number.className = 'previous-day-red'
      number.innerHTML = `${countStr}`

      let div = document.querySelector('div.previous-day')
      div.appendChild(number)
  }

  else if(count>=8){

    let number = document.createElement('p')
      number.className = 'previous-day-green'
      number.innerHTML = `${countStr}`

      let div = document.querySelector('div.previous-day')
      div.appendChild(number)
}
  count = 0;
}
