var wms_layers = [];


        var lyr_GoogleSat_0 = new ol.layer.Tile({
            'title': 'Google Sat',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_LilycoffeeprojectSheet1_1 = new ol.format.GeoJSON();
var features_LilycoffeeprojectSheet1_1 = format_LilycoffeeprojectSheet1_1.readFeatures(json_LilycoffeeprojectSheet1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LilycoffeeprojectSheet1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LilycoffeeprojectSheet1_1.addFeatures(features_LilycoffeeprojectSheet1_1);
cluster_LilycoffeeprojectSheet1_1 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_LilycoffeeprojectSheet1_1
});
var lyr_LilycoffeeprojectSheet1_1 = new ol.layer.Vector({
                declutter: false,
                source:cluster_LilycoffeeprojectSheet1_1, 
                style: style_LilycoffeeprojectSheet1_1,
                popuplayertitle: 'Lily coffee project-Sheet1',
                interactive: true,
                title: 'Lily coffee project-Sheet1'
            });

lyr_GoogleSat_0.setVisible(true);lyr_LilycoffeeprojectSheet1_1.setVisible(true);
var layersList = [lyr_GoogleSat_0,lyr_LilycoffeeprojectSheet1_1];
lyr_LilycoffeeprojectSheet1_1.set('fieldAliases', {'Date Visited': 'Date Visited', 'Name': 'Name', 'Location': 'Location', 'Coffee Rating': 'Coffee Rating', 'Cuteness Rating': 'Cuteness Rating', 'Overall Review': 'Overall Review', 'Field7': 'Field7', 'Name_1': 'Name_1', 'City': 'City', 'Field12': 'Field12', 'Field13': 'Field13', 'Field14': 'Field14', 'Field15': 'Field15', 'Field16': 'Field16', });
lyr_LilycoffeeprojectSheet1_1.set('fieldImages', {'Date Visited': 'TextEdit', 'Name': 'TextEdit', 'Location': 'TextEdit', 'Coffee Rating': 'TextEdit', 'Cuteness Rating': 'TextEdit', 'Overall Review': 'TextEdit', 'Field7': 'TextEdit', 'Name_1': 'TextEdit', 'City': 'TextEdit', 'Field12': 'TextEdit', 'Field13': 'TextEdit', 'Field14': 'TextEdit', 'Field15': 'TextEdit', 'Field16': 'TextEdit', });
lyr_LilycoffeeprojectSheet1_1.set('fieldLabels', {'Date Visited': 'no label', 'Name': 'no label', 'Location': 'no label', 'Coffee Rating': 'no label', 'Cuteness Rating': 'no label', 'Overall Review': 'no label', 'Field7': 'no label', 'Name_1': 'no label', 'City': 'no label', 'Field12': 'no label', 'Field13': 'no label', 'Field14': 'no label', 'Field15': 'no label', 'Field16': 'no label', });
lyr_LilycoffeeprojectSheet1_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});