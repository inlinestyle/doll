(ns doll.views.index
  (:require [doll.views.common :as common])
  (:use [noir.core :only [defpage]]))

(defpage [:get "/"] []
         (common/layout
           [:p.mbl "We're under construction right now, please come back later!"]
           [:div.pinkBorder
            [:canvas.mainCanvas
             {:tabindex "1"}]]))
