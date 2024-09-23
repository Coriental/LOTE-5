ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:32721").setExtent([478094.177482, 7187662.831066, 493369.021599, 7194453.181066]);
var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_ESTAQUEOSL5_1 = new ol.format.GeoJSON();
var features_ESTAQUEOSL5_1 = format_ESTAQUEOSL5_1.readFeatures(json_ESTAQUEOSL5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_ESTAQUEOSL5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESTAQUEOSL5_1.addFeatures(features_ESTAQUEOSL5_1);
var lyr_ESTAQUEOSL5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESTAQUEOSL5_1, 
                style: style_ESTAQUEOSL5_1,
                popuplayertitle: "ESTAQUEOS L5",
                interactive: true,
                title: '<img src="styles/legend/ESTAQUEOSL5_1.png" /> ESTAQUEOS L5'
            });
var format_POSTACINSISTEMA_2 = new ol.format.GeoJSON();
var features_POSTACINSISTEMA_2 = format_POSTACINSISTEMA_2.readFeatures(json_POSTACINSISTEMA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_POSTACINSISTEMA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POSTACINSISTEMA_2.addFeatures(features_POSTACINSISTEMA_2);
var lyr_POSTACINSISTEMA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POSTACINSISTEMA_2, 
                style: style_POSTACINSISTEMA_2,
                popuplayertitle: "POSTACIÓN SISTEMA",
                interactive: true,
                title: '<img src="styles/legend/POSTACINSISTEMA_2.png" /> POSTACIÓN SISTEMA'
            });
var format_PostacionExistenteL5_3 = new ol.format.GeoJSON();
var features_PostacionExistenteL5_3 = format_PostacionExistenteL5_3.readFeatures(json_PostacionExistenteL5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacionExistenteL5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionExistenteL5_3.addFeatures(features_PostacionExistenteL5_3);
var lyr_PostacionExistenteL5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionExistenteL5_3, 
                style: style_PostacionExistenteL5_3,
                popuplayertitle: "Postacion Existente L5",
                interactive: true,
                title: '<img src="styles/legend/PostacionExistenteL5_3.png" /> Postacion Existente L5'
            });
var format_PostacinLote52009_4 = new ol.format.GeoJSON();
var features_PostacinLote52009_4 = format_PostacinLote52009_4.readFeatures(json_PostacinLote52009_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PostacinLote52009_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinLote52009_4.addFeatures(features_PostacinLote52009_4);
var lyr_PostacinLote52009_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinLote52009_4, 
                style: style_PostacinLote52009_4,
                popuplayertitle: "Postación Lote 5 20-09",
                interactive: true,
                title: '<img src="styles/legend/PostacinLote52009_4.png" /> Postación Lote 5 20-09'
            });
var format_PDL5_5 = new ol.format.GeoJSON();
var features_PDL5_5 = format_PDL5_5.readFeatures(json_PDL5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_PDL5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL5_5.addFeatures(features_PDL5_5);
var lyr_PDL5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL5_5, 
                style: style_PDL5_5,
                popuplayertitle: "PD L5",
                interactive: true,
                title: '<img src="styles/legend/PDL5_5.png" /> PD L5'
            });
var format_MT3x185_L5_6 = new ol.format.GeoJSON();
var features_MT3x185_L5_6 = format_MT3x185_L5_6.readFeatures(json_MT3x185_L5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x185_L5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_6.addFeatures(features_MT3x185_L5_6);
var lyr_MT3x185_L5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_6, 
                style: style_MT3x185_L5_6,
                popuplayertitle: "MT 3x185_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_6.png" /> MT 3x185_L5'
            });
var format_MT3x35_L5_7 = new ol.format.GeoJSON();
var features_MT3x35_L5_7 = format_MT3x35_L5_7.readFeatures(json_MT3x35_L5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x35_L5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_7.addFeatures(features_MT3x35_L5_7);
var lyr_MT3x35_L5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_7, 
                style: style_MT3x35_L5_7,
                popuplayertitle: "MT 3x35_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_7.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_8 = new ol.format.GeoJSON();
var features_MT3x70L5_8 = format_MT3x70L5_8.readFeatures(json_MT3x70L5_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32721'});
var jsonSource_MT3x70L5_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_8.addFeatures(features_MT3x70L5_8);
var lyr_MT3x70L5_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_8, 
                style: style_MT3x70L5_8,
                popuplayertitle: "MT 3x70 L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_8.png" /> MT 3x70 L5'
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
var group_LOTE1 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 1"});
var group_LOTE2 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 2"});
var group_LOTE3 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 3"});
var group_LOTE4 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 4"});
var group_LOTE5 = new ol.layer.Group({
                                layers: [lyr_PostacionExistenteL5_3,lyr_PostacinLote52009_4,],
                                fold: "open",
                                title: "LOTE 5"});
var group_LOTE6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "LOTE 6"});
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
                                layers: [lyr_ESTAQUEOSL5_1,lyr_POSTACINSISTEMA_2,],
                                fold: "open",
                                title: "Lote 5"});
var group_Lote6 = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Lote 6"});
var group_OpenStreetMap = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "OpenStreetMap"});

lyr_OpenStreetMap_0.setVisible(true);lyr_ESTAQUEOSL5_1.setVisible(true);lyr_POSTACINSISTEMA_2.setVisible(true);lyr_PostacionExistenteL5_3.setVisible(true);lyr_PostacinLote52009_4.setVisible(true);lyr_PDL5_5.setVisible(true);lyr_MT3x185_L5_6.setVisible(true);lyr_MT3x35_L5_7.setVisible(true);lyr_MT3x70L5_8.setVisible(true);lyr_BT3x701x501x25L5_9.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_Lote5,group_LOTE5,lyr_PDL5_5,lyr_MT3x185_L5_6,lyr_MT3x35_L5_7,lyr_MT3x70L5_8,lyr_BT3x701x501x25L5_9];
lyr_ESTAQUEOSL5_1.set('fieldAliases', {'Sostén': 'Sostén', 'ESTE': 'ESTE', 'NORTE': 'NORTE', 'LATITUD': 'LATITUD', 'LONGITUD': 'LONGITUD', });
lyr_POSTACINSISTEMA_2.set('fieldAliases', {'Numero de Sosten': 'Numero de Sosten', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'Alimentadores Lote 5': 'Alimentadores Lote 5', 'Tramo': 'Tramo', 'Cuadrilla 5': 'Cuadrilla 5', });
lyr_PostacionExistenteL5_3.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_PostacinLote52009_4.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Fábrica': 'Fábrica', });
lyr_PDL5_5.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'SOSTÉN': 'SOSTÉN', 'X': 'X', 'Y': 'Y', 'ANDE': 'ANDE', 'NRO DE FÁBRICA': 'NRO DE FÁBRICA', });
lyr_MT3x185_L5_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ÍTEM': 'ÍTEM', 'ALIMENT.': 'ALIMENT.', });
lyr_MT3x35_L5_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_MT3x70L5_8.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMEN.': 'ALIMEN.', 'ÍTEM': 'ÍTEM', });
lyr_BT3x701x501x25L5_9.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', 'DO/ACO': 'DO/ACO', 'ALIMENT.': 'ALIMENT.', 'ÍTEM': 'ÍTEM', });
lyr_ESTAQUEOSL5_1.set('fieldImages', {'Sostén': 'TextEdit', 'ESTE': 'TextEdit', 'NORTE': 'TextEdit', 'LATITUD': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_POSTACINSISTEMA_2.set('fieldImages', {'Numero de Sosten': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'Alimentadores Lote 5': 'TextEdit', 'Tramo': 'TextEdit', 'Cuadrilla 5': 'TextEdit', });
lyr_PostacionExistenteL5_3.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_PostacinLote52009_4.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Fábrica': 'TextEdit', });
lyr_PDL5_5.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'SOSTÉN': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'ANDE': 'Range', 'NRO DE FÁBRICA': 'Range', });
lyr_MT3x185_L5_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ÍTEM': '', 'ALIMENT.': '', });
lyr_MT3x35_L5_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMENT.': '', 'ÍTEM': '', });
lyr_MT3x70L5_8.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMEN.': '', 'ÍTEM': '', });
lyr_BT3x701x501x25L5_9.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', 'DO/ACO': '', 'ALIMENT.': '', 'ÍTEM': '', });
lyr_ESTAQUEOSL5_1.set('fieldLabels', {'Sostén': 'no label', 'ESTE': 'no label', 'NORTE': 'no label', 'LATITUD': 'no label', 'LONGITUD': 'no label', });
lyr_POSTACINSISTEMA_2.set('fieldLabels', {'Numero de Sosten': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', 'Alimentadores Lote 5': 'no label', 'Tramo': 'no label', 'Cuadrilla 5': 'no label', });
lyr_PostacionExistenteL5_3.set('fieldLabels', {'Nro de Sos': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', 'Sosten': 'no label', 'Poste': 'no label', });
lyr_PostacinLote52009_4.set('fieldLabels', {'ALIMENT.': 'no label', 'Sosten': 'no label', 'TIPO/POSTE': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', 'Fábrica': 'no label', });
lyr_PDL5_5.set('fieldLabels', {'ALIMENTADOR': 'no label', 'SOSTÉN': 'no label', 'X': 'no label', 'Y': 'no label', 'ANDE': 'no label', 'NRO DE FÁBRICA': 'no label', });
lyr_MT3x185_L5_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ÍTEM': 'no label', 'ALIMENT.': 'no label', });
lyr_MT3x35_L5_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMENT.': 'no label', 'ÍTEM': 'no label', });
lyr_MT3x70L5_8.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMEN.': 'no label', 'ÍTEM': 'no label', });
lyr_BT3x701x501x25L5_9.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', 'DO/ACO': 'no label', 'ALIMENT.': 'no label', 'ÍTEM': 'no label', });
lyr_BT3x701x501x25L5_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});