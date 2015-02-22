/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
displayDataTest = TestCase("displayDataTest");

displayDataTest.prototype.testDispDataEmptyString = function ()
{
    assertEquals("", displayData(""));
};

displayDataTest.prototype.testDispDataNoneString = function ()
{
    assertEquals("", displayData(55));
};

displayDataTest.prototype.testDispDataIncorrectString = function ()
{
    assertEquals("", displayData("fsdfsdf"));
};

displayDataTest.prototype.testDispDataReturnsSomethingWithRealData = function ()
{
    assertNotEquals("", displayData(hotels));
};


