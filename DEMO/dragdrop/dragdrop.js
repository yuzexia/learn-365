var Dragdrop = function () {
    var dragdrop = new EventTarget(),
        dragging = null,
        diffX = 0,
        diffY = 0;

    function handleEvent(event) {
        // 获取事件和对象
        // EventUtil是一个封装好的对象
        event = EventUtil.getEvent(event);
        var target = EventUtil.getTarget(event);

        // 确定事件类型

        switch (event.type) {
            case 'mousedown':
                if (target.className.indexOf('draggable') > -1) {
                    dragging = target;
                    diffX = event.clientX - target.offsetLeft;
                    diffY = event.clientY - target.offsetTop;
                    dragdrop.fire({ type: 'dragstart', target: dragging, x: event.clientX, y: event.clientY });
                }
                break;
            case 'mousemove':
                if (dragging !== null) {
                    // 指定位置
                    dragging.syle.left = (event.clientX - diffX) + 'px';
                    dragging.syle.top = (event.clientY - diffY) + 'px';
                    // 触发自定义事件
                    dragdrop.fire({ type: 'drag', target: dragging, x: event.clientX, y: event.clientY });
                }
                break;
            case 'mouseup':
                dragdrop.fire({ type: 'dragend', target: dragging, x: event.clientX, y: event.clientY });
                break;
        }
    };
    // 公共接口
    dragdrop.enable = function(){
        EventUtil.addHandler(document,'mousedown',handleEvent);
        EventUtil.addHandler(document,'mousemove',handleEvent);
        EventUtil.addHandler(document,'mouseup',handleEvent);
    };
    dragdrop.disable = function(){
        EventUtil.addHandler(document,'mousedown',handleEvent);
        EventUtil.addHandler(document,'mousemove',handleEvent);
        EventUtil.addHandler(document,'mouseup',handleEvent);
    };

    return dragdrop;
}