goog.provide('doll.client.main');
goog.require('cljs.core');
goog.require('doll.client.lib.types');
goog.require('jayq.util');
goog.require('doll.client.lib.protocols');
goog.require('jayq.core');
goog.require('jayq.util');
goog.require('doll.client.lib.protocols');
goog.require('doll.client.lib.types');
doll.client.main.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
doll.client.main.key_codes = cljs.core.ObjMap.fromObject(["\uFDD0'a","\uFDD0'w","\uFDD0's","\uFDD0'd"],{"\uFDD0'a":65,"\uFDD0'w":87,"\uFDD0's":83,"\uFDD0'd":68});
doll.client.main.test_shapes = cljs.core.concat.call(null,cljs.core.map.call(null,(function (zpos){
return cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,200,200)),"\uFDD0'x":200,"\uFDD0'y":0,"\uFDD0'z":(250 * zpos),"\uFDD0'color":14483677});
}),cljs.core.range.call(null,-20,20)),cljs.core.map.call(null,(function (xpos){
return cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":(250 * xpos),"\uFDD0'y":0,"\uFDD0'z":0,"\uFDD0'color":56797});
}),cljs.core.range.call(null,-20,20)));
doll.client.main.render = (function render(view,p__644296){
var map__644308__644309 = p__644296;
var map__644308__644310 = ((cljs.core.seq_QMARK_.call(null,map__644308__644309))?cljs.core.apply.call(null,cljs.core.hash_map,map__644308__644309):map__644308__644309);
var color__644311 = cljs.core._lookup.call(null,map__644308__644310,"\uFDD0'color",null);
var z__644312 = cljs.core._lookup.call(null,map__644308__644310,"\uFDD0'z",null);
var y__644313 = cljs.core._lookup.call(null,map__644308__644310,"\uFDD0'y",null);
var x__644314 = cljs.core._lookup.call(null,map__644308__644310,"\uFDD0'x",null);
var shape__644315 = cljs.core._lookup.call(null,map__644308__644310,"\uFDD0'shape",null);
var geometry__644316 = doll.client.lib.protocols.draw.call(null,shape__644315);
var material__644317 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__644311,"\uFDD0'wireframe":true}))));
var mesh__644318 = (new THREE.Mesh(geometry__644316,material__644317));
(mesh__644318["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":x__644314,"\uFDD0'y":y__644313,"\uFDD0'z":z__644312})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__644318);
return mesh__644318;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__644320 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__644320.width() / $canvas__644320.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__644320.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__644320.width(),$canvas__644320.height());
$canvas__644320.mouseenter((function (){
return $canvas__644320.focus();
}));
return view;
});
doll.client.main.update_position_fields = (function update_position_fields(model,x_function,z_function){
var old_x__644325 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'x");
var old_z__644326 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'z");
return doll.client.lib.protocols.set_fields.call(null,model,cljs.core.PersistentVector.fromArray(["\uFDD0'x",x_function.call(null,old_x__644325),"\uFDD0'z",z_function.call(null,old_z__644326)], true));
});
doll.client.main.update_position = (function update_position(model,_PLUS_or_){
var yrot__644332 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'yrot");
var x_delta__644333 = (5 * Math.sin.call(null,yrot__644332));
var z_delta__644334 = (5 * Math.cos.call(null,yrot__644332));
return doll.client.main.update_position_fields.call(null,model,(function (p1__644321_SHARP_){
return _PLUS_or_.call(null,p1__644321_SHARP_,x_delta__644333);
}),(function (p1__644322_SHARP_){
return _PLUS_or_.call(null,p1__644322_SHARP_,z_delta__644334);
}));
});
doll.client.main.format_data = (function format_data(data){
var clj_data__644338 = cljs.core.js__GT_clj.call(null,data,"\uFDD0'keywordize-keys",true);
return cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge_with.call(null,(function (p1__644328_SHARP_,p2__644327_SHARP_){
return parseFloat(p2__644327_SHARP_);
}),clj_data__644338,cljs.core.select_keys.call(null,clj_data__644338,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'yrot"], true)))));
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400,"\uFDD0'yrot",0], true));
var deferred__644344 = jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"GET"}));
deferred__644344.done((function (data){
return doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),doll.client.main.format_data.call(null,data));
}));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shape"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200))}),doll.client.lib.protocols.get_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true)))));
var $canvas__644345 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
var character__644346 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
var model__644347 = (new cljs.core.Keyword("\uFDD0'model")).call(null,view);
character__644346.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
doll.client.lib.protocols.on.call(null,model__644347,"\uFDD0'any-change",cljs.core.not_EQ_,(function (fieldmap){
(character__644346["position"] = jayq.util.map__GT_js.call(null,cljs.core.select_keys.call(null,fieldmap,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true))));
(character__644346["rotation"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":fieldmap.call(null,"\uFDD0'yrot"),"\uFDD0'z":0})));
return jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data"],{"\uFDD0'type":"POST","\uFDD0'data":fieldmap}));
}));
jayq.core.on.call(null,$canvas__644345,"\uFDD0'keydown",(function (event){
var which__644348 = (event["which"]);
if(cljs.core._EQ_.call(null,which__644348,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return doll.client.lib.protocols.update_field.call(null,model__644347,"\uFDD0'yrot",(function (p1__644335_SHARP_){
return (p1__644335_SHARP_ + 0.1);
}));
} else
{if(cljs.core._EQ_.call(null,which__644348,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return doll.client.main.update_position.call(null,model__644347,cljs.core._);
} else
{if(cljs.core._EQ_.call(null,which__644348,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return doll.client.main.update_position.call(null,model__644347,cljs.core._PLUS_);
} else
{if(cljs.core._EQ_.call(null,which__644348,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return doll.client.lib.protocols.update_field.call(null,model__644347,"\uFDD0'yrot",(function (p1__644336_SHARP_){
return (p1__644336_SHARP_ - 0.1);
}));
} else
{return null;
}
}
}
}
}));
return view;
});
doll.client.main.animate = (function animate(view){
requestAnimationFrame((function (){
return animate.call(null,view);
}));
var renderer__644352 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__644353 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__644354 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__644352.render(scene__644354,camera__644353);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
