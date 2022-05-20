var wms_layers = [];

var lyr_lycee_2019_georef_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "lycee_2019_georef",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/lycee_2019_georef_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [542875.842008, 5450861.359828, 544019.089337, 5451746.606813]
                            })
                        });
var format_tracksany_1 = new ol.format.GeoJSON();
var features_tracksany_1 = format_tracksany_1.readFeatures(json_tracksany_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tracksany_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tracksany_1.addFeatures(features_tracksany_1);
var lyr_tracksany_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tracksany_1, 
                style: style_tracksany_1,
                interactive: true,
                title: '<img src="styles/legend/tracksany_1.png" /> tracks any'
            });
var format_Observation_2 = new ol.format.GeoJSON();
var features_Observation_2 = format_Observation_2.readFeatures(json_Observation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Observation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Observation_2.addFeatures(features_Observation_2);
var lyr_Observation_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Observation_2, 
                style: style_Observation_2,
                interactive: true,
                title: '<img src="styles/legend/Observation_2.png" /> Observation'
            });

lyr_lycee_2019_georef_0.setVisible(true);lyr_tracksany_1.setVisible(true);lyr_Observation_2.setVisible(true);
var layersList = [lyr_lycee_2019_georef_0,lyr_tracksany_1,lyr_Observation_2];
lyr_tracksany_1.set('fieldAliases', {'name': 'name', 'cmt': 'cmt', 'desc': 'desc', 'src': 'src', 'link1_href': 'link1_href', 'link1_text': 'link1_text', 'link1_type': 'link1_type', 'link2_href': 'link2_href', 'link2_text': 'link2_text', 'link2_type': 'link2_type', 'number': 'number', 'type': 'type', });
lyr_Observation_2.set('fieldAliases', {'Insectes': 'Insectes', 'Nombres': 'Nombres', 'Activitié': 'Activitié', });
lyr_tracksany_1.set('fieldImages', {'name': 'TextEdit', 'cmt': 'TextEdit', 'desc': 'TextEdit', 'src': 'TextEdit', 'link1_href': 'TextEdit', 'link1_text': 'TextEdit', 'link1_type': 'TextEdit', 'link2_href': 'TextEdit', 'link2_text': 'TextEdit', 'link2_type': 'TextEdit', 'number': 'TextEdit', 'type': 'TextEdit', });
lyr_Observation_2.set('fieldImages', {'Insectes': 'ValueMap', 'Nombres': 'ValueMap', 'Activitié': 'ValueMap', });
lyr_tracksany_1.set('fieldLabels', {'name': 'no label', 'cmt': 'no label', 'desc': 'no label', 'src': 'no label', 'link1_href': 'no label', 'link1_text': 'no label', 'link1_type': 'no label', 'link2_href': 'no label', 'link2_text': 'no label', 'link2_type': 'no label', 'number': 'no label', 'type': 'no label', });
lyr_Observation_2.set('fieldLabels', {'Insectes': 'no label', 'Nombres': 'no label', 'Activitié': 'no label', });
lyr_Observation_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});