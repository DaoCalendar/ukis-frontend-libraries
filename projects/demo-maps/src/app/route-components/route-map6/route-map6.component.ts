import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { LayersService, RasterLayer, VectorLayer, LayerGroup, Layer } from '@ukis/services-layers';
import { MapStateService } from '@ukis/services-map-state';
import { osm, esri_world_imagery, esri_ocean_imagery, eoc_litemap, esri_grey_canvas, esri_nav_charts, open_sea_map } from '@ukis/base-layers-raster';
import { MapOlService } from '@ukis/map-ol';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-route-map6',
  templateUrl: './route-map6.component.html',
  styleUrls: ['./route-map6.component.css'],
  /** use differnt instances of the services only for testing with diffenr routs  */
  providers: [LayersService, MapStateService, MapOlService]
})
export class RouteMap6Component implements OnInit, OnDestroy {
  @HostBinding('class') class = 'content-container';
  controls: { attribution?: boolean, scaleLine?: boolean, zoom?: boolean, crosshair?: boolean };

  subs: Subscription[] = [];
  constructor(
    public layersSvc: LayersService,
    public mapStateSvc: MapStateService) {

    this.controls = {
      attribution: true,
      scaleLine: true
    };
  }


  ngOnInit(): void {
    this.addBaseLayers();
    this.addLayers();
    /** set map extent or IMapState (zoom, center...) with the MapStateService */
    this.mapStateSvc.setExtent([-14, 33, 40, 57]);
  }

  addBaseLayers() {
    const eoc_litemap_layer = new eoc_litemap(<any>{
      legendImg: null,
      id: 'eoc_litemap_base',
      visible: true
    });

    this.layersSvc.addLayer(eoc_litemap_layer, 'Baselayers');
  }

  addLayers() {

    // const TDM90_DEM_layer = new RasterLayer({
    //   type: 'wmts',
    //   url: 'https://tiles.geoservice.dlr.de/service/wmts',
    //   name: 'TDM90 DEM',
    //   id: 'TDM90_DEM',
    //   params: {
    //     layer: 'TDM90_DEM'
    //   },
    //   visible: false,
    //   description: 'TDM90_DEM',
    //   attribution: ' | TDM90 Data ©: <a href='http://www.dlr.de' target='_blank'>DLR</a>  licensed for <a rel='license' target='_blank' href='https://geoservice.dlr.de/resources/licenses/tdm90/License_for_the_Utilization_of_90m_DEM_for_Scientific_Use.pdf'>scientific use</a>',
    //   legendImg: ''
    // });

    const layer = new RasterLayer({
      type: 'wms',
      id: 'AGRODE_S2_EVI_P1Y',
      url: 'https://geotest.eoc.dlr.de/eoc/land/wms?',
      name: 'AGRODE',
      attribution: '| <a href=\'https://agro-de.info/\'>AGRO-DE</a> Indices by <a href=\'http://www.dlr.de/eoc\'>DLR</a> licensed under <a rel=\'license\' href=\'http://creativecommons.org/licenses/by-sa/4.0/\'>CC-BY-SA</a>, Contains modified Copernicus Sentinel Data [__YEAR__]',
      params: {
        LAYERS: 'AGRODE_S2_EVI_P1Y',
        VERSION: '1.1.0',
        FORMAT: 'image/png'
      },
      styles: [
        {
          default: true,
          legendURL: 'https://geotest.eoc.dlr.de/eoc/land/wms?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=land:AGRODE_S2_EVI_P1Y',
          name: 'agrode-evi-max',
          title: 'Max'
        },
        {
          default: false,
          legendURL: 'https://geotest.eoc.dlr.de/eoc/land/wms?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=land:AGRODE_S2_EVI_P1Y',
          name: 'agrode-evi-min',
          title: 'Min'
        },
        {
          default: false,
          legendURL: 'https://geotest.eoc.dlr.de/eoc/land/wms?service=WMS&request=GetLegendGraphic&format=image/png&width=20&height=20&layer=land:AGRODE_S2_EVI_P1Y',
          name: 'agrode-evi-mean',
          title: 'Mean'
        }
      ]
    })

    this.layersSvc.addLayer(layer, 'Layers');
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }

}