define(["template"],function(a){function b(b){"use strict";b=b||{};var c=a.utils,d=(c.$helpers,c.$escape),e=b.lineIndex,f=c.$each,g=b.currDims,h=(b.$dim,b.$index,b.boxIndex),i=b.refreshType,j="";return j+='<!--\r\nvar demoData = {\r\n                currDims: [\r\n                    {"id": "dim1", "name": "维度1"},\r\n                    {"id": "dim2", "name": "维度2"},\r\n                    {"id": "dim3", "name": "维度3"}\r\n                ],\r\n                boxIndex: 1,\r\n                lineIndex: 2\r\n            };\r\n-->\r\n<div class="callback-relation-box c-f j-callback-relation-box" bodyIndex=',j+=d(e),j+='>\r\n    <span class="callback-broken-line"></span>\r\n    <div class="callback-relation-content">\r\n        <div class="first-part c-f">\r\n            <span>选择被关联表：</span>\r\n            <select>\r\n                <option value="0">请选择</option>\r\n                ',f(g,function(a){j+="\r\n                <option value=",j+=d(a.id),j+=">",j+=d(a.name),j+="\r\n                </option>\r\n                "}),j+='\r\n            </select>\r\n        </div>\r\n        <div class="callback-relation-content-two-part c-f">\r\n            <span class="callback-address-name">选择回调字段：</span>\r\n            <input type="text" name="" id="" class="callback-address-input j-callback-address-input" value="" />\r\n            <span class="callback-address-prompt">\r\n                例如：http://10.46.133.66:8999/pfplat/callbackmock.action\r\n            </span>\r\n        </div>\r\n        <div class="callback-relation-content-three-part c-f">\r\n            <span class="callback-cache-name">选取缓存类型：</span>\r\n            <div>\r\n                <input type="radio" value="1" class="callback-cache-type-right-input" name="callback-cache-body',j+=d(h),j+="-box",j+=d(e),j+='"\r\n                ',1===i&&(j+=' checked="checked" '),j+=' />\r\n                <label class="callback-cache-type-right-label">\r\n                    无需缓存（数据量大，不推荐）\r\n                </label>\r\n            </div>\r\n            <div>\r\n                <input type="radio" value="2" class="callback-cache-type-right-input" name="callback-cache-body',j+=d(h),j+="-box",j+=d(e),j+='"\r\n                ',2===i&&(j+=' checked="checked" '),j+=' />\r\n                <label class="callback-cache-type-right-label">\r\n                    在数据刷新后立刻刷新缓存\r\n                </label>\r\n            </div>\r\n            <div class="ml-89">\r\n                <input type="radio" value="3" class="callback-cache-type-right-input" name="callback-cache-body',j+=d(h),j+="-box",j+=d(e),j+='"\r\n                ',3===i&&(j+=' checked="checked" '),j+=' />\r\n                    <span class="callback-cache-type-right-label">间隔\r\n                    <input type="text" class="callback-cache-type-interval j-callback-cache-type-interval" value="" />\r\n                    秒刷新一次缓存</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <span class="delete j-callback-delete"></span>\r\n    <span class="add j-callback-add"></span>\r\n</div>\r\n\r\n\r\n'}return{render:b}});