/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function isHotel(hotel)
{
    return typeof(hotel) === "object" &&
          hotel.hasOwnProperty("Name") &&
          hotel.hasOwnProperty("StarRating") &&
          hotel.hasOwnProperty("Facilities");
}

function arrayIsHotels(hotels)
{
    if (hotels.length <= 0)
        return null;
    
    var returning = true;
    for (i = 0; i < hotels.length; i++)
        if (!isHotel(hotels[i]))
            returning = false;
    
    return returning;
}

/*
 * Takes an array of hotel objects and returns a HTML table representation of 
 * them. If it's not an array of hotel objects it will return an empty string.
 */
function displayData(hotels) 
{
    if (!arrayIsHotels(hotels))
        return "";
   
    var arrayOfResults = new Array();
    
    for(i = 0; i < hotels.length; i++)
    {    
        var stringToReturn = "        <div class=\"panel panel-default\">";
        stringToReturn += "<!-- Default panel contents -->";
        stringToReturn += "<div class=\"panel-heading\"><h3>" + hotels[i].Name  + "</h3></div>";
        stringToReturn += "<table class=\"table\" id=\"outputTable" + i + "\">";

        stringToReturn += "<tr><td><h4>" + hotels[i].StarRating + "*</h4>";
        
        
       
        stringToReturn += " </td></tr>";

        var facilts = hotels[i].Facilities;
        stringToReturn += "<tr><td><h4>Facilities</h4></td><td>";
        
        // tests for empty array
        if (facilts === null || (typeof facilts === 'undefined'))
           stringToReturn += "</td></tr>";
        else
        {
            for(j = 0; j < facilts.length; j++)
                stringToReturn += facilts[j] + "<br>";
            stringToReturn += "</td></tr>";
        }
   
        stringToReturn += "</table></div>";
        arrayOfResults[i] = stringToReturn;
    } // for
       
    return arrayOfResults;
}

function compareName(hotel1, hotel2)
{
    if(!isHotel(hotel1) || !isHotel(hotel2))
        return null;
    
    var name1 = hotel1.Name;
    var name2 = hotel2.Name;    
    
if ( name1 < name2 )
  return -1;
if ( name1 > name2 )
  return 1;
return 0;
}

function compareStarRating(hotel1, hotel2)
{
    if(!isHotel(hotel1) || !isHotel(hotel2))
        return null;
    
    var rating1 = hotel1.StarRating;
    var rating2 = hotel2.StarRating;    
    
return rating2 - rating1;
}



function orderHotels(hotels, comparator)
{
    hotels.sort(comparator);
    return hotels;
}

function sortByName(hotels)
{
        var hotelsNameOrder = orderHotels(hotels, compareName);
      
        //var data1 = displayData(hotelsNameOrder);
       
        return hotels;
}

function sortByRating(hotels)
{

    var hotelsRatingOrder = orderHotels(hotels, compareStarRating);        
    var data1 = displayData(hotelsRatingOrder);
    return hotels;
    
}

function removeInadequate(currentHotels, type)
{
    if (!arrayIsHotels(currentHotels))
        return null;
    
    for (i = 0; i < currentHotels.length; i++)
    {
        if (currentHotels[i].Facilities === null || currentHotels[i].Facilities === 'undefined')
        {     currentHotels.splice(i, 1); i--;}
        
        else
        {
           var arr = currentHotels[i].Facilities; var contains = false;
           
           for (j = 0; j < arr.length; j++)
               if (arr[j] === type)
                   contains = true;
           
           if (!contains)
           {     currentHotels.splice(i, 1); i--;}            
        } // else
    } // for
    
    return currentHotels;
} // function

function checkAndRemove(hotels)
{
    if (document.getElementById("carPark").checked === true)
        hotels = removeInadequate(hotels, "car park");
    
    if (document.getElementById("gym").checked === true)
        hotels = removeInadequate(hotels, "gym");
    
    if (document.getElementById("pool").checked === true)
        hotels = removeInadequate(hotels, "pool");
    
    return hotels;
}

var currentSort = "name";
var reverse = false;