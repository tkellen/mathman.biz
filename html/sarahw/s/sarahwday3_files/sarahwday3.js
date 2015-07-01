// Created by iWeb 3.0.4 local-build-20111108

function writeMovie1()
{detectBrowser();if(windowsInternetExplorer)
{document.write('<object id="id9" classid="clsid:02BF25D5-8C17-4B23-BC80-D3488ABDDC6B" codebase="http://www.apple.com/qtactivex/qtplugin.cab" width="300" height="185" style="height: 185px; left: 258px; position: absolute; top: 881px; width: 300px; z-index: 1; "><param name="src" value="Media/It%27s%20Raining%20Cookies.m4v" /><param name="controller" value="true" /><param name="autoplay" value="false" /><param name="scale" value="tofit" /><param name="volume" value="100" /><param name="loop" value="false" /></object>');}
else if(isiPhone)
{document.write('<object id="id9" type="video/quicktime" width="300" height="185" style="height: 185px; left: 258px; position: absolute; top: 881px; width: 300px; z-index: 1; "><param name="src" value="sarahwday3_files/It%27s%20Raining%20Cookies.jpg"/><param name="target" value="myself"/><param name="href" value="../Media/It%27s%20Raining%20Cookies.m4v"/><param name="controller" value="true"/><param name="scale" value="tofit"/></object>');}
else
{document.write('<object id="id9" type="video/quicktime" width="300" height="185" data="Media/It%27s%20Raining%20Cookies.m4v" style="height: 185px; left: 258px; position: absolute; top: 881px; width: 300px; z-index: 1; "><param name="src" value="Media/It%27s%20Raining%20Cookies.m4v"/><param name="controller" value="true"/><param name="autoplay" value="false"/><param name="scale" value="tofit"/><param name="volume" value="100"/><param name="loop" value="false"/></object>');}}
setTransparentGifURL('Media/transparent.gif');function applyEffects()
{var registry=IWCreateEffectRegistry();registry.registerEffects({stroke_0:new IWEmptyStroke()});registry.applyEffects();}
function hostedOnDM()
{return false;}
function onPageLoad()
{loadMozillaCSS('sarahwday3_files/sarahwday3Moz.css')
adjustLineHeightIfTooBig('id1');adjustFontSizeIfTooBig('id1');adjustLineHeightIfTooBig('id2');adjustFontSizeIfTooBig('id2');adjustLineHeightIfTooBig('id3');adjustFontSizeIfTooBig('id3');adjustLineHeightIfTooBig('id4');adjustFontSizeIfTooBig('id4');adjustLineHeightIfTooBig('id5');adjustFontSizeIfTooBig('id5');adjustLineHeightIfTooBig('id6');adjustFontSizeIfTooBig('id6');adjustLineHeightIfTooBig('id7');adjustFontSizeIfTooBig('id7');adjustLineHeightIfTooBig('id8');adjustFontSizeIfTooBig('id8');Widget.onload();fixAllIEPNGs('Media/transparent.gif');applyEffects()}
function onPageUnload()
{Widget.onunload();}
