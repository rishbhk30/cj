<button id="btn-0">Button 1</button>
  <button id="btn-1">Button 2</button>
  <button id="btn-2">Button 3</button>
  <p id="prize"></p>

  <script>
    const prizes = ['A Unicorn!', 'A Hug!', 'Fresh Laundry!']
    for (let btnNum = 0; btnNum < prizes.length; btnNum++) {
      //For each of our buttons when the user clicks it... 
      document.getElementById(`btn-${btnNum}`).onclick = () => {
        //Tell her what she's won!
        document.getElementById("prize").innerHTML = prizes[btnNum];
      }
    }
  </script>
  
  /* Solution: changing var in for loop to let */
