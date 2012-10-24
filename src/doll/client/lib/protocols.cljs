(ns doll.client.lib.protocols)

(defprotocol State
  (set-field [self field value])
  (set-fields [self fvs])
  (get-field [self field])
  (get-fields [self fields])
  (update-field [self field function]))

(defprotocol Shape
  (draw [self]))
