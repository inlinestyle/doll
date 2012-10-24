(ns doll.client.main
  (:use [doll.client.lib.types :only [View Model Cube Plane]]
        [doll.client.lib.protocols :only [get-field 
                                          get-fields 
                                          set-field 
                                          set-fields 
                                          update-field 
                                          draw]]
        [jayq.core :only [$ on]]
        [jayq.util :only [map->js]]))

;For some reason this does not seem to make it to the client from jayq?
(defn document-ready [func]
  (.ready ($ js/document) func))

(def key-codes {:a 65 :w 87 :s 83 :d 68})

(def test-shapes
  [{:shape (Plane. 100 100 2 2) :xpos -100 :ypos 100 :zpos 0 :color 0x00dddd}
   {:shape (Plane. 100 100 2 2) :xpos -100 :ypos 100 :zpos -50 :color 0xdddd00}
   {:shape (Plane. 100 100 2 2) :xpos -100 :ypos 100 :zpos -100 :color 0x448811}
   {:shape (Cube. 200 50 200) :xpos 200 :ypos 0 :zpos -500 :color 0xdd00dd}
   {:shape (Cube. 200 200 200) :xpos 200 :ypos 0 :zpos -700 :color 0x0000dd}])

;(defn move-camera-dimension [view dimension value]
;  (aset (aget (get-field view :camera) "position") dimension value))

;(defn move-camera [view dimensions]
;  (when-let [x (dimensions :x)] (move-camera-dimension view "x" x))  
;  (when-let [y (dimensions :y)] (move-camera-dimension view "y" y))  
;  (when-let [z (dimensions :z)] (move-camera-dimension view "z" z))
;  view) 

(defn render [view {:keys [shape xpos ypos zpos color]}]
  (let [geometry (draw shape)
        material (js/THREE.MeshLambertMaterial. (map->js {:color color :wireframe true}))]
    (let [mesh (js/THREE.Mesh. geometry material)]
      (aset mesh "position" (map->js {:x xpos :y ypos :z zpos}))
      (.add (get-field view :scene) mesh)
      mesh)))

(defn make-scenery [view object-maps]
  (doall (map (partial render view) object-maps)))

(defn scene-setup [view]
  (let [$canvas (:$el view)]
    (set-field view :camera (js/THREE.PerspectiveCamera. 45 (/ (.width $canvas) (.height $canvas)) 1 10000))
    (set-field view :scene (js/THREE.Scene.))  
    (set-field view :controls (js/THREE.TrackballControls. (get-field view :camera) (.get (:$el view) 0)))
    (set-field view :renderer (js/THREE.CanvasRenderer. (map->js {:canvas (.get $canvas 0)})))

    ;(move-camera view {:z 100}) 
    (make-scenery view test-shapes)
    (.set (aget (get-field view :controls) "target") 0 0 -1)

    (.setSize (get-field view :renderer) (.width $canvas) (.height $canvas))
    (.mouseenter $canvas #(.focus $canvas)))
  view)

(defn character-setup [view]
  (set-fields (:model view) [:x 0 :y 200 :z 400])
  (set-field view :character (render view {:shape (Cube. 200 400 200) :xpos 0 :ypos 200 :zpos 400}))
  (let [character (get-field view :character)]
    (def chr character)
    (.add character (get-field view :camera))
    (on (:$el view) :keydown (fn [event] 
                                   (let [which (aget event "which")]
                                     (cond
                                       (= which (key-codes :a)) (aset (aget character "rotation") "y" 0.1)
                                       (= which (key-codes :w)) (aset (aget character "position") "z" -10)
                                       (= which (key-codes :s)) (aset (aget character "position") "z" 10)
                                       (= which (key-codes :d)) (aset (aget character "rotation") "y" -0.1)))))) 
  view)

(defn animate [view]
  (js/requestAnimationFrame #(animate view))
  (let [renderer (get-field view :renderer)
        camera (get-field view :camera)
        scene (get-field view :scene)]
    (.update (get-field view :controls))
    (.render renderer scene camera)))

(def view (View. ($ :.mainCanvas) 
                 (Model. (atom {}))
                 (atom {})))


(document-ready #(-> view
                   scene-setup
                   character-setup
                   animate))
