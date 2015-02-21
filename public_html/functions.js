/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function displayData(hotels) 
{
    if (typeof hotels != [])
        return "";
    var arrayOfResults = new Array();
    
    for(i = 0; i < hotels.length; i++)
    {    
        var stringToReturn = "<table align='top' >";
        stringToReturn += "<tr><td>Name</td><td>" + hotels[i].Name.toString() + "</td></tr>"; 
        stringToReturn += "<tr><td>Star Rating</td><td>" + hotels[i].StarRating.toString() + "</td></tr>";

        var facilts = hotels[i].Facilities;
        stringToReturn += "<tr><td>Facilities</td><td>";
        for(j = 0; j < facilts.length; j++)
            stringToReturn += facilts[j] + "<br>";
        stringToReturn += "</td></tr>";
        stringToReturn += "</table>";       
        arrayOfResults[i] = stringToReturn;
    } // for
       
    return arrayOfResults;
}
