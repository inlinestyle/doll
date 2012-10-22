(ns doll.client.main
  (:use [doll.client.lib.types :only [View Model]]
        [doll.client.lib.protocols :only [get-field set-field]]
        [jayq.core :only [$ on]]
        [jayq.util :only [map->js]]))

;For some reason this does not seem to make it to the client from jayq?
(defn document-ready [func]
  (.ready ($ js/document) func))

(def key-codes {:a 65 :w 87 :s 83 :d 68})

(def test-shapes
  [{:xscale 1000 :yscale 10 :zscale 1000 :xpos 0 :ypos 0 :zpos 0 :color 0xdd00dd}
   {:xscale 200 :yscale 50 :zscale 200 :xpos 200 :ypos 0 :zpos -500 :color 0xff0000}
   {:xscale 200 :yscale 200 :zscale 200 :xpos 200 :ypos 0 :zpos -700 :color 0x0000ff}])

;(defn move-camera-dimension [view dimension value]
;  (aset (aget (get-field view :camera) "position") dimension value))

;(defn move-camera [view dimensions]
;  (when-let [x (dimensions :x)] (move-camera-dimension view "x" x))  
;  (when-let [y (dimensions :y)] (move-camera-dimension view "y" y))  
;  (when-let [z (dimensions :z)] (move-camera-dimension view "z" z))
;  view) 

(defn render [view {:keys [xscale yscale zscale xpos ypos zpos color]}]
  (let [geometry (js/THREE.CubeGeometry. xscale yscale zscale)
        material (js/THREE.MeshLambertMaterial. (map->js {:color color :wireframe true}))]
    (let [mesh (js/THREE.Mesh. geometry material)]
      (aset mesh "position" (map->js {:x xpos :y ypos :z zpos}))
      (.add (get-field view :scene) mesh)
      mesh)))

(defn make-scenery [view object-maps]
  (doall (map (partial render view) object-maps)))

(defn scene-setup [view]
  (let [$canvas (get view :$el)]
    (set-field view :camera (js/THREE.PerspectiveCamera. 45 (/ (.width $canvas) (.height $canvas)) 1 10000))
    (set-field view :scene (js/THREE.Scene.))  
    (set-field view :controls (js/THREE.TrackballControls. (get-field view :camera) (.get (get view :$el) 0)))
    (set-field view :renderer (js/THREE.CanvasRenderer. (map->js {:canvas (.get $canvas 0)})))

    ;(move-camera view {:z 100}) 
    (make-scenery view test-shapes)
    (.set (aget (get-field view :controls) "target") 0 0 -1)

    (.setSize (get-field view :renderer) (.width $canvas) (.height $canvas))
    (.mouseenter $canvas #(.focus $canvas)))
  view)

(defn character-setup [view]
  (set-field view :character (render view {:xscale 200 :yscale 400 :zscale 200 :xpos 0 :ypos 100 :zpos 1000 :color 0x00dddd}))
  (let [character (get-field view :character)]
    (.add character (get-field view :camera))
    (on (get view :$el) :keydown (fn [event] 
                                   (let [which (aget event "which")]
                                     (cond
                                       (= which (key-codes :a)) (.log js/console "a")
                                       (= which (key-codes :w)) (.log js/console "w")
                                       (= which (key-codes :s)) (.log js/console "s")
                                       (= which (key-codes :d)) (.log js/console "d")))))) 
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
                   character-setup
                   animate))
