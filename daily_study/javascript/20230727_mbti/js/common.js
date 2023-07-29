$(function(){
    var num = 1;
    var q = {
        1: {"title":"문제1번", "type": "EI", "a":"E", "b":"I"},
        2: {"title":"문제2번", "type": "EI", "a":"E", "b":"I"},
        3: {"title":"문제3번", "type": "EI", "a":"E", "b":"I"},

        4: {"title":"문제4번", "type": "SN", "a":"S", "b":"N"},
        5: {"title":"문제5번", "type": "SN", "a":"S", "b":"N"},
        6: {"title":"문제6번", "type": "SN", "a":"S", "b":"N"},

        7: {"title":"문제7번", "type": "TF", "a":"T", "b":"F"},
        8: {"title":"문제8번", "type": "TF", "a":"T", "b":"F"},
        9: {"title":"문제9번", "type": "TF", "a":"T", "b":"F"},

        10: {"title":"문제10번", "type": "JP", "a":"J", "b":"P"},
        11: {"title":"문제11번", "type": "JP", "a":"J", "b":"P"},
        12: {"title":"문제12번", "type": "JP", "a":"J", "b":"P"}
    }

    var result = {
        "ISTJ": {"animal": "하마", "explain": "하마 설명", "img": "./img/hippo.png"},
        "ENFP": {"animal": "멋쟁이사자", "explain": "멋쟁이사자 설명", "img": "./img/lion.png"},
        "ENTJ": {"animal": "호랑이", "explain": "호랑이 설명", "img": "./img/tiger.png"},
    }

    start();
    function start(){
        $(".start").click(function(){
            $(this).hide();
            $(".question").show();
        });
        next();
    }
    $("#a").click(function(){
        var type = $("#type").val();
        var preValue = $("#"+type).val();
        $("#"+type).val(parseInt(preValue)+1);
        next();
    });
    $("#b").click(function(){
        next();
    });

    function next(){
        if (num == 13) {
            $(".question").hide();
            $(".result").show();
            var mbti = "";
            ($("#EI").val() < 2) ? mbti+="I" : mbti+="E";
            ($("#SN").val() < 2) ? mbti+="N" : mbti+="S";
            ($("#TF").val() < 2) ? mbti+="F" : mbti+="T";
            ($("#JP").val() < 2) ? mbti+="P" : mbti+="J";
            alert(mbti);

            $("#img").attr("src",result[mbti]["img"]);
            $("#animal").html(result[mbti]["animal"]);
            $("#explain").html(result[mbti]["explain"]);

        }else {
            $(".progress-bar").attr("style", "width: calc(100 / 12 * " + num + "%)")
            $("#title").html(q[num]["title"]);
            $("#type").val(q[num]["type"]);
            $("#a").html(q[num]["a"]);
            $("#b").html(q[num]["b"]);
            num++;
        }

    }

});