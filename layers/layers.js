ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([446165.109868, 7224252.218990, 446569.109945, 7224464.555917]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PostacionExistenteL5_2 = new ol.format.GeoJSON();
var features_PostacionExistenteL5_2 = format_PostacionExistenteL5_2.readFeatures(json_PostacionExistenteL5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionExistenteL5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionExistenteL5_2.addFeatures(features_PostacionExistenteL5_2);
var lyr_PostacionExistenteL5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionExistenteL5_2, 
                style: style_PostacionExistenteL5_2,
                popuplayertitle: 'Postacion Existente L5',
                interactive: true,
                title: '<img src="styles/legend/PostacionExistenteL5_2.png" /> Postacion Existente L5'
            });
var format_Postsistemaparamover_3 = new ol.format.GeoJSON();
var features_Postsistemaparamover_3 = format_Postsistemaparamover_3.readFeatures(json_Postsistemaparamover_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Postsistemaparamover_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postsistemaparamover_3.addFeatures(features_Postsistemaparamover_3);
var lyr_Postsistemaparamover_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postsistemaparamover_3, 
                style: style_Postsistemaparamover_3,
                popuplayertitle: 'Post. sistema para mover',
                interactive: true,
                title: '<img src="styles/legend/Postsistemaparamover_3.png" /> Post. sistema para mover'
            });
var format_POSTACIONL52811_4 = new ol.format.GeoJSON();
var features_POSTACIONL52811_4 = format_POSTACIONL52811_4.readFeatures(json_POSTACIONL52811_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIONL52811_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIONL52811_4.addFeatures(features_POSTACIONL52811_4);
var lyr_POSTACIONL52811_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIONL52811_4, 
                style: style_POSTACIONL52811_4,
                popuplayertitle: 'POSTACION L5 28-11',
                interactive: true,
                title: '<img src="styles/legend/POSTACIONL52811_4.png" /> POSTACION L5 28-11'
            });
var format_PostacionSistL5Exist01092025_5 = new ol.format.GeoJSON();
var features_PostacionSistL5Exist01092025_5 = format_PostacionSistL5Exist01092025_5.readFeatures(json_PostacionSistL5Exist01092025_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL5Exist01092025_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL5Exist01092025_5.addFeatures(features_PostacionSistL5Exist01092025_5);
var lyr_PostacionSistL5Exist01092025_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL5Exist01092025_5, 
                style: style_PostacionSistL5Exist01092025_5,
                popuplayertitle: 'Postacion Sist L5 Exist 01-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL5Exist01092025_5.png" /> Postacion Sist L5 Exist 01-09-2025'
            });
var format_PostacionSistL5Nuevo01092025_6 = new ol.format.GeoJSON();
var features_PostacionSistL5Nuevo01092025_6 = format_PostacionSistL5Nuevo01092025_6.readFeatures(json_PostacionSistL5Nuevo01092025_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL5Nuevo01092025_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL5Nuevo01092025_6.addFeatures(features_PostacionSistL5Nuevo01092025_6);
var lyr_PostacionSistL5Nuevo01092025_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL5Nuevo01092025_6, 
                style: style_PostacionSistL5Nuevo01092025_6,
                popuplayertitle: 'Postacion Sist L5 Nuevo 01-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL5Nuevo01092025_6.png" /> Postacion Sist L5 Nuevo 01-09-2025'
            });
var format_PostacionL5Exist02092025_7 = new ol.format.GeoJSON();
var features_PostacionL5Exist02092025_7 = format_PostacionL5Exist02092025_7.readFeatures(json_PostacionL5Exist02092025_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL5Exist02092025_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL5Exist02092025_7.addFeatures(features_PostacionL5Exist02092025_7);
var lyr_PostacionL5Exist02092025_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL5Exist02092025_7, 
                style: style_PostacionL5Exist02092025_7,
                popuplayertitle: 'Postacion L5 Exist 02-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL5Exist02092025_7.png" /> Postacion L5 Exist 02-09-2025'
            });
