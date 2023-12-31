$(function () {
    let arr = [0, 0, 0, 0, 0]
    $('#dowebok').fullpage({
        'navigation': true,
        'navigationPosition': "right",
        'navigationColor': ['#fff'],
        scrollingSpeed: 1000,
        fitToSectionDelay: 600,
        // 设置每一屏的背景颜色
        // "sectionsColor": ['#f00', '#0f0', '#00f', '#000'],
        /*
              1.onLeave (origin, destination, direction)
              一旦用户离开某个节，过渡到新节，就会触发此回调。 返回“false”将在移动发生之前取消移动
              origin: (Object) 起始章节相关信息
              destination: (Object) 目标章节相关信息。
              direction: (String) 它将根据滚动方向采用up或down值。
          */
        "onLeave": function (origin, destination, direction) {
            console.log("origin, destination, direction", origin, destination, direction);
            switch (origin) {
                case 1:
                    console.log("arr[origin]", arr[origin]);
                    if (arr[origin] == 0) {
                        // var typed = new Typed('#c201', {
                        //     stringsElement: '#c201c',
                        //     typeSpeed: 50,
                        //     showCursor: false,
                        // });
                        // var typed = new Typed('#c202', {
                        //     stringsElement: '#c202c',
                        //     typeSpeed: 50,
                        //     showCursor: false,
                        // });
                        var typed = new Typed('#c203', {
                            stringsElement: '#c203c',
                            typeSpeed: 50,
                            showCursor: false,
                        });
                        arr[origin] = -1;
                    }
                    break;
                case 2:
                // console.log("arr[origin]",arr[origin]);
                // if(arr[origin]==0){
                //     var typed = new Typed('#c301', {
                //         stringsElement: '#c301c',
                //         typeSpeed: 50,
                //         showCursor: false,
                //     });
                //     var typed = new Typed('#c302', {
                //         stringsElement: '#c302c',
                //         typeSpeed: 50,
                //         showCursor: false,
                //     });
                //     var typed = new Typed('#c303', {
                //         stringsElement: '#c303c',
                //         typeSpeed: 50,
                //         showCursor: false,
                //     });
                //     arr[origin]=-1;
                // }
                // break;
                case 3:
                    if (arr[origin] == 0) {
                        // var typed = new Typed('#c401', {
                        //     stringsElement: '#c401c',
                        //     typeSpeed: 50,
                        //     showCursor: false,
                        // });
                        arr[origin] = -1;
                    }
                    break;
                case 4:
                    setTimeout(function () { location.href = "impress_index.html"; }, 1500);
                    console.log("arr[origin]", arr[origin]);
                    if (arr[origin] == 0) {
                        // var typed = new Typed('#c201', {
                        //     stringsElement: '#c201c',
                        //     typeSpeed: 50,
                        //     showCursor: false,
                        // });
                        // var typed = new Typed('#c202', {
                        //     stringsElement: '#c202c',
                        //     typeSpeed: 50,
                        //     showCursor: false,
                        // });
                        arr[origin] = -1;
                    }
                    break;
                case 5:
                    
                    break;
                default:
                    break;
            }
            //console.log("滚动之前调用", origin, destination, direction);
        },
        /*
            2.afterLoad (origin, destination, direction)
            滚动结束之后，一旦加载了节，就会触发回调。参数：
            origin: (Object) 起始章节相关信息
            destination: (Object) 目标章节相关信息。
            direction: (String) 它将根据滚动方向采用up或down值。
        */
        "afterLoad": function (origin, destination, direction) {
            //console.log("滚动之后调用", origin, destination, direction);
        }
    });
});

let t = anime.timeline({
    easing: 'easeOutExpo',
    duration: 0,
    loop: false
});
t.add({
    targets: '.shape',
    duration: 2000,
    update: function (anim) {
        if (anim.progress >= 100) {
            document.querySelectorAll('.shape').forEach((e, i) => {
                e.classList.remove('shape');
                e.classList.add('rectangle');
            });
        }
    },
});
var typed = new Typed('#c101', {
    // strings: [c101],
    stringsElement: '#c101c',
    typeSpeed: 50,
    startDelay: 2000,
    showCursor: false,
});