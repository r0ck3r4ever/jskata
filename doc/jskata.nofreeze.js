h1. jsKata.nofreeze

p. jsKata.nofreeze avoids freezing by splitting long processes into smaller ones.

h2. Properties

*sleepFor* integer (default 1) : How many milliseconds should it sleeps 
*chunkSize* integer (default 10) : How many executions before sleep
*stops* integer (default 10) : How many executions before sleep
*stops* [functions] : Contains all the stop functions started in a different threads

h2. Functions

h3. for(wh, inc, fct, options*) returns [stop]

*wh* function (should return boolean) : The while condition
*inc* function : The increment
*fct* function : The function to execute
*options* hash of [sleepFor|chunkSize] : To override defaults
*stop* function : Call this function to stop the thread

This function looks like the basic _for_ except that _wh_ and _inc_ are functions. Instead of 

bc.. for(var i = 0; i < 1000; i++) {
  alert(i);
}

p. you write

bc.. var i = 0;
jsk.responsive.for(
  function() {return i < 1000}, 
  function() {i++},
  function() {alert(i)}
)

h3. infinite(fct, options*) returns [stop]

*fct* function : The function to execute
*options* hash of [sleepFor|chunkSize] : To override defaults
*stop* function : Call this function to stop the thread

Starts an infinite loop.

h3. stop()

Stop all the processes

h2. Callbacks

_no callbacks_

