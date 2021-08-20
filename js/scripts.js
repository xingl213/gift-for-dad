// constants and helper functions
var all = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 
					'b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19', 'b20', 'b21', 'b22', 'b23', 'b24', 
					'p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 
					'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22', 'p23', 'p24'];
var blocks = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b7', 'b8', 'b9', 'b10', 'b11', 'b12', 
					'b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19', 'b20', 'b21', 'b22', 'b23', 'b24'];
var paragraphs = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p7', 'p8', 'p9', 'p10', 'p11', 'p12', 
					'p13', 'p14', 'p15', 'p16', 'p17', 'p18', 'p19', 'p20', 'p21', 'p22', 'p23', 'p24'];
function hide (element_id) {
	document.getElementById(element_id).style.display = 'none';
}
function show (element_id) {
	document.getElementById(element_id).style.display = 'block';
}
function hideall () {
	for (var i = 0; i < all.length; i++) {
		hide(all[i]);
	}
}
function showall () {
	for (var i = 0; i < all.length; i++) {
		show(all[i]);
	}
}
function settox (p_id, html) {
	document.getElementById(p_id).innerHTML = html;
}
function clearall () {
	for (var i = 0; i < paragraphs.length; i++) {
		settox(paragraphs[i], '');
	}
}

// display 1: hide all except <h1>
for (var i = 0; i < all.length; i++) {
	hide(all[i]);
	hide('words');
	hide('code');
	hide('end');
}

