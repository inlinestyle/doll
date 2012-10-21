(ns doll.client.lib.types
  (:use [doll.client.lib.protocols :only [State]]))

(defrecord Model [field-atom]
  State
  (set-field [self field value]
    (swap! field-atom assoc field value))
  (get-field [self value]
    (@field-atom value)))

(defrecord View [$el options-atom]
  State
  (set-field [self field value]
    (swap! options-atom assoc field value))
  (get-field [self value]
    (@options-atom value)))

