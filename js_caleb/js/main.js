


{
  const container = document.querySelector('.movies-container');
  const seats = document.querySelectorAll('.row .seat:not(.occupied)');
  const movies = document.getElementById('movies-select');
  const count = document.getElementById('count');
  const total = document.getElementById('total');

  let ticketPrice = +movies.value;
  
  populateUI();
  
  // update total and count
  function updateSelectedCount(){
    const selectedSeat = document.querySelectorAll('.row .seat.selected');
    let selectedSeatCount = selectedSeat.length;
    ticketPrice *= selectedSeatCount;

    count.innerText = selectedSeatCount;
    total.innerText = ticketPrice;

    //store seat index to local storage

    let seatIndex = [...selectedSeat].map(function (seat){
      return [...seats].indexOf(seat);
    });

    localStorage.setItem('selectedSeatIndex', JSON.stringify(seatIndex));
  }
  //Add event listener to declared variables
  container.addEventListener('click', (event) =>{
    if (event.target.classList.contains('seat') && !event.target.classList.contains('occupied')) {
      event.target.classList.toggle('selected');
    }

    updateSelectedCount();
  });
  function setMoviesData(movieIndex, moviePrice){
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
  }
  // get data from local storage
  function populateUI(){
    let selectedSeat = JSON.parse(localStorage.getItem('selectedSeatIndex'));
    if(selectedSeat != null && selectedSeat.length> 0){
      seats.forEach((seat, index)=>{
        if(selectedSeat.indexOf(index) > -1){
          seat.classList.add('selected');
        }
      });
    }
    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex!= null){
      movies.selectedIndex = selectedMovieIndex;
    }
  }
  //Event listener to Movies Changed
  movies.addEventListener('change', (event)=>{
    ticketPrice= +event.target.value;
    setMoviesData(event.target.selectedIndex, event.target.value)
    updateSelectedCount();
  });

 updateSelectedCount();
}