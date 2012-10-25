(ns doll.views.ajax
  (:use [noir.core :only [defpage]])
  (:require [noir.session :as session]
            [noir.cookies :as cookies]
            [noir.response :as response]))

(defpage [:get ["/character/:id" :id #"[\w]+"]] {:keys [id]}
         (response/json (session/get :client)))

(defpage [:post ["/character/:id" :id #"[\w]+"]] {:keys [id x y z yrot]}
         (if (or x y z yrot)
           (session/put! :client {:id id :x x :y y :z z :yrot yrot}))
         (response/empty))
