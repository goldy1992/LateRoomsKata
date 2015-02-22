/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

orderByHotelsTest = TestCase("orderByHotelsTest");

orderByHotelsTest.prototype.testDispDataEmptyString = function ()
{
    assertEquals("", orderHotels("", compareName));
};

orderByHotelsTest.prototype.testResultIsHotel = function ()
{
        result = orderHotels(hotels, compareName);
    assertEquals(true, isHotel(result[0]));
};


orderByHotelsTest.prototype.testDispDataEmptyString = function ()
{   
    result = orderHotels(hotels, compareName);
    assertEquals("hotelone", result[0].Name);
};

