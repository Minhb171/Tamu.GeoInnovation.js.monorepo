import { Popups } from '@tamu-gisc/aggiemap';
import { SearchSource, SearchSourceQueryParamsProperties } from '@tamu-gisc/search';
import { LayerSource } from '@tamu-gisc/common/types';

import esri = __esri;

export const Connections = {
  basemapUrl: 'https://gis.tamu.edu/arcgis/rest/services/FCOR/TAMU_BaseMap/MapServer',
  inforUrl: 'https://gis.tamu.edu/arcgis/rest/services/FCOR/MapInfo_20190529/MapServer',
  accessibleUrl: 'https://fc-gis.tamu.edu/arcgis/rest/services/FCOR/ADA_120717/MapServer/0',
  constructionUrl: 'https://gis.tamu.edu/arcgis/rest/services/FCOR/Construction_2018/MapServer',
  departmentUrl: 'https://fc-gis.tamu.edu/arcgis/rest/services/FCOR/DepartmentSearch/MapServer/1',
  tsMainUrl: 'https://gis.tamu.edu/arcgis/rest/services/TS/TS_Main/MapServer',
  bikeRacksUrl: 'https://gis.tamu.edu/arcgis/rest/services/TS/TS_Bicycles/MapServer/3',
  bikeLocationsUrl: 'http://nodes.geoservices.tamu.edu/api/veoride/bikes/?format=geojson&metadata=false&fields=lat,lon',
  distancedStudyAreasUrl: 'https://gis.tamu.edu/arcgis/rest/services/FCOR/Physical_Distancing_Tents/MapServer/706'
};

