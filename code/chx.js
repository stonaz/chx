function setRollover (container) {
    //ipad and iphone fix
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        return;
    }
	$("#"+container+" a img").hover(
	 function()
	 {
	  this.src = this.src.replace("_off","_on");
	 },
	 function()
	 {
	  this.src = this.src.replace("_on","_off");
	 }
	);
}
function setRolloverMenu (container) {
    //ipad and iphone fix
    if((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i)) || (navigator.userAgent.match(/iPad/i))) {
        return;
    }
	$("#"+container+" a img").hover(
	 function()
	 {
		this.src = this.src.replace("_off","_over");
		hilightMenu(container,true);
	 },
	 function()
	 {
	  	this.src = this.src.replace("_over","_off");
		hilightMenu(container,false);
	 }
	);
}
function hilightMenu (container,status) {
	if ($('#'+container).hasClass('current')) {
		return;
	}
	if ( status ) {
		$('#'+container+'_redbox').show();
	} else {
		$('#'+container+'_redbox').hide();
	} 
}
var sections =  {
	disegni:'disegni',
	pongo:'pongo',
	bambini:'bambini',
	mappe:'mappe',
	//loghi:'loghi_icone',
	curriculum:'curriculum'
}
function getHomePage() {
	location.href="index.html";
}

//function showBoxImage(){
//    e.preventDefault()
//    alert('image')
//}

;

function openModal(div) {
    //$.modal("<div><h1>SimpleModal</h1></div>");
    var myDomElement = document.getElementById(div);
    $.modal(myDomElement, {
        onOpen: function(dialog) {
            dialog.overlay.fadeIn('slow', function() {
                dialog.data.hide();
                dialog.container.fadeIn('slow', function() {
                    dialog.data.slideDown('slow');
                });
            });
        },
	onShow: function(d){
	     d.container.css({position: 'absolute', top: '65px'});
	     this.autoPosition=false;
	},
	//autoPosition:false
    });
}