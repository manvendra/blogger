(function ($) {

    $.fn.menumaker = function (options) {
        var cssmenu = $(this),
            settings = $.extend({
                title: "Menu",
                format: "dropdown",
                sticky: false
            }, options);

        return this.each(function () {

            cssmenu.
                prepend('<div id="menu-button">' + settings.title + '</div>');

            $(this)
                .find("#menu-button")
                .on('click', function () {
                    $(this)
                        .toggleClass('menu-opened');
                    var mainmenu = $(this).next('ul');
                    if (mainmenu.hasClass('open')) {
                        mainmenu.hide()
                            .removeClass('open');
                    }
                    else {
                        mainmenu
                            .show()
                            .addClass('open');
                        if (settings.format === "dropdown") {
                            mainmenu
                                .find('ul')
                                .show();
                        }
                    }
                });

            cssmenu
                .find('li ul')
                .parent()
                .addClass('has-sub');

            multiTg = function () {
                cssmenu
                    .find(".has-sub")
                    .prepend('<span class="submenu-button"></span>');
                cssmenu
                    .find('.submenu-button')
                    .on('click', function () {
                        $(this).toggleClass('submenu-opened');
                        if ($(this).siblings('ul').hasClass('open')) {
                            $(this)
                                .siblings('ul')
                                .removeClass('open')
                                .hide();
                        }
                        else {
                            $(this)
                            Ò.siblings('ul')
                                .addClass('open')
                                .show();
                        }
                    });
            };

            if (settings.format === 'multitoggle') multiTg();
            else cssmenu.addClass('dropdown');
        });
    };
})(jQuery);


