(defproject doll "0.1.0-SNAPSHOT"
            :description "$_"
            :dependencies [[org.clojure/clojure "1.4.0"]
                           [dieter "0.2.0"]
                           [jayq "0.1.0-alpha4"]
                           [noir "1.3.0-beta3"]]
            :plugins [[lein-cljsbuild "0.2.8"]]
            :cljsbuild
            {:builds
             [{:builds nil,
               :source-path "src",
               :compiler
               {:pretty-print true,
                :output-dir "resources/public/cljs/",
                :output-to "resources/public/cljs/main.js",
                :optimizations :simple}}]}
            :main doll.server)

