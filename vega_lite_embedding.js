var AUS_Non_School_Qualifications = "Visualisations/AUS_Non_School_Qualifications.vg";
var AUS_Qualification_Relevancy = "Visualisations/AUS_Qualification_Relevancy.vg";

var VIC_School_Completion = "Visualisations/VIC_School_Completion.vg";
var VIC_School_Locations = "Visualisations/VIC_School_Locations.vg";
var VIC_School_retention_rates = "Visualisations/VIC_School_retention_rates.vg";

var WORLD_Country_Tertiary_Study_Rates = "Visualisations/WORLD_Country_Tertiary_Study_Rates.vg";
var WORLD_Region_Uneducation = "Visualisations/WORLD_Region_Uneducated.vg";


vegaEmbed("#vis-1a", VIC_School_Completion).then(function(result) {
}).catch(console.error);

vegaEmbed("#vis-1b", VIC_School_Locations).then(function(result) {
}).catch(console.error);

vegaEmbed("#vis-1c", VIC_School_retention_rates).then(function(result) {
}).catch(console.error);



vegaEmbed("#vis-2a", AUS_Non_School_Qualifications).then(function(result) {
}).catch(console.error);

vegaEmbed("#vis-2b", AUS_Qualification_Relevancy).then(function(result) {
}).catch(console.error);



vegaEmbed("#vis-3a", WORLD_Country_Tertiary_Study_Rates).then(function(result) {
}).catch(console.error);

vegaEmbed("#vis-3b", WORLD_Region_Uneducation).then(function(result) {
}).catch(console.error);

