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
doll.client.main.render = (function render(view,p__161879){
var map__161891__161892 = p__161879;
var map__161891__161893 = ((cljs.core.seq_QMARK_.call(null,map__161891__161892))?cljs.core.apply.call(null,cljs.core.hash_map,map__161891__161892):map__161891__161892);
var color__161894 = cljs.core._lookup.call(null,map__161891__161893,"\uFDD0'color",null);
var z__161895 = cljs.core._lookup.call(null,map__161891__161893,"\uFDD0'z",null);
var y__161896 = cljs.core._lookup.call(null,map__161891__161893,"\uFDD0'y",null);
var x__161897 = cljs.core._lookup.call(null,map__161891__161893,"\uFDD0'x",null);
var shape__161898 = cljs.core._lookup.call(null,map__161891__161893,"\uFDD0'shape",null);
var geometry__161899 = doll.client.lib.protocols.draw.call(null,shape__161898);
var material__161900 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__161894,"\uFDD0'wireframe":true}))));
var mesh__161901 = (new THREE.Mesh(geometry__161899,material__161900));
(mesh__161901["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":x__161897,"\uFDD0'y":y__161896,"\uFDD0'z":z__161895})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__161901);
return mesh__161901;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__161907 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__161907.width() / $canvas__161907.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__161907.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__161907.width(),$canvas__161907.height());
$canvas__161907.mouseenter((function (){
return $canvas__161907.focus();
}));
return view;
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400,"\uFDD0'yrot",0], true));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.merge.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'shape"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200))}),doll.client.lib.protocols.get_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true)))));
var $canvas__161912 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
var character__161913 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
var model__161914 = (new cljs.core.Keyword("\uFDD0'model")).call(null,view);
character__161913.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
doll.client.lib.protocols.on.call(null,model__161914,"\uFDD0'any-change",cljs.core.not_EQ_,(function (fieldmap){
(character__161913["position"] = jayq.util.map__GT_js.call(null,cljs.core.select_keys.call(null,fieldmap,cljs.core.PersistentVector.fromArray(["\uFDD0'x","\uFDD0'y","\uFDD0'z"], true))));
return (character__161913["rotation"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":fieldmap.call(null,"\uFDD0'yrot"),"\uFDD0'z":0})));
}));
jayq.core.on.call(null,$canvas__161912,"\uFDD0'keydown",(function (event){
var which__161915 = (event["which"]);
if(cljs.core._EQ_.call(null,which__161915,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return doll.client.lib.protocols.update_field.call(null,model__161914,"\uFDD0'yrot",(function (p1__161902_SHARP_){
return (p1__161902_SHARP_ + 0.1);
}));
} else
{if(cljs.core._EQ_.call(null,which__161915,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return doll.client.lib.protocols.update_field.call(null,model__161914,"\uFDD0'z",(function (p1__161903_SHARP_){
return (p1__161903_SHARP_ - 5);
}));
} else
{if(cljs.core._EQ_.call(null,which__161915,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return doll.client.lib.protocols.update_field.call(null,model__161914,"\uFDD0'z",(function (p1__161904_SHARP_){
return (p1__161904_SHARP_ + 5);
}));
} else
{if(cljs.core._EQ_.call(null,which__161915,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return doll.client.lib.protocols.update_field.call(null,model__161914,"\uFDD0'yrot",(function (p1__161905_SHARP_){
return (p1__161905_SHARP_ - 0.1);
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
var renderer__161919 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__161920 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__161921 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__161919.render(scene__161921,camera__161920);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
