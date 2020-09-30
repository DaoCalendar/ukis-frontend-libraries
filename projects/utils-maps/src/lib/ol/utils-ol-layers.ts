import { Map } from 'ol';
import { Layer } from 'ol/layer';
import BaseLayer from 'ol/layer/Base';
import LayerGroup from 'ol/layer/Group';
import Collection from 'ol/Collection';
import { getWidth as olGetWidth, getHeight as olGetHeight, getTopLeft as olGetTopLeft } from 'ol/extent';
import { DEFAULT_MAX_ZOOM, DEFAULT_TILE_SIZE } from 'ol/tilegrid/common';
import WMTSTileGrid from 'ol/tilegrid/WMTS';
import TileGrid from 'ol/tilegrid/TileGrid';

/** Layer handling --------------------------------------------------------------------- */


const FILTER_TYPE_KEY = 'filtertype';

/**
 * set a FilterType to a Layer or Group recursively
 *
 * @param key [key='filtertype']
 */
export function setRecursiveKey(layer: BaseLayer, value: string, key = FILTER_TYPE_KEY) {
  layer.set(key, value);
  if (layer instanceof LayerGroup) {
    layer.getLayers().forEach(l => {
      setRecursiveKey(l, value, key);
    });
  }
}

/**
 * should add a Layer or Group to the map with an optional string to filter it later.
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function addLayer(map: Map, layer: BaseLayer, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY) {
  if (filtertype) {
    setRecursiveKey(layer, filtertype, filtertypeKey);
  }
  map.addLayer(layer);
  return layer;
}

/**
 * Get all direkt Layers or Groups from the map with a filtertypeKey set to filtertype
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function getLayers(map: Map, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY, recursive = false) {
  let layers: BaseLayer[] = [];
  if (recursive) {
    const groupLayers = getLayersFromGroup(map.getLayerGroup(), filtertype, filtertypeKey, true);
    layers = layers.concat(groupLayers);
  } else {
    layers = map.getLayers().getArray();
  }

  if (filtertype) {
    return layers.filter(layer => layer.get(filtertypeKey) && (layer.get(filtertypeKey).toLowerCase() === filtertype.toLowerCase()));
  } else {
    return layers;
  }
}

/**
 * Get all direkt Layer Groups added to the map
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function getLayerGroups(map: Map, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY) {
  const layerGroups: LayerGroup[] = [];
  map.getLayers().forEach((lg: LayerGroup | BaseLayer) => {
    if (lg instanceof LayerGroup) {
      if (filtertype) {
        if (lg.get(filtertypeKey) && lg.get(filtertypeKey).toLowerCase() === filtertype.toLowerCase()) {
          layerGroups.push(lg);
        }
      } else {
        layerGroups.push(lg);
      }
    }
  });
  return layerGroups;
}

/**
 * Get an Array of Layers/LayerGroup from a LayerGroup
 *
 * @param recursive [recursive=false]
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function getLayersFromGroup(group: LayerGroup, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY, recursive = false) {
  const layers = group.getLayers().getArray();
  let tempLayers = layers;
  if (recursive) {
    let groups: BaseLayer[] = [].concat(layers);
    layers.forEach(l => {
      if (l instanceof LayerGroup) {
        groups = groups.concat(getLayersFromGroup(l, filtertype, filtertypeKey, true));
      }
    });
    tempLayers = groups;
  }

  if (filtertype) {
    return tempLayers.filter(l => l.get(filtertypeKey) && l.get(filtertypeKey).toLowerCase() === filtertype.toLowerCase());
  } else {
    return tempLayers;
  }
}

/**
 * Get Layer or LayerGroup by key and value from the map.
 *
 * This function is working recursive, so you can also get childs of groups.
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function getLayersByKey(map: Map, key: string, value: any, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY) {
  const layers = getLayers(map, filtertype, filtertypeKey);
  const flattLayers = flattenLayers(layers);
  const keyLayers: BaseLayer[] = [];
  flattLayers.forEach((item) => {
    if (item.get(key) && item.get(key) === value) {
      if (keyLayers.indexOf(item) === -1) {
        keyLayers.push(item);
      }
    }
  });
  if (!keyLayers.length) {
    const subLayers = getLayers(map, filtertype, filtertypeKey, true);  // (map.getLayerGroup(), filtertype, filtertypeKey, true);
    if (subLayers.length) {
      subLayers.forEach((item) => {
        if (item.get(key) && item.get(key) === value) {
          if (keyLayers.indexOf(item) === -1) {
            keyLayers.push(item);
          }
        }
      });
    }
  }
  return keyLayers;
}

/**
 * get corresponding Layer Group on which the layer is added
 */
export function getLayerGroupForLayer(map: Map, layer: BaseLayer) {
  const subLayers = getLayers(map, null, null, true);
  subLayers.push(map.getLayerGroup());
  let lyerGroup: { group: LayerGroup, layer: BaseLayer } | null = null;
  subLayers.forEach((l) => {
    if (l instanceof LayerGroup) {
      const groupLayers = getLayersFromGroup(l);
      const hasLayer = groupLayers.find(i => i === layer);
      if (hasLayer) {
        lyerGroup = {
          group: l,
          layer: hasLayer
        };
      }
    }
  });
  return lyerGroup;
}

/**
 * Check if a Layer/Group is in a LayerGroup - by layer.get(key)
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 * @param key [key='id']
 */
export function isLayerInGroup(layer: BaseLayer, layerGroup: LayerGroup, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY, key: string = 'id') {
  const layers = getLayersFromGroup(layerGroup, filtertype, filtertypeKey, false);
  const haseLayer = layers.filter(l => l.get(key) === layer.get(key));
  if (haseLayer.length) {
    return true;
  } else {
    const recursivelayers = getLayersFromGroup(layerGroup, filtertype, filtertypeKey, true);
    const recursiveHaseLayer = recursivelayers.filter(l => l.get(key) === layer.get(key));
    if (recursiveHaseLayer.length) {
      return true;
    } else {
      return false;
    }
  }
}


