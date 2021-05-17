import {Component, OnInit} from '@angular/core';
import Map from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppEsModulesComponent implements OnInit {
  ngOnInit(): void {
    const view = new MapView({
      map: new Map({
        basemap: "streets-navigation-vector"
      }),
      container: "esriMapContainer",
      extent: {
        spatialReference: {
          wkid: 102100
        },
        xmin: -14488954,
        ymin: 3457304,
        xmax: -10656095,
        ymax: 5250211
      }
    });

    view.when(() => {
      const layer = new GraphicsLayer();
      const g = {
        geometry: {
          type: "point",
          latitude: 37.718342350918846,
          longitude: -115.93214798949127
        },
        symbol: {
          type: "cim",
          data: {
            type: "CIMSymbolReference",
            symbol: {
              type: "CIMPointSymbol",
              symbolLayers: [
                {
                  type: "CIMVectorMarker",
                  enable: true,
                  anchorPointUnits: "Relative",
                  dominantSizeAxis3D: "Y",
                  size: 40,
                  billboardMode3D: "FaceNearPlane",
                  frame: {
                    xmin: 0,
                    ymin: 0,
                    xmax: 17,
                    ymax: 17
                  },
                  markerGraphics: [
                    {
                      type: "CIMMarkerGraphic",
                      geometry: {
                        rings: [
                          [
                            [0, 17],
                            [17, 17],
                            [17, 0],
                            [0, 0],
                            [0, 17]
                          ]
                        ]
                      },
                      symbol: {
                        type: "CIMPolygonSymbol",
                        symbolLayers: [
                          {
                            type: "CIMSolidStroke",
                            enable: true,
                            capStyle: "Round",
                            joinStyle: "Round",
                            lineStyle3D: "Strip",
                            miterLimit: 10,
                            width: 0,
                            color: [0, 0, 0, 255]
                          },
                          {
                            type: "CIMSolidFill",
                            enable: true,
                            color: [255, 0, 0, 255]
                          }
                        ]
                      }
                    }
                  ],
                  scaleSymbolsProportionally: true,
                  respectFrame: true
                }
              ]
            }
          }
        }
      };
      view.map.add(layer);
      layer.add(g as any);
    });

  }
}

