goog.provide('doll.client.main');
goog.require('cljs.core');
goog.require('doll.client.lib.types');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('doll.client.lib.protocols');
goog.require('jayq.util');
goog.require('jayq.core');
goog.require('doll.client.lib.protocols');
goog.require('doll.client.lib.types');
doll.client.main.document_ready = (function document_ready(func){
return jayq.core.$.call(null,document).ready(func);
});
doll.client.main.key_codes = cljs.core.ObjMap.fromObject(["\uFDD0'a","\uFDD0'w","\uFDD0's","\uFDD0'd"],{"\uFDD0'a":65,"\uFDD0'w":87,"\uFDD0's":83,"\uFDD0'd":68});
doll.client.main.test_shapes = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'xpos":-100,"\uFDD0'ypos":100,"\uFDD0'zpos":0,"\uFDD0'color":56797}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'xpos":-100,"\uFDD0'ypos":100,"\uFDD0'zpos":-50,"\uFDD0'color":14540032}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Plane(100,100,2,2)),"\uFDD0'xpos":-100,"\uFDD0'ypos":100,"\uFDD0'zpos":-100,"\uFDD0'color":4491281}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,50,200)),"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-500,"\uFDD0'color":14483677}),cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,200,200)),"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-700,"\uFDD0'color":221})], true);
doll.client.main.render = (function render(view,p__126992){
var map__127004__127005 = p__126992;
var map__127004__127006 = ((cljs.core.seq_QMARK_.call(null,map__127004__127005))?cljs.core.apply.call(null,cljs.core.hash_map,map__127004__127005):map__127004__127005);
var color__127007 = cljs.core._lookup.call(null,map__127004__127006,"\uFDD0'color",null);
var zpos__127008 = cljs.core._lookup.call(null,map__127004__127006,"\uFDD0'zpos",null);
var ypos__127009 = cljs.core._lookup.call(null,map__127004__127006,"\uFDD0'ypos",null);
var xpos__127010 = cljs.core._lookup.call(null,map__127004__127006,"\uFDD0'xpos",null);
var shape__127011 = cljs.core._lookup.call(null,map__127004__127006,"\uFDD0'shape",null);
var geometry__127012 = doll.client.lib.protocols.draw.call(null,shape__127011);
var material__127013 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__127007,"\uFDD0'wireframe":true}))));
var mesh__127014 = (new THREE.Mesh(geometry__127012,material__127013));
(mesh__127014["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":xpos__127010,"\uFDD0'y":ypos__127009,"\uFDD0'z":zpos__127008})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__127014);
return mesh__127014;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__127016 = (new cljs.core.Keyword("\uFDD0'$el")).call(null,view);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__127016.width() / $canvas__127016.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),(new cljs.core.Keyword("\uFDD0'$el")).call(null,view).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__127016.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__127016.width(),$canvas__127016.height());
$canvas__127016.mouseenter((function (){
return $canvas__127016.focus();
}));
return view;
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_fields.call(null,(new cljs.core.Keyword("\uFDD0'model")).call(null,view),cljs.core.PersistentVector.fromArray(["\uFDD0'x",0,"\uFDD0'y",200,"\uFDD0'z",400], true));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.ObjMap.fromObject(["\uFDD0'shape","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos"],{"\uFDD0'shape":(new doll.client.lib.types.Cube(200,400,200)),"\uFDD0'xpos":0,"\uFDD0'ypos":200,"\uFDD0'zpos":400})));
var character__127019 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character");
doll.client.main.chr = character__127019;
character__127019.add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
jayq.core.on.call(null,(new cljs.core.Keyword("\uFDD0'$el")).call(null,view),"\uFDD0'keydown",(function (event){
var which__127020 = (event["which"]);
if(cljs.core._EQ_.call(null,which__127020,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return ((character__127019["rotation"])["y"] = 0.1);
} else
{if(cljs.core._EQ_.call(null,which__127020,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return ((character__127019["position"])["z"] = -10);
} else
{if(cljs.core._EQ_.call(null,which__127020,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return ((character__127019["position"])["z"] = 10);
} else
{if(cljs.core._EQ_.call(null,which__127020,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return ((character__127019["rotation"])["y"] = -0.1);
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
var renderer__127024 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__127025 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__127026 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__127024.render(scene__127026,camera__127025);
});
doll.client.main.view = (new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),(new doll.client.lib.types.Model(cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)));
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,doll.client.main.view)));
}));
