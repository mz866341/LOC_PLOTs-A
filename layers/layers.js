var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite ',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_DHASECAPLOTDETAILS_1 = new ol.format.GeoJSON();
var features_DHASECAPLOTDETAILS_1 = format_DHASECAPLOTDETAILS_1.readFeatures(json_DHASECAPLOTDETAILS_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DHASECAPLOTDETAILS_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DHASECAPLOTDETAILS_1.addFeatures(features_DHASECAPLOTDETAILS_1);
var lyr_DHASECAPLOTDETAILS_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DHASECAPLOTDETAILS_1, 
                style: style_DHASECAPLOTDETAILS_1,
                popuplayertitle: "DHA SEC A PLOT DETAILS",
                interactive: true,
                title: '<img src="styles/legend/DHASECAPLOTDETAILS_1.png" /> DHA SEC A PLOT DETAILS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_DHASECAPLOTDETAILS_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_DHASECAPLOTDETAILS_1];
lyr_DHASECAPLOTDETAILS_1.set('fieldAliases', {'Id': 'Id', 'LAT_X': 'LAT_X', 'LOG_Y': 'LOG_Y', 'PLOT_NOs': 'PLOT_NOs', 'AREA_Sft': 'AREA_Sft', 'MARLA': 'MARLA', });
lyr_DHASECAPLOTDETAILS_1.set('fieldImages', {'Id': 'Range', 'LAT_X': 'TextEdit', 'LOG_Y': 'TextEdit', 'PLOT_NOs': 'TextEdit', 'AREA_Sft': 'TextEdit', 'MARLA': 'Range', });
lyr_DHASECAPLOTDETAILS_1.set('fieldLabels', {'Id': 'no label', 'LAT_X': 'inline label - always visible', 'LOG_Y': 'inline label - always visible', 'PLOT_NOs': 'inline label - always visible', 'AREA_Sft': 'inline label - always visible', 'MARLA': 'inline label - always visible', });
lyr_DHASECAPLOTDETAILS_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});