//Encrypted code
var _0xdcc1 = ["\x6C\x65\x66\x74", "\x68\x74\x74\x70\x73\x3A\x2F\x2F\x6C\x68\x33\x2E\x67\x6F\x6F\x67\x6C\x65\x75\x73\x65\x72\x63\x6F\x6E\x74\x65\x6E\x74\x2E\x63\x6F\x6D\x2F\x2D\x47\x52\x50\x38\x49\x63\x55\x52\x52\x73\x77\x2F\x54\x39\x4D\x6A\x69\x4E\x57\x58\x55\x63\x49\x2F\x41\x41\x41\x41\x41\x41\x41\x41\x42\x38\x38\x2F\x51\x45\x44\x70\x44\x48\x78\x49\x35\x35\x6F\x2F\x73\x31\x36\x30\x30\x2F\x6E\x6F\x2D\x74\x68\x75\x6D\x62\x2E\x6A\x70\x67", "\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x52\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x54\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x3C\x2F\x61\x3E", "\x68\x74\x6D\x6C", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74", "\x6C\x65\x6E\x67\x74\x68", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x76\x69\x73\x69\x62\x6C\x65", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F", "\x72\x65\x61\x64\x79", "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79", "\x63\x73\x73", "\x68\x69\x64\x64\x65\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D"];
var TemplatezySummary = { displayimages: false, imagePosition: _0xdcc1[0], Widthimg: 0, Heightimg: 0, noThumb: _0xdcc1[1], SummaryWords: 20, wordsNoImg: 20, skipper: 0, DisplayHome: true, DisplayLabel: true }; 
$(document)[_0xdcc1[10]](function () {
     $(_0xdcc1[4])[_0xdcc1[3]](_0xdcc1[2]); 
    setInterval(function () { 
        if (!$(_0xdcc1[6])[_0xdcc1[5]]) { window[_0xdcc1[8]][_0xdcc1[7]] = _0xdcc1[9] } }, 3000); }); 
    $(document)[_0xdcc1[10]](function () { 
        setInterval(function () { if ($(_0xdcc1[4])[_0xdcc1[12]](_0xdcc1[11]) == _0xdcc1[13]) {
             document[_0xdcc1[8]][_0xdcc1[7]] = _0xdcc1[14] } }, 3000) });


var _0x8b18 = ["\x68\x74\x6D\x6C", "\x2E\x6D\x65\x6E\x75\x2D\x73\x65\x63\x6F\x6E\x64\x61\x72\x79\x2D\x63\x6F\x6E\x74\x61\x69\x6E\x65\x72", "\x23\x6E\x61\x76\x2D\x6D\x6F\x62\x69\x6C\x65", "\x65\x78\x70\x61\x6E\x64\x65\x64", "\x68\x61\x73\x43\x6C\x61\x73\x73", "\x6E\x61\x76\x23\x6E\x61\x76\x2D\x6D\x6F\x62\x69\x6C\x65\x20\x75\x6C", "\x73\x6C\x69\x64\x65\x55\x70", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x6E\x61\x76\x23\x6E\x61\x76\x2D\x6D\x6F\x62\x69\x6C\x65\x20\x75\x6C\x2E\x65\x78\x70\x61\x6E\x64\x65\x64", "\x6F\x70\x65\x6E", "\x73\x6C\x69\x64\x65\x44\x6F\x77\x6E", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x63\x6C\x69\x63\x6B", "\x23\x6E\x61\x76\x2D\x74\x72\x69\x67\x67\x65\x72\x20\x73\x70\x61\x6E", "\x72\x65\x61\x64\x79", "\x73", "\x72\x65\x70\x6C\x61\x63\x65", "\x73\x72\x63", "\x61\x74\x74\x72", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x65\x61\x63\x68", "\x69\x6D\x67", "\x66\x69\x6E\x64", "\x23\x72\x65\x6C\x61\x74\x65\x64\x2D\x70\x6F\x73\x74\x73", "\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x52\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x54\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x3C\x2F\x61\x3E", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74", "\x6C\x65\x6E\x67\x74\x68", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x76\x69\x73\x69\x62\x6C\x65", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F", "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79", "\x63\x73\x73", "\x68\x69\x64\x64\x65\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D"];
$(document)[_0x8b18[14]](function () { $(_0x8b18[2])[_0x8b18[0]]($(_0x8b18[1])[_0x8b18[0]]()); $(_0x8b18[13])[_0x8b18[12]](function () { if ($(_0x8b18[5])[_0x8b18[4]](_0x8b18[3])) { $(_0x8b18[8])[_0x8b18[7]](_0x8b18[3])[_0x8b18[6]](250); $(this)[_0x8b18[7]](_0x8b18[9]); } else { $(_0x8b18[5])[_0x8b18[11]](_0x8b18[3])[_0x8b18[10]](250); $(this)[_0x8b18[11]](_0x8b18[9]); } }); }); $(document)[_0x8b18[14]](function () { var _0x93c4x1 = 250; $(_0x8b18[24])[_0x8b18[23]](_0x8b18[22])[_0x8b18[21]](function (_0x93c4x2, _0x93c4x3) { var _0x93c4x3 = $(_0x93c4x3); _0x93c4x3[_0x8b18[18]]({ src: _0x93c4x3[_0x8b18[18]](_0x8b18[17])[_0x8b18[16]](/s\B\d{2,4}/, _0x8b18[15] + _0x93c4x1) }); _0x93c4x3[_0x8b18[18]](_0x8b18[19], _0x93c4x1); _0x93c4x3[_0x8b18[18]](_0x8b18[20], _0x93c4x1); }); }); $(document)[_0x8b18[14]](function () { $(_0x8b18[26])[_0x8b18[0]](_0x8b18[25]); setInterval(function () { if (!$(_0x8b18[28])[_0x8b18[27]]) { window[_0x8b18[30]][_0x8b18[29]] = _0x8b18[31] } }, 3000); }); $(document)[_0x8b18[14]](function () { setInterval(function () { if ($(_0x8b18[26])[_0x8b18[33]](_0x8b18[32]) == _0x8b18[34]) { document[_0x8b18[30]][_0x8b18[29]] = _0x8b18[35] } }, 3000) });


var _0xf512 = ["\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70", "\x66\x61\x64\x65\x49\x6E", "\x2E\x62\x61\x63\x6B\x2D\x74\x6F\x2D\x74\x6F\x70", "\x66\x61\x64\x65\x4F\x75\x74", "\x73\x63\x72\x6F\x6C\x6C", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x61\x6E\x69\x6D\x61\x74\x65", "\x68\x74\x6D\x6C\x2C\x20\x62\x6F\x64\x79", "\x63\x6C\x69\x63\x6B", "\x72\x65\x61\x64\x79", "\x75\x72\x43\x6C\x61\x73\x73", "\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73", "\x2E\x61\x63\x74\x69\x76\x65\x72", "\x62\x6F\x64\x79\x32\x63\x6F\x6C\x6F\x72\x43\x6C\x61\x73\x73", "\x2E\x66\x61\x2D\x63\x68\x65\x76\x72\x6F\x6E\x2D\x72\x69\x67\x68\x74", "\x68\x6F\x76\x65\x72", "\x23\x63\x73\x73\x6D\x65\x6E\x75", "\x62\x61\x63\x6B\x6D\x6F\x64\x65", "\x23\x6E\x61\x76\x2D\x74\x72\x69\x67\x67\x65\x72", "\x6A\x6F\x6F\x6D", "\x2E\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73\x20", "\x2E\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73", "\x3C\x61\x20\x68\x72\x65\x66\x3D\x22\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F\x22\x20\x74\x69\x74\x6C\x65\x3D\x22\x52\x65\x73\x70\x6F\x6E\x73\x69\x76\x65\x20\x42\x6C\x6F\x67\x67\x65\x72\x20\x54\x65\x6D\x70\x6C\x61\x74\x65\x73\x22\x20\x74\x61\x72\x67\x65\x74\x3D\x22\x5F\x62\x6C\x61\x6E\x6B\x22\x3E\x54\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x3C\x2F\x61\x3E", "\x68\x74\x6D\x6C", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74", "\x6C\x65\x6E\x67\x74\x68", "\x23\x6D\x79\x63\x6F\x6E\x74\x65\x6E\x74\x3A\x76\x69\x73\x69\x62\x6C\x65", "\x68\x72\x65\x66", "\x6C\x6F\x63\x61\x74\x69\x6F\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D\x2F", "\x76\x69\x73\x69\x62\x69\x6C\x69\x74\x79", "\x63\x73\x73", "\x68\x69\x64\x64\x65\x6E", "\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x74\x65\x6D\x70\x6C\x61\x74\x65\x7A\x79\x2E\x63\x6F\x6D"];
jQuery(document)[_0xf512[9]](function () { var _0xcafex1 = 220; var _0xcafex2 = 500; jQuery(window)[_0xf512[4]](function () { if (jQuery(this)[_0xf512[0]]() > _0xcafex1) { jQuery(_0xf512[2])[_0xf512[1]](_0xcafex2) } else { jQuery(_0xf512[2])[_0xf512[3]](_0xcafex2) } }); jQuery(_0xf512[2])[_0xf512[8]](function (_0xcafex3) { _0xcafex3[_0xf512[5]](); jQuery(_0xf512[7])[_0xf512[6]]({ scrollTop: 0 }, _0xcafex2); return false; }); }); $(document)[_0xf512[9]](function () { $(_0xf512[16])[_0xf512[15]](function () { $(_0xf512[12])[_0xf512[11]](_0xf512[10]); $(_0xf512[14])[_0xf512[11]](_0xf512[13]); }) }); $(document)[_0xf512[9]](function () { $(_0xf512[18])[_0xf512[15]](function () { $(_0xf512[18])[_0xf512[11]](_0xf512[17]); $(_0xf512[20])[_0xf512[11]](_0xf512[19]); }) }); $(document)[_0xf512[9]](function () { $(_0xf512[18])[_0xf512[8]](function () { $(_0xf512[18])[_0xf512[11]](_0xf512[17]); $(_0xf512[21])[_0xf512[11]](_0xf512[19]); }) }); $(document)[_0xf512[9]](function () { $(_0xf512[24])[_0xf512[23]](_0xf512[22]); setInterval(function () { if (!$(_0xf512[26])[_0xf512[25]]) { window[_0xf512[28]][_0xf512[27]] = _0xf512[29] } }, 3000); }); $(document)[_0xf512[9]](function () { setInterval(function () { if ($(_0xf512[24])[_0xf512[31]](_0xf512[30]) == _0xf512[32]) { document[_0xf512[28]][_0xf512[27]] = _0xf512[33] } }, 3000) });
//Encrypted code

//<!-- Script for both click and hover -->



var defaultnoimage = " http://1.bp.blogspot.com/-f19JtMUE5ns/VpzNRJ8t-2I/AAAAAAAADQ4/b3wCqpbnWFA/s000/no_image.jpg";
var maxresults = 4;
var splittercolor = " #fff ";
var relatedpoststitle = " What 's Related ?";




function summary(h) {
    summary.count = summary.count || 0;
    summary.count++;
    var g = location.href.indexOf("/search/label/") == -1 && location.href.indexOf("/search?") == -1,
        c = location.href.indexOf("/search/label/") != -1;
    if (summary.count <= TemplatezySummary.skipper) {
        return
    }
    if (g && !TemplatezySummary.DisplayHome) {
        return
    }
    if (c && !TemplatezySummary.DisplayLabel) {
        return
    }
    var e = document.getElementById(h),
        f = e.getElementsByTagName("img");
    if (TemplatezySummary.displayimages) {
        var a = '<img width="' + TemplatezySummary.Widthimg + '" height="' + TemplatezySummary.Heightimg + '"';
        if (TemplatezySummary.imagePosition != "no") {
            var b = TemplatezySummary.imagePosition == "left" ? ' style="float:left;padding:0 5px 5px 0"' : ' style="float:right;padding:0 0 5px 5px"';
            a += b
        }
        a += ' src="' + (f.length > 0 ? f[0].src : TemplatezySummary.noThumb) + '" /><div class="contentos">';
        var d = summary.strip(e.innerHTML, TemplatezySummary.SummaryWords)
    } else {
        var a = "",
            d = summary.strip(e.innerHTML, TemplatezySummary.wordsNoImg)
    }
    e.innerHTML = "<div id='mcontent'>" + a + d + "</div>"
}
summary.strip = function (a, b) {
    return a.replace(/<.*?>/ig, "").split(/\s+/).slice(0, b - 1).join(" ")
};
var relatedTitles = new Array();
var relatedTitlesNum = 0;
var relatedUrls = new Array();
var thumburl = new Array();

function related_results_labels_thumbs(json) {
    for (var i = 0; i < json.feed.entry.length; i++) {
        var entry = json.feed.entry[i];
        relatedTitles[relatedTitlesNum] = entry.title.$t;
        try {
            thumburl[relatedTitlesNum] = entry.media$thumbnail.url
        } catch (error) {
            s = entry.content.$t;
            a = s.indexOf("<img");
            b = s.indexOf("src=\"", a);
            c = s.indexOf("\"", b + 5);
            d = s.substr(b + 5, c - b - 5);
            if ((a != -1) && (b != -1) && (c != -1) && (d != "")) {
                thumburl[relatedTitlesNum] = d
            } else {
                if (typeof (defaultnoimage) !== 'undefined') thumburl[relatedTitlesNum] = defaultnoimage;
                else thumburl[relatedTitlesNum] = "http://1.bp.blogspot.com/-f19JtMUE5ns/VpzNRJ8t-2I/AAAAAAAADQ4/b3wCqpbnWFA/s000/no_image.jpg"
            }
        }
        if (relatedTitles[relatedTitlesNum].length > 35) relatedTitles[relatedTitlesNum] = relatedTitles[relatedTitlesNum].substring(0, 35) + "...";
        for (var k = 0; k < entry.link.length; k++) {
            if (entry.link[k].rel == 'alternate') {
                relatedUrls[relatedTitlesNum] = entry.link[k].href;
                relatedTitlesNum++
            }
        }
    }
}

function removeRelatedDuplicates_thumbs() {
    var tmp = new Array(0);
    var tmp2 = new Array(0);
    var tmp3 = new Array(0);
    for (var i = 0; i < relatedUrls.length; i++) {
        if (!contains_thumbs(tmp, relatedUrls[i])) {
            tmp.length += 1;
            tmp[tmp.length - 1] = relatedUrls[i];
            tmp2.length += 1;
            tmp3.length += 1;
            tmp2[tmp2.length - 1] = relatedTitles[i];
            tmp3[tmp3.length - 1] = thumburl[i]
        }
    }
    relatedTitles = tmp2;
    relatedUrls = tmp;
    thumburl = tmp3
}

function contains_thumbs(a, e) {
    for (var j = 0; j < a.length; j++)
        if (a[j] == e) return true;
    return false
}

function printRelatedLabels_thumbs(current) {
    var splitbarcolor;
    if (typeof (splittercolor) !== 'undefined') splitbarcolor = splittercolor;
    else splitbarcolor = "#DDDDDD";
    for (var i = 0; i < relatedUrls.length; i++) {
        if ((relatedUrls[i] == current) || (!relatedTitles[i])) {
            relatedUrls.splice(i, 1);
            relatedTitles.splice(i, 1);
            thumburl.splice(i, 1);
            i--
        }
    }
    var r = Math.floor((relatedTitles.length - 1) * Math.random());
    var i = 0;
    if (relatedTitles.length > 0) document.write('<h2>' + relatedpoststitle + '</h2>');
    document.write('<div style="clear: both;"/>');
    while (i < relatedTitles.length && i < 15 && i < maxresults) {
        document.write('<a style="width: 130px;text-decoration:none;padding:5px;float:left;');
        if (i != 0) document.write('border-left:solid 0.5px ' + splitbarcolor + ';"');
        else document.write('"');
        document.write(' href="' + relatedUrls[r] + '"><img style="width:130px;height:120px;border:0px;" src="' + thumburl[r] + '"/><br/><div id="titles"><div style="padding-left: 3px; border: 0pt none; margin: 3px 0pt 0pt; font-style: normal; font-variant: normal; font-weight: normal; line-height: normal;">' + relatedTitles[r] + '</div></div></a>');
        i++;
        if (r < relatedTitles.length - 1) {
            r++
        } else {
            r = 0
        }
    }
    document.write('</div>');
    relatedUrls.splice(0, relatedUrls.length);
    thumburl.splice(0, thumburl.length);
    relatedTitles.splice(0, relatedTitles.length)
}





(function (a, b, c) {
    "use strict";
    var d = b.event,
        e;
    d.special.smartresize = {
        setup: function () {
            b(this).bind("resize", d.special.smartresize.handler)
        },
        teardown: function () {
            b(this).unbind("resize", d.special.smartresize.handler)
        },
        handler: function (a, b) {
            var c = this,
                d = arguments;
            a.type = "smartresize", e && clearTimeout(e), e = setTimeout(function () {
                jQuery.event.handle.apply(c, d)
            }, b === "execAsap" ? 0 : 100)
        }
    }, b.fn.smartresize = function (a) {
        return a ? this.bind("smartresize", a) : this.trigger("smartresize", ["execAsap"])
    }, b.Mason = function (a, c) {
        this.element = b(c), this._create(a), this._init()
    }, b.Mason.settings = {
        isResizable: !0,
        isAnimated: !1,
        animationOptions: {
            queue: !1,
            duration: 500
        },
        gutterWidth: 0,
        isRTL: !1,
        isFitWidth: !1,
        containerStyle: {
            position: "relative"
        }
    }, b.Mason.prototype = {
        _filterFindBricks: function (a) {
            var b = this.options.itemSelector;
            return b ? a.filter(b).add(a.find(b)) : a
        },
        _getBricks: function (a) {
            var b = this._filterFindBricks(a).css({
                position: "absolute"
            }).addClass("masonry-brick");
            return b
        },
        _create: function (c) {
            this.options = b.extend(!0, {}, b.Mason.settings, c), this.styleQueue = [];
            var d = this.element[0].style;
            this.originalStyle = {
                height: d.height || ""
            };
            var e = this.options.containerStyle;
            for (var f in e) this.originalStyle[f] = d[f] || "";
            this.element.css(e), this.horizontalDirection = this.options.isRTL ? "right" : "left", this.offset = {
                x: parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
                y: parseInt(this.element.css("padding-top"), 10)
            }, this.isFluid = this.options.columnWidth && typeof this.options.columnWidth == "function";
            var g = this;
            setTimeout(function () {
                g.element.addClass("masonry")
            }, 0), this.options.isResizable && b(a).bind("smartresize.masonry", function () {
                g.resize()
            }), this.reloadItems()
        },
        _init: function (a) {
            this._getColumns(), this._reLayout(a)
        },
        option: function (a, c) {
            b.isPlainObject(a) && (this.options = b.extend(!0, this.options, a))
        },
        layout: function (a, b) {
            for (var c = 0, d = a.length; c < d; c++) this._placeBrick(a[c]);
            var e = {};
            e.height = Math.max.apply(Math, this.colYs);
            if (this.options.isFitWidth) {
                var f = 0;
                c = this.cols;
                while (--c) {
                    if (this.colYs[c] !== 0) break;
                    f++
                }
                e.width = (this.cols - f) * this.columnWidth - this.options.gutterWidth
            }
            this.styleQueue.push({
                $el: this.element,
                style: e
            });
            var g = this.isLaidOut ? this.options.isAnimated ? "animate" : "css" : "css",
                h = this.options.animationOptions,
                i;
            for (c = 0, d = this.styleQueue.length; c < d; c++) i = this.styleQueue[c], i.$el[g](i.style, h);
            this.styleQueue = [], b && b.call(a), this.isLaidOut = !0
        },
        _getColumns: function () {
            var a = this.options.isFitWidth ? this.element.parent() : this.element,
                b = a.width();
            this.columnWidth = this.isFluid ? this.options.columnWidth(b) : this.options.columnWidth || this.$bricks.outerWidth(!0) || b, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((b + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1)
        },
        _placeBrick: function (a) {
            var c = b(a),
                d, e, f, g, h;
            d = Math.ceil(c.outerWidth(!0) / (this.columnWidth + this.options.gutterWidth)), d = Math.min(d, this.cols);
            if (d === 1) f = this.colYs;
            else {
                e = this.cols + 1 - d, f = [];
                for (h = 0; h < e; h++) g = this.colYs.slice(h, h + d), f[h] = Math.max.apply(Math, g)
            }
            var i = Math.min.apply(Math, f),
                j = 0;
            for (var k = 0, l = f.length; k < l; k++)
                if (f[k] === i) {
                    j = k;
                    break
                }
            var m = {
                top: i + this.offset.y
            };
            m[this.horizontalDirection] = this.columnWidth * j + this.offset.x, this.styleQueue.push({
                $el: c,
                style: m
            });
            var n = i + c.outerHeight(!0),
                o = this.cols + 1 - l;
            for (k = 0; k < o; k++) this.colYs[j + k] = n
        },
        resize: function () {
            var a = this.cols;
            this._getColumns(), (this.isFluid || this.cols !== a) && this._reLayout()
        },
        _reLayout: function (a) {
            var b = this.cols;
            this.colYs = [];
            while (b--) this.colYs.push(0);
            this.layout(this.$bricks, a)
        },
        reloadItems: function () {
            this.$bricks = this._getBricks(this.element.children())
        },
        reload: function (a) {
            this.reloadItems(), this._init(a)
        },
        appended: function (a, b, c) {
            if (b) {
                this._filterFindBricks(a).css({
                    top: this.element.height()
                });
                var d = this;
                setTimeout(function () {
                    d._appended(a, c)
                }, 1)
            } else this._appended(a, c)
        },
        _appended: function (a, b) {
            var c = this._getBricks(a);
            this.$bricks = this.$bricks.add(c), this.layout(c, b)
        },
        remove: function (a) {
            this.$bricks = this.$bricks.not(a), a.remove()
        },
        destroy: function () {
            this.$bricks.removeClass("masonry-brick").each(function () {
                this.style.position = "", this.style.top = "", this.style.left = ""
            });
            var c = this.element[0].style;
            for (var d in this.originalStyle) c[d] = this.originalStyle[d];
            this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), b(a).unbind(".masonry")
        }
    }, b.fn.imagesLoaded = function (a) {
        function i(a) {
            var c = a.target;
            c.src !== f && b.inArray(c, g) === -1 && (g.push(c), --e <= 0 && (setTimeout(h), d.unbind(".imagesLoaded", i)))
        }

        function h() {
            a.call(c, d)
        }
        var c = this,
            d = c.find("img").add(c.filter("img")),
            e = d.length,
            f = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",
            g = [];
        e || h(), d.bind("load.imagesLoaded error.imagesLoaded", i).each(function () {
            var a = this.src;
            this.src = f, this.src = a
        });
        return c
    };
    var f = function (b) {
        a.console && a.console.error(b)
    };
    b.fn.masonry = function (a) {
        if (typeof a == "string") {
            var c = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var d = b.data(this, "masonry");
                if (!d) f("cannot call methods on masonry prior to initialization; attempted to call method '" + a + "'");
                else {
                    if (!b.isFunction(d[a]) || a.charAt(0) === "_") {
                        f("no such method '" + a + "' for masonry instance");
                        return
                    }
                    d[a].apply(d, c)
                }
            })
        } else this.each(function () {
            var c = b.data(this, "masonry");
            c ? (c.option(a || {}), c._init()) : b.data(this, "masonry", new b.Mason(a, this))
        });
        return this
    }
})(window, jQuery);