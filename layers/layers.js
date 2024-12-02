ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([470636.682183, 7180467.521810, 501878.682183, 7196120.271810]);
var wms_layers = [];

var format_Lote2TendidoMTBT_0 = new ol.format.GeoJSON();
var features_Lote2TendidoMTBT_0 = format_Lote2TendidoMTBT_0.readFeatures(json_Lote2TendidoMTBT_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_Lote2TendidoMTBT_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lote2TendidoMTBT_0.addFeatures(features_Lote2TendidoMTBT_0);
var lyr_Lote2TendidoMTBT_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lote2TendidoMTBT_0, 
                style: style_Lote2TendidoMTBT_0,
                popuplayertitle: "Lote 2 - Tendido MT-BT",
                interactive: true,
                title: '<img src="styles/legend/Lote2TendidoMTBT_0.png" /> Lote 2 - Tendido MT-BT'
            });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 0.907000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_GotoXYPoint_2 = new ol.format.GeoJSON();
var features_GotoXYPoint_2 = format_GotoXYPoint_2.readFeatures(json_GotoXYPoint_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_GotoXYPoint_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GotoXYPoint_2.addFeatures(features_GotoXYPoint_2);
var lyr_GotoXYPoint_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GotoXYPoint_2, 
                style: style_GotoXYPoint_2,
                popuplayertitle: "Go to XY Point",
                interactive: true,
                title: '<img src="styles/legend/GotoXYPoint_2.png" /> Go to XY Point'
            });
var format_aplote52611_3 = new ol.format.GeoJSON();
var features_aplote52611_3 = format_aplote52611_3.readFeatures(json_aplote52611_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_aplote52611_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aplote52611_3.addFeatures(features_aplote52611_3);
var lyr_aplote52611_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aplote52611_3, 
                style: style_aplote52611_3,
                popuplayertitle: "ap lote 5 26-11",
                interactive: true,
                title: '<img src="styles/legend/aplote52611_3.png" /> ap lote 5 26-11'
            });
var format_PDL5_4 = new ol.format.GeoJSON();
var features_PDL5_4 = format_PDL5_4.readFeatures(json_PDL5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL5_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL5_4.addFeatures(features_PDL5_4);
var lyr_PDL5_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL5_4, 
                style: style_PDL5_4,
                popuplayertitle: "PD L5",
                interactive: true,
                title: '<img src="styles/legend/PDL5_4.png" /> PD L5'
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
var format_POSTACINSISTEMA_6 = new ol.format.GeoJSON();
var features_POSTACINSISTEMA_6 = format_POSTACINSISTEMA_6.readFeatures(json_POSTACINSISTEMA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACINSISTEMA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACINSISTEMA_6.addFeatures(features_POSTACINSISTEMA_6);cluster_POSTACINSISTEMA_6 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_POSTACINSISTEMA_6
});
var lyr_POSTACINSISTEMA_6 = new ol.layer.Vector({
                declutter: false,
                source:cluster_POSTACINSISTEMA_6, 
                style: style_POSTACINSISTEMA_6,
                popuplayertitle: "POSTACIÓN SISTEMA",
                interactive: true,
                title: '<img src="styles/legend/POSTACINSISTEMA_6.png" /> POSTACIÓN SISTEMA'
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
var format_CAEN1_8 = new ol.format.GeoJSON();
var features_CAEN1_8 = format_CAEN1_8.readFeatures(json_CAEN1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_CAEN1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CAEN1_8.addFeatures(features_CAEN1_8);
var lyr_CAEN1_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CAEN1_8, 
                style: style_CAEN1_8,
                popuplayertitle: "CAEN1",
                interactive: true,
                title: '<img src="styles/legend/CAEN1_8.png" /> CAEN1'
            });
var format_BT3x701x501x25L5_9 = new ol.format.GeoJSON();
var features_BT3x701x501x25L5_9 = format_BT3x701x501x25L5_9.readFeatures(json_BT3x701x501x25L5_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_BT3x701x501x25L5_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L5_9.addFeatures(features_BT3x701x501x25L5_9);
var lyr_BT3x701x501x25L5_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L5_9, 
                style: style_BT3x701x501x25L5_9,
                popuplayertitle: "BT 3x70+1x50+1x25 L5",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L5_9.png" /> BT 3x70+1x50+1x25 L5'
            });
