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
doll.client.main.test_shapes = cljs.core.PersistentVector.fromArray([cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":1000,"\uFDD0'yscale":10,"\uFDD0'zscale":1000,"\uFDD0'xpos":0,"\uFDD0'ypos":0,"\uFDD0'zpos":0,"\uFDD0'color":14483677}),cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":200,"\uFDD0'yscale":50,"\uFDD0'zscale":200,"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-500,"\uFDD0'color":16711680}),cljs.core.ObjMap.fromObject(["\uFDD0'xscale","\uFDD0'yscale","\uFDD0'zscale","\uFDD0'xpos","\uFDD0'ypos","\uFDD0'zpos","\uFDD0'color"],{"\uFDD0'xscale":200,"\uFDD0'yscale":200,"\uFDD0'zscale":200,"\uFDD0'xpos":200,"\uFDD0'ypos":0,"\uFDD0'zpos":-700,"\uFDD0'color":255})], true);
doll.client.main.move_camera_dimension = (function move_camera_dimension(view,dimension,value){
return ((doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera")["position"])[dimension] = value);
});
doll.client.main.move_camera = (function move_camera(view,dimensions){
var temp__3974__auto____523307 = dimensions.call(null,"\uFDD0'x");
if(cljs.core.truth_(temp__3974__auto____523307))
{var x__523308 = temp__3974__auto____523307;
doll.client.main.move_camera_dimension.call(null,view,"x",x__523308);
} else
{}
var temp__3974__auto____523309 = dimensions.call(null,"\uFDD0'y");
if(cljs.core.truth_(temp__3974__auto____523309))
{var y__523310 = temp__3974__auto____523309;
doll.client.main.move_camera_dimension.call(null,view,"y",y__523310);
} else
{}
var temp__3974__auto____523311 = dimensions.call(null,"\uFDD0'z");
if(cljs.core.truth_(temp__3974__auto____523311))
{var z__523312 = temp__3974__auto____523311;
doll.client.main.move_camera_dimension.call(null,view,"z",z__523312);
} else
{}
return view;
});
doll.client.main.render = (function render(view,p__523313){
var map__523327__523328 = p__523313;
var map__523327__523329 = ((cljs.core.seq_QMARK_.call(null,map__523327__523328))?cljs.core.apply.call(null,cljs.core.hash_map,map__523327__523328):map__523327__523328);
var color__523330 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'color",null);
var zpos__523331 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'zpos",null);
var ypos__523332 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'ypos",null);
var xpos__523333 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'xpos",null);
var zscale__523334 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'zscale",null);
var yscale__523335 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'yscale",null);
var xscale__523336 = cljs.core._lookup.call(null,map__523327__523329,"\uFDD0'xscale",null);
var geometry__523337 = (new THREE.CubeGeometry(xscale__523336,yscale__523335,zscale__523334));
var material__523338 = (new THREE.MeshLambertMaterial(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'color","\uFDD0'wireframe"],{"\uFDD0'color":color__523330,"\uFDD0'wireframe":true}))));
var mesh__523339 = (new THREE.Mesh(geometry__523337,material__523338));
(mesh__523339["position"] = jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":xpos__523333,"\uFDD0'y":ypos__523332,"\uFDD0'z":zpos__523331})));
return doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene").add(mesh__523339);
});
doll.client.main.make_scenery = (function make_scenery(view,object_maps){
return cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,doll.client.main.render,view),object_maps));
});
doll.client.main.scene_setup = (function scene_setup(view){
var $canvas__523341 = cljs.core._lookup.call(null,view,"\uFDD0'$el",null);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'camera",(new THREE.PerspectiveCamera(45,($canvas__523341.width() / $canvas__523341.height()),1,10000)));
doll.client.main.move_camera.call(null,view,cljs.core.ObjMap.fromObject(["\uFDD0'x","\uFDD0'y","\uFDD0'z"],{"\uFDD0'x":0,"\uFDD0'y":100,"\uFDD0'z":1000}));
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'scene",(new THREE.Scene()));
doll.client.main.make_scenery.call(null,view,doll.client.main.test_shapes);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'controls",(new THREE.TrackballControls(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera"),cljs.core._lookup.call(null,view,"\uFDD0'$el",null).get(0))));
(doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls")["target"]).set(0,0,-1);
doll.client.lib.protocols.set_field.call(null,view,"\uFDD0'renderer",(new THREE.CanvasRenderer(jayq.util.map__GT_js.call(null,cljs.core.ObjMap.fromObject(["\uFDD0'canvas"],{"\uFDD0'canvas":$canvas__523341.get(0)})))));
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer").setSize($canvas__523341.width(),$canvas__523341.height());
return view;
});
doll.client.main.animate = (function animate(view){
requestAnimationFrame((function (){
return animate.call(null,view);
}));
var renderer__523345 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'renderer");
var camera__523346 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'camera");
var scene__523347 = doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'scene");
doll.client.lib.protocols.get_field.call(null,view,"\uFDD0'controls").update();
return renderer__523345.render(scene__523347,camera__523346);
});
doll.client.main.document_ready.call(null,(function (){
return doll.client.main.animate.call(null,doll.client.main.scene_setup.call(null,(new doll.client.lib.types.View(jayq.core.$.call(null,"\uFDD0'.mainCanvas"),cljs.core.atom.call(null,cljs.core.ObjMap.EMPTY)))));
}));
