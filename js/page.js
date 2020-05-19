!function() {
    var t = "" + window.location.host
      , o = t + "/api/auth"
      , e = ""
      , n = ""
      , i = ""
      , a = ""
      , c = !0
      , p = function(t) {
        var o = new RegExp("(^|&)" + t + "=([^&]*)(&|$)")
          , e = window.location.search.substr(1).match(o);
        return null != e ? unescape(e[2]) : null
    }
      , l = function(t) {
        var o;
        return o = encodeURIComponent(t),
        o = unescape(o),
        o = window.btoa(o)
    }
      , s = function() {
        var t = navigator.userAgent;
        navigator.appVersion;
        return {
            trident: t.indexOf("Trident") > -1,
            presto: t.indexOf("Presto") > -1,
            webKit: t.indexOf("AppleWebKit") > -1,
            gecko: t.indexOf("Gecko") > -1 && -1 == t.indexOf("KHTML"),
            mobile: !!t.match(/AppleWebKit.*Mobile.*/),
            ios: !!t.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android: t.indexOf("Android") > -1 || t.indexOf("Linux") > -1,
            iPhone: t.indexOf("iPhone") > -1,
            iPad: t.indexOf("iPad") > -1,
            webApp: -1 == t.indexOf("Safari"),
            wx: t.indexOf("MicroMessenger") > -1,
            QQ: /\sQQ\//.test(t),
            iphoneX: /iphone/gi.test(navigator.userAgent) && 812 == screen.height && 375 == screen.width
        }
    }
      , r = function() {
        n = p("wx_id"),
        a = p("auth_id"),
        i = p("app_id");
        var e = window.location.href;
        o = encodeURIComponent(o + "?link_data=" + l(e)),
        null != a && sessionStorage.setItem("tppOpenId", a);
        var c = "" + i + "&redirect_uri=" + o + "&response_type=code&scope=snsapi_base&state=STATE#wechat_redirect";
        null == sessionStorage.getItem("tppOpenId") ? window.location = c : ($("body").show(),
        a = sessionStorage.getItem("tppOpenId"),
        1 == n ? $(".tkl-copy .copy-text").html("￥NFHQYJoGbjd￥") : 2 == n || (3 == n ? $(".tkl-copy .copy-text").html("￥hXJQYJotEgX￥") : 4 == n ? $(".tkl-copy .copy-text").html("￥iR5BYJoG7fC￥") : 5 == n ? $(".tkl-copy .copy-text").html("") : 6 == n ? $(".tkl-copy .copy-text").html("") : 7 == n ? $(".tkl-copy .copy-text").html("￥7XefYJoGc4r￥") : 8 == n ? $(".tkl-copy .copy-text").html("￥BgBjYJouOln￥") : 9 == n ? $(".tkl-copy .copy-text").html("￥4T4oYJouNCH￥") : 10 == n ? $(".tkl-copy .copy-text").html("￥z4dWYJoue7E￥") : 11 == n ? $(".tkl-copy .copy-text").html("￥71gJYJoFIx1￥") : 15 == n && $(".tkl-copy .copy-text").html("￥IKABYJovYIa￥")),
        $(".hd-box .ts-btn").attr("href", t + "http://rrt361.com" + n + "&app_id=" + i))
    }
      , d = function(t, o) {
        var e, n;
        $(t).on("click", function() {
            if (1 == o)
                var t = $(".copy-text").text();
            else {
                var t = $(".coupon-tkl").attr("data-tkl");
                e = $("#copybtn2").attr("data-title"),
                n = $("#copybtn2").attr("data-id")
            }
            t = t.replace(/<br>/gi, ""),
            $(".share-content").html(t),
            $(".share-content").show()
        });
        var i = new Clipboard(t,{
            text: function() {
                return $(".share-content").html()
            }
        });
        i.on("success", function(t) {
            1 == o ? ($("#copybtn1").hide(),
            $(".tkl-copy .succeed-btn").css("display", "block"),
            setTimeout(function() {
                $("#copybtn1").show(),
                $(".tkl-copy .succeed-btn").hide()
            }, 3e3)) : (t.trigger.innerHTML = "复制成功，请打开淘宝APP",
            t.trigger.style.backgroundColor = "#53ae33",
            t.trigger.style.borderColor = "#53ae33",
            c && x(e, n)),
            $(".share-content").hide(),
            t.clearSelection()
        }),
        i.on("error", function(t) {
            t.trigger.innerHTML = "复制失败",
            setTimeout(function() {
                t.trigger.innerHTML = "硬件不支持"
            }, 1e3),
            t.trigger.style.backgroundColor = "#fc5756",
            t.trigger.style.borderColor = "#fc5756",
            $(".share-content").hide(),
            t.clearSelection()
        })
    }
      , u = function() {
        $.ajax({
            url: t + "/api/tb-index",
            type: "post",
            dataType: "json",
            data: {
                wx_id: n,
                pagesize: 50
            },
            success: function(t) {
                200 == t.code && ("" != t.data && $.each(t.data, function(t, o) {
                    var e = '<li data-id="' + o.num_iid + '" data-tkl=""><img src="release/images/pro-default.png" data-original="' + o.pict_url + '_400x400.jpg" alt="" class="lazy pic"><div class="name ell-two"><span class="eleven">11.11</span><span class="title">' + o.title + '</span></div><div class="coupon-fanli"><span class="coupon">￥' + parseInt(o.yhj_price) + '</span><span class="fanli">返' + o.fl_price + '元</span></div><div class="price"><span class="tit">券后价</span><span class="qh">¥' + o.qh_price + '</span><span class="yj">' + o.zk_final_price + "</span></div></li>";
                    $(".product-recommend ul").append(e)
                }),
                $(".lazy").lazyload({
                    effect: "fadeIn"
                }))
            }
        })
    }
      , h = function(o, e, i) {
        $.ajax({
            url: t + "/api/tb-single",
            type: "post",
            dataType: "json",
            data: {
                wx_id: n,
                openid: a,
                keyword: i,
                is_copy: "tkl"
            },
            success: function(t) {
                200 == t.code && "" != t.data && (o.attr("data-tkl", e + t.data),
                $(".copy-tkl").attr("data-tkl", e + t.data),
                $(".tkl-text").html(e + t.data + "，复制整段文字，打开【手淘APP】即可领劵购买。"),
                $(".coupon-tklbox").show(),
                $("#copybtn2").attr("data-title", e),
                $("#copybtn2").attr("data-id", i))
            }
        })
    }
      , x = function(o, e) {
        $.ajax({
            url: t + "/api/copy-tkl",
            type: "post",
            dataType: "json",
            data: {
                wx_id: n,
                openid: a,
                title: o,
                num_iid: e
            },
            success: function(t) {
                200 == t.code && (c = !1)
            }
        })
    };
    !function() {
        n = p("wx_id"),
        i = p("app_id"),
      //  r(),
       // u(),
        d("#copybtn1", 1),
        d("#copybtn2", 2),
        $(document).on("keyup", ".search-box input", function(o) {
            e = $(this).val(),
            "13" == o.keyCode && (o.preventDefault(),
            location.href = t + "http://rrt361.com" + encodeURIComponent(e) + "&wx_id=" + n + "&app_id=" + i)
        }),
        $(".search-box input").focus(function() {
            s().android && $(this).val(" ")
        }),
        $(".search-box i").on("click", function(o) {
            e = $(".search-box input").val(),
            location.href = t + "http://rrt361.com" + encodeURIComponent(e) + "&wx_id=" + n + "&app_id=" + i
        }),
        $(document).on("click", ".product-list li", function(t) {
            var o = $(this).attr("data-tkl")
              , e = $(this).attr("data-id")
              , n = $(this).find(".title").text();
            $(this).find(".pic").attr("src");
            "" == o ? h($(this), n, e) : ($(".copy-tkl").attr("data-tkl", o),
            $(".tkl-text").html(o),
            $(".coupon-tklbox").show())
        }),
        $(".coupon-tklbox").on("click", function(t) {
            0 == $(t.target).closest(".coupon-tkl").length && ($(".coupon-tklbox").hide(),
            c = !0,
            $(".coupon-tklbox .copy-btn").removeAttr("style"),
            $(".coupon-tklbox .copy-btn a").html("一键复制淘口令"))
        }),
        $(".coupon-tklbox .sy-link").on("click", function(t) {
            $(".coupon-tklbox").hide(),
            istklRecord = !0,
            $(".coupon-tklbox .copy-btn a").html("一键复制淘口令"),
            $(".video-box img").attr("src", "http://static.jinrmb.com/taopopo/release/images/video.gif"),
            $(".video-box").show()
        }),
        $(".video-box .close").on("click", function(t) {
            $(".video-box").hide()
        })
    }()
}();
