# Psudocode for helligdags tæller

* Vi finder ud af tiden ved at kalde: "http://worldtimeapi.org/api/ip" Den finder tiden ud fra vores ip lokation.

* Vi kalder så: "https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2023" 

* Vi finder derefter ud af ved at sammenligne datoerne for helligdagende med datoen i dag hvor lang tid der er til næste helligdag.



# API url
* https://holidayapi.com/v1/holidays?pretty&key=f56c3874-4a1c-401e-aeb9-0baee40626a6&country=DK&year=2023
* http://worldtimeapi.org/api/ip