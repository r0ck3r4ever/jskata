(function(){var a={breakingMonth:0,testMonth0Offset:null,testMonth6Offset:null,timeSepator:"",getDateOffset:function(b){return(new Date((new Date).getFullYear(),b,0)).getTimezoneOffset()},getMonth0Offset:function(){return a.testMonth0Offset!==null?a.testMonth0Offset:a.getDateOffset(a.breakingMonth)},getMonth6Offset:function(){return a.testMonth6Offset!==null?a.testMonth6Offset:a.getDateOffset(a.breakingMonth+6)},offsetToString:function(b,d){d=d||a.timeSeparator||"";var e=[],c=b/60;e.push(c>=0?"+":
"-");var f=Math.floor(Math.abs(c));e.push((f<=9?"0":"")+f);e.push(d);c=Math.abs(c%1)*60;e.push((c<=9?"0":"")+c);return e.join("")},testOffset:function(b,d){a.testMonth0Offset=b;a.testMonth6Offset=d},hasDst:function(){return a.st()!=a.dst()},invertedSt:function(){return Math.max(a.getMonth0Offset(),a.getMonth6Offset())},invertedDst:function(){return Math.min(a.getMonth0Offset(),a.getMonth6Offset())},st:function(){return 0-a.invertedSt()},stToString:function(b){return a.offsetToString(a.st(),b)},dst:function(){return 0-
a.invertedDst()},dstToString:function(b){return a.offsetToString(a.dst(),b)},iHateTheLastComma:true};if(typeof window.javascriptKataDotCom=="undefined")window.javascriptKataDotCom={};if(typeof window.jsKata=="undefined")window.jsKata=window.javascriptKataDotCom;if(typeof window.jsk=="undefined")window.jsk=window.javascriptKataDotCom;if(typeof window._=="undefined")window._=window.javascriptKataDotCom;window.javascriptKataDotCom.timezone=a;window.javascriptKataDotCom.tz=a})();
