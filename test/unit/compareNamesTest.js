/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

compareNamesTest = TestCase("compareNamesTest");

compareNamesTest.prototype.testEmptyString = function ()
{
    assertEquals(null, compareName(""));
};

compareNamesTest.prototype.testDifferentHotels = function ()
{
    assertEquals(-1, compareName(hotels[0], hotels[1]));
};

compareNamesTest.prototype.testSameHotels = function ()
{
    assertEquals(0, compareName(hotels[0], hotels[0]));
};
