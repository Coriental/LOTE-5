ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([477238.390672, 7189009.666719, 493791.531663, 7197722.911888]);
var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_PDL5_2 = new ol.format.GeoJSON();
var features_PDL5_2 = format_PDL5_2.readFeatures(json_PDL5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL5_2.addFeatures(features_PDL5_2);
var lyr_PDL5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL5_2, 
                style: style_PDL5_2,
                popuplayertitle: "PD L5",
                interactive: true,
                title: '<img src="styles/legend/PDL5_2.png" /> PD L5'
            });
var format_PDSistL511022025_3 = new ol.format.GeoJSON();
var features_PDSistL511022025_3 = format_PDSistL511022025_3.readFeatures(json_PDSistL511022025_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDSistL511022025_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDSistL511022025_3.addFeatures(features_PDSistL511022025_3);
var lyr_PDSistL511022025_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDSistL511022025_3, 
                style: style_PDSistL511022025_3,
                popuplayertitle: "PD Sist L5 11-02-2025",
                interactive: true,
                title: '<img src="styles/legend/PDSistL511022025_3.png" /> PD Sist L5 11-02-2025'
            });
var format_APL5editado06012025_4 = new ol.format.GeoJSON();
var features_APL5editado06012025_4 = format_APL5editado06012025_4.readFeatures(json_APL5editado06012025_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_APL5editado06012025_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_APL5editado06012025_4.addFeatures(features_APL5editado06012025_4);
var lyr_APL5editado06012025_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_APL5editado06012025_4, 
                style: style_APL5editado06012025_4,
                popuplayertitle: "AP L5 editado 06-01-2025",
                interactive: true,
                title: '<img src="styles/legend/APL5editado06012025_4.png" /> AP L5 editado 06-01-2025'
            });
var format_PostacionExistenteL5_5 = new ol.format.GeoJSON();
var features_PostacionExistenteL5_5 = format_PostacionExistenteL5_5.readFeatures(json_PostacionExistenteL5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionExistenteL5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionExistenteL5_5.addFeatures(features_PostacionExistenteL5_5);
var lyr_PostacionExistenteL5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionExistenteL5_5, 
                style: style_PostacionExistenteL5_5,
                popuplayertitle: "Postacion Existente L5",
                interactive: true,
                title: '<img src="styles/legend/PostacionExistenteL5_5.png" /> Postacion Existente L5'
            });
var format_Postsistemaparamover_6 = new ol.format.GeoJSON();
var features_Postsistemaparamover_6 = format_Postsistemaparamover_6.readFeatures(json_Postsistemaparamover_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Postsistemaparamover_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Postsistemaparamover_6.addFeatures(features_Postsistemaparamover_6);
var lyr_Postsistemaparamover_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Postsistemaparamover_6, 
                style: style_Postsistemaparamover_6,
                popuplayertitle: "Post. sistema para mover",
                interactive: true,
                title: '<img src="styles/legend/Postsistemaparamover_6.png" /> Post. sistema para mover'
            });
var format_POSTACIONL52811_7 = new ol.format.GeoJSON();
var features_POSTACIONL52811_7 = format_POSTACIONL52811_7.readFeatures(json_POSTACIONL52811_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACIONL52811_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACIONL52811_7.addFeatures(features_POSTACIONL52811_7);
var lyr_POSTACIONL52811_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACIONL52811_7, 
                style: style_POSTACIONL52811_7,
                popuplayertitle: "POSTACION L5 28-11",
                interactive: true,
                title: '<img src="styles/legend/POSTACIONL52811_7.png" /> POSTACION L5 28-11'
            });
var format_PostacionSistL5Exist06022025_8 = new ol.format.GeoJSON();
var features_PostacionSistL5Exist06022025_8 = format_PostacionSistL5Exist06022025_8.readFeatures(json_PostacionSistL5Exist06022025_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL5Exist06022025_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL5Exist06022025_8.addFeatures(features_PostacionSistL5Exist06022025_8);
var lyr_PostacionSistL5Exist06022025_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL5Exist06022025_8, 
                style: style_PostacionSistL5Exist06022025_8,
                popuplayertitle: "Postacion Sist L5 Exist 06-02-2025",
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL5Exist06022025_8.png" /> Postacion Sist L5 Exist 06-02-2025'
            });
var format_PostacionSistL5Nuevo06022025_9 = new ol.format.GeoJSON();
var features_PostacionSistL5Nuevo06022025_9 = format_PostacionSistL5Nuevo06022025_9.readFeatures(json_PostacionSistL5Nuevo06022025_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionSistL5Nuevo06022025_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionSistL5Nuevo06022025_9.addFeatures(features_PostacionSistL5Nuevo06022025_9);
var lyr_PostacionSistL5Nuevo06022025_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionSistL5Nuevo06022025_9, 
                style: style_PostacionSistL5Nuevo06022025_9,
                popuplayertitle: "Postacion Sist L5 Nuevo 06-02-2025",
                interactive: true,
                title: '<img src="styles/legend/PostacionSistL5Nuevo06022025_9.png" /> Postacion Sist L5 Nuevo 06-02-2025'
            });
var format_CAEN1_10 = new ol.format.GeoJSON();
var features_CAEN1_10 = format_CAEN1_10.readFeatures(json_CAEN1_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_CAEN1_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAEN1_10.addFeatures(features_CAEN1_10);
var lyr_CAEN1_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAEN1_10, 
                style: style_CAEN1_10,
                popuplayertitle: "CAEN1",
                interactive: true,
                title: '<img src="styles/legend/CAEN1_10.png" /> CAEN1'
            });
var format_BT3x701x501x25L5_11 = new ol.format.GeoJSON();
var features_BT3x701x501x25L5_11 = format_BT3x701x501x25L5_11.readFeatures(json_BT3x701x501x25L5_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L5_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L5_11.addFeatures(features_BT3x701x501x25L5_11);
var lyr_BT3x701x501x25L5_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L5_11, 
                style: style_BT3x701x501x25L5_11,
                popuplayertitle: "BT 3x70+1x50+1x25 L5",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L5_11.png" /> BT 3x70+1x50+1x25 L5'
            });
var format_MT3x35_L5_12 = new ol.format.GeoJSON();
var features_MT3x35_L5_12 = format_MT3x35_L5_12.readFeatures(json_MT3x35_L5_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L5_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_12.addFeatures(features_MT3x35_L5_12);
var lyr_MT3x35_L5_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_12, 
                style: style_MT3x35_L5_12,
                popuplayertitle: "MT 3x35_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_12.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_13 = new ol.format.GeoJSON();
var features_MT3x70L5_13 = format_MT3x70L5_13.readFeatures(json_MT3x70L5_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L5_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_13.addFeatures(features_MT3x70L5_13);
var lyr_MT3x70L5_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_13, 
                style: style_MT3x70L5_13,
                popuplayertitle: "MT 3x70 L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_13.png" /> MT 3x70 L5'
            });
var format_MT3x185_L5_14 = new ol.format.GeoJSON();
var features_MT3x185_L5_14 = format_MT3x185_L5_14.readFeatures(json_MT3x185_L5_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L5_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_14.addFeatures(features_MT3x185_L5_14);
var lyr_MT3x185_L5_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_14, 
                style: style_MT3x185_L5_14,
                popuplayertitle: "MT 3x185_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_14.png" /> MT 3x185_L5'
            });
