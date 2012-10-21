(ns doll.client.main
  (:use [doll.client.lib.types :only [View Mode]]
        [doll.client.lib.protocols :only [get-field set-field]]
        [jayq.core :only [$]]
        [jayq.util :only [map->js]]))

;For some reason this does not seem to make it to the client from jayq?
(defn document-ready [func]
  (.ready ($ js/document) func))

(def test-shapes
  [{:xscale 1000 :yscale 10 :zscale 1000 :xpos 0 :ypos 0 :zpos 0 :color 0xdd00dd}
   {:xscale 200 :yscale 50 :zscale 200 :xpos 200 :ypos 0 :zpos -500 :color 0xff0000}
   {:xscale 200 :yscale 200 :zscale 200 :xpos 200 :ypos 0 :zpos -700 :color 0x0000ff}])

(defn move-camera-dimension [view dimension value]
  (aset (aget (get-field view :camera) "position") dimension value))

(defn move-camera [view dimensions]
  (when-let [x (dimensions :x)] (move-camera-dimension view "x" x))  
  (when-let [y (dimensions :y)] (move-camera-dimension view "y" y))  
  (when-let [z (dimensions :z)] (move-camera-dimension view "z" z))
  view) 

(defn render [view {:keys [xscale yscale zscale xpos ypos zpos color]}]
  (let [geometry (js/THREE.CubeGeometry. xscale yscale zscale)
        material (js/THREE.MeshLambertMaterial. (map->js {:color color :wireframe true}))]
    (let [mesh (js/THREE.Mesh. geometry material)]
      (aset mesh "position" (map->js {:x xpos :y ypos :z zpos}))
      (.add (get-field view :scene) mesh))))

(defn make-scenery [view object-maps]
  (doall (map (partial render view) object-maps)))

(defn scene-setup [view]
  (let [$canvas (get view :$el)]
    (set-field view :camera (js/THREE.PerspectiveCamera. 45 (/ (.width $canvas) (.height $canvas)) 1 10000))
    (move-camera view {:x 0 :y 100 :z 1000}) 
    (set-field view :scene (js/THREE.Scene.))  
     
    (make-scenery view test-shapes)
    
    (set-field view :controls (js/THREE.TrackballControls. (get-field view :camera) (.get (get view :$el) 0)))
    (.set (aget (get-field view :controls) "target") 0 0 -1)

    (set-field view :renderer (js/THREE.CanvasRenderer. (map->js {:canvas (.get $canvas 0)})))
    (.setSize (get-field view :renderer) (.width $canvas) (.height $canvas)))
    view)

(defn animate [view]
  (js/requestAnimationFrame #(animate view))
  (let [renderer (get-field view :renderer)
        camera (get-field view :camera)
        scene (get-field view :scene)]
    (.update (get-field view :controls))
    (.render renderer scene camera)))

(document-ready #(-> 
                   (View. ($ :.mainCanvas) (atom {}))
                   scene-setup
                   animate))