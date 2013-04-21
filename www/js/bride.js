//function to manage disbaled inpur fields
function ableDisable(id)
{
if($("#"+id).attr("disabled")=="disabled")
{
$("#"+id).removeAttr('disabled');
$("#"+id).removeAttr(id);
$("#"+id).attr('name',id);

if($("#"+id).val()=='')
{
$("#"+id).val(0);
}
update();
}
else
{
$("#"+id).attr('disabled',"disabled");

update();
}
}
function update()
{

var cal1=(parseFloat($("#cal1").val()))*(parseFloat($("#jumlz").val()));if(cal1=='NaN') {cal1=0;}
var cal2=parseFloat($("#cal2").val());if(cal2=='NaN') {cal2=0;}
var cal3=parseFloat($("#cal3").val());if(cal3=='NaN') {cal3=0;}
var cal4=parseFloat($("#cal4").val())*(parseFloat($("#jumlz").val()));if(cal4=='NaN') {cal4=0;}
var cal4a=(parseFloat($("#cal4a").val()));if(cal4a=='NaN') {cal4=0;}
var cal5=parseFloat($("#cal5").val());if(cal5=='NaN') {cal5=0;}
var cal6=parseFloat($("#cal6").val());if(cal6=='NaN') {cal6=0;}
var cal7=parseFloat($("#cal7").val());if(cal7=='NaN') {cal7=0;}
var cal8=(parseFloat($("#cal8").val()))*(parseFloat($("#sezi").val()));if(cal8=='NaN') {ca8=0;}
var cal9=(parseFloat($("#cal9").val()))*(parseFloat($("#sezi").val()));if(cal9=='NaN') {ca9=0;}
var cal10=(parseFloat($("#cal10").val()))*(parseFloat($("#jump").val()));if(cal10=='NaN') {cal0=0;}
var cal11=parseFloat($("#cal11").val());if(cal11=='NaN') {cal11=0;}
var min1=parseFloat($("#minus1").val());if(min1=='NaN') {min1=0;}
var min2=parseFloat($("#minus2").val());if(min2=='NaN') {min2=0;}
var min3=parseFloat($("#minus3").val());if(min3=='NaN') {min3=0;}



var total=cal1+cal2+cal3+cal4+cal4a+cal5+cal6+cal7+cal8+cal9+cal10+cal11;
    if($("#field1").attr("disabled")!=="disabled") { total=total+parseFloat($("#field1").val()); }
    if($("#field2").attr("disabled")!=="disabled") { total=total+parseFloat($("#field2").val()); }
    if($("#field3").attr("disabled")!=="disabled") { total=total+parseFloat($("#field3").val()); }
    if($("#field4").attr("disabled")!=="disabled") { total=total+parseFloat($("#field4").val()); }
    if($("#field5").attr("disabled")!=="disabled") { total=total+parseFloat($("#field5").val()); }
    if($("#field6").attr("disabled")!=="disabled") { total=total+parseFloat($("#field6").val()); }
    
var minus=min1+min2+min3;
if(total>0)
{
total=total-minus;
}
  $('#joomlah').text('RM '+total);
  $('#top').text('RM '+total);
  
  
  $('#twitter').attr('href','https://twitter.com/intent/tweet?text=Saya%20dijangka%20memerlukan%20sejumlah%20RM%20'+total+'%20untuk%20perkahwinan%20saya.%20Dapatkan%20anggaran%20untuk%20majlis%20anda%20juga%20di%20BajetKahwin.my');
  $('#facebook').attr('href','http://www.facebook.com/sharer.php?u=http%3A%2F%2Fanda.com&t=Saya%20dijangka%20memerlukan%20sejumlah%20RM%20'+total+'%20untuk%20perkahwinan%20saya.%20Dapatkan%20anggaran%20untuk%20majlis%20anda%20juga%20di%20BajetKahwin.my');
  
  
  



}

$(window).load(function(){if($.browser.msie){$("#rms").css({'margin-left' : '-9px','margin-top' : '-385px'})}});
function half()
{
var half=parseFloat($("#sezi").val());
$("#jump").val(half/2);
$("#cal11").val((half/2)*0.6);
}

function pointSix()
{
var half=parseFloat($("#jump").val());
$("#cal11").val(half*0.6);
}

function inputs()
{
var values=$('#select').val();
if(values=="NYATAKAN")
{
$('#calss').html('<input type="text" maxlength="5" id="cal1"  value="0" onchange="update()"/>');
}
else
{
$('#calss').html(' ');
}
}

