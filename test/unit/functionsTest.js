/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
functionsTest = TestCase("functionsTest");

functionsTest.prototype.testDispDataEmptyString = function()
{
    assertEquals("", displayData(""));
};

functionsTest.prototype.testDispDataNoneString = function()
{
    assertEquals("", displayData(55));
};

functionsTest.prototype.testDispDataIncorrectStringString = function()
{
    assertEquals("", displayData("fsdfsdf"));
};

functionsTest.prototype.testDispDataReturnsSomethingWithRealData = function()
{
    assertNotEquals("", displayData(hotels));
};