var click = 0;
// responses to clicking
function main () {
	click += 1;
	hide('instruction');
	if (click % 5 === 1) {	// display 2: after user click
		hide('words');
		hide('code');
		hide('end');
		clearall();
		show('placeholder');
		showall();
		settox('p8', '<span style="font-size: 6em; font-style: italic; font-weight: bold; color: white;">8</span>');
		settox('p9', '<span style="font-size: 6em; font-style: italic; font-weight: bold; color: white;">.</span>');
		settox('p10', '<span style="font-size: 6em; font-style: italic; font-weight: bold; color: white;">2</span>');
		settox('p11', '<span style="font-size: 6em; font-style: italic; font-weight: bold; color: white;">4</span>');
		document.querySelector('body').style.backgroundColor = 'black';
		var filling21 = ['b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'b13', 'b14', 'b15', 'b16', 'b17', 'b18'];
		for (var i = 0; i < filling21.length; i++) {
			document.getElementById(filling21[i]).style.backgroundColor = 'white';
		}
		var filling22 = ['b7', 'b8', 'b9', 'b10', 'b11', 'b12', 'b19', 'b20', 'b21', 'b22', 'b23', 'b24'];
		for (var i = 0; i < filling22.length; i++) {
			document.getElementById(filling22[i]).style.backgroundColor = 'black';
		}
	} else if (click % 5 === 2) {    // display 3: after user click
		clearall();
		var filling23 = ['p1', 'p2', 'p3', 'p4', 'p5', 'p6', 'p13', 'p14', 'p15', 'p16', 'p17', 'p18'];
		for (var i = 0; i < filling23.length; i++) {
			document.getElementById(filling23[i]).style.backgroundColor = 'none';
		}
		var filling24 = ['p7', 'p8', 'p9', 'p10', 'p11', 'p12', 'p19', 'p20', 'p21', 'p22', 'p23', 'p24'];
		for (var i = 0; i < filling24.length; i++) {
			document.getElementById(filling24[i]).style.backgroundColor = 'none';
		}
		document.querySelector('body').style.backgroundColor = 'cyan';
		var blocks3 = ['b3', 'b8', 'b10', 'b13', 'b17', 'b24'];
		for (var i = 0; i < blocks3.length; i++) {
			document.getElementById(blocks3[i]).style.backgroundColor = 'lightgreen';
			document.getElementById(blocks3[i]).style.border = 'lightyellow solid 5px';
			settox('p13', '<span style="font-size: 6em; color: black;">今</span>');
			settox('p8', '<span style="font-size: 6em; color: black;">天</span>');
			settox('p3', '<span style="font-size: 6em; color: black;">是</span>');
			settox('p10', '<span style="font-size: 6em; color: black;">你</span>');
			settox('p17', '<span style="font-size: 6em; color: black;">生</span>');
			settox('p24', '<span style="font-size: 6em; color: black;">日</span>');
		}
		var filling31 = ['b1', 'b5', 'b12', 'b15', 'b20', 'b22'];
		for (var i = 0; i < filling31.length; i++) {
			document.getElementById(filling31[i]).style.backgroundColor = 'purple';
		}
		var filling32 = ['b2', 'b4', 'b6', 'b7', 'b7', 'b9', 'b11', 'b14', 'b16', 'b18', 'b19', 'b21', 'b23'];
		for (var i = 0; i < filling32.length; i++) {
			document.getElementById(filling32[i]).style.backgroundColor = 'pink';
		}
	} else if (click % 5 === 3) {    // display 4: after user click
		clearall();
		document.querySelector('body').style.backgroundColor = 'darkblue';
		for (var i = 0; i < blocks.length; i++) {
			document.getElementById(blocks[i]).style.border = 'none';
		}
		settox('p7', '<span style="font-size: 6em; color: white;">祝</span>');
		settox('p13', '<span style="font-size: 6em; color: white;">老</span>');
		settox('p19', '<span style="font-size: 6em; color: white;">爸</span>');
		var filling41 = ['b1', 'b2', 'b8', 'b14', 'b20', 'b21', 'b22', 'b23', 'b24'];	
		for (var i = 0; i < filling41.length; i++) {
			document.getElementById(filling41[i]).style.backgroundColor = 'lightyellow';
		}
		var filling42 = ['b3', 'b4', 'b5', 'b6', 'b7', 'b9', 'b10', 'b11', 'b12', 'b13', 'b15', 'b16', 'b17', 'b18', 'b19'];
		for (var i = 0; i < filling42.length; i++) {
			document.getElementById(filling42[i]).style.backgroundColor = 'red';
		}
	} else if (click % 5 === 4) {    // display 5: after user click
		clearall();
		document.querySelector('body').style.backgroundColor = '#00cc00';
		var filling51 = ['b13', 'b14', 'b15', 'b16', 'b17', 'b18', 'b19', 'b24'];
		for (var i = 0; i < filling51.length; i++) {
			document.getElementById(filling51[i]).style.backgroundColor = 'darkgreen';
		}
		var filling52 = ['b20', 'b21', 'b22', 'b23'];
		for (var i = 0; i < filling52.length; i++) {
			document.getElementById(filling52[i]).style.backgroundColor = '#990033';    //darker red
		}
		var filling53 = ['b1', 'b3', 'b5', 'b8', 'b10', 'b12'];
		for (var i = 0; i < filling53.length; i++) {
			document.getElementById(filling53[i]).style.backgroundColor = '#ffff99';
		}
		var filling54 = ['b2', 'b4', 'b6', 'b7', 'b9', 'b11'];
		for (var i = 0; i < filling54.length; i++) {
			document.getElementById(filling54[i]).style.backgroundColor = 'fuchsia';
		}
		var filling55 = ['p1', 'p3', 'p5', 'p8', 'p10', 'p12'];
		for (var i = 0; i < filling55.length; i++) {
			document.getElementById(filling55[i]).style.backgroundColor = 'fuchsia';
		}
		var filling56 = ['p2', 'p4', 'p6', 'p7', 'p9', 'p11'];
		for (var i = 0; i < filling56.length; i++) {
			document.getElementById(filling56[i]).style.backgroundColor = '#ffff99';
		}
		settox('p20', '<span style="font-size: 6em; color: #ffff99;">生</span>');
		settox('p21', '<span style="font-size: 6em; color: #ff99ff;">日</span>');
		settox('p22', '<span style="font-size: 6em; color: #99ccff;">快</span>');
		settox('p23', '<span style="font-size: 6em; color: #ccff99;">乐</span>');
	} else {    // disaply 6: after user click
		hideall();
		document.getElementById('placeholder').style.display = 'none';
		document.querySelector('body').style.backgroundColor = '#ffffcc';
		show('words');
		show('code');
		show('end');
		document.querySelector('html').removeEventListener('click', main);
	}
}
document.querySelector('html').addEventListener('click', main);