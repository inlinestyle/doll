(ns doll.views.common
  (:use [noir.core :only [defpartial]]
        [hiccup.page :only [html5 include-css include-js]]))

(defpartial layout [& content]
            (html5
              [:head
               [:title "$_.com"]
               [:meta 
                {:name "viewport"
                 :content "width=device-width, initial-scale=1.0"}]
               (include-css "/css/compiled/main.css")
               (include-js "https://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js")]
              [:body
               [:div.row
                [:div.span3]
                [:div.span9
                 [:ul.unstyled
                  [:li
                   [:div.header.mvl
                    "$_.com" ]
                   [:li
                    [:div.main.pinkBorder.pal
                     content]]
                   [:li
                    [:div.footer.rightAlign.mvl
                     "{" 
                     [:span.cyanText ":author"] 
                     " " 
                     [:a {:href "mailto:ben.yelsey@gmail.com?subject=Saw your website and..."}
                      "\"ben yelsey\""] 
                     "}"]]]]]]
               (include-js "http://mrdoob.github.com/three.js/build/three.min.js")
               (include-js "/js/third-party/three.trackball-controls.js")
               (include-js "/cljs/main.js")]))