function subs()
{
$('#email').block({message: '<img src="wait.gif"></img>'});
var rm=$('#joomlah').text();
var min1=parseFloat($("#minus1").val());if(min1!=='NaN') {c2="Mas Kahwin="+min1;}
var min2=parseFloat($("#minus2").val());if(min2!=='NaN') {c2 +="&Wang Hantaran ="+min2;}
var min3=parseFloat($("#minus3").val());if(min3!=='NaN') {c2 +="&Wang Ihasn="+min3;}
var cal1=(parseFloat($("#cal1").val()))*(parseFloat($("#jumlz").val()));if(cal1=='NaN') {c2 +='Katering_='+cal1;}
var cal2=parseFloat($("#cal2").val());if(cal2!=='NaN') { c2 +='&Sewa Lokasi='+cal2;}
var cal3=parseFloat($("#cal3").val());if(cal3!=='NaN') { c2 +='&Pelamin and Hisan='+cal3;}
var cal4=(parseFloat($("#cal4").val()))*(parseFloat($("#jumlz").val()));if(cal4!=='NaN') { c2 +='&Berkat='+cal4;}
var cal4a=parseFloat($("#cal4a").val());if(cal4!=='NaN') { c2 +='&Set Dulang Hantaran='+cal4a;}
var cal5=parseFloat($("#cal5").val());if(cal5!=='NaN') { c2 +='&Sewa Dewan atau Khemah='+cal5;}
var cal6=parseFloat($("#cal6").val());if(cal6!=='NaN') { c2 +='&Sewa Baju Pengantin='+cal6;}
var cal7=parseFloat($("#cal7").val());if(cal7!=='NaN') { c2 +='&Andaman pengantin perempuan='+cal7;}
var cal18=parseFloat($("#sezi").val());if(cal18!=='NaN') { c2 +='&Jumlah tetamu='+cal18;}
var cal8=(parseFloat($("#cal8").val()))*(parseFloat($("#sezi").val()));if(cal8!=='NaN') {c2 +='&Katering='+cal8;}
var cal9=(parseFloat($("#cal9").val()))*(parseFloat($("#sezi").val()));if(cal9!=='NaN') {c2 +='&Barkat/wedding favour='+cal9;}
var cal19=parseFloat($("#jump").val());if(cal19!=='NaN') { c2 +='&Bilangan penerima Kad jemputan='+cal19;}
var cal10=(parseFloat($("#cal10").val()))*(parseFloat($("#jump").val()));if(cal10!=='NaN') {c2 +='&Tempahan Kad jemputan='+cal10;}

var cal11=parseFloat($("#cal11").val());if(cal11!=='NaN') {c2 +='&Bilangan setem='+cal11;}



  var total=cal1+cal2+cal3+cal4+cal4a+cal5+cal6+cal7+cal8+cal9+cal10+cal11;
    if($("#field1").attr("disabled")!=="disabled") { total=total+parseFloat($("#field1").val()); if(parseFloat($("#field1").val())!=='NaN') {c2 +='&Pelamin & hiasan='+parseFloat($("#field1").val());} }
    if($("#field2").attr("disabled")!=="disabled") { total=total+parseFloat($("#field2").val()); if(parseFloat($("#field2").val())!=='NaN') {c2 +='&Silat atau Tarian='+parseFloat($("#field2").val());}}
    if($("#field3").attr("disabled")!=="disabled") { total=total+parseFloat($("#field3").val()); if(parseFloat($("#field3").val())!=='NaN') {c2 +='&Komping='+parseFloat($("#field3").val());}}
    if($("#field4").attr("disabled")!=="disabled") { total=total+parseFloat($("#field4").val()); if(parseFloat($("#field4").val())!=='NaN') {c2 +='&Hiburan='+parseFloat($("#field4").val());}}
    if($("#field5").attr("disabled")!=="disabled") { total=total+parseFloat($("#field5").val()); if(parseFloat($("#field5").val())!=='NaN') {c2 +='&Pengacara='+parseFloat($("#field5").val());}}
    if($("#field6").attr("disabled")!=="disabled") { total=total+parseFloat($("#field6").val()); if(parseFloat($("#field6").val())!=='NaN') {c2 +='&Jurugambar='+parseFloat($("#field6").val());}}
   c2 +='&email='+$("#emailss").val();
 
var minus=min1+min2+min3;
if(total>0)
{
total=total-minus;
}
  c2 +='&total='+total;
$.ajax({
   type: "POST",
   cache: false,
   url: "send.php",
   data: c2,
   success: function(html){
   setTimeout($('#email').unblock(),6000);
   $('#email').html(html);
   ;

   }
 });
   }
 
$("#joomlah").html("margin-left4px");