/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
isAdequateTest = TestCase("isAdequateTest");

isAdequateTest.prototype.testMustHaveCarPark = function ()
{
    var result = removeInadequate(hotels, "car park");
    assertEquals(2, result.length);
};

isAdequateTest.prototype.testMustHavePool = function ()
{
    var result = removeInadequate(hotels, "pool");
    assertEquals(1, result.length);
};

