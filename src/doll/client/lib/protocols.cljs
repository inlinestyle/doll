(ns doll.client.lib.protocols)

(defprotocol State
  (set-field [self field value])
  (set-fields [self fvs])
  (get-field [self field])
  (get-fields [self fields])
  (update-field [self field function]))

(defprotocol Event
  (on [self watch-id should-react? reaction])
  (off [self watch-id]))

(defprotocol Shape
  (draw [self]))
