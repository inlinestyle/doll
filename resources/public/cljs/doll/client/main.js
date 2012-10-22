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
doll.client.main.test_shapes = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":1000,"\uFDD0'yscale":10,"\uFDD0'zscale":1000,"\uFDD0'xpos":0,"\uFDD0'ypos":0,"\uFDD0'zpos":0,"\uFDD0'color":14483677}),cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":200,"\uFDD0'yscale":50,"\uFDD0'zscale":200,"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-500,"\uFDD0'color":16711680}),cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":200,"\uFDD0'yscale":200,"\uFDD0'zscale":200,"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-700,"\uFDD0'color":255})], true);
doll.client.main.render = (function render(view,p__112660){
var map__112674__112675 = p__112660;
var map__112674__112676 = ((cljs.core.seq_QMARK_.call(null,map__112674__112675))?cljs.core.apply.call(null,cljs.core.hash_map,map__112674__112675):map__112674__112675);
var color__112677 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'color",null);
var zpos__112678 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'zpos",null);
var ypos__112679 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'ypos",null);
var xpos__112680 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'xpos",null);
var zscale__112681 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'zscale",null);
var yscale__112682 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'yscale",null);
var xscale__112683 = cljs.core._lookup.call(null,map__112674__112676,"\uFDD0'xscale",null);
var geometry__112684 = (new THREE.CubeGeometry(xscale__112683,yscale__112682,zscale__112681));
var material__112685 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__112677,"\uFDD0'wireframe":true}))));
var mesh__112686 = (new THREE.Mesh(geometry__112684,material__112685));
(mesh__112686["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":xpos__112680,"\uFDD0'y":ypos__112679,"\uFDD0'z":zpos__112678})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__112686);
return mesh__112686;
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__112688 = cljs.core._lookup.call(null,view,"\uFDD0'$el",null);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__112688.width() / $canvas__112688.height()),1,10000)));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),cljs.core._lookup.call(null,view,"\uFDD0'$el",null).get(0))));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__112688.get(0)})))));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__112688.width(),$canvas__112688.height());
$canvas__112688.mouseenter((function (){
return $canvas__112688.focus();
}));
return view;
});
doll.client.main.character_setup = (function character_setup(view){
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'character",doll.client.main.render.call(null,view,cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":200,"\uFDD0'yscale":400,"\uFDD0'zscale":200,"\uFDD0'xpos":0,"\uFDD0'ypos":100,"\uFDD0'zpos":1000,"\uFDD0'color":56797})));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'character").add(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"));
jayq.core.on.call(null,cljs.core._lookup.call(null,view,"\uFDD0'$el",null),"\uFDD0'keydown",(function (event){
var which__112690 = (event["which"]);
if(cljs.core._EQ_.call(null,which__112690,doll.client.main.key_codes.call(null,"\uFDD0'a")))
{return console.log("a");
} else
{if(cljs.core._EQ_.call(null,which__112690,doll.client.main.key_codes.call(null,"\uFDD0'w")))
{return console.log("w");
} else
{if(cljs.core._EQ_.call(null,which__112690,doll.client.main.key_codes.call(null,"\uFDD0's")))
{return console.log("s");
} else
{if(cljs.core._EQ_.call(null,which__112690,doll.client.main.key_codes.call(null,"\uFDD0'd")))
{return console.log("d");
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
var renderer__112694 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__112695 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__112696 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__112694.render(scene__112696,camera__112695);
});
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.character_setup.call(null,doll.client.main.scene_setup.call(null,(new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY))))));
}));
