mapboxgl.accessToken = 'pk.eyJ1Ijoicmlhbm5hc2Ftc29uIiwiYSI6ImNtaGEwZmw3MDBoMmQyaXB5YWtuOTRxYXQifQ.4UKVovVdhn3VLZFlhi5AJA';

const map = new mapboxgl.Map({
  container: 'map', // this is the container ID that we set in the HTML
  style: 'mapbox://styles/riannasamson/cmhbasxge001701rg0iahd4tr', // Your Style URL goes here
  center: [-122.27, 37.8], // starting position [lng, lat]. Note that lat must be set between -90 and 90. You can choose what you'd like.
  zoom: 9 // starting zoom, again you can choose the level you'd like.
    });

map.on('load', function() {
  map.addSource('points-data', {
          type: 'geojson',
          data: 'https://raw.githubusercontent.com/riannasamson/BAHA-Map/refs/heads/main/data/183data.geojson'
      });

      map.addLayer({
        id: 'points-layer',
        type: 'circle',
        source: 'points-data',
        paint: {
            'circle-color': '#4264FB',
            'circle-radius': 6,
            'circle-stroke-width': 2,
            'circle-stroke-color': '#ffffff'
        }
    });
});
