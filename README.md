# leaflet-earthquakes

This .js file utilizes GeoJson objects &amp; Leaflet.js to explore dynamic earthquake data every time the html file is served. The static .js makes an API call to USGS (United States Geological Survey) to load the most recent earthquakes within the last week with a magnitude of 2.5 or higher. 

From there, the .js file plots all the earthquakes on the leaflet map object by longitude and latitude. Each earthquake object is also adjusted by size according to its magnitude, and color based on its depth above or below sea level.

Each object displays its metadata when hovered over, including its coordinates, magnitude, and depth. 

Included is also a legend key to indicate the color of depth values 

While this code works, it will also be updated soon to include a geological tile and tectonic borders.


<img width="953" alt="Screen Shot 2023-05-27 at 10 16 29 AM" src="https://github.com/Phil-Mart/leaflet-earthquakes/assets/120279988/8ed58ab6-dafd-44e2-a7a5-7f0bf12ec39f">


To view this dynamic dashboard, simply open the .html on your local browser.
