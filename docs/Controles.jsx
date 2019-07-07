import React, { Component } from "react";

import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';

import {fromLonLat} from 'ol/proj';

import { defaults, OverviewMap, MousePosition, FullScreen, Rotate, ZoomSlider, ZoomToExtent, ScaleLine } from 'ol/control.js';

/**
 * --------------
 * Les contrôles
 * --------------
 * 
 * Les contrôles ol.control  sont d'autres composantes de la classe Map.
 * Chaque méthode possède ses propres options.
 * Il est possible de modifier le style CSS ou d'ajouter certaines fonctions javascript
 * OpenLayers montre par exemple comment modifier le style CSS (couleur, place des éléments, etc) du ZoomSlider
 * https://openlayers.org/en/latest/examples/zoomslider.html
 */

class Controles extends Component {
  constructor(props) {
    super(props);

    this.state = { 
        center: fromLonLat([3.466667, 43.316667]), 
        zoom: 8 
    };

    this.olmap = new Map({
      target: null,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: this.state.center,
        zoom: this.state.zoom
      }),
      controls: defaults({
                  attribution : true,
                  zoom : true,
            }).extend([
              new FullScreen(),
              new MousePosition(),
              new OverviewMap(),
              new Rotate(),
              new ScaleLine(),
              new ZoomSlider(),
              new ZoomToExtent(),
            ])
    });
  }

  componentDidMount() {
    this.olmap.setTarget("map4");
  }

  render() {
    return (
      <div id="map4" style={{ width: "100%", height: "360px" }}>
      </div>
    );
  }
}

export default Controles;