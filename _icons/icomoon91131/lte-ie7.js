/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'icomoon\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-linkedin' : '&#xe000;',
			'icon-steam' : '&#xe001;',
			'icon-vimeo2' : '&#xe002;',
			'icon-twitter' : '&#xe003;',
			'icon-facebook' : '&#xe004;',
			'icon-mail' : '&#xe005;',
			'icon-embed' : '&#xe006;',
			'icon-code' : '&#xe007;',
			'icon-radio-unchecked' : '&#xe008;',
			'icon-radio-checked' : '&#xe009;',
			'icon-arrow-up' : '&#xe00a;',
			'icon-arrow-down' : '&#xe00b;',
			'icon-loop' : '&#xe00c;',
			'icon-heart' : '&#xe00d;',
			'icon-heart-2' : '&#xe00e;',
			'icon-star' : '&#xe00f;',
			'icon-star-2' : '&#xe010;',
			'icon-star-3' : '&#xe011;',
			'icon-contrast' : '&#xe012;',
			'icon-attachment' : '&#xe013;',
			'icon-cloud-download' : '&#xe014;',
			'icon-user' : '&#xe015;',
			'icon-expand' : '&#xe016;',
			'icon-contract' : '&#xe017;',
			'icon-spinner' : '&#xe018;',
			'icon-screen' : '&#xe019;',
			'icon-laptop' : '&#xe01a;',
			'icon-mobile' : '&#xe01b;',
			'icon-mobile-2' : '&#xe01c;',
			'icon-tag' : '&#xe01d;',
			'icon-stack' : '&#xe01e;',
			'icon-file' : '&#xe01f;',
			'icon-file-2' : '&#xe020;',
			'icon-pencil' : '&#xe021;',
			'icon-camera' : '&#xe022;',
			'icon-play' : '&#xe023;',
			'icon-camera-2' : '&#xe024;',
			'icon-profile' : '&#xe025;',
			'icon-location' : '&#xe026;',
			'icon-location-2' : '&#xe027;',
			'icon-notebook' : '&#xe028;',
			'icon-box-remove' : '&#xe029;',
			'icon-box-add' : '&#xe02a;',
			'icon-user-2' : '&#xe02b;',
			'icon-user-3' : '&#xe02c;',
			'icon-spinner-2' : '&#xe02d;',
			'icon-spinner-3' : '&#xe02e;',
			'icon-spinner-4' : '&#xe02f;',
			'icon-expand-2' : '&#xe030;',
			'icon-contract-2' : '&#xe031;',
			'icon-equalizer' : '&#xe032;',
			'icon-settings' : '&#xe033;',
			'icon-firefox' : '&#xe034;',
			'icon-chrome' : '&#xe035;',
			'icon-css3' : '&#xe036;',
			'icon-html5' : '&#xe037;',
			'icon-safari' : '&#xe038;',
			'icon-checkbox-partial' : '&#xe039;',
			'icon-checkbox-unchecked' : '&#xe03a;',
			'icon-arrow-right' : '&#xe03b;',
			'icon-arrow-left' : '&#xe03c;',
			'icon-cancel-circle' : '&#xe03d;',
			'icon-checkmark-circle' : '&#xe03e;',
			'icon-close' : '&#xe03f;',
			'icon-lock' : '&#xe040;',
			'icon-cog' : '&#xe042;',
			'icon-happy' : '&#xe041;',
			'icon-pinterest' : '&#xe043;',
			'icon-android' : '&#xe044;',
			'icon-github' : '&#xe045;',
			'icon-happy-2' : '&#xe046;',
			'icon-thumbs-up' : '&#xe047;',
			'icon-heart-broken' : '&#xe048;',
			'icon-warning' : '&#xe049;',
			'icon-checkmark' : '&#xe04a;',
			'icon-volume-increase' : '&#xe04b;',
			'icon-volume-mute' : '&#xe04c;',
			'icon-volume-mute-2' : '&#xe04d;',
			'icon-mail-2' : '&#xe04e;',
			'icon-facebook-2' : '&#xe04f;',
			'icon-feed' : '&#xe050;',
			'icon-twitter-2' : '&#xe051;',
			'icon-vimeo' : '&#xe052;',
			'icon-github-2' : '&#xe053;',
			'icon-github-3' : '&#xe054;',
			'icon-github-4' : '&#xe055;',
			'icon-flickr' : '&#xe056;',
			'icon-apple' : '&#xe057;',
			'icon-pinterest-2' : '&#xe058;',
			'icon-IE' : '&#xe059;',
			'icon-opera' : '&#xe05a;',
			'icon-question' : '&#xe05b;',
			'icon-notification' : '&#xe05c;',
			'icon-info' : '&#xe05d;',
			'icon-info-2' : '&#xe05e;',
			'icon-fire' : '&#xe05f;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};