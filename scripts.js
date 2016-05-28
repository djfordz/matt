/*
 * navigation buttons
 */

// because Chrome returns everything as a node, go ahead and query nodes and switch them to arrays.
var btnList = document.querySelectorAll('button');
var btn = Array.from(btnList);

// give each button its own functionality. switch statements are better than if/else, looks cleaner.
btn.forEach(function(v, i) {
    var data = '';
    // for mouseover event
    v.addEventListener('mouseover', function() {
        switch(i) {
            case 0: data = 'Matthew';
                    break;
            case 1: data = 'Ambition';
                    break;
            case 2: data = 'Team';
                    break;
            case 3: data = 'Tables';
                    break;
            case 4: data = 'Humor';
                    break;
            case 5: data = 'Email';
                    break;
            case 6: data = 'Winner';
                    break;
            case 7: data = 'Back';
                    break;
        }
        this.style.fontSize = '18px';
        this.innerHTML = data;
    });
    // for mouseout event
    v.addEventListener('mouseout', function() {
        switch(i) {
            case 0: data = 'M';
                    break;
            case 1: data = 'A';
                    break;
            case 2: data = 'T';
                    break;
            case 3: data = 'T';
                    break;
            case 4: data = 'H';
                    break;
            case 5: data = 'E';
                    break;
            case 6: data = 'W';
                    break;
            case 7: data = 'Back';
                    break;
        }
        this.style.fontSize = '32px';
        this.innerHTML = data;
    });
});

/*
 * slideshow
 */
(function(){
 
    // because Chrome returns everything as a node, go ahead and query nodes and switch them to arrays.
	var nodeList = document.querySelectorAll('.slideshow figure');
	var slides = Array.from(nodeList); 
	 
	//only load on right page, to avoid errors on other pages. 
    var page = window.location.href;
    if(page.search('humor.html') > 0) {
        
       var count = 0; 
       //show first slide immediately on page load.
        slides[count].classList.add('show');

        //remove all slides, then show the next slide in line, when get to end of slides, start over.
        window.setInterval(function() {
            if(count === slides.length) {
                count = 0;
            }
            slides.forEach(function(slide) {
                slide.classList.remove('show');
            });
            slides[count].classList.add('show');
            count++;
        }, 7000);
    }
    
})();

/*
 * validate form input on contact page
 */

function validate() {
	
    //get items from DOM
	var fname = document.getElementById('fname').value;
	var lname = document.getElementById('lname').value; 
	var email = document.getElementById('email').value;
	var c = document.getElementById('c');
	var b = document.getElementById('b');
	var a = document.getElementById('a');

    //flag to check against regex letters only.
    function checkName(name) {
        var check =  /[A-Za-z]/;

        if(check.test(name)) {
            return true;
        }
        return false;
    }
    //flag to check against simple regex @ & .;
    function checkEmail(email) {
        var check = /(\w[-._\w]*\w@\w[-._\w]*\w\.\w{2,3})/;
        if(check.test(email)) {
            return true;
        }
        return false;
    }

    //if all pass turn background green and submit form
	if(checkName(fname) && checkName(lname) && checkEmail(email)) {
        c.style.background = 'green';
        b.style.background = 'green';
        a.style.background = 'green';
		document.forms['emailform'].submit();
    //if not pass then turn background red where error
	} else {
		if (!checkName(fname)|| fname === '') 
			 c.style.background = 'red';
		else
			 c.style.background = 'green';

		if(!checkName(lname) || lname === '')
			b.style.background  = 'red';
		else
			b.style.background = 'green';

		if(!checkEmail(email) || email === '')
			a.style.background = 'red';
		else
			a.style.background = 'green';
	}
	
	return false;
}



/*
 * Table of Tables
 */
//only load on right page, to avoid errors on other pages. 
if(window.location.href.search('tables.html') > 0) {
    

    var tbody = "", arrimg = [], files = ["battable", "coffeetable", "sidetable", "pooltable", "picnictable"], titles =["Bat Table", "Coffee Table", "Side Table", "Pool Table", "Picinic Table"];
    for(var i = 0; i < files.length; i++) {
        arrimg.push("<img src='images/" + files[i] + ".jpg'>");
    }

    tbody += "<tr>"
    for(var i = 0; i < titles.length; i++) {
        tbody += "<th>" + titles[i] + "</th>";
    }
    tbody += "</tr><tr>";
    for(var i = 0; i < files.length; i++) {
        tbody += "<td>" + arrimg[i] + "</td>";
    }
    tbody += "</tr>";


    var table = document.createElement('table');
    var div = document.getElementsByClassName('row');
    table.setAttribute('border', '1');
    table.innerHTML = tbody;

    div[0].appendChild(table);
}