export const Definitions = {
  BUILDINGS: {
    id: 'buildings',
    layerId: 'buildings-layer',
    name: 'Buildings',
    url: `${Connections.basemapUrl}/1`
  },
  DOMESTIC_COLD_WATER: {
    id: 'domestic-cold-water',
    layerId: 'domestic-cold-water-layer',
    name: 'Domestic Cold Water',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/1'
  },
  DOMESTIC_WATER_VALVE: {
    id: 'domestic-water-valve',
    layerId: 'domestic-water-valve-layer',
    name: 'Domestic Water Valve',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/2'
  },
  DOMESTIC_COLD_WATER_METER: {
    id: 'domestic-cold-water-meter',
    layerId: 'domestic-cold-water-meter-layer',
    name: 'Domestic Cold Water Meter',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/3'
  },
  DOMESTIC_WATER_TRANSMISSION: {
    id: 'domestic-water-transmission',
    layerId: 'domestic-water-transmission-layer',
    name: 'Domestic Water Transmission',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/4'
  },
  WELL_SITES: {
    id: 'well-sites',
    layerId: 'well-sites-layer',
    name: 'Well Sites',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/5'
  },
  FIRE_HYDRANTS: {
    id: 'fire-hydrants',
    layerId: 'fire-hydrants-layer',
    name: 'Fire Hydrants',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/6'
  },
  DOMESTIC_HOT_WATER: {
    id: 'domestic-hot-water',
    layerId: 'domestic-hot-water-layer',
    name: 'Domestic Hot Water',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/8'
  },
  DOMESTIC_HOT_WATER_VALVE: {
    id: 'domestic-hot-water-valve',
    layerId: 'domestic-hot-water-valve-layer',
    name: 'Domestic Hot Water Valve',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/9'
  },
  CHILLED_WATER: {
    id: 'chillded-water',
    layerId: 'chillded-water-layer',
    name: 'Chilled Water',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/11'
  },
  CHILLED_WATER_VALVE: {
    id: 'chillded-water-valve',
    layerId: 'chillded-water-valve-layer',
    name: 'Chilled Water Valve',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/12'
  },
  HEATING_HOT_WATER: {
    id: 'heating-hot-water',
    layerId: 'heating-hot-water-layer',
    name: 'Heating Hot Water',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/13'
  },
  HEATING_HOT_WATER_VALVE: {
    id: 'heating-hot-water-valve',
    layerId: 'heating-hot-water-valve-layer',
    name: 'Heating Hot Water Valve',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/14'
  },
  SANITARY_SEWER: {
    id: 'sanitary-sewer',
    layerId: 'sanitary-sewer-layer',
    name: 'Sanitary Sewer',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/16'
  },
  SANITARY_MANHOLES: {
    id: 'sanitary-manholes',
    layerId: 'sanitary-manholes-layer',
    name: 'Sanitary Manholes',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/17'
  },
  SANITARY_CLEANOUTS: {
    id: 'sanitary-cleanouts',
    layerId: 'sanitary-cleanouts-layer',
    name: 'Sanitary Cleanouts',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/18'
  },
  SANITARY_LIFT_STATION: {
    id: 'sanitary-lift-station',
    layerId: 'sanitary-lift-station-layer',
    name: 'Sanitary Lift Station',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/19'
  },
  STOMRMWATER: {
    id: 'stormwater',
    layerId: 'stormwater-layer',
    name: 'Stormwater',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/21'
  },
  STOMRMWATER_MANHOLE: {
    id: 'stormwater_manhole',
    layerId: 'stormwater_manhole-layer',
    name: 'Stormwater Manhole',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/22'
  },
  STORMWATER_CATCH_BASINS: {
    id: 'stormwater-catch-basins',
    layerId: 'stormwater-catch-basins-layer',
    name: 'Stormwater Catch Basins',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/23'
  },
  STORMWATER_OUTFALL_LOCATIONS: {
    id: 'stormwater-outfall-locations',
    layerId: 'stormwater-outfall-locations-layer',
    name: 'Stormwater Outfall Locations',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/24'
  },
  STORMWATER_DETENTION_BASIN: {
    id: 'stormwater-detention-basin',
    layerId: 'stormwater-detention-basin-layer',
    name: 'Stormwater Detention Basin',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/25'
  },
  STEAM: {
    id: 'steam',
    layerId: 'steam-layer',
    name: 'Steam',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/26'
  },
  UES_NATURAL_GAS: {
    id: 'ues-natural-gas',
    layerId: 'ues-natural-gas-layer',
    name: 'UES Natural Gas',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/28'
  },
  UES_NATURAL_GAS_METERS: {
    id: 'ues-natural-gas-meters',
    layerId: 'ues-natural-gas-meters-layer',
    name: 'UES Natural Gas Meters',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/29'
  },
  ONE_THIRTY_EIGHT_KILOVOLT: {
    id: 'one-thirty-eight-kilovolt',
    layerId: 'one-thirty-eight-kilovolt-layer',
    name: '138kV',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/31'
  },
  LIGHT_POLES: {
    id: 'light-poles',
    layerId: 'light-poles-layer',
    name: 'Light Poles',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/33'
  },
  FEEDER_BUILDINGS: {
    id: 'feeder-buildings',
    layerId: 'feeder-buildings-layer',
    name: 'Feeder Buildings',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/34'
  },
  ELECTRICAL_SERVICE: {
    id: 'electrical-service',
    layerId: 'electrical-service-layer',
    name: 'Electrical Service',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/35'
  },
  FEEDERS: {
    id: 'feeders',
    layerId: 'feeders-layer',
    name: 'Feeders',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/36'
  },
  PAD_MOUNTED_SWITCHES: {
    id: 'pad-mounted-switches',
    layerId: 'pad-mounted-switches-layer',
    name: 'Pad Mounted Switches',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/37'
  },
  GENERATORS: {
    id: 'generator',
    layerId: 'generator-layer',
    name: 'Generators',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/38'
  },
  TRANSFORMER: {
    id: 'transformer',
    layerId: 'transformer-layer',
    name: 'Transformers',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/39'
  },
  ELECTRICAL_POLE: {
    id: 'electrical-pole',
    layerId: 'electrical-pole-layer',
    name: 'Electrical Pole',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/40'
  },
  ELECTRICAL_MANHOLES: {
    id: 'electrical-manholes',
    layerId: 'electrical-manholes-layer',
    name: 'Electrical Manholes',
    url: 'https://ues-arc.apogee.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer/41'
  },
  POINTS_OF_INTEREST: {
    id: 'poi',
    layerId: 'poi-layer',
    name: 'Points of Interest',
    url: `${Connections.inforUrl}/0`,
    popupComponent: Popups.PoiPopupComponent
  },
  RESTROOMS: {
    id: 'restrooms',
    layerId: 'restrooms-layer',
    name: 'Restrooms',
    url: `${Connections.inforUrl}/1`,
    popupComponent: Popups.RestroomPopupComponent
  },
  LACTATION_ROOMS: {
    id: 'lactation-rooms',
    layerId: 'lactation-rooms-layer',
    name: 'Lactation Rooms',
    url: `${Connections.inforUrl}/2`,
    popupComponent: Popups.LactationPopupComponent
  },
  VISITOR_PARKING: {
    id: 'visitor-parking',
    layerId: 'visitor-parking-layer',
    name: 'Visitor Parking',
    url: `${Connections.inforUrl}/3`,
    popupComponent: Popups.ParkingKioskPopupComponent
  },
  EMERGENCY_PHONES: {
    id: 'emergency-phones',
    layerId: 'emergency-phones-layer',
    name: 'Emergency Phones',
    url: `${Connections.inforUrl}/4`
  },
  DISTANCED_STUDY_AREAS: {
    id: 'distanced-study-area',
    layerId: 'distanced-study-area-layer',
    name: 'Physical Distance Study Area',
    url: Connections.distancedStudyAreasUrl
  }
};

