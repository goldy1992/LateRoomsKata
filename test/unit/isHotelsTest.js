/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
isHotelTest = TestCase("isHotelTest");

isHotelTest.prototype.testDispDataEmptyString = function ()
{
    assertEquals(false, isHotel(""));
};

isHotelTest.prototype.testOriginalData = function ()
{
    assertEquals(true, isHotel(hotels[0]));
};

isHotelTest.prototype.testSortedData = function ()
{
    var hotelsNameOrder = orderHotels(hotels, compareName);
    assertEquals(true, isHotel(hotelsNameOrder[0]));
};

