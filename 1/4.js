function TimeToWalk(steps,footprint,speedKmh) {
  const speed = speedKmh*1000/3600;
  const distance = steps*footprint;
  const rest = Math.floor(distance/500)*60; //2.6 - 2, 2.2-2
  const time = distance/speed +rest;
  const hours = Math.floor(time/60/60).toFixed(0).padStart(2,"0");
  const minutes = Math.floor((time-hours*3600)/60).toFixed(0).padStart(2,"0");
  const seconds = (time-hours*60*60-minutes*60).toFixed(0).padStart(2,"0");
  //console.log(time,hours, minutes,seconds);
  return `${hours}:${minutes}:${seconds}`;
}
console.log(TimeToWalk(2564, 0.70, 5.5));