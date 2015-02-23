/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
arrayHotelsTest = TestCase("arrayHotelsTest");

arrayHotelsTest.prototype.testOriginalData = function ()
{
    var x =  JSON.parse(JSON.stringify(hotels));
    assertEquals(true, arrayIsHotels(x));
};

arrayHotelsTest.prototype.testSortedData = function ()
{var x =  JSON.parse(JSON.stringify(hotels));
            var hotelsNameOrder = orderHotels(x, sortByName);
    assertEquals(true, arrayIsHotels(hotelsNameOrder));
};

