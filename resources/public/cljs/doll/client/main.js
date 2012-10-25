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
doll.client.main.test_shapes = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":0,"\uFDD0'color":56797}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":-50,"\uFDD0'color":14540032}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'x":-100,"\uFDD0'y":100,"\uFDD0'z":-100,"\uFDD0'color":4491281}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,50,200)),"\uFDD0'x":200,"\uFDD0'y":0,"\uFDD0'z":-500,"\uFDD0'color":14483677}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,200,200)),"\uFDD0'x":200,"\uFDD0'y":0,"\uFDD0'z":-700,"\uFDD0'color":221})], true);
doll.client.main.render = (function render(view,p__572620){
var map__572632__572633 = p__572620;
var map__572632__572634 = ((cljs.core.seq_QMARK_.call(null,map__572632__572633))?cljs.core.apply.call(null,cljs.core.hash_map,map__572632__572633):map__572632__572633);
var color__572635 = cljs.core._lookup.call(null,map__572632__572634,"\uFDD0'color",null);
var z__572636 = cljs.core._lookup.call(null,map__572632__572634,"\uFDD0'z",null);
var y__572637 = cljs.core._lookup.call(null,map__572632__572634,"\uFDD0'y",null);
var x__572638 = cljs.core._lookup.call(null,map__572632__572634,"\uFDD0'x",null);
var shape__572639 = cljs.core._lookup.call(null,map__572632__572634,"\uFDD0'shape",null);
var geometry__572640 = doll.client.lib.protocols.draw.call(null,shape__572639);
var material__572641 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__572635,"\uFDD0'wireframe":true}))));
var mesh__572642 = (new THREE.Mesh(geometry__572640,material__572641));
(mesh__572642["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":x__572638,"\uFDD0'y":y__572637,"\uFDD0'z":z__572636})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__572642);
return mesh__572642;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__572644 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__572644.width() / $canvas__572644.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__572644.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__572644.width(),$canvas__572644.height());
$canvas__572644.mouseenter((function (){
return $canvas__572644.focus();
}));
return view;
});
doll.client.main.update_position_fields = (function update_position_fields(model,x_function,z_function){
var old_x__572649 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'x");
var old_z__572650 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'z");
return doll.client.lib.protocols.set_fields.call(null,model,cljs.core.PersistentVector.fromArray(["\uFDD0'x",x_function.call(null,old_x__572649),"\uFDD0'z",z_function.call(null,old_z__572650)], true));
});
doll.client.main.update_position = (function update_position(model,_PLUS_or_){
var yrot__572656 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'yrot");
var x_delta__572657 = (5 * Math.sin.call(null,yrot__572656));
var z_delta__572658 = (5 * Math.cos.call(null,yrot__572656));
return doll.client.main.update_position_fields.call(null,model,(function (p1__572645_SHARP_){
return _PLUS_or_.call(null,p1__572645_SHARP_,x_delta__572657);
}),(function (p1__572646_SHARP_){
return _PLUS_or_.call(null,p1__572646_SHARP_,z_delta__572658);
}));
});
doll.client.main.format_data = (function format_data(data){
var clj_data__572662 = cljs.core.js__GT_clj.call(null,data,"\uFDD0'keywordize-keys",true);
return cljs.core.flatten.call(null,cljs.core.vec.call(null,cljs.core.merge_with.call(null,(function (p1__572652_SHARP_,p2__572651_SHARP_){
return parseFloat(p2__572651_SHARP_);
}),clj_data__572662,cljs.core.select_keys.call(null,clj_data__572662,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z","\uFDD0'yrot"], true)))));
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400,"\uFDD0'yrot",0], true));
var deferred__572668 = jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type"],{"\uFDD0'type":"GET"}));
deferred__572668.done((function (data){
console.log(data);
console.log(doll.client.main.format_data.call(null,data));
return doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),doll.client.main.format_data.call(null,data));
}));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shape"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200))}),doll.client.lib.protocols.get_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true)))));
var $canvas__572669 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
var character__572670 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
var model__572671 = (new cljs.core.Keyword("\uFDD0'model")).call(null,view);
character__572670.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
doll.client.lib.protocols.on.call(null,model__572671,"\uFDD0'any-change",cljs.core.not_EQ_,(function (fieldmap){
(character__572670["position"] = jayq.util.map__GT_js.call(null,cljs.core.select_keys.call(null,fieldmap,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true))));
(character__572670["rotation"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":fieldmap.call(null,"\uFDD0'yrot"),"\uFDD0'z":0})));
return jayq.core.ajax.call(null,"/character/id",cljs.core.ObjMap.fromObject(["\uFDD0'type","\uFDD0'data"],{"\uFDD0'type":"POST","\uFDD0'data":fieldmap}));
}));
jayq.core.on.call(null,$canvas__572669,"\uFDD0'keydown",(function (event){
var which__572672 = (event["which"]);
if(cljs.core._EQ_.call(null,which__572672,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return doll.client.lib.protocols.update_field.call(null,model__572671,"\uFDD0'yrot",(function (p1__572659_SHARP_){
return (p1__572659_SHARP_ + 0.1);
}));
} else
{if(cljs.core._EQ_.call(null,which__572672,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return doll.client.main.update_position.call(null,model__572671,cljs.core._);
} else
{if(cljs.core._EQ_.call(null,which__572672,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return doll.client.main.update_position.call(null,model__572671,cljs.core._PLUS_);
} else
{if(cljs.core._EQ_.call(null,which__572672,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return doll.client.lib.protocols.update_field.call(null,model__572671,"\uFDD0'yrot",(function (p1__572660_SHARP_){
return (p1__572660_SHARP_ - 0.1);
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
var renderer__572676 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__572677 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__572678 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__572676.render(scene__572678,camera__572677);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
