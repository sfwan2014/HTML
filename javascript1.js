	(function ($) {
    var _code = [
		    '<div id="error" style="display:none;">',
			    '<div class="errornr">',
				    '<h4>娓╅Θ鎻愮ず</h4>',
				    '<p>@message</p>',
				    '<button id="errorbtn">纭</button>',
			    '</div>',
		    '</div>'];
    $.extend({
        message: function (parameters) {
            if ($('#error').length == 0) {
                $('body').append(_code.join('').replace(/@message/gi,parameters.message));
                $('#error').width(parameters.width);
                $('#error').show();
                $('#errorbtn').click(function () {
                    $('#error').hide();
                    if (parameters.callback) {
                        parameters.callback();
                    }
                });
            } else {
                $('#error').width(parameters.width).show().find('p').html(parameters.message);
            }
        }
    });
})(jQuery);


$(function(){


	var ht = $('#details-con').height();//details-judge
	var de_on=$('#details-mask');
	var de_jude_mtop= ht/4;
	var de_jude_mht= ht/2;
	var dekide_mask1 = $('#details-mask1').height();
	var htj= ht + 20;
	var ht=$(window).height();
	var wra= $(window).height();
    var widt = $(window).width();

    var title = $('.title').height();

    var body = wra - title - 50;
    var bentter = body / 3;
    $('.details-banner').height(bentter);
    $('.details-banner img ').css({width:'100%', height:bentter})

	$('#wrapper').height(bentter * 2 )

    $('#error').css({width:widt, height:wra})
    $('#error').css({width:widt, height:wra})
    


	$('#btn').bind('touchend',function(){
		$('#details-mask').css({ display: "block"});
		if($('#details-con').height()>=ht){
			$('#details-mask').height(htj);
			$('#details-mask1').height(htj);
			/*$('.details-judge').css({top:de_jude_mht})*/
		}else{
			$('#details-mask').height(ht);
			$('#details-mask1').height(ht);		
		}
		 var Dt = $('.details-judge dl dt').width();
    var Imgc = $('.details-judge dl dt img');
    var Img = $(Imgc).width();
    var Dtimg = Dt-Img;
    Imgc.css({marginLeft:Dtimg/2});
	})
	$('#details_qx').bind('click',function(){
		$('#details-mask').css({ display: "none"});
         location.reload();
	})

	/*$('#details_qr').bind('click',function(){
		alert('鍏戞崲鎴愬姛');
		$('#details-mask').css({ display: "none"});
	})*/

	$('#btn_no').bind('click',function(){
		alert('鎮ㄧ殑绉垎涓嶈冻锛岃刀蹇幓璧氬彇绉垎鍚�')
	})


//鍏戞崲鎴愬姛鍚庤烦杞殑椤甸潰閾炬帴
function myJump(){
   window.location.href="http://182.92.234.132/mobile/wallet/commodity";
}
//杩斿洖鎸夐挳
function rollback(){
	alert(1);
    //window.app.back();
//    window.location.href="go_back";
}

//杩斿洖鎸夐挳
/*$('.return').bind('touchend',function(){
    location.href = document.referrer;
    //window.history.go(-1)

})*/





$('#details_qr').one('touchend',function(){
   
//	var error = "<div id = 'error'><div class='errornr'><h4>娓╅Θ鎻愮ず</h4><p>鐢变簬缃戠粶鍘熷洜鍔犺浇澶辫触璇烽噸璇�</p><button id='errorbtn'>纭</button></div></div>";
 	var _ajax = $.ajax({
        url: "http://182.92.234.132/mobile/wallet/commodity/change",
        
        data: { commodityId: $("#commodityId").val() },
        cache: false,
        dataType: "json",
        type: "post",
        timeout: 20000,
        success: function (response) {
            /*if (back) {
                alert("鎴愬姛杩斿洖");
            }*/
            if (response && response.code == 0) {
//鎴愬姛鎻愮ず
				jQuery.message({message:"鍏戞崲鎴愬姛",callback:myJump});

            }else {
               jQuery.message({message:(response && response.values.message) || '鏈嶅姟鍣ㄥ紓甯革紒',width:400});
               //jQuery.message({message:"璇锋眰鎴愬姛锛屼絾鏈嶅姟绔繑鍥為敊璇�",callback:null});
            }
        },
        complete: function (XMLHttpRequest, status) {
            if (status == 'timeout') {//瓒呮椂,status杩樻湁success,error绛夊€肩殑鎯呭喌
                if (_ajax != null) {                   
                    _ajax.abort();
                }
                /*alert("鐢变簬缃戠粶鍘熷洜鍔犺浇澶辫触璇烽噸璇�");// jQuery.message({message:"鐢变簬缃戠粶鍘熷洜鎿嶄綔澶辫触璇烽噸璇�",width:400});*/
 //鎻愮ず閿欒寮瑰眰
 			jQuery.message({message:"璇锋眰瓒呮椂",callback:null});

            } else if (status == 'error') {
              
 //鎻愮ず閿欒寮瑰眰
			//jQuery.message({message:"鎻愮ず淇℃伅",width:400,callback:null});
			jQuery.message({message:"璇锋眰鍙戠敓閿欒",callback:null});
          
     
            }
        }
    })
})

   


	
})
