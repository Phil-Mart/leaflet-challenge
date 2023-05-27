# leaflet-earthquakes

This .js file utilizes GeoJson objects &amp; Leaflet.js to explore dynamic earthquake data every time the html file is served. The static .js makes an API call to USGS (United States Geological Survey) to load the most recent earthquakes within the last week with a magnitude of 2.5 or higher. 

From there, the .js file plots all the earthquakes on the leaflet map object by longitude and latitude. Each earthquake object is also adjusted by size according to its magnitude, and color based on its depth above or below sea level.

While this code works, it will also be updated soon to include a geological tile and tectonic borders.

<img width="953" alt="Screen Shot 2023-05-27 at 10 13 11 AM" src="https://github.com/Phil-Mart/leaflet-earthquakes/assets/120279988/720f0e6d-6b10-467c-9cba-e30922ee17a2">
