// css
import '../css/grid.css';
import '../css/basic.css';
import '../css/navRight.css';
import '../css/header.css';
import '../css/cover.css';
import '../css/experience.css';
import '../css/treeStyle.css';
import '../css/html_css.css';
import '../css/jsSkill.css';
import '../css/backendSkill.css';
import '../css/careerPlan.css';
import '../css/contact.css';
import '../css/footer.css';

// js
import cssTreeInit from './cssTree';
import htmlTreeInit from './htmlTree';
import jsTreeInit from './jsTree';
import backendTreeInit from './backendTree';

function fullPageInit () {
    $('#fullpage').fullpage({
        // options here
        licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
        anchors:['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6', 'slide7'],
        sectionsColor: ['#f7f8f9', '#ffffff', '#f6f9fc', '#ffffff', '#bbd3e5', '#f5f3f4', '#ffffff'],
        menu: '#nav-right-id',
        autoScrolling: false,
		fitToSection: false,
        scrollingSpeed: 1200,
        
        onLeave: function(origin, destination, direction){
            let leavingSection = this;
            
            // 當要離開slide 2
            if(origin.index === 1 && direction === 'down'){
                htmlTreeInit();
                cssTreeInit();
            };

            // 當要離開slide 3
            if(origin.index === 2 && direction === 'down'){
                jsTreeInit();
            };

            // 當要離開slide 4
            if(origin.index === 3 && direction === 'down'){
                backendTreeInit();
            };
        }
    });
};

function handleScroll () {
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();
        // console.log('scrollDistance',scrollDistance);
        const header = $("#header");
        if (scrollDistance > 80) {
            header.addClass("header-scrolling");
        } else {
            header.removeClass("header-scrolling")
        }
    });
};

$(document).ready(function() {

    fullPageInit();
    
    handleScroll();

    if ($(window).width() > 767) {
        // rellax init
        let rellax = new Rellax('.rellax', {
            center: true,
        });
    }
});