// DO NOT EDIT! This test has been generated by /html/canvas/tools/gentest.py.
// OffscreenCanvas test in a worker:2d.path.roundrect.radius.toomany
// Description:Check that roundRect throws an RangeError if radii has more than four items.
// Note:

importScripts("/resources/testharness.js");
importScripts("/html/canvas/resources/canvas-tests.js");

var t = async_test("Check that roundRect throws an RangeError if radii has more than four items.");
var t_pass = t.done.bind(t);
var t_fail = t.step_func(function(reason) {
    throw reason;
});
t.step(function() {

var offscreenCanvas = new OffscreenCanvas(100, 50);
var ctx = offscreenCanvas.getContext('2d');

assert_throws_js(RangeError, () => {ctx.roundRect(0, 0, 100, 50, [0, 0, 0, 0, 0])});
t.done();

});
done();