var format_PostacionL5Nuevo02092025_8 = new ol.format.GeoJSON();
var features_PostacionL5Nuevo02092025_8 = format_PostacionL5Nuevo02092025_8.readFeatures(json_PostacionL5Nuevo02092025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionL5Nuevo02092025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionL5Nuevo02092025_8.addFeatures(features_PostacionL5Nuevo02092025_8);
var lyr_PostacionL5Nuevo02092025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionL5Nuevo02092025_8, 
                style: style_PostacionL5Nuevo02092025_8,
                popuplayertitle: 'Postacion L5 Nuevo 02-09-2025',
                interactive: true,
                title: '<img src="styles/legend/PostacionL5Nuevo02092025_8.png" /> Postacion L5 Nuevo 02-09-2025'
            });
var format_APL5editado06012025_9 = new ol.format.GeoJSON();
var features_APL5editado06012025_9 = format_APL5editado06012025_9.readFeatures(json_APL5editado06012025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL5editado06012025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL5editado06012025_9.addFeatures(features_APL5editado06012025_9);
var lyr_APL5editado06012025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL5editado06012025_9, 
                style: style_APL5editado06012025_9,
                popuplayertitle: 'AP L5 editado 06-01-2025',
                interactive: true,
                title: '<img src="styles/legend/APL5editado06012025_9.png" /> AP L5 editado 06-01-2025'
            });
var format_APL504032025_10 = new ol.format.GeoJSON();
var features_APL504032025_10 = format_APL504032025_10.readFeatures(json_APL504032025_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL504032025_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL504032025_10.addFeatures(features_APL504032025_10);
var lyr_APL504032025_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL504032025_10, 
                style: style_APL504032025_10,
                popuplayertitle: 'AP L5 04-03-2025',
                interactive: true,
                title: '<img src="styles/legend/APL504032025_10.png" /> AP L5 04-03-2025'
            });
var format_CAEN1_11 = new ol.format.GeoJSON();
var features_CAEN1_11 = format_CAEN1_11.readFeatures(json_CAEN1_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_CAEN1_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAEN1_11.addFeatures(features_CAEN1_11);
var lyr_CAEN1_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAEN1_11, 
                style: style_CAEN1_11,
                popuplayertitle: 'CAEN1',
                interactive: true,
                title: '<img src="styles/legend/CAEN1_11.png" /> CAEN1'
            });
var format_MT3x240subt_L5_12 = new ol.format.GeoJSON();
var features_MT3x240subt_L5_12 = format_MT3x240subt_L5_12.readFeatures(json_MT3x240subt_L5_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x240subt_L5_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x240subt_L5_12.addFeatures(features_MT3x240subt_L5_12);
var lyr_MT3x240subt_L5_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x240subt_L5_12, 
                style: style_MT3x240subt_L5_12,
                popuplayertitle: 'MT 3x240 subt_L5',
                interactive: true,
                title: '<img src="styles/legend/MT3x240subt_L5_12.png" /> MT 3x240 subt_L5'
            });
var format_BT3x701x501x25L5_13 = new ol.format.GeoJSON();
var features_BT3x701x501x25L5_13 = format_BT3x701x501x25L5_13.readFeatures(json_BT3x701x501x25L5_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L5_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L5_13.addFeatures(features_BT3x701x501x25L5_13);
var lyr_BT3x701x501x25L5_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L5_13, 
                style: style_BT3x701x501x25L5_13,
                popuplayertitle: 'BT 3x70+1x50+1x25 L5',
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L5_13.png" /> BT 3x70+1x50+1x25 L5'
            });
var format_MT3x35_L5_14 = new ol.format.GeoJSON();
var features_MT3x35_L5_14 = format_MT3x35_L5_14.readFeatures(json_MT3x35_L5_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L5_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_14.addFeatures(features_MT3x35_L5_14);
var lyr_MT3x35_L5_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_14, 
                style: style_MT3x35_L5_14,
                popuplayertitle: 'MT 3x35_L5',
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_14.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_15 = new ol.format.GeoJSON();
var features_MT3x70L5_15 = format_MT3x70L5_15.readFeatures(json_MT3x70L5_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L5_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_15.addFeatures(features_MT3x70L5_15);
var lyr_MT3x70L5_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_15, 
                style: style_MT3x70L5_15,
                popuplayertitle: 'MT 3x70 L5',
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_15.png" /> MT 3x70 L5'
            });
