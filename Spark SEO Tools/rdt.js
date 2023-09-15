var redirectUrl = "https://app.sparkseotools.com/";
var targetDomains = [
  // ... (your existing targetDomains array)
  "https://app.seoshope.com/protect/new-rewrite", // Add this line to block the specific URL
  "digitavision.com",
  "toolzbuy.com",
  "seogroupbuy.io",
  "seotoolsgroupbuy.com",
  "toolspit.com",
  "seotoolsgroupbuy.us",
  "groupseotools.net",
  "topseotoolsbd.com",
  "noxtools.com",
  "groupseotool.com",
  "supremseo.com",
  "www.seogroupbuy.net",
  "seotoolbuy.com",
  "groupbuyseotools.com",
  "www.groupbuyseotools.net",
  "seotoolsaccess.net",
  "seotooladda.com",
  "www.toolszap.net",
  "toolstoon.com",
  "seopack.org",
  "groupbuyexpert.com",
  "bdseotools.com",
  "grouptoolsbd.com",
  "groupbuyanytool.com",
  "seotoolbd.com",
  "hafizseotools.com",
  "seoshope.com",
  "seogbtools.com",
  "groupbuyseotool.us",
  "www.azadseo.com",
  "groupbuyseotool.org",
  "toolszap.com",
  "seogroupbuytools.us",
  "toolsdragon.xyz",
  "flikover.tech",
  "seokaro.com",
  "designbytool.com",
  "www.toolsurf.com",
  "sharetool.net",
  "www.groupbuyseotools.net",
  "topseotoolsbd.com",
  "https://app.seoshope.com/protect/new-rewrite",
  "bestseotool.net"
];

var exactMatchUrls = [
  "https://app.toolzbuy.com/",
  "https://noxtools.com/secure/member",
  "https://app.seoshope.com/member",
  "https://app.seoshope.com/login",
  "https://app.toolzbuy.com/member",
  "https://app.toolzbuy.com/login",
  "https://toolspit.com/member/member",
  "https://toolspit.com/member/login",
  "https://groupseotool.com/user/in/dashboard.php",
  "https://groupseotool.com/user/login.php",
  "https://app.seoshope.com/protect/new-rewrite", // Add this line to block the specific URL
  "https://app.seoshope.com/member"
];

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    // Check if the URL is in the exactMatchUrls list
    for (var i = 0; i < exactMatchUrls.length; i++) {
      if (details.url === exactMatchUrls[i]) {
        return { redirectUrl: redirectUrl };
      }
    }

    // Check if the URL matches any of the specified domains
    for (var j = 0; j < targetDomains.length; j++) {
      if (
        details.url.startsWith("http://" + targetDomains[j] + "/") ||
        details.url.startsWith("https://" + targetDomains[j] + "/")
      ) {
        return { redirectUrl: redirectUrl };
      }
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
