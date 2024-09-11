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
var format_PostacinL5_1 = new ol.format.GeoJSON();
var features_PostacinL5_1 = format_PostacinL5_1.readFeatures(json_PostacinL5_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacinL5_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacinL5_1.addFeatures(features_PostacinL5_1);
var lyr_PostacinL5_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacinL5_1, 
                style: style_PostacinL5_1,
                popuplayertitle: "Postación L5",
                interactive: true,
                title: '<img src="styles/legend/PostacinL5_1.png" /> Postación L5'
            });
var format_PostacionExistenteL5_2 = new ol.format.GeoJSON();
var features_PostacionExistenteL5_2 = format_PostacionExistenteL5_2.readFeatures(json_PostacionExistenteL5_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PostacionExistenteL5_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PostacionExistenteL5_2.addFeatures(features_PostacionExistenteL5_2);
var lyr_PostacionExistenteL5_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PostacionExistenteL5_2, 
                style: style_PostacionExistenteL5_2,
                popuplayertitle: "Postacion Existente L5",
                interactive: true,
                title: '<img src="styles/legend/PostacionExistenteL5_2.png" /> Postacion Existente L5'
            });
var format_PDL5_3 = new ol.format.GeoJSON();
var features_PDL5_3 = format_PDL5_3.readFeatures(json_PDL5_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PDL5_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PDL5_3.addFeatures(features_PDL5_3);
var lyr_PDL5_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PDL5_3, 
                style: style_PDL5_3,
                popuplayertitle: "PD L5",
                interactive: true,
                title: '<img src="styles/legend/PDL5_3.png" /> PD L5'
            });
var format_MT3x185_L5_4 = new ol.format.GeoJSON();
var features_MT3x185_L5_4 = format_MT3x185_L5_4.readFeatures(json_MT3x185_L5_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x185_L5_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x185_L5_4.addFeatures(features_MT3x185_L5_4);
var lyr_MT3x185_L5_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x185_L5_4, 
                style: style_MT3x185_L5_4,
                popuplayertitle: "MT 3x185_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x185_L5_4.png" /> MT 3x185_L5'
            });
var format_MT3x35_L5_5 = new ol.format.GeoJSON();
var features_MT3x35_L5_5 = format_MT3x35_L5_5.readFeatures(json_MT3x35_L5_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x35_L5_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x35_L5_5.addFeatures(features_MT3x35_L5_5);
var lyr_MT3x35_L5_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x35_L5_5, 
                style: style_MT3x35_L5_5,
                popuplayertitle: "MT 3x35_L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x35_L5_5.png" /> MT 3x35_L5'
            });
var format_MT3x70L5_6 = new ol.format.GeoJSON();
var features_MT3x70L5_6 = format_MT3x70L5_6.readFeatures(json_MT3x70L5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MT3x70L5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MT3x70L5_6.addFeatures(features_MT3x70L5_6);
var lyr_MT3x70L5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MT3x70L5_6, 
                style: style_MT3x70L5_6,
                popuplayertitle: "MT 3x70 L5",
                interactive: true,
                title: '<img src="styles/legend/MT3x70L5_6.png" /> MT 3x70 L5'
            });
var format_BT3x701x501x25L5_7 = new ol.format.GeoJSON();
var features_BT3x701x501x25L5_7 = format_BT3x701x501x25L5_7.readFeatures(json_BT3x701x501x25L5_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BT3x701x501x25L5_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BT3x701x501x25L5_7.addFeatures(features_BT3x701x501x25L5_7);
var lyr_BT3x701x501x25L5_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BT3x701x501x25L5_7, 
                style: style_BT3x701x501x25L5_7,
                popuplayertitle: "BT 3x70+1x50+1x25 L5",
                interactive: true,
                title: '<img src="styles/legend/BT3x701x501x25L5_7.png" /> BT 3x70+1x50+1x25 L5'
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
                                layers: [lyr_PostacinL5_1,lyr_PostacionExistenteL5_2,],
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
                                layers: [],
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

lyr_OpenStreetMap_0.setVisible(true);lyr_PostacinL5_1.setVisible(true);lyr_PostacionExistenteL5_2.setVisible(true);lyr_PDL5_3.setVisible(true);lyr_MT3x185_L5_4.setVisible(true);lyr_MT3x35_L5_5.setVisible(true);lyr_MT3x70L5_6.setVisible(true);lyr_BT3x701x501x25L5_7.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,group_LOTE5,lyr_PDL5_3,lyr_MT3x185_L5_4,lyr_MT3x35_L5_5,lyr_MT3x70L5_6,lyr_BT3x701x501x25L5_7];
lyr_PostacinL5_1.set('fieldAliases', {'ALIMENT.': 'ALIMENT.', 'Sosten': 'Sosten', 'TIPO/POSTE': 'TIPO/POSTE', 'X': 'X', 'Y': 'Y', });
lyr_PostacionExistenteL5_2.set('fieldAliases', {'Nro de Sos': 'Nro de Sos', 'Coord. X': 'Coord. X', 'Coord. Y': 'Coord. Y', 'Sosten': 'Sosten', 'Poste': 'Poste', });
lyr_PDL5_3.set('fieldAliases', {'ALIMENTADOR': 'ALIMENTADOR', 'SOSTÉN': 'SOSTÉN', 'X': 'X', 'Y': 'Y', 'ANDE': 'ANDE', 'NRO DE FÁBRICA': 'NRO DE FÁBRICA', });
lyr_MT3x185_L5_4.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x35_L5_5.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_MT3x70L5_6.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_BT3x701x501x25L5_7.set('fieldAliases', {'FECHA': 'FECHA', 'INICIO-FIN': 'INICIO-FIN', 'LONGITUD': 'LONGITUD', });
lyr_PostacinL5_1.set('fieldImages', {'ALIMENT.': 'TextEdit', 'Sosten': 'TextEdit', 'TIPO/POSTE': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_PostacionExistenteL5_2.set('fieldImages', {'Nro de Sos': 'TextEdit', 'Coord. X': 'TextEdit', 'Coord. Y': 'TextEdit', 'Sosten': 'TextEdit', 'Poste': 'TextEdit', });
lyr_PDL5_3.set('fieldImages', {'ALIMENTADOR': 'TextEdit', 'SOSTÉN': 'TextEdit', 'X': 'Range', 'Y': 'Range', 'ANDE': 'Range', 'NRO DE FÁBRICA': 'Range', });
lyr_MT3x185_L5_4.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x35_L5_5.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_MT3x70L5_6.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_BT3x701x501x25L5_7.set('fieldImages', {'FECHA': 'TextEdit', 'INICIO-FIN': 'TextEdit', 'LONGITUD': 'TextEdit', });
lyr_PostacinL5_1.set('fieldLabels', {'ALIMENT.': 'no label', 'Sosten': 'no label', 'TIPO/POSTE': 'no label', 'X': 'no label', 'Y': 'no label', });
lyr_PostacionExistenteL5_2.set('fieldLabels', {'Nro de Sos': 'no label', 'Coord. X': 'no label', 'Coord. Y': 'no label', 'Sosten': 'no label', 'Poste': 'no label', });
lyr_PDL5_3.set('fieldLabels', {'ALIMENTADOR': 'no label', 'SOSTÉN': 'no label', 'X': 'no label', 'Y': 'no label', 'ANDE': 'no label', 'NRO DE FÁBRICA': 'no label', });
lyr_MT3x185_L5_4.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x35_L5_5.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_MT3x70L5_6.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L5_7.set('fieldLabels', {'FECHA': 'no label', 'INICIO-FIN': 'no label', 'LONGITUD': 'no label', });
lyr_BT3x701x501x25L5_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});