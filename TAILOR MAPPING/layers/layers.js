var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Tailormapping_1 = new ol.format.GeoJSON();
var features_Tailormapping_1 = format_Tailormapping_1.readFeatures(json_Tailormapping_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tailormapping_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tailormapping_1.addFeatures(features_Tailormapping_1);
var lyr_Tailormapping_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tailormapping_1, 
                style: style_Tailormapping_1,
                popuplayertitle: 'Tailor mapping',
                interactive: true,
                title: '<img src="styles/legend/Tailormapping_1.png" /> Tailor mapping'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Tailormapping_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Tailormapping_1];
lyr_Tailormapping_1.set('fieldAliases', {'PROJECT CODE': 'PROJECT CODE', 'LGA': 'LGA', 'Name of the Camp': 'Name of the Camp', 'Tailor Name': 'Tailor Name', 'Sex': 'Sex', 'Age': 'Age', 'Phone number': 'Phone number', 'Please, kindly photograph the shop': 'Please, kindly photograph the shop', 'Please, kindly photograph the shop _URL': 'Please, kindly photograph the shop _URL', 'file name': 'file name', 'Latitude': 'Latitude', 'Longtitude': 'Longtitude', 'Altitude': 'Altitude', 'precision': 'precision', });
lyr_Tailormapping_1.set('fieldImages', {'PROJECT CODE': 'TextEdit', 'LGA': 'TextEdit', 'Name of the Camp': 'TextEdit', 'Tailor Name': 'TextEdit', 'Sex': 'TextEdit', 'Age': 'Range', 'Phone number': 'TextEdit', 'Please, kindly photograph the shop': 'TextEdit', 'Please, kindly photograph the shop _URL': 'TextEdit', 'file name': 'ExternalResource', 'Latitude': 'TextEdit', 'Longtitude': 'TextEdit', 'Altitude': 'TextEdit', 'precision': 'TextEdit', });
lyr_Tailormapping_1.set('fieldLabels', {'PROJECT CODE': 'no label', 'LGA': 'no label', 'Name of the Camp': 'no label', 'Tailor Name': 'no label', 'Sex': 'no label', 'Age': 'no label', 'Phone number': 'no label', 'Please, kindly photograph the shop': 'no label', 'Please, kindly photograph the shop _URL': 'no label', 'file name': 'no label', 'Latitude': 'no label', 'Longtitude': 'no label', 'Altitude': 'no label', 'precision': 'no label', });
lyr_Tailormapping_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});