const commonLayerProps = {
  outFields: ['*'],
  minScale: 100000,
  maxScale: 0,
  elevationInfo: { mode: 'relative-to-ground', offset: 1 } as esri.FeatureLayerElevationInfo,
  popupEnabled: false
};

export const LayerSources: LayerSource[] = [
  {
    type: 'map-server',
    url: 'https://ues-arc.tamu.edu/arcgis/rest/services/Yoho/UES_Operations/MapServer',
    id: 'ues-map-server',
    native: {
      defaultFeatureLayerProperties: {
        visible: false,
        popupComponent: Popups.BaseDirectionsComponent,
        outFields: ['*']
      }
    },
    title: 'UES Operations'
  },
  {
    type: 'group',
    id: 'aggiemap-layers',
    title: 'Aggiemap',
    native: {},
    sources: [
      {
        type: 'feature',
        id: Definitions.BUILDINGS.layerId,
        title: Definitions.BUILDINGS.name,
        url: Definitions.BUILDINGS.url,
        popupComponent: Popups.BuildingPopupComponent,
        listMode: 'hide',
        visible: true,
        // layerIndex: 1,
        native: {
          ...commonLayerProps,
          legendEnabled: false,
          renderer: {
            type: 'simple',
            symbol: {
              type: 'simple-fill',
              style: 'solid',
              color: [0, 0, 0, 0.01],
              outline: {
                width: '0'
              }
            }
          }
        }
      },
      {
        type: 'feature',
        id: 'construction-layer',
        title: 'Construction Zone',
        url: `${Connections.constructionUrl}`,
        listMode: 'show',
        visible: true,
        popupComponent: Popups.ConstructionPopupComponent,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: 'accessible-entrances-layer',
        title: 'Accessible Entrances',
        url: `${Connections.accessibleUrl}`,
        listMode: 'show',
        visible: false,
        popupComponent: Popups.AccessiblePopupComponent,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.POINTS_OF_INTEREST.layerId,
        title: Definitions.POINTS_OF_INTEREST.name,
        url: Definitions.POINTS_OF_INTEREST.url,
        popupComponent: Definitions.POINTS_OF_INTEREST.popupComponent,
        listMode: 'show',
        visible: false,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.RESTROOMS.layerId,
        title: Definitions.RESTROOMS.name,
        url: Definitions.RESTROOMS.url,
        popupComponent: Definitions.RESTROOMS.popupComponent,
        listMode: 'show',
        visible: false,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.LACTATION_ROOMS.layerId,
        title: Definitions.LACTATION_ROOMS.name,
        url: Definitions.LACTATION_ROOMS.url,
        popupComponent: Definitions.LACTATION_ROOMS.popupComponent,
        listMode: 'show',
        visible: false,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.VISITOR_PARKING.layerId,
        title: Definitions.VISITOR_PARKING.name,
        url: Definitions.VISITOR_PARKING.url,
        popupComponent: Definitions.VISITOR_PARKING.popupComponent,
        listMode: 'show',
        visible: false,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.EMERGENCY_PHONES.layerId,
        title: Definitions.EMERGENCY_PHONES.name,
        url: Definitions.EMERGENCY_PHONES.url,
        listMode: 'show',
        visible: false,
        native: {
          ...commonLayerProps
        }
      },
      {
        type: 'feature',
        id: Definitions.DISTANCED_STUDY_AREAS.layerId,
        title: Definitions.DISTANCED_STUDY_AREAS.name,
        url: Definitions.DISTANCED_STUDY_AREAS.url,
        listMode: 'show',
        visible: false,
        popupComponent: Popups.TentZonePopupComponent,
        native: {
          ...commonLayerProps
        }
      }
    ]
  },
  {
    type: 'graphics',
    id: 'selection-layer',
    title: 'Selected Buildings',
    listMode: 'hide',
    visible: true,
    popupComponent: Popups.BuildingPopupComponent,
    native: {
      ...commonLayerProps
    }
  }
];

const commonQueryParams: Partial<SearchSourceQueryParamsProperties> = {
  f: 'json',
  resultRecordCount: 5,
  outFields: '*',
  outSR: 4326,
  returnGeometry: true,
  spatialRel: 'esriSpatialRelIntersects'
};

// Search sources used for querying features.
export const SearchSources: SearchSource[] = [
  {
    source: 'building',
    name: 'Building',
    url: `${Connections.basemapUrl}/1`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['Number', 'BldgAbbr', 'BldgName'],
        operators: ['LIKE', 'LIKE', 'LIKE'],
        wildcards: ['includes', 'includes', 'includes'],
        transformations: ['UPPER', 'UPPER', 'UPPER']
      },
      scoringWhere: {
        keys: ['BldgName'],
        operators: ['LIKE'],
        wildcards: ['startsWith'],
        transformations: ['UPPER']
      }
    },
    scoringKeys: ['attributes.BldgAbbr', 'attributes.Number', 'attributes.BldgName'],
    featuresLocation: 'features',
    displayTemplate: '{attributes.BldgName} ({attributes.Number})',
    popupComponent: Popups.BuildingPopupComponent,
    searchActive: true
  },
  {
    source: 'building-exact',
    name: 'Building',
    url: `${Connections.basemapUrl}/1`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['Number'],
        operators: ['=']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.BldgName} ({attributes.Number})',
    popupComponent: Popups.BuildingPopupComponent,
    searchActive: false
  },
  {
    source: 'university-departments',
    name: 'University Departments',
    url: `${Connections.departmentUrl}`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['DeptName', 'CollegeName', 'DeptAbbre'],
        operators: ['LIKE', 'LIKE', 'LIKE'],
        wildcards: ['includes', 'includes', 'includes'],
        transformations: ['UPPER', 'UPPER', 'UPPER']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.DeptName}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    altLookup: {
      source: 'building-exact',
      reference: {
        keys: ['attributes.HOME1']
      }
    }
  },
  {
    source: 'university-departments-exact',
    name: 'University Departments',
    url: `${Connections.departmentUrl}`,
    queryParams: {
      ...commonQueryParams,
      resultRecordCount: 100,
      where: {
        keys: ['HOME1'],
        operators: ['=']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.DeptName}',
    searchActive: false
  },
  {
    source: 'parking-garage',
    name: 'Parking Garage',
    url: `${Connections.basemapUrl}/0`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['LotName', 'Name'],
        operators: ['LIKE', 'LIKE'],
        wildcards: ['includes', 'includes'],
        transformations: ['UPPER', 'UPPER']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.LotName}',
    popupComponent: Popups.BuildingPopupComponent,
    searchActive: true
  },
  {
    source: 'parking-lot',
    name: 'Parking Lot',
    url: `${Connections.basemapUrl}/12`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['LotName'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.LotName}',
    popupComponent: Popups.ParkingLotPopupComponent,
    searchActive: true
  },
  {
    source: 'points-of-interest',
    name: 'Points of Interest',
    url: `${Connections.inforUrl}/0`,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['Name'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.Name}',
    popupComponent: Popups.PoiPopupComponent,
    searchActive: true
  },
  {
    source: 'bike-racks',
    name: 'Bike Racks',
    url: `${Connections.bikeRacksUrl}`,
    queryParams: {
      ...commonQueryParams,
      resultRecordCount: 9999,
      where: {
        keys: ['1'],
        operators: ['=']
      }
    },
    featuresLocation: 'features',
    displayTemplate: '{attributes.Type}',
    searchActive: false
  },
  {
    source: Definitions.FIRE_HYDRANTS.id,
    name: Definitions.FIRE_HYDRANTS.name,
    url: Definitions.FIRE_HYDRANTS.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.HYDR_NUMBER}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['HYDR_NUMBER', 'ASSETNUM '],
        operators: ['LIKE', 'LIKE'],
        wildcards: ['includes', 'includes'],
        transformations: ['UPPER', 'UPPER']
      }
    }
  },
  {
    source: Definitions.GENERATORS.id,
    name: Definitions.GENERATORS.name,
    url: Definitions.GENERATORS.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.UES_ID}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['UES_ID', 'AIM_ASSET_NUMBER'],
        operators: ['LIKE', 'LIKE'],
        wildcards: ['includes', 'includes'],
        transformations: ['UPPER', 'UPPER']
      }
    }
  },
  {
    source: Definitions.TRANSFORMER.id,
    name: Definitions.TRANSFORMER.name,
    url: Definitions.TRANSFORMER.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.UESID}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['UESID', 'AIMNumber'],
        operators: ['LIKE', 'LIKE'],
        wildcards: ['includes', 'includes'],
        transformations: ['UPPER', 'UPPER']
      }
    }
  },
  {
    source: Definitions.ELECTRICAL_MANHOLES.id,
    name: Definitions.ELECTRICAL_MANHOLES.name,
    url: Definitions.ELECTRICAL_MANHOLES.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.MH_NUMBER}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['MH_NUMBER'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  },
  {
    source: Definitions.ELECTRICAL_MANHOLES.id,
    name: Definitions.ELECTRICAL_MANHOLES.name,
    url: Definitions.ELECTRICAL_MANHOLES.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.MH_NUMBER}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['MH_NUMBER'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  },
  {
    source: Definitions.DOMESTIC_COLD_WATER.id,
    name: Definitions.DOMESTIC_COLD_WATER.name,
    url: Definitions.DOMESTIC_COLD_WATER.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.OBJECTID}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['OBJECTID'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  },
  {
    source: Definitions.DOMESTIC_COLD_WATER.id,
    name: Definitions.DOMESTIC_COLD_WATER.name,
    url: Definitions.DOMESTIC_COLD_WATER.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.OBJECTID}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['OBJECTID'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  },
  {
    source: Definitions.UES_NATURAL_GAS_METERS.id,
    name: Definitions.UES_NATURAL_GAS_METERS.name,
    url: Definitions.UES_NATURAL_GAS_METERS.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.Meter_Number}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['Meter_Number'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  },
  {
    source: Definitions.WELL_SITES.id,
    name: Definitions.WELL_SITES.name,
    url: Definitions.WELL_SITES.url,
    featuresLocation: 'features',
    displayTemplate: '{attributes.WELL_NAME}',
    popupComponent: Popups.BaseDirectionsComponent,
    searchActive: true,
    queryParams: {
      ...commonQueryParams,
      where: {
        keys: ['WELL_NAME'],
        operators: ['LIKE'],
        wildcards: ['includes'],
        transformations: ['UPPER']
      }
    }
  }
];

export const SelectionSymbols = {
  polygon: {
    type: 'simple-fill',
    style: 'solid',
    color: [252, 227, 0, 0.55],
    outline: {
      color: [252, 227, 0, 0.8],
      width: '2px'
    }
  },
  point: {
    type: 'simple-marker',
    style: 'circle',
    size: 8,
    outline: {
      width: 2
    }
  },
  multipoint: {
    type: 'simple-marker',
    style: 'circle',
    size: 8,
    outline: {
      width: 2
    }
  }
};