var format_MT3x185_L5_16 = new ol.format.GeoJSON();
var features_MT3x185_L5_16 = format_MT3x185_L5_16.readFeatures(json_MT3x185_L5_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L5_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_16.addFeatures(features_MT3x185_L5_16);
var lyr_MT3x185_L5_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_16, 
                style: style_MT3x185_L5_16,
                popuplayertitle: 'MT 3x185_L5',
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_16.png" /> MT 3x185_L5'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Lote 1'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 2'});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 3'});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 4'});
var group_Lote5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 5'});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 6'});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'PRIORITARIO'});
var group_Lote7 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 7'});
var group_Lote8 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 8'});
var group_Lote9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote 9'});
var group_Puntosdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Puntos de trabajo'});
var group_CIASANtraSradelaAsuncin = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'CIA S.A. - Ntra. Sra. de la Asunción'});
var group_Rutasazonasdetrabajo = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Rutas a zonas de trabajo'});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'LOTE 1'});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 2'});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'FDM1'});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'FDM2'});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU1'});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU2'});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU3'});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU5'});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU9'});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU11'});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU12'});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU13'});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU14'});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU24'});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU25'});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'VAU28'});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N2'});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'N3'});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 3'});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 4'});
var group_LOTE5 = new ol.layer.Group({
                                layers: [lyr_PostacionExistenteL5_2,lyr_Postsistemaparamover_3,lyr_POSTACIONL52811_4,lyr_PostacionSistL5Exist01092025_5,lyr_PostacionSistL5Nuevo01092025_6,lyr_PostacionL5Exist02092025_7,lyr_PostacionL5Nuevo02092025_8,],
                                fold: 'close',
                                title: 'LOTE 5'});
var group_Baslica = new ol.layer.Group({
                                layers: [lyr_CAEN1_11,],
                                fold: 'close',
                                title: 'Basílica'});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'LOTE 6'});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Lote2'});
var group_lote5 = new ol.layer.Group({
                                layers: [lyr_APL5editado06012025_9,lyr_APL504032025_10,],
                                fold: 'close',
                                title: 'lote 5'});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'OpenStreetMap'});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'MPAA DE UBICACÓN'});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PostacionExistenteL5_2.setVisible(true);lyr_Postsistemaparamover_3.setVisible(true);lyr_POSTACIONL52811_4.setVisible(true);lyr_PostacionSistL5Exist01092025_5.setVisible(true);lyr_PostacionSistL5Nuevo01092025_6.setVisible(true);lyr_PostacionL5Exist02092025_7.setVisible(true);lyr_PostacionL5Nuevo02092025_8.setVisible(true);lyr_APL5editado06012025_9.setVisible(true);lyr_APL504032025_10.setVisible(true);lyr_CAEN1_11.setVisible(true);lyr_MT3x240subt_L5_12.setVisible(true);lyr_BT3x701x501x25L5_13.setVisible(true);lyr_MT3x35_L5_14.setVisible(true);lyr_MT3x70L5_15.setVisible(true);lyr_MT3x185_L5_16.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_LOTE5,group_lote5,group_Baslica,lyr_MT3x240subt_L5_12,lyr_BT3x701x501x25L5_13,lyr_MT3x35_L5_14,lyr_MT3x70L5_15,lyr_MT3x185_L5_16];
