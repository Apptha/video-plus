function YouTube_Error(e){if(YoutubeVideoid=e,document.getElementById("videoPlay")?document.getElementById("videoPlay").innerHTML='<div id="iframeplayer"></div>':document.getElementById("flashplayer")&&(document.getElementById("flashplayer").innerHTML='<div id="iframeplayer"></div>'),scriptLoaded)onYouTubeIframeAPIReady();else{var t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",scriptLoaded=!0;var n=document.getElementsByTagName("script")[0];n.parentNode.insertBefore(t,n)}}function onYouTubeIframeAPIReady(){player=new YT.Player("iframeplayer",{width:"100%",videoId:YoutubeVideoid,playerVars:{autoplay:1},events:{onStateChange:onPlayerStateChange}})}function onPlayerStateChange(e){var t=!1;e.data!=YT.PlayerState.PLAYING||t||(currentVideoP(YoutubeVideoid),t=!0)}function membervalue(e){document.getElementById("memberidvalue").value=e,document.memberidform.submit()}function changepage(e){document.getElementById("video_pageid").value=e,document.pagination.submit()}function my_message(e){var t=confirm(confirmDeleteVideo);if(t){document.getElementById("deletevideo").value=e;return document.deletemyvideo.submit(),!0}return!1}function videoplay(e,t){window.open("index.php?Itemid="+itemid+"&amp;option=com_contushdvideoshare&view=player&id="+e+"&catid="+t,"_self")}function editvideo(e){window.open(e,"_self")}function sortvalue(e){document.getElementById("sorting").value=e,document.sortform.submit()}function bindvideo(){(""!=document.getElementById("Youtubeurl").value||""!=document.getElementById("embed_code").value)&&(document.getElementById("videourl").value=0)}function getvideoData(e,t,n){document.getElementById("viewtitle").innerHTML=t}function deletePlaylistVideo(e,t){var n=confirm("Do you Really Want To Delete This Video From This Playlist? \n\nClick OK to continue. Otherwise click Cancel.\n");if(n){document.getElementById("deletevideo").value=e,document.getElementById("deletecat").value=t;return document.deletemyvideoplay.submit(),!0}return!1}function filetypeshow(e){if((0==e.value||0==e)&&(document.getElementById("typefile").style.display="none",document.getElementById("typeff").style.display="none",document.getElementById("typeurl").style.display="block",document.getElementById("rtmpcontainer").style.display="none",document.getElementById("down_load").style.display="none",document.getElementById("hd_url").style.display="none",document.getElementById("nonhd_url").style.display="block",document.getElementById("image_path").style.display="none",document.getElementById("seltype").value=0,document.getElementById("video_filetype").value="Youtube",document.getElementById("ffmpeg").style.display="none",document.getElementById("ffmpeg_disable_new9").style.display="none",document.getElementById("normalvideoformval").style.display="none"),(5==e.value||5==e)&&(document.getElementById("typeff").style.display="block",document.getElementById("typeurl").style.display="none",document.getElementById("rtmpcontainer").style.display="none",document.getElementById("down_load").style.display="none",document.getElementById("hd_url").style.display="none",document.getElementById("nonhd_url").style.display="none",document.getElementById("image_path").style.display="none",document.getElementById("seltype").value=6,document.getElementById("video_filetype").value="FFMPEG",document.getElementById("ffmpeg").style.display="none",document.getElementById("ffmpeg_disable_new9").style.display="none",document.getElementById("normalvideoformval").style.display="none"),(1==e.value||1==e)&&(document.getElementById("typefile").style.display="block",document.getElementById("typeurl").style.display="none",document.getElementById("typeff").style.display="none",document.getElementById("down_load").style.display="block",document.getElementById("rtmpcontainer").style.display="none",document.getElementById("seltype").value=1,document.getElementById("video_filetype").value="File",document.getElementById("ffmpeg").style.display="none",document.getElementById("ffmpeg_disable_new9").style.display="none",document.getElementById("normalvideoformval").style.display="block"),(2==e.value||2==e)&&(document.getElementById("typefile").style.display="none",document.getElementById("typeurl").style.display="block",document.getElementById("hd_url").style.display="block",document.getElementById("nonhd_url").style.display="block",document.getElementById("down_load").style.display="block",document.getElementById("image_path").style.display="block",document.getElementById("imageurllabel").style.display="",document.getElementById("imageurlpath").style.display="",document.getElementById("typeff").style.display="none",document.getElementById("ffmpeg").style.display="none",document.getElementById("seltype").value=2,document.getElementById("video_filetype").value="Url",document.getElementById("normalvideoformval").style.display="block",document.getElementById("ffmpeg_disable_new9").style.display="none",document.getElementById("rtmpcontainer").style.display="none"),3==e.value||3==e){document.getElementById("rtmpcontainer").style.display="block",document.getElementById("typeurl").style.display="block",document.getElementById("typefile").style.display="none",document.getElementById("hd_url").style.display="none",document.getElementById("nonhd_url").style.display="block";var t=document.getElementById("islive2").checked;t===!0?document.getElementById("islive-value").value=1:document.getElementById("islive-value").value=0,document.getElementById("down_load").style.display="none",document.getElementById("image_path").style.display="block",document.getElementById("imageurllabel").style.display="",document.getElementById("imageurlpath").style.display="",document.getElementById("typeff").style.display="none",document.getElementById("ffmpeg").style.display="none",document.getElementById("seltype").value=3,document.getElementById("video_filetype").value="Url",document.getElementById("ffmpeg_disable_new9").style.display="none",document.getElementById("normalvideoformval").style.display="block"}if(4==e.value||4==e){document.getElementById("rtmpcontainer").style.display="none",document.getElementById("typeurl").style.display="block",document.getElementById("typefile").style.display="none",document.getElementById("hd_url").style.display="none",document.getElementById("nonhd_url").style.display="none";var t=document.getElementById("islive2").checked;t===!0?document.getElementById("islive-value").value=1:document.getElementById("islive-value").value=0,document.getElementById("down_load").style.display="none",document.getElementById("image_path").style.display="block",document.getElementById("imageurllabel").style.display="none",document.getElementById("imageurlpath").style.display="none",document.getElementById("typeff").style.display="none",document.getElementById("ffmpeg").style.display="none",document.getElementById("seltype").value=4,document.getElementById("video_filetype").value="Embed",document.getElementById("ffmpeg_disable_new9").style.display="block",document.getElementById("normalvideoformval").style.display="block"}}function resetcategory(){document.getElementById("tagname").value=""}function catselect(e){var t=document.getElementById("selcat").value=e;""==document.getElementById("tagname").value?document.getElementById("tagname").value=t:document.getElementById("tagname").value=t}function generate12(e){var t=e,n=t.indexOf("youtube"),l=t.indexOf("youtu.be");-1!==n||-1!==l?document.getElementById("generate").style.visibility="visible":document.getElementById("generate").style.visibility="hidden"}function createObject(){var e,t=navigator.appName;return e="Microsoft Internet Explorer"==t?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest}function assignurl(e){if(""==e)return!1;var t=/http\:\/\/www\.youtube\.com\/watch\?v=[^&]+/;if(null==e.match(t)){var n=/http:\/\/www\.metacafe\.com\/watch\/(.*?)\/(.*?)\//;return null!=e.match(n)?(document.upload1111.url1.value=document.getElementById("url").value,document.getElementById("generate").style.display="block",!1):(alert(enterVideoURL),document.getElementById("url").focus(),document.upload1111.url.value="1",!1)}return document.getElementById("generate").style.display="block",document.upload1111.flv.value=document.getElementById("url").value,document.upload1111.url1.value="1",!1}function fileformate_check(e){return e.value.length>0&&"gif"!=e.value.substring(e.value.length-3)&&"GIF"!=e.value.substring(e.value.length-3)&&"JPG"!=e.value.substring(e.value.length-3)&&"jpg"!=e.value.substring(e.value.length-3)&&"PNG"!=e.value.substring(e.value.length-3)&&"png"!=e.value.substring(e.value.length-3)?(alert(invalidFileFormat),e.value="",!1):void 0}function enableEmbed(){embedFlag=document.getElementById("flagembed").value,1!=embedFlag?(document.getElementById("embedcode").style.display="block",document.getElementById("flagembed").value="1",document.getElementById("reportadmin")&&(document.getElementById("reportadmin").style.display="none",document.getElementById("flagreport").value="0"),document.getElementById("iframecode")&&(document.getElementById("iframecode").style.display="none",document.getElementById("flagiframe").value="0")):(document.getElementById("embedcode").style.display="none",document.getElementById("flagembed").value="0",document.getElementById("reportadmin")&&(document.getElementById("reportadmin").style.display="none",document.getElementById("flagreport").value="0"),document.getElementById("iframecode")&&(document.getElementById("iframecode").style.display="none",document.getElementById("flagiframe").value="0"))}function enableIFrame(){iframeFlag=document.getElementById("flagiframe").value,1!=iframeFlag?(document.getElementById("iframecode").style.display="block",document.getElementById("flagiframe").value="1",document.getElementById("reportadmin")&&(document.getElementById("reportadmin").style.display="none",document.getElementById("flagreport").value="0"),document.getElementById("embedcode")&&(document.getElementById("embedcode").style.display="none",document.getElementById("flagembed").value="0")):(document.getElementById("iframecode").style.display="none",document.getElementById("flagiframe").value="0",document.getElementById("reportadmin")&&(document.getElementById("reportadmin").style.display="none",document.getElementById("flagreport").value="0"),document.getElementById("embedcode")&&(document.getElementById("embedcode").style.display="none",document.getElementById("flagembed").value="0"))}function showreport(){reportFlag=document.getElementById("flagreport").value,1!=reportFlag?(document.getElementById("reportadmin").style.display="block",document.getElementById("flagreport").value="1",document.getElementById("embedcode")&&(document.getElementById("embedcode").style.display="none",document.getElementById("flagembed").value="0"),document.getElementById("iframecode")&&(document.getElementById("iframecode").style.display="none",document.getElementById("flagiframe").value="0")):(document.getElementById("reportadmin").style.display="none",document.getElementById("flagreport").value="0",document.getElementById("embedcode")&&(document.getElementById("embedcode").style.display="none",document.getElementById("flagembed").value="0"),document.getElementById("iframecode")&&(document.getElementById("iframecode").style.display="none",document.getElementById("flagiframe").value="0"))}function closereport(){document.getElementById("reportadmin").style.display="none"}function parentvalue(e){document.getElementById("parentvalue").value=e,document.getElementById("username").focus()}function textdisplay(e){document.getElementById("divnum").value>0&&(document.getElementById(document.getElementById("divnum").value).innerHTML=""),document.getElementById("initial").innerHTML=" ";var t=e,n=document.getElementById("txt").innerHTML;document.getElementById(t).innerHTML=n,document.getElementById("txt").style.display="none",document.getElementById("divnum").value=t}function hidebox(){document.getElementById("txt").style.display="none",document.getElementById("initial").innerHTML=" "}function CountLeft(e,t,n){e.value.length>n?(e.value=e.value.substring(0,n),t.value=n-e.value.length):t.value=n-e.value.length}function comments(){var e=document.getElementById("txt").innerHTML;document.getElementById("initial").innerHTML=e}function playlistresponse(){alert(http.response.html)}function delete_playlist(e){var t=confirm("Do you Really Want To Delete This playlist? \n\nClick OK to continue. Otherwise click Cancel.\n");return t?void 0:!1}function generateyoutubedetail(){var e=document.getElementById("Youtubeurl").value;document.getElementById("videouploadLoading")&&(document.getElementById("videouploadLoading").style.display="block");var t=e.match(/^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/);if(t&&11==t[7].length)var n=t[7];else alert("Cannot fetch YouTube video id from your URL");http.open("get",frontbase+"index.php?option=com_contushdvideoshare&task=youtubeurl&tmpl=component&videourl="+n,!0),http.onreadystatechange=insertReply,http.send(null)}function insertReply(){if(4==http.readyState){var e=http.responseText;document.getElementById("videouploadLoading")&&(document.getElementById("videouploadLoading").style.display="none");var t=JSON.parse(e);document.getElementById("videotitle").value=t.title,document.getElementById("Youtubeurl").value=t.urlpath,document.getElementById("description").innerHTML=t.description,"undefined"==typeof t.tags?document.getElementById("tags1").value="":document.getElementById("tags1").value=t.tags}}function addWatchLater(e,t,n){jQuery(n).find(".watch_later").removeClass("success-watch-later error-watch-later default-watch-later"),jQuery(n).find(".watch_later").addClass("loading-watch-later");var l="index.php?option=com_contushdvideoshare&tmpl=component&task=watchlater";jQuery.ajax({url:l,type:"POST",data:"&vid="+e,success:function(e){1==e&&(jQuery(n).find(".watch_later").removeClass("loading-watch-later error-watch-later default-watch-later"),jQuery(n).find(".watch_later").addClass("success-watch-later"),jQuery(n).find(".watch_later").attr("title",addedToWatchLater)),0==e&&(jQuery(n).find(".watch_later").removeClass("loading-watch-later success-watch-later default-watch-later"),jQuery(n).find(".watch_later").addClass("error-watch-later"),jQuery(n).find(".watch_later").attr("title",addWatchLaterError)),jQuery(n).attr("onclick","")}})}function removeWatchLater(e){var t=confirm(confirmRemoveWatchLater);if(1==t){var n="index.php?option=com_contushdvideoshare&tmpl=component&task=removewatchlater";jQuery.ajax({url:n,type:"POST",data:"&userId="+e,success:function(e){1==e&&(alert(watchLaterCleared),location.reload()),0==e&&(alert(clearWatchLaterError),location.reload())}})}}function ClearHistory(e,t){if("all"==e?confirmStatus=confirm(confirmClearWatchHistory):confirmStatus=confirm(confirmClearWatchHistorySingle),1==confirmStatus){var n="index.php?option=com_contushdvideoshare&task=ClearHistory";jQuery.ajax({url:n,type:"POST",data:{event:e,VideoId:t},success:function(e){location.reload()}})}}function PauseHistory(e){if("0"==e)var t=pauseWatchHistory,n=1;else var t=resumeWatchHistory,n=0;var l="index.php?option=com_contushdvideoshare&task=PauseHistory";jQuery.ajax({url:l,type:"POST",data:{status:e},success:function(e){"success"==e&&(jQuery("#PauseHistory").attr("onclick","PauseHistory("+n+");"),jQuery("#PauseHistory").text(t))}})}function nowPlaying(e,t){var n="index.php?option=com_contushdvideoshare&tmpl=component&task=videoPlaying";jQuery.ajax({url:n,type:"POST",data:"&videoId="+e,success:function(e){}})}var YoutubeVideoid,scriptLoaded=!1;window.onload=function(){jQuery.noConflict()},jQuery(".ulvideo_thumb").mouseover(function(){"function"==typeof htmltooltipCallback&&(htmltooltipCallback("htmltooltip","",rtlLang),htmltooltipCallback("htmltooltip1","1",rtlLang),htmltooltipCallback("htmltooltip2","2",rtlLang))});var http=createObject();