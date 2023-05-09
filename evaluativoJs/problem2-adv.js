const timeFromTheThird = () => {
  const months = [
    "Enero",
    "Febreor",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
 
  //establish the current date as well as the date of the world cup win.
  let third = new Date("December 18, 2022 14:00:00");
  let now = new Date();
 
  //for ease of display assign the days and months to each value.
  const day = days[third.getDay()];
  const month = months[third.getMonth()];
  
  //calculate the difference in milliseconds between the dates.
  let difference = now.getTime() - third.getTime();
  
  //finally translate the days, hours and minutes from millisecond to their respective unit and display the message.
  let totalDays = Math.floor(difference / (1000 * 60 * 60 * 24));
  let totalHours = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  let totalMinutes = Math.floor((difference % (1000 * 60)) / (1000 * 60));
  
  return `Pasaron ${totalDays} dias, ${totalHours} horas y ${totalMinutes} minutos desde el ${day}, ${third.getDate()} de ${month} de ${third.getFullYear()}`;
};
