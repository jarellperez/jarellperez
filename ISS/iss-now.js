<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title>Demographics Test</title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v0.26.0/mapbox-gl.css' rel='stylesheet' />
    <style>
        body { margin:0; padding:0; }
        #map { position:absolute; top:0; bottom:0; width:100%; }
        .legend {
    background-color: #343332;
    border-radius: 3px;
    bottom: 30px;
    box-shadow: 0 1px 2px rgba(0,0,0,0.10);
    font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
    padding: 10px;
    position: absolute;
    right: 10px;
    z-index: 1;
    color: #989898;
}
.legend h4 {
    margin: 0 0 10px;
    color: #989898;
}
.legend div span {
    border-radius: 50%;
    display: inline-block;
    height: 20px;
    margin-right: 5px;
    width: 20px;

}
    </style>
</head>

    <div id='state-legend' class='legend'>
    <h4>Households with individuals under 18 years</h4>
    <div><span style='background-color: #253494'></span>100,000</div>
    <div><span style='background-color: #2c7fb8'></span>50,000</div>
    <div><span style='background-color: #41b6c4'></span>10,000</div>
    <div><span style='background-color: #7fcdbb'></span>5,000</div>
    <div><span style='background-color: #c7e9b4'></span>1,000</div>
    <div class='pad1 section clearfix'>
    <span class='small uppercase label strong'>Visualization</span>
    <div><button type ='radio' onclick="tilt()">2d</button>
        <button onclick="tiltb()">3d</button></div>
    </div>
    <h5>*Styled by Census Block</h5>
</div>

<body>
<div id='map'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiamFyZWxscGVyZXoiLCJhIjoiY2lyMmR4a3dyMDJ6bGZrbTgzNjZuajluZCJ9.k4HQw3aoAkOkNssgnjRJUg';
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/basic-v9',
    zoom: 6,
    center: [-78.6569, 37.4316],
});

map.on('load', function () {
    map.addSource('Virginia', {
        type: 'vector',
        url: 'mapbox://jarellperez.9234scl1'
    });
    map.addLayer({
        "id": "Virginia",
        "type": "fill",
        "source": "Virginia",
        "source-layer": "DP-bmjaqy",
        "layout": {
           visibility: 'visible'
        },
        "paint": {
            'fill-color': {
              property: 'DP0140001',
              stops: [[1000, '#c7e9b4'], [5000, '#7fcdbb'], [10000, '#41b6c4'], [50000, '#2c7fb8'], [100000, '#253494']]
            },
            'fill-antialias': true,
            'fill-opacity': 0.90,
            'fill-extrude-base': 0

        },
        })
    });
// map tilt functionality
  function tilt() {
      map.easeTo ({
          pitch: ('0')
      })
      map.setPaintProperty('Virginia', 'fill-extrude-height',
        {
            'type': 'identity',
            'property': ''
        });
      }

  function tiltb() {
      map.easeTo ({
          pitch: ('90')
      })
      map.setPaintProperty('Virginia', 'fill-extrude-height',
        {
            'type': 'identity',
            'property': 'DP0140001'
        })
  };
</script>

</body>
</html>
