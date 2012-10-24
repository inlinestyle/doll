(ns doll.client.lib.types
  (:use [doll.client.lib.protocols :only [State Shape]]))

(defrecord Model [field-atom]
  State
  (set-field [self field value]
    (swap! field-atom assoc field value))
  (set-fields [self fvs]
    (swap! field-atom #(apply assoc % fvs)))
  (get-field [self value]
    (@field-atom value))
  (get-fields [self fields]
    (select-keys @field-atom fields))
  (update-field [self field function]
    (swap! field-atom update-in [field] function)))

(defrecord View [$el model options-atom]
  State
  (set-field [self field value]
    (swap! options-atom assoc field value))
  (get-field [self value]
    (@options-atom value)))

(defrecord Cube [xscale yscale zscale]
  Shape
  (draw [self]
    (js/THREE.CubeGeometry. xscale yscale zscale)))

(defrecord Plane [xscale zscale xsegments zsegments]
  Shape
  (draw [self]
    (js/THREE.PlaneGeometry. xscale zscale xsegments zsegments)))


