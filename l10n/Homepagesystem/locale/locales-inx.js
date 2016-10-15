
var inc = '5:'+module.directory+ frdl.getLang() + '-inx0.js';
try{
 exports = require(inc);	
}catch(err){
	if(0<frdl.debug.mode())console.warn(err);
}
