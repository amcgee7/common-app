console.log("start of settings.js");
var Settings={};

Settings.TemplateHTML = "DNA_common/components/settings/settings.html";

Settings.addUpdateSettingsPage = function(name,page,onclick) {
	$("#settingsPageList").append(Settings.settingsPageItemHTML);
	var item = document.querySelector('#settingsPageList li:nth-last-child(1)');
	item.innerText=name+' '+page;
	item.onclick=onclick;
	console.log(item);
}

Settings.includeHTMLSucess = function(linkobj) {
   console.log("loaded settings.html");
   Settings.import = linkobj.path[0].import;
   
   Settings.settingsIconHTML = Settings.import.getElementById('settingsIcon');
   //Settings.settingsCarotHTML = Settings.import.getElementById('settingsCarot');
   //Settings.settingsMenuHTML = Settings.import.getElementById('settingsMenu');
   //Settings.settingsTabsHTML = Settings.import.getElementById('settingsTabs');
   Settings.settingsPageItemHTML = Settings.import.getElementById('settingsPageItem').innerHTML;
   $("body").append(Settings.import.getElementById('settingsPage'));
   //$("#settingsPage").toggle();
   //Settings.addUpdateSettingsPage('settingsX','page',function(){console.log('SettingsX click');});
   setTimeout(Settings.pageUpdate,20000);
};
		
Settings.pageUpdate = function() {
	console.log("Settings.pageUpdate()");
	if (!$('#settingsIcon').length) {
		setTimeout(Settings.pageUpdate,1000);
	}
	else {
		console.log("replace settingsIcon with "+Settings.settingsIconHTML);
		$('#settingsIcon').replaceWith(Settings.settingsIconHTML.valueOf());
		document.getElementById('settingsIcon').onclick=function(){$('#settingsPage').toggleClass('hidden');};
		document.getElementById('SettingsTabsCloseButton').onclick=function(){$('#settingsPage').toggleClass('hidden');};
		$("body").append(Settings.import.getElementById('settingsPage'));
		console.log("icon update ");
	}
};


Settings.includeHTMLFailed = function(linkobj) {
	console.log("load settings.html failed");
	console.log(linkobj);
};

includeHTML(Settings.TemplateHTML, Settings.includeHTMLSucess, Settings.includeHTMLFailed);

console.log("end of settings.js");
