/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
functionsTest = TestCase("functionsTest");

functionsTest.prototype.dispDataEmptyString = function()
{
    assertEquals("", displayData(""));
};

functionsTest.prototype.dispDataNoneString = function()
{
    assertEquals("", displayData(55));
};

functionsTest.prototype.dispDataIncorrectStringString = function()
{
    assertEquals("", displayData("fsdfsdf"));
};

functionsTest.prototype.dispDataReturnsSomethingWithRealData = function()
{
    assertNotEquals("", displayData(hotels));
};


