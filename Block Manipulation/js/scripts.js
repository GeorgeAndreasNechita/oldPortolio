let block1 = document.querySelector('.block1')

document.querySelector('#pos-y').addEventListener('mousemove',function(){
		// document.getElementById('p1').innerHTML = this.value;
		document.querySelector('.block1').style.top = this.value + 'px';
});

document.querySelector('#pos-x').addEventListener('mousemove',function(){
	document.querySelector('.block1').style.left = this.value +'%';
	document.querySelector('#p1').innerHTML = this.value;
});
document.querySelector('#size').addEventListener('mousemove',function(){
	document.querySelector('.block1').style.transform = "scale("+(this.value/100)+")";
	document.querySelector('#p1').innerHTML = this.value / 100;
});
document.querySelector('#opacity').addEventListener('mousemove',function(){
	document.querySelector('.block1').style.opacity = this.value/100
})

document.querySelector('#shape-election').addEventListener('click',function(){
	let option = document.querySelector('#shape-election').value;
	if(option == 'Square'){
			document.querySelector('.block1').style.borderRadius = '0';
			document.querySelector('.block1').style.transform = 'rotate(0deg)';
	}
	else if(option == 'Circle'){
			document.querySelector('.block1').style.borderRadius = '50%';
	}
	else if(option == 'Rhombus'){
			document.querySelector('.block1').style.borderRadius = '0'
			document.querySelector('.block1').style.transform = 'rotate(45deg)';
	}	
})
document.querySelector('#hex-text').addEventListener('keypress',function(event){
	if (event.which == '13'){
		document.querySelector('.block1').style.background = '#' + this.value;
	}
})

						// RGBA

function rgbaSlider(sliderColor){
	document.getElementById(sliderColor).onmousemove = function(){
		// Detect the color value
	let red = parseInt(document.querySelector('#red').value)
	let green = parseInt(document.querySelector('#green').value)
	let blue = parseInt(document.querySelector('#blue').value)
	let opacity2 = parseInt(document.querySelector('#opacity2').value) / 100
	// Apply the background to the block that is being manipulated
	block1.style.background = (`rgba(${red},${green},${blue},${opacity2})`)

	// Variable that transforms a rgb value to hex 
	var rgbToHex = function (rgb) { 
	  var hex = Number(rgb).toString(16);
	  if (hex.length < 2) {
	       hex = "0" + hex;
	  }
	  return hex;
	};
	// Transforming the 3 rgb values to a single HEX value and assigning it to the HEX input 
	document.querySelector('#hex-text').value = (rgbToHex(red)+rgbToHex(green)+rgbToHex(blue))	
	}

}

rgbaSlider('red')
rgbaSlider('green')
rgbaSlider('blue')
rgbaSlider('opacity2')



