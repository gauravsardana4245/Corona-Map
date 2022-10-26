function updateMap() {
    console.log("updating map with real time data");
    fetch("data.json")
    .then((response)=> response.json())
    .then((res)=> { console.log(res.data)
    res.data.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;

        cases = element.infected;
        if(cases>255) {
            color= 'rgb(255, 0, 0)'
        }
        else {
            color= `rgb(${cases},0 ,0)`
        }

        // Mark on map
        new mapboxgl.Marker({
            draggable: false,
            color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
    })
    
        

}) 

}
let interval= 2000;
setInterval(updateMap, interval);
