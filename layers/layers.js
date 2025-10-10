var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_WASHFACILITIES_1 = new ol.format.GeoJSON();
var features_WASHFACILITIES_1 = format_WASHFACILITIES_1.readFeatures(json_WASHFACILITIES_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WASHFACILITIES_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WASHFACILITIES_1.addFeatures(features_WASHFACILITIES_1);
var lyr_WASHFACILITIES_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WASHFACILITIES_1, 
                style: style_WASHFACILITIES_1,
                popuplayertitle: 'WASH FACILITIES',
                interactive: true,
    title: 'WASH FACILITIES<br />\
    <img src="styles/legend/WASHFACILITIES_1_0.png" /> BOREHOLE AND WATER POINTS<br />\
    <img src="styles/legend/WASHFACILITIES_1_1.png" /> SANITATION/LATRIINE FACILITIES<br />\
    <img src="styles/legend/WASHFACILITIES_1_2.png" /> <br />' });

lyr_OpenStreetMap_0.setVisible(true);lyr_WASHFACILITIES_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_WASHFACILITIES_1];
lyr_WASHFACILITIES_1.set('fieldAliases', {'Please, kindly photograph the Facility_URL': 'Please, kindly photograph the Facility_URL', 'Camp Name': 'Camp Name', 'WASH FACILITY BEING MAPPED': 'WASH FACILITY BEING MAPPED', 'Image File Name': 'Image File Name', 'field_5': 'field_5', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', '_GPS Location of Water Point_altitude': '_GPS Location of Water Point_altitude', '_GPS Location of Water Point_precision': '_GPS Location of Water Point_precision', });
lyr_WASHFACILITIES_1.set('fieldImages', {'Please, kindly photograph the Facility_URL': 'TextEdit', 'Camp Name': 'TextEdit', 'WASH FACILITY BEING MAPPED': 'TextEdit', 'Image File Name': 'ExternalResource', 'field_5': 'ExternalResource', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', '_GPS Location of Water Point_altitude': 'TextEdit', '_GPS Location of Water Point_precision': 'TextEdit', });
lyr_WASHFACILITIES_1.set('fieldLabels', {'Please, kindly photograph the Facility_URL': 'no label', 'Camp Name': 'no label', 'WASH FACILITY BEING MAPPED': 'no label', 'Image File Name': 'no label', 'field_5': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', '_GPS Location of Water Point_altitude': 'no label', '_GPS Location of Water Point_precision': 'no label', });
lyr_WASHFACILITIES_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});