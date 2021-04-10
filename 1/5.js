function RoadRadar(speed, area){
    let motorway  =130;
    let interstate = 90;
    let city = 50;
    let residential = 20; 
    if(area == "motorway"){
        if(speed > motorway){
            let diff = speed-motorway;
            if(diff <=20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - speeding`);
                return;
            }
            if(diff <=40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - excessive speeding`);
                return;
            }
            if(diff>40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${motorway} - reckless driving`);
                return;
            }
        }
        else{
           console.log(`Driving ${speed} km/h in a ${area} zone`);
        }
    }
    if(area == "interstate"){
        if(speed > interstate){
            let diff = speed-motorway;
            if(diff <=20){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - speeding`);
                return;
            }
            if(diff <=40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - excessive speeding`);
                return;
            }
            if(diff>40){
                console.log(`The speed is ${diff} km/h faster than the allowed speed of ${interstate} - reckless driving`);
                return;
            }
        }
        else{
           console.log(`Driving ${speed} km/h in a ${area} zone`);
        }      
    }
}
    