/**
 * Removes a Layer or LayerGroup by key and value from the map.
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function removeLayerByKey(map: Map, key: string, value: string, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY) {
  const layers = getLayersByKey(map, key, value, filtertype, filtertypeKey);
  if (layers.length) {
    layers.forEach(l => {
      const gropObj = getLayerGroupForLayer(map, l);
      if (gropObj.group) {
        const filterdLayers = getLayersFromGroup(gropObj.group).filter(i => i !== l);
        gropObj.group.setLayers(new Collection(filterdLayers));
      }
    });
  }
}


/**
 * Removes all Layers or LayerGroups or for a filtertype.
 *
 * @param filtertypeKey [filtertypeKey='filtertype']
 */
export function removeAllLayers(map: Map, filtertype?: string, filtertypeKey = FILTER_TYPE_KEY) {
  const layers = getLayers(map, filtertype, filtertypeKey);
  if (filtertype) {
    layers.forEach((lg) => {
      if (lg.get(filtertypeKey) && lg.get(filtertypeKey).toLowerCase() === filtertype.toLowerCase()) {
        map.removeLayer(lg);
      }
    });
  } else {
    map.getLayerGroup().getLayers().clear();
  }
}


/**
 * Removes a Layer/Group from a LayerGroup - by layer.get(key)
 * @param key [key='id']
 */
export function removeLayerFromGroup(layer: BaseLayer, group: LayerGroup, key: string = 'id') {
  const layers = getLayersFromGroup(group);
  const filterdLayers = layers.filter(l => l.get(key) !== layer.get(key));
  group.setLayers(new Collection(filterdLayers));
}


/**
 * Removes a Layer/Group from a LayerGroup - by key and value
 */
export function removeLayerByKeyFromGroup(key: string, value: string, group: LayerGroup) {
  const layers = getLayersFromGroup(group);
  const filterdLayers = layers.filter(l => l.get(key) !== value);
  group.setLayers(new Collection(filterdLayers));
}

/**
 * Get a flatt Array of layers from all layers and groups
 */
export function flattenLayers(layers: BaseLayer[]): Layer<any>[] {
  let flattenedLayers: Layer<any>[] = [];
  for (const layer of layers) {
    if (layer instanceof LayerGroup) {
      const subLayers = layer.getLayers().getArray();
      const flattenedSubLayers = flattenLayers(subLayers);
      flattenedLayers = Array.prototype.concat(flattenedLayers, flattenedSubLayers);
    } else {
      // this cast is ok: since `layer` is no LayerGroup, it must be a Layer.
      // See the `Subclasses` section here: https://openlayers.org/en/latest/apidoc/module-ol_layer_Base-BaseLayer.html
      flattenedLayers.push(layer as Layer<any>);
    }
  }
  return flattenedLayers;
}


/** TODO: --------------------------------------------------------------- */

/**
 * get the View resolutions for an extent with a certain tileSize
 */
export function resolutionsFromExtent(extent: number[], optMaxZoom: number, tileSize: number) {
  const maxZoom = optMaxZoom;

  const height = olGetHeight(extent);
  const width = olGetWidth(extent);

  const maxResolution = Math.max(width / tileSize, height / tileSize);

  const length = maxZoom + 1;
  const resolutions = new Array<number>(length);
  for (let z = 0; z < length; ++z) {
    resolutions[z] = maxResolution / Math.pow(2, z);
  }
  return resolutions;
}

/**
 * get matrixIds
 */
export function matrixIdsFromResolutions(resolutionLevels: number, matrixIdPrefix?: string) {
  return Array.from(Array(resolutionLevels).keys()).map(l => {
    if (matrixIdPrefix) {
      return `${matrixIdPrefix}:${l}`;
    } else {
      return l;
    }
  });
}


/**
 * get TileGrid or WMTSTileGrid
 * @param resolutionLevels [resolutionLevels=DEFAULT_MAX_ZOOM]
 * @param tileSize [tileSize=DEFAULT_TILE_SIZE]
 * @param matrixIdPrefix [matrixIdPrefix='']
 */
export function getTileGrid<T>(type: 'wmts' | 'default' = 'default', resolutionLevels?: number, tileSize?: number, matrixIdPrefix?: string, resolutions?: Array<string | number>, matrixIds?: Array<string | number>): T {
  const newResolutionLevels = resolutionLevels || DEFAULT_MAX_ZOOM;
  const newTileSize = tileSize || DEFAULT_TILE_SIZE;
  const newMatrixIdPrefix = matrixIdPrefix || '';

  const projectionExtent = this.getProjection().getExtent();
  const defaultResolutions = this.resolutionsFromExtent(projectionExtent, newResolutionLevels, newTileSize);
  const defaultMatrixIds = this.matrixIdsFromResolutions(defaultResolutions.length, newMatrixIdPrefix);
  /** how to generate matrix ids is not in the wms GetCapabilities ?? */

  const tileGridOptions: any = {
    extent: projectionExtent,
    origin: olGetTopLeft(projectionExtent),
    resolutions: resolutions || defaultResolutions,
    tileSize: [newTileSize, newTileSize]
  };

  if (type === 'wmts') {
    tileGridOptions.matrixIds = matrixIds || defaultMatrixIds;
    const grid = new WMTSTileGrid(tileGridOptions);
    return grid as unknown as T;
  } else if (type === 'default') {
    const grid = new TileGrid(tileGridOptions);
    return grid as unknown as T;
  }
}
