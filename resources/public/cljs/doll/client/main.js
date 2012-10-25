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
doll.client.main.render = (function render(view,p__232611){
var map__232623__232624 = p__232611;
var map__232623__232625 = ((cljs.core.seq_QMARK_.call(null,map__232623__232624))?cljs.core.apply.call(null,cljs.core.hash_map,map__232623__232624):map__232623__232624);
var color__232626 = cljs.core._lookup.call(null,map__232623__232625,"\uFDD0'color",null);
var z__232627 = cljs.core._lookup.call(null,map__232623__232625,"\uFDD0'z",null);
var y__232628 = cljs.core._lookup.call(null,map__232623__232625,"\uFDD0'y",null);
var x__232629 = cljs.core._lookup.call(null,map__232623__232625,"\uFDD0'x",null);
var shape__232630 = cljs.core._lookup.call(null,map__232623__232625,"\uFDD0'shape",null);
var geometry__232631 = doll.client.lib.protocols.draw.call(null,shape__232630);
var material__232632 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__232626,"\uFDD0'wireframe":true}))));
var mesh__232633 = (new THREE.Mesh(geometry__232631,material__232632));
(mesh__232633["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":x__232629,"\uFDD0'y":y__232628,"\uFDD0'z":z__232627})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__232633);
return mesh__232633;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__232635 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__232635.width() / $canvas__232635.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__232635.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__232635.width(),$canvas__232635.height());
$canvas__232635.mouseenter((function (){
return $canvas__232635.focus();
}));
return view;
});
doll.client.main.update_position_fields = (function update_position_fields(model,x_function,z_function){
var old_x__232640 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'x");
var old_z__232641 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'z");
return doll.client.lib.protocols.set_fields.call(null,model,cljs.core.PersistentVector.fromArray(["\uFDD0'x",x_function.call(null,old_x__232640),"\uFDD0'z",z_function.call(null,old_z__232641)], true));
});
doll.client.main.update_position = (function update_position(model,_PLUS_or_){
var yrot__232647 = doll.client.lib.protocols.get_field.call(null,model,"\uFDD0'yrot");
var x_delta__232648 = (5 * Math.sin.call(null,yrot__232647));
var z_delta__232649 = (5 * Math.cos.call(null,yrot__232647));
return doll.client.main.update_position_fields.call(null,model,(function (p1__232636_SHARP_){
return _PLUS_or_.call(null,p1__232636_SHARP_,x_delta__232648);
}),(function (p1__232637_SHARP_){
return _PLUS_or_.call(null,p1__232637_SHARP_,z_delta__232649);
}));
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400,"\uFDD0'yrot",0], true));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shape"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200))}),doll.client.lib.protocols.get_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true)))));
var $canvas__232654 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
var character__232655 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
var model__232656 = (new cljs.core.Keyword("\uFDD0'model")).call(null,view);
character__232655.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
doll.client.lib.protocols.on.call(null,model__232656,"\uFDD0'any-change",cljs.core.not_EQ_,(function (fieldmap){
(character__232655["position"] = jayq.util.map__GT_js.call(null,cljs.core.select_keys.call(null,fieldmap,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true))));
return (character__232655["rotation"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":fieldmap.call(null,"\uFDD0'yrot"),"\uFDD0'z":0})));
}));
jayq.core.on.call(null,$canvas__232654,"\uFDD0'keydown",(function (event){
var which__232657 = (event["which"]);
if(cljs.core._EQ_.call(null,which__232657,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return doll.client.lib.protocols.update_field.call(null,model__232656,"\uFDD0'yrot",(function (p1__232642_SHARP_){
return (p1__232642_SHARP_ + 0.1);
}));
} else
{if(cljs.core._EQ_.call(null,which__232657,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return doll.client.main.update_position.call(null,model__232656,cljs.core._);
} else
{if(cljs.core._EQ_.call(null,which__232657,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return doll.client.main.update_position.call(null,model__232656,cljs.core._PLUS_);
} else
{if(cljs.core._EQ_.call(null,which__232657,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return doll.client.lib.protocols.update_field.call(null,model__232656,"\uFDD0'yrot",(function (p1__232643_SHARP_){
return (p1__232643_SHARP_ - 0.1);
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
var renderer__232661 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__232662 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__232663 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__232661.render(scene__232663,camera__232662);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