lyr_PostacionExistenteL5_2.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_Postsistemaparamover_3.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Cuadrilla': 'Cuadrilla', 'Marca': 'Marca', 'Número de': 'Número de', 'Poste': 'Poste', 'Tipo de Po': 'Tipo de Po', 'Cambio Sos': 'Cambio Sos', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de P': 'Fecha de P', 'Creado': 'Creado', 'X': 'X', 'Y': 'Y', });
lyr_POSTACIONL52811_4.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'Fábrica': 'Fábrica', 'x': 'x', 'y': 'y', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_PostacionSistL5Exist01092025_5.set('fieldAliases', {'#': '#', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL5Nuevo01092025_6.set('fieldAliases', {'#': '#', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionL5Exist02092025_7.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'TRAMO': 'TRAMO', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_PostacionL5Nuevo02092025_8.set('fieldAliases', {'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', 'ALIMENTADOR': 'ALIMENTADOR', 'TRAMO': 'TRAMO', 'NRO_SOSTEN': 'NRO_SOSTEN', 'TIPO_POSTE': 'TIPO_POSTE', });
lyr_APL5editado06012025_9.set('fieldAliases', {'Autor': 'Autor', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_APL504032025_10.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Tipo de Poste': 'Tipo de Poste', });
lyr_CAEN1_11.set('fieldAliases', {'id': 'id', 'LONGITUD': 'LONGITUD', 'CONDUCTOR': 'CONDUCTOR', });
lyr_MT3x240subt_L5_12.set('fieldAliases', {'Fecha': 'Fecha', 'Inicio-Fin': 'Inicio-Fin', 'Longitud': 'Longitud', 'Alimentado': 'Alimentado', 'DO/ACO': 'DO/ACO', 'Item': 'Item', });
lyr_BT3x701x501x25L5_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x35_L5_14.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L5_15.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x185_L5_16.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ÍTEM': 'ÍTEM', 'ALIMENT.': 'ALIMENT.', });
lyr_PostacionExistenteL5_2.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_Postsistemaparamover_3.set('fieldImages', {'#': 'TextEdit', 'Tipo': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Cuadrilla': 'TextEdit', 'Marca': 'TextEdit', 'Número de': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Cambio Sos': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de P': 'TextEdit', 'Creado': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_POSTACIONL52811_4.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Fábrica': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_PostacionSistL5Exist01092025_5.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 5': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL5Nuevo01092025_6.set('fieldImages', {'#': 'Range', 'Alimentadores Lote 5': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionL5Exist02092025_7.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'TRAMO': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_PostacionL5Nuevo02092025_8.set('fieldImages', {'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', 'ALIMENTADOR': 'TextEdit', 'TRAMO': 'TextEdit', 'NRO_SOSTEN': 'TextEdit', 'TIPO_POSTE': 'TextEdit', });
lyr_APL5editado06012025_9.set('fieldImages', {'Autor': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_APL504032025_10.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Tipo de Poste': 'TextEdit', });
lyr_CAEN1_11.set('fieldImages', {'id': '', 'LONGITUD': '', 'CONDUCTOR': '', });
lyr_MT3x240subt_L5_12.set('fieldImages', {'Fecha': 'TextEdit', 'Inicio-Fin': 'TextEdit', 'Longitud': 'TextEdit', 'Alimentado': 'TextEdit', 'DO/ACO': 'TextEdit', 'Item': 'TextEdit', });
lyr_BT3x701x501x25L5_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x35_L5_14.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70L5_15.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x185_L5_16.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMENT.': 'TextEdit', });
lyr_PostacionExistenteL5_2.set('fieldLabels', {'Nro de Sos': 'inline label - visible with data', 'Coord. X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'Poste': 'inline label - visible with data', });
lyr_Postsistemaparamover_3.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de': 'no label', 'Alimentado': 'no label', 'Cuadrilla': 'no label', 'Marca': 'no label', 'Número de': 'no label', 'Poste': 'no label', 'Tipo de Po': 'no label', 'Cambio Sos': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fecha de P': 'no label', 'Creado': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_POSTACIONL52811_4.set('fieldLabels', {'ALIMENT.': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'TIPO/POSTE': 'inline label - visible with data', 'Fábrica': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Coord X': 'inline label - visible with data', 'Coord Y': 'inline label - visible with data', });
lyr_PostacionSistL5Exist01092025_5.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 5': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL5Nuevo01092025_6.set('fieldLabels', {'#': 'no label', 'Alimentadores Lote 5': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionL5Exist02092025_7.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'TRAMO': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_PostacionL5Nuevo02092025_8.set('fieldLabels', {'LATITUD': 'no label', 'LONGITUD': 'no label', 'ALIMENTADOR': 'no label', 'TRAMO': 'no label', 'NRO_SOSTEN': 'no label', 'TIPO_POSTE': 'no label', });
lyr_APL5editado06012025_9.set('fieldLabels', {'Autor': 'no label', 'Numero de': 'no label', 'Alimentado': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_APL504032025_10.set('fieldLabels', {'Numero de Sosten': 'no label', 'Alimentadores Lote 5': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', 'Tipo de Poste': 'no label', });
lyr_CAEN1_11.set('fieldLabels', {'id': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'CONDUCTOR': 'inline label - visible with data', });
lyr_MT3x240subt_L5_12.set('fieldLabels', {'Fecha': 'no label', 'Inicio-Fin': 'no label', 'Longitud': 'no label', 'Alimentado': 'no label', 'DO/ACO': 'no label', 'Item': 'no label', });
lyr_BT3x701x501x25L5_13.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35_L5_14.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70L5_15.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x185_L5_16.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', });
lyr_MT3x185_L5_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});