var group_Lote1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 1"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 2"});
var group_Lote3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 3"});
var group_Lote4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 4"});
var group_Lote5 = new ol.layer.Group({
                                layers: [lyr_PDL5_2,lyr_PDSistL511022025_3,],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PRIORITARIO"});
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_FDM1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM1"});
var group_FDM2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "FDM2"});
var group_VAU1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU1"});
var group_VAU2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU2"});
var group_VAU3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU3"});
var group_VAU5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU5"});
var group_VAU9 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU9"});
var group_VAU11 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU11"});
var group_VAU12 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU12"});
var group_VAU13 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU13"});
var group_VAU14 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU14"});
var group_VAU24 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU24"});
var group_VAU25 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU25"});
var group_VAU28 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "VAU28"});
var group_N2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N2"});
var group_N3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "N3"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [lyr_PostacionExistenteL5_5,lyr_Postsistemaparamover_6,lyr_POSTACIONL52811_7,lyr_PostacionSistL5Exist06022025_8,lyr_PostacionSistL5Nuevo06022025_9,],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [lyr_CAEN1_10,],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [lyr_APL5editado06012025_4,],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_GoogleHybrid_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PDL5_2.setVisible(true);lyr_PDSistL511022025_3.setVisible(true);lyr_APL5editado06012025_4.setVisible(true);lyr_PostacionExistenteL5_5.setVisible(true);lyr_Postsistemaparamover_6.setVisible(true);lyr_POSTACIONL52811_7.setVisible(true);lyr_PostacionSistL5Exist06022025_8.setVisible(true);lyr_PostacionSistL5Nuevo06022025_9.setVisible(true);lyr_CAEN1_10.setVisible(true);lyr_BT3x701x501x25L5_11.setVisible(true);lyr_MT3x35_L5_12.setVisible(true);lyr_MT3x70L5_13.setVisible(true);lyr_MT3x185_L5_14.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,lyr_OpenStreetMap_1,group_Lote5,group_lote5,group_LOTE5,group_Baslica,lyr_BT3x701x501x25L5_11,lyr_MT3x35_L5_12,lyr_MT3x70L5_13,lyr_MT3x185_L5_14];
lyr_PDL5_2.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'SOSTÉN': 'SOSTÉN', 'X': 'X', 'Y': 'Y', 'ANDE': 'ANDE', 'NRO DE FÁBRICA': 'NRO DE FÁBRICA', });
lyr_PDSistL511022025_3.set('fieldAliases', {'Fecha de inicio': 'Fecha de inicio', 'Tipo de Poste': 'Tipo de Poste', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Nro de Fabrica del trafo': 'Nro de Fabrica del trafo', 'N�ANDE': 'N�ANDE', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_APL5editado06012025_4.set('fieldAliases', {'Autor': 'Autor', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PostacionExistenteL5_5.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_Postsistemaparamover_6.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Cuadrilla': 'Cuadrilla', 'Marca': 'Marca', 'Número de': 'Número de', 'Poste': 'Poste', 'Tipo de Po': 'Tipo de Po', 'Cambio Sos': 'Cambio Sos', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de P': 'Fecha de P', 'Creado': 'Creado', 'X': 'X', 'Y': 'Y', });
lyr_POSTACIONL52811_7.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'Fábrica': 'Fábrica', 'x': 'x', 'y': 'y', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_PostacionSistL5Exist06022025_8.set('fieldAliases', {'Fecha de Postaci�n': 'Fecha de Postaci�n', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Numero de Sosten': 'Numero de Sosten', 'Tipo de Poste': 'Tipo de Poste', 'N�mero de F�brica del Poste': 'N�mero de F�brica del Poste', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_PostacionSistL5Nuevo06022025_9.set('fieldAliases', {'Fecha de P': 'Fecha de P', 'Alimentado': 'Alimentado', 'Numero de': 'Numero de', 'Tipo de Po': 'Tipo de Po', 'N�mero d': 'N�mero d', 'Longitud': 'Longitud', 'Latitud': 'Latitud', });
lyr_CAEN1_10.set('fieldAliases', {'id': 'id', 'LONGITUD': 'LONGITUD', 'CONDUCTOR': 'CONDUCTOR', });
lyr_BT3x701x501x25L5_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x35_L5_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L5_13.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x185_L5_14.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ÍTEM': 'ÍTEM', 'ALIMENT.': 'ALIMENT.', });
lyr_PDL5_2.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'SOSTÉN': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'ANDE': 'Range', 'NRO DE FÁBRICA': 'Range', });
lyr_PDSistL511022025_3.set('fieldImages', {'Fecha de inicio': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Nro de Fabrica del trafo': 'Range', 'N�ANDE': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_APL5editado06012025_4.set('fieldImages', {'Autor': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PostacionExistenteL5_5.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_Postsistemaparamover_6.set('fieldImages', {'#': 'TextEdit', 'Tipo': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Cuadrilla': 'TextEdit', 'Marca': 'TextEdit', 'Número de': 'TextEdit', 'Poste': 'TextEdit', 'Tipo de Po': 'TextEdit', 'Cambio Sos': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de P': 'TextEdit', 'Creado': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_POSTACIONL52811_7.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Fábrica': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_PostacionSistL5Exist06022025_8.set('fieldImages', {'Fecha de Postaci�n': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'N�mero de F�brica del Poste': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_PostacionSistL5Nuevo06022025_9.set('fieldImages', {'Fecha de P': 'TextEdit', 'Alimentado': 'TextEdit', 'Numero de': 'TextEdit', 'Tipo de Po': 'TextEdit', 'N�mero d': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', });
lyr_CAEN1_10.set('fieldImages', {'id': '', 'LONGITUD': '', 'CONDUCTOR': '', });
lyr_BT3x701x501x25L5_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x35_L5_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70L5_13.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x185_L5_14.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMENT.': 'TextEdit', });
lyr_PDL5_2.set('fieldLabels', {'ALIMENTADOR': 'inline label - visible with data', 'SOSTÉN': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'ANDE': 'inline label - visible with data', 'NRO DE FÁBRICA': 'inline label - visible with data', });
lyr_PDSistL511022025_3.set('fieldLabels', {'Fecha de inicio': 'no label', 'Tipo de Poste': 'no label', 'Numero de Sosten': 'no label', 'Alimentadores Lote 5': 'no label', 'Nro de Fabrica del trafo': 'no label', 'N�ANDE': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_APL5editado06012025_4.set('fieldLabels', {'Autor': 'no label', 'Numero de': 'no label', 'Alimentado': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_PostacionExistenteL5_5.set('fieldLabels', {'Nro de Sos': 'inline label - visible with data', 'Coord. X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'Poste': 'inline label - visible with data', });
lyr_Postsistemaparamover_6.set('fieldLabels', {'#': 'no label', 'Tipo': 'no label', 'Numero de': 'no label', 'Alimentado': 'no label', 'Cuadrilla': 'no label', 'Marca': 'no label', 'Número de': 'no label', 'Poste': 'no label', 'Tipo de Po': 'no label', 'Cambio Sos': 'no label', 'Motivo': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Fecha de P': 'no label', 'Creado': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_POSTACIONL52811_7.set('fieldLabels', {'ALIMENT.': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'TIPO/POSTE': 'inline label - visible with data', 'Fábrica': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Coord X': 'inline label - visible with data', 'Coord Y': 'inline label - visible with data', });
lyr_PostacionSistL5Exist06022025_8.set('fieldLabels', {'Fecha de Postaci�n': 'no label', 'Alimentadores Lote 5': 'no label', 'Numero de Sosten': 'no label', 'Tipo de Poste': 'no label', 'N�mero de F�brica del Poste': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_PostacionSistL5Nuevo06022025_9.set('fieldLabels', {'Fecha de P': 'no label', 'Alimentado': 'no label', 'Numero de': 'no label', 'Tipo de Po': 'no label', 'N�mero d': 'no label', 'Longitud': 'no label', 'Latitud': 'no label', });
lyr_CAEN1_10.set('fieldLabels', {'id': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'CONDUCTOR': 'inline label - visible with data', });
lyr_BT3x701x501x25L5_11.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35_L5_12.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70L5_13.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x185_L5_14.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', });
lyr_MT3x185_L5_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});