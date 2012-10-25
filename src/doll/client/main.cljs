(ns doll.client.main
  (:use [doll.client.lib.types :only [View Model Cube Plane]]
        [doll.client.lib.protocols :only [get-field 
                                          get-fields 
                                          set-field 
                                          set-fields 
                                          update-field 
                                          on
                                          draw]]
        [jayq.util :only [map->js]])
  (:require [jayq.core :as jayq]))

;For some reason this does not seem to make it to the client from jayq?
(defn document-ready [func]
  (.ready (jayq/$ js/document) func))

(def key-codes {:a 65 :w 87 :s 83 :d 68})

(def test-shapes
  (concat
    (map (fn [zpos] {:shape (Cube. 200 200 200) :x 200 :y 0 :z (* 250 zpos) :color 0xdd00dd}) (range -20 20))
    (map (fn [xpos] {:shape (Plane. 100 100 2 2) :x (* 250 xpos) :y 0 :z 0 :color 0x00dddd}) (range -20 20))))
;[{:shape (Plane. 100 100 2 2) :x -100 :y 100 :z 0 :color 0x00dddd}
; {:shape (Plane. 100 100 2 2) :x -100 :y 100 :z -50 :color 0xdddd00}
; {:shape (Plane. 100 100 2 2) :x -100 :y 100 :z -100 :color 0x448811}
          ; {:shape (Cube. 200 50 200) :x 200 :y 0 :z -500 :color 0xdd00dd}
          ; {:shape (Cube. 200 200 200) :x 200 :y 0 :z -700 :color 0x0000dd}]))

(defn render [view {:keys [shape x y z color]}]
  (let [geometry (draw shape)
        material (js/THREE.MeshLambertMaterial. (map->js {:color color :wireframe true}))]
    (let [mesh (js/THREE.Mesh. geometry material)]
      (aset mesh "position" (map->js {:x x :y y :z z}))
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

    (make-scenery view test-shapes)
    (.set (aget (get-field view :controls) "target") 0 0 -1)

    (.setSize (get-field view :renderer) (.width $canvas) (.height $canvas))
    (.mouseenter $canvas #(.focus $canvas)))
  view)

(defn update-position-fields [model x-function z-function]
  (let [old-x (get-field model :x)
        old-z (get-field model :z)]
    (set-fields model [:x (x-function old-x) :z (z-function old-z)])))

(defn update-position [model +or-]
  (let [yrot (get-field model :yrot)]
    (let [x-delta (* 5 (Math/sin yrot))
          z-delta (* 5 (Math/cos yrot))]
      (update-position-fields model #(+or- % x-delta) #(+or- % z-delta)))))

(defn format-data [data]
  (let [clj-data (js->clj data :keywordize-keys true)]
    (flatten 
      (vec 
        (merge-with #(js/parseFloat %2) clj-data (select-keys clj-data [:x :y :z :yrot]))))))

(defn character-setup [view]
  (set-fields (:model view) [:x 0 :y 200 :z 400 :yrot 0])
  (let [deferred (jayq/ajax "/character/id" {:type "GET"})]
    (.done deferred (fn [data]
                      (set-fields (:model view) (format-data data))))) 
  (set-field view :character (render view (merge {:shape (Cube. 200 400 200)} (get-fields (:model view) [:x :y :z]))))
  (let [$canvas (:$el view)
        character (get-field view :character)
        model (:model view)]
    (.add character (get-field view :camera))
    (on model :any-change not= (fn [fieldmap] 
                                 (aset character "position" (map->js (select-keys fieldmap [:x :y :z])))
                                 (aset character "rotation" (map->js {:x 0 :y (fieldmap :yrot) :z 0}))
                                 (jayq/ajax "/character/id" {:type "POST" :data fieldmap})))
    (jayq/on $canvas :keydown (fn [event] 
                                   (let [which (aget event "which")]
                                     (cond
                                       (= which (key-codes :a)) (update-field model :yrot #(+ % 0.1))
                                       (= which (key-codes :w)) (update-position model -)
                                       (= which (key-codes :s)) (update-position model +)
                                       (= which (key-codes :d)) (update-field model :yrot #(- % 0.1)))))))
  view)

(defn animate [view]
  (js/requestAnimationFrame #(animate view))
  (let [renderer (get-field view :renderer)
        camera (get-field view :camera)
        scene (get-field view :scene)]
    (.update (get-field view :controls))
    (.render renderer scene camera)))

(def view (View. (jayq/$ :.mainCanvas) 
                 (Model. (atom {}))
                 (atom {})))


(document-ready #(-> view
                   scene-setup
                   character-setup
                   animate))
