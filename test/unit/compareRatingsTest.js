/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

compareRatingsTest = TestCase("compareRatingsTest");

compareRatingsTest.prototype.testDispDataEmptyString = function ()
{
    assertEquals("", orderHotels("", compareStarRating));
};

compareRatingsTest.prototype.testResultIsHotel = function ()
{
        result = orderHotels(hotels, compareStarRating);
    assertEquals(true, isHotel(result[0]));
};


compareRatingsTest.prototype.testDispDataEmptyString = function ()
{   
    result = orderHotels(hotels, compareStarRating);
    assertEquals("hotelone", result[0].Name);
};


