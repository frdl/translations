Translation with µ.Flow

https://github.com/frdl/-Flow

Look at https://github.com/frdl/-Flow/blob/master/api-d/4/js-api/library.js/core/frdl.js
```` 
var LanguageOptionSelectors = [];
_.getLanguageOptionSelectors = function(){
   return LanguageOptionSelectors; 	
};

_.addLanguageOptionSelector = function(id){
   LanguageOptionSelectors.push(id);
   return this; 	
};

_.removeLanguageOptionSelector = function(id){
   LanguageOptionSelectors = frdl.filter(LanguageOptionSelectors, function(v,i){
   	  if(v !== id)return true;
   	  return false;
   	}, false);
   return this; 	
};

_.langstr = function(modul){
  getScript('http://api.webfan.de/api-d/4/js-api/library.js?plugin=locale-' + modul, function(){
     	
  },true);	
};

_.lang = function(langStrings){
 var languageStrings = langStrings;
 frdl.ready(function(){    
   frdl.getLanguageOptionSelectors()
     .forEach(function(element, ix, array){
         if( 'object' === typeof frdl.Dom.g(array[ix]) && null !== frdl.Dom.g(array[ix])
           && typeof $('#'+array[ix]).locale !== 'undefined'
         ){
	    	try{
	    	  		 $('#'+array[ix]).locale('loadLangs', languageStrings) ; 
	    	  		 $('#'+array[ix]).locale('translate', wUser.lang);
			}catch(err){
			  console.error(err);	
			}			
        } 	 	
	 });
  });	
};
```` 


Example:
```` 
    <ul id="selectLanguageDropdown3" class="localizationTool"  style="display:inline-block;"></ul>

   frdl.addLanguageOptionSelector('selectLanguageDropdown3');
   
```` 

 
 