var format_MT3x35_L5_10 = new ol.format.GeoJSON();
var features_MT3x35_L5_10 = format_MT3x35_L5_10.readFeatures(json_MT3x35_L5_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L5_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_10.addFeatures(features_MT3x35_L5_10);
var lyr_MT3x35_L5_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_10, 
                style: style_MT3x35_L5_10,
                popuplayertitle: "MT 3x35_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_10.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_11 = new ol.format.GeoJSON();
var features_MT3x70L5_11 = format_MT3x70L5_11.readFeatures(json_MT3x70L5_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L5_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_11.addFeatures(features_MT3x70L5_11);
var lyr_MT3x70L5_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_11, 
                style: style_MT3x70L5_11,
                popuplayertitle: "MT 3x70 L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_11.png" /> MT 3x70 L5'
            });
var format_MT3x185_L5_12 = new ol.format.GeoJSON();
var features_MT3x185_L5_12 = format_MT3x185_L5_12.readFeatures(json_MT3x185_L5_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L5_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_12.addFeatures(features_MT3x185_L5_12);
var lyr_MT3x185_L5_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_12, 
                style: style_MT3x185_L5_12,
                popuplayertitle: "MT 3x185_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_12.png" /> MT 3x185_L5'
            });
var format_FaltantesDerivacin_13 = new ol.format.GeoJSON();
var features_FaltantesDerivacin_13 = format_FaltantesDerivacin_13.readFeatures(json_FaltantesDerivacin_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_FaltantesDerivacin_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FaltantesDerivacin_13.addFeatures(features_FaltantesDerivacin_13);
var lyr_FaltantesDerivacin_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FaltantesDerivacin_13, 
                style: style_FaltantesDerivacin_13,
                popuplayertitle: "Faltantes Derivación",
                interactive: true,
    title: 'Faltantes Derivación<br />\
    <img src="styles/legend/FaltantesDerivacin_13_0.png" /> CAE3<br />\
    <img src="styles/legend/FaltantesDerivacin_13_1.png" /> CAEN1<br />\
    <img src="styles/legend/FaltantesDerivacin_13_2.png" /> <br />'
        });
var format_CARLOS_14 = new ol.format.GeoJSON();
var features_CARLOS_14 = format_CARLOS_14.readFeatures(json_CARLOS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_CARLOS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CARLOS_14.addFeatures(features_CARLOS_14);
var lyr_CARLOS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CARLOS_14, 
                style: style_CARLOS_14,
                popuplayertitle: "CARLOS",
                interactive: true,
                title: '<img src="styles/legend/CARLOS_14.png" /> CARLOS'
            });
var group_PRIORITARIO = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "PRIORITARIO"});
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
                                layers: [lyr_PDL5_4,],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
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
                                layers: [lyr_PostacionExistenteL5_5,lyr_POSTACINSISTEMA_6,lyr_POSTACIONL52811_7,],
                                fold: "open",
                                title: "LOTE 5"});
var group_Baslica = new ol.layer.Group({
                                layers: [lyr_CAEN1_8,],
                                fold: "open",
                                title: "Basílica"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
var group_AP = new ol.layer.Group({
                                layers: [lyr_aplote52611_3,],
                                fold: "open",
                                title: "AP"});
var group_Lote2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote2"});
var group_lote5 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "lote 5"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [lyr_OSMStandard_1,lyr_GotoXYPoint_2,],
                                fold: "open",
                                title: "OpenStreetMap"});
var group_MPAADEUBICACN = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "MPAA DE UBICACÓN"});

