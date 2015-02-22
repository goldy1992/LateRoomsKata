/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
arrayHotelsTest = TestCase("arrayHotelsTest");

arrayHotelsTest.prototype.testOriginalData = function ()
{
    assertEquals(true, arrayIsHotels(hotels));
};

arrayHotelsTest.prototype.testSortedData = function ()
{
            var hotelsNameOrder = orderByHotelName(hotels);
    assertEquals(true, arrayIsHotels(hotelsNameOrder));
};

