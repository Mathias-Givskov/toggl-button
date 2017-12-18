/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false*/
'use strict';

    
    
togglbutton.render('td.cell-buttons:not(.toggl)',{observe: true}, function(elem) {
    var header = $('div.top-header>h4');
    var div, link, description,
    titleElem = header

    description = titleElem.innerText;
    link = togglbutton.createTimerLink({
        className: 'McbProduction',
        description: description
    });

    $('td.cell-buttons').appendChild(link);    
    
});