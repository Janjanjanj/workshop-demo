var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_linien_1 = new ol.format.GeoJSON();
var features_linien_1 = format_linien_1.readFeatures(json_linien_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_linien_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_linien_1.addFeatures(features_linien_1);
var lyr_linien_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_linien_1, 
                style: style_linien_1,
                interactive: true,
    title: 'linien<br />\
    <img src="styles/legend/linien_1_0.png" /> G_001_Standpunkte_P<br />\
    <img src="styles/legend/linien_1_1.png" /> G_007_Festpunkte KL.2_P<br />\
    <img src="styles/legend/linien_1_2.png" /> G_010_GelÃ¤ndepunkte_P<br />\
    <img src="styles/legend/linien_1_3.png" /> G_040_GebÃ¤ude_P<br />\
    <img src="styles/legend/linien_1_4.png" /> G_148_ACO Rinnen_L<br />\
    <img src="styles/legend/linien_1_5.png" /> G_148_ACO Rinnen_P<br />\
    <img src="styles/legend/linien_1_6.png" /> G_160_WL-Streckenschieber_P<br />\
    <img src="styles/legend/linien_1_7.png" /> G_161_WL-Hausanschlussschieber_P<br />\
    <img src="styles/legend/linien_1_8.png" /> G_163_WL T-StÃ¼cke_P<br />\
    <img src="styles/legend/linien_1_9.png" /> G_165_Wasserleitung OK Rohre_P<br />\
    <img src="styles/legend/linien_1_10.png" /> G_167_OFH_P<br />\
    <img src="styles/legend/linien_1_11.png" /> G_168_UFH_P<br />\
    <img src="styles/legend/linien_1_12.png" /> G_170_Wl Be-und EntlÃ¼fter_P<br />\
    <img src="styles/legend/linien_1_13.png" /> G_171_WL SchÃ¤chte_L<br />\
    <img src="styles/legend/linien_1_14.png" /> G_171_WL SchÃ¤chte_P<br />\
    <img src="styles/legend/linien_1_15.png" /> G_180_Kanaldeckel_P<br />\
    <img src="styles/legend/linien_1_16.png" /> G_900_Grenzsteine_P<br />\
    <img src="styles/legend/linien_1_17.png" /> G_903_MeiÃelzeichen_P<br />\
    <img src="styles/legend/linien_1_18.png" /> G_904_TP_P<br />\
    <img src="styles/legend/linien_1_19.png" /> G_Beschriftung<br />\
    <img src="styles/legend/linien_1_20.png" /> G_Beschriftung_Fehler<br />\
    <img src="styles/legend/linien_1_21.png" /> G_Druckleitung<br />\
    <img src="styles/legend/linien_1_22.png" /> G_Hausanschluss<br />\
    <img src="styles/legend/linien_1_23.png" /> G_Versorgungsleitung<br />\
    <img src="styles/legend/linien_1_24.png" /> G_WL_Knotenpunkte<br />\
    <img src="styles/legend/linien_1_25.png" /> <br />'
        });
var format_punkte_2 = new ol.format.GeoJSON();
var features_punkte_2 = format_punkte_2.readFeatures(json_punkte_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_punkte_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_punkte_2.addFeatures(features_punkte_2);
var lyr_punkte_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_punkte_2, 
                style: style_punkte_2,
                interactive: true,
                title: '<img src="styles/legend/punkte_2.png" /> punkte'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_linien_1.setVisible(true);lyr_punkte_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_linien_1,lyr_punkte_2];
lyr_linien_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', });
lyr_punkte_2.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'Text': 'Text', });
lyr_linien_1.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', });
lyr_punkte_2.set('fieldImages', {'fid': 'TextEdit', 'Layer': 'TextEdit', 'Text': 'TextEdit', });
lyr_linien_1.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', });
lyr_punkte_2.set('fieldLabels', {'fid': 'no label', 'Layer': 'no label', 'Text': 'no label', });
lyr_punkte_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});