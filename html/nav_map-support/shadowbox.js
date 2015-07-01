var lastwidth, lastheight;
window.onresize = function()
		{
			var curwinsize = new WindowSize;
			if ((lastwidth != curwinsize.X) || (lastheight != curwinsize.Y)) {
				resizeShadowBox(curwinsize);
			}
			lastwidth = curwinsize.X; lastheight = curwinsize.Y;
		}


function getWindowWidth()
{
	return window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth;
}

function getWindowHeight()
{
	return window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : document.body.clientHeight;
}

function WindowSize()
{
	this.X = getWindowWidth();
	this.Y = getWindowHeight();
}

function repositionShadowBox(curwinsize)
{
	var elem = document.getElementById('shadowbox')
	if(elem)
	{
  	  elem.style.left = (curwinsize.X/2) - (document.getElementById('shadowbox').offsetWidth/2) + "px";
	  elem.style.top = (curwinsize.Y/2) - (document.getElementById('shadowbox').offsetHeight/2) + "px";
	}
}

function resizeShadowBox(curwinsize)
{
  var float_page = document.getElementById('float_page');
  if(float_page)
  {
	float_page.style.width = curwinsize.X - 100 + "px";
	float_page.style.height = curwinsize.Y - 100 + "px";
	repositionShadowBox(curwinsize);
  }
}

function showShadowBox(id) 
{
	var shadowbox = document.getElementById('shadowbox');
	if(shadowbox)
	{
	  shadowbox.style.height = '';

	  var content = '<div></div><div id="close">X</div><iframe id="float_page" src=""></iframe>';
	   content = '<div></div><div id="close">X</div><iframe id="float_page" src="' + getContentSrc(id) + '"></iframe>';

	  shadowbox.innerHTML = content;
  	  shadowbox.style.display = 'block';
	  document.getElementById('dimmer').style.display = 'block';

	  var curwinsize = new WindowSize;
	  resizeShadowBox(curwinsize);
	}
}