lyr_Lote2TendidoMTBT_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_GotoXYPoint_2.setVisible(true);lyr_aplote52611_3.setVisible(true);lyr_PDL5_4.setVisible(true);lyr_PostacionExistenteL5_5.setVisible(true);lyr_POSTACINSISTEMA_6.setVisible(true);lyr_POSTACIONL52811_7.setVisible(true);lyr_CAEN1_8.setVisible(true);lyr_BT3x701x501x25L5_9.setVisible(true);lyr_MT3x35_L5_10.setVisible(true);lyr_MT3x70L5_11.setVisible(true);lyr_MT3x185_L5_12.setVisible(true);lyr_FaltantesDerivacin_13.setVisible(true);lyr_CARLOS_14.setVisible(true);
var layersList = [lyr_Lote2TendidoMTBT_0,group_OpenStreetMap,group_AP,group_Lote5,group_LOTE5,group_Baslica,lyr_BT3x701x501x25L5_9,lyr_MT3x35_L5_10,lyr_MT3x70L5_11,lyr_MT3x185_L5_12,lyr_FaltantesDerivacin_13,lyr_CARLOS_14];
lyr_Lote2TendidoMTBT_0.set('fieldAliases', {'id': 'id', });
lyr_GotoXYPoint_2.set('fieldAliases', {});
lyr_aplote52611_3.set('fieldAliases', {'Tipo': 'Tipo', 'Numero de': 'Numero de', 'Alimentado': 'Alimentado', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_PDL5_4.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'SOSTÉN': 'SOSTÉN', 'X': 'X', 'Y': 'Y', 'ANDE': 'ANDE', 'NRO DE FÁBRICA': 'NRO DE FÁBRICA', });
lyr_PostacionExistenteL5_5.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_POSTACINSISTEMA_6.set('fieldAliases', {'#': '#', 'Tipo': 'Tipo', 'Numero de Sosten': 'Numero de Sosten', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Cuadrilla 5': 'Cuadrilla 5', 'Marca': 'Marca', 'Número de Fábrica': 'Número de Fábrica', 'Poste': 'Poste', 'Tipo de Poste': 'Tipo de Poste', 'Cambio Sosten': 'Cambio Sosten', 'Motivo': 'Motivo', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Fecha de Postación': 'Fecha de Postación', 'Creado': 'Creado', 'X': 'X', 'Y': 'Y', });
lyr_POSTACIONL52811_7.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'Fábrica': 'Fábrica', 'x': 'x', 'y': 'y', 'Coord X': 'Coord X', 'Coord Y': 'Coord Y', });
lyr_CAEN1_8.set('fieldAliases', {'id': 'id', 'LONGITUD': 'LONGITUD', 'CONDUCTOR': 'CONDUCTOR', });
lyr_BT3x701x501x25L5_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x35_L5_10.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L5_11.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x185_L5_12.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ÍTEM': 'ÍTEM', 'ALIMENT.': 'ALIMENT.', });
lyr_FaltantesDerivacin_13.set('fieldAliases', {'nombre': 'nombre', 'longitud': 'longitud', 'Alimentado': 'Alimentado', });
lyr_CARLOS_14.set('fieldAliases', {'id': 'id', });
lyr_Lote2TendidoMTBT_0.set('fieldImages', {'id': 'TextEdit', });
lyr_GotoXYPoint_2.set('fieldImages', {});
lyr_aplote52611_3.set('fieldImages', {'Tipo': 'TextEdit', 'Numero de': 'TextEdit', 'Alimentado': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_PDL5_4.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'SOSTÉN': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'ANDE': 'Range', 'NRO DE FÁBRICA': 'Range', });
lyr_PostacionExistenteL5_5.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_POSTACINSISTEMA_6.set('fieldImages', {'#': 'Range', 'Tipo': 'TextEdit', 'Numero de Sosten': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Cuadrilla 5': 'TextEdit', 'Marca': 'TextEdit', 'Número de Fábrica': 'Range', 'Poste': 'TextEdit', 'Tipo de Poste': 'TextEdit', 'Cambio Sosten': 'TextEdit', 'Motivo': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Fecha de Postación': 'TextEdit', 'Creado': 'TextEdit', 'X': '', 'Y': '', });
lyr_POSTACIONL52811_7.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Fábrica': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'Coord X': 'TextEdit', 'Coord Y': 'TextEdit', });
lyr_CAEN1_8.set('fieldImages', {'id': '', 'LONGITUD': '', 'CONDUCTOR': '', });
lyr_BT3x701x501x25L5_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x35_L5_10.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMENT.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x70L5_11.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ALIMEN.': 'TextEdit', 'ÍTEM': 'TextEdit', });
lyr_MT3x185_L5_12.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': 'TextEdit', 'ÍTEM': 'TextEdit', 'ALIMENT.': 'TextEdit', });
lyr_FaltantesDerivacin_13.set('fieldImages', {'nombre': 'TextEdit', 'longitud': 'TextEdit', 'Alimentado': 'TextEdit', });
lyr_CARLOS_14.set('fieldImages', {'id': 'TextEdit', });
lyr_Lote2TendidoMTBT_0.set('fieldLabels', {'id': 'inline label - visible with data', });
lyr_GotoXYPoint_2.set('fieldLabels', {});
lyr_aplote52611_3.set('fieldLabels', {'Tipo': 'inline label - visible with data', 'Numero de': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', });
lyr_PDL5_4.set('fieldLabels', {'ALIMENTADOR': 'inline label - visible with data', 'SOSTÉN': 'inline label - visible with data', 'X': 'inline label - visible with data', 'Y': 'inline label - visible with data', 'ANDE': 'inline label - visible with data', 'NRO DE FÁBRICA': 'inline label - visible with data', });
lyr_PostacionExistenteL5_5.set('fieldLabels', {'Nro de Sos': 'inline label - visible with data', 'Coord. X': 'inline label - visible with data', 'Coord. Y': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'Poste': 'inline label - visible with data', });
lyr_POSTACINSISTEMA_6.set('fieldLabels', {'#': 'inline label - visible with data', 'Tipo': 'inline label - visible with data', 'Numero de Sosten': 'inline label - visible with data', 'Alimentadores Lote 5': 'inline label - visible with data', 'Cuadrilla 5': 'inline label - visible with data', 'Marca': 'inline label - visible with data', 'Número de Fábrica': 'inline label - visible with data', 'Poste': 'inline label - visible with data', 'Tipo de Poste': 'inline label - visible with data', 'Cambio Sosten': 'inline label - visible with data', 'Motivo': 'inline label - visible with data', 'Latitud': 'inline label - visible with data', 'Longitud': 'inline label - visible with data', 'Fecha de Postación': 'inline label - visible with data', 'Creado': 'inline label - visible with data', 'X': 'no label', 'Y': 'no label', });
lyr_POSTACIONL52811_7.set('fieldLabels', {'ALIMENT.': 'inline label - visible with data', 'Sosten': 'inline label - visible with data', 'TIPO/POSTE': 'inline label - visible with data', 'Fábrica': 'inline label - visible with data', 'x': 'inline label - visible with data', 'y': 'inline label - visible with data', 'Coord X': 'inline label - visible with data', 'Coord Y': 'inline label - visible with data', });
lyr_CAEN1_8.set('fieldLabels', {'id': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'CONDUCTOR': 'inline label - visible with data', });
lyr_BT3x701x501x25L5_9.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x35_L5_10.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x70L5_11.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ALIMEN.': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', });
lyr_MT3x185_L5_12.set('fieldLabels', {'FECHA': 'inline label - visible with data', 'INICIO-FIN': 'inline label - visible with data', 'LONGITUD': 'inline label - visible with data', 'DO/ACO': 'inline label - visible with data', 'ÍTEM': 'inline label - visible with data', 'ALIMENT.': 'inline label - visible with data', });
lyr_FaltantesDerivacin_13.set('fieldLabels', {'nombre': 'inline label - visible with data', 'longitud': 'inline label - visible with data', 'Alimentado': 'inline label - visible with data', });
lyr_CARLOS_14.set('fieldLabels', {'id': 'no label', });
lyr_CARLOS_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});