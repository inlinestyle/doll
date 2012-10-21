(ns doll.client.lib.protocols)

(defprotocol State
  (set-field [self field value])
  (get-field [self field]))

