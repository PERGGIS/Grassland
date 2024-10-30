ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([68.381471, 20.474720, 74.439411, 24.621700]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_StateBoundary_2 = new ol.format.GeoJSON();
var features_StateBoundary_2 = format_StateBoundary_2.readFeatures(json_StateBoundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_StateBoundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateBoundary_2.addFeatures(features_StateBoundary_2);
var lyr_StateBoundary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateBoundary_2, 
                style: style_StateBoundary_2,
                popuplayertitle: "State Boundary",
                interactive: true,
                title: '<img src="styles/legend/StateBoundary_2.png" /> State Boundary'
            });
var format_PERGRange_3 = new ol.format.GeoJSON();
var features_PERGRange_3 = format_PERGRange_3.readFeatures(json_PERGRange_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PERGRange_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PERGRange_3.addFeatures(features_PERGRange_3);
var lyr_PERGRange_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PERGRange_3, 
                style: style_PERGRange_3,
                popuplayertitle: "PERG Range",
                interactive: true,
                title: '<img src="styles/legend/PERGRange_3.png" /> PERG Range'
            });
var format_SF_Range_4 = new ol.format.GeoJSON();
var features_SF_Range_4 = format_SF_Range_4.readFeatures(json_SF_Range_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_SF_Range_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SF_Range_4.addFeatures(features_SF_Range_4);
var lyr_SF_Range_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SF_Range_4, 
                style: style_SF_Range_4,
                popuplayertitle: "SF_Range",
                interactive: true,
                title: '<img src="styles/legend/SF_Range_4.png" /> SF_Range'
            });
var format_Teritorial_Range_5 = new ol.format.GeoJSON();
var features_Teritorial_Range_5 = format_Teritorial_Range_5.readFeatures(json_Teritorial_Range_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Teritorial_Range_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Teritorial_Range_5.addFeatures(features_Teritorial_Range_5);
var lyr_Teritorial_Range_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Teritorial_Range_5, 
                style: style_Teritorial_Range_5,
                popuplayertitle: "Teritorial_Range",
                interactive: true,
                title: '<img src="styles/legend/Teritorial_Range_5.png" /> Teritorial_Range'
            });
var format_Villages_6 = new ol.format.GeoJSON();
var features_Villages_6 = format_Villages_6.readFeatures(json_Villages_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Villages_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Villages_6.addFeatures(features_Villages_6);
var lyr_Villages_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Villages_6, 
                style: style_Villages_6,
                popuplayertitle: "Villages",
                interactive: true,
                title: '<img src="styles/legend/Villages_6.png" /> Villages'
            });
var format_ForestAreas_7 = new ol.format.GeoJSON();
var features_ForestAreas_7 = format_ForestAreas_7.readFeatures(json_ForestAreas_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_ForestAreas_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ForestAreas_7.addFeatures(features_ForestAreas_7);
var lyr_ForestAreas_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ForestAreas_7, 
                style: style_ForestAreas_7,
                popuplayertitle: "Forest Areas",
                interactive: true,
                title: '<img src="styles/legend/ForestAreas_7.png" /> Forest Areas'
            });
var format_GrassPlantationPlots_8 = new ol.format.GeoJSON();
var features_GrassPlantationPlots_8 = format_GrassPlantationPlots_8.readFeatures(json_GrassPlantationPlots_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_GrassPlantationPlots_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GrassPlantationPlots_8.addFeatures(features_GrassPlantationPlots_8);
var lyr_GrassPlantationPlots_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GrassPlantationPlots_8, 
                style: style_GrassPlantationPlots_8,
                popuplayertitle: "Grass Plantation Plots",
                interactive: true,
                title: '<img src="styles/legend/GrassPlantationPlots_8.png" /> Grass Plantation Plots'
            });

lyr_GoogleSatellite_0.setVisible(false);lyr_OSMStandard_1.setVisible(false);lyr_StateBoundary_2.setVisible(true);lyr_PERGRange_3.setVisible(true);lyr_SF_Range_4.setVisible(true);lyr_Teritorial_Range_5.setVisible(true);lyr_Villages_6.setVisible(true);lyr_ForestAreas_7.setVisible(true);lyr_GrassPlantationPlots_8.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,lyr_StateBoundary_2,lyr_PERGRange_3,lyr_SF_Range_4,lyr_Teritorial_Range_5,lyr_Villages_6,lyr_ForestAreas_7,lyr_GrassPlantationPlots_8];
lyr_StateBoundary_2.set('fieldAliases', {'Id': 'Id', });
lyr_PERGRange_3.set('fieldAliases', {'Id': 'Id', 'CIRCLE': 'CIRCLE', 'Division': 'Division', 'Range': 'Range', 'PERG': 'PERG', 'INTERV_TYP': 'INTERV_TYP', 'Remarks': 'Remarks', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_SF_Range_4.set('fieldAliases', {'Id': 'Id', 'RANGE': 'RANGE', 'DIVISION': 'DIVISION', 'CIRCLE': 'CIRCLE', });
lyr_Teritorial_Range_5.set('fieldAliases', {'Id': 'Id', 'Division': 'Division', 'Range': 'Range', });
lyr_Villages_6.set('fieldAliases', {'Id': 'Id', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'Range': 'Range', 'Round': 'Round', 'Beat': 'Beat', 'Division': 'Division', });
lyr_ForestAreas_7.set('fieldAliases', {'Name': 'Name', 'District': 'District', 'Taluka': 'Taluka', 'Village': 'Village', 'F_SNo': 'F_SNo', 'F_Type': 'F_Type', 'FG_Area_Ha': 'FG_Area_Ha', 'Section': 'Section', 'Beat': 'Beat', 'Round': 'Round', 'Range': 'Range', 'Division': 'Division', 'Circle': 'Circle', 'Sanctuary': 'Sanctuary', });
lyr_GrassPlantationPlots_8.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'FG_AREA_Ha': 'FG_AREA_Ha', 'layer': 'layer', 'path': 'path', 'Circle': 'Circle', 'Division': 'Division', 'Range': 'Range', 'Village': 'Village', 'Module': 'Module', 'Year': 'Year', 'Feald_Area': 'Feald_Area', 'Area_Ha': 'Area_Ha', 'Vidi_Name': 'Vidi_Name', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Sr_No': 'Sr_No', });
lyr_StateBoundary_2.set('fieldImages', {'Id': 'Range', });
lyr_PERGRange_3.set('fieldImages', {'Id': 'Range', 'CIRCLE': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'PERG': 'TextEdit', 'INTERV_TYP': 'TextEdit', 'Remarks': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SF_Range_4.set('fieldImages', {'Id': 'Range', 'RANGE': 'TextEdit', 'DIVISION': 'TextEdit', 'CIRCLE': 'TextEdit', });
lyr_Teritorial_Range_5.set('fieldImages', {'Id': 'Range', 'Division': 'TextEdit', 'Range': 'TextEdit', });
lyr_Villages_6.set('fieldImages', {'Id': 'Range', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'Range': 'TextEdit', 'Round': 'TextEdit', 'Beat': 'TextEdit', 'Division': 'TextEdit', });
lyr_ForestAreas_7.set('fieldImages', {'Name': 'TextEdit', 'District': 'TextEdit', 'Taluka': 'TextEdit', 'Village': 'TextEdit', 'F_SNo': 'TextEdit', 'F_Type': 'TextEdit', 'FG_Area_Ha': 'TextEdit', 'Section': 'TextEdit', 'Beat': 'TextEdit', 'Round': 'TextEdit', 'Range': 'TextEdit', 'Division': 'TextEdit', 'Circle': 'TextEdit', 'Sanctuary': 'TextEdit', });
lyr_GrassPlantationPlots_8.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'FG_AREA_Ha': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Circle': 'TextEdit', 'Division': 'TextEdit', 'Range': 'TextEdit', 'Village': 'TextEdit', 'Module': 'TextEdit', 'Year': 'TextEdit', 'Feald_Area': 'TextEdit', 'Area_Ha': 'TextEdit', 'Vidi_Name': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Sr_No': 'TextEdit', });
lyr_StateBoundary_2.set('fieldLabels', {'Id': 'no label', });
lyr_PERGRange_3.set('fieldLabels', {'Id': 'no label', 'CIRCLE': 'no label', 'Division': 'inline label - visible with data', 'Range': 'inline label - visible with data', 'PERG': 'no label', 'INTERV_TYP': 'inline label - visible with data', 'Remarks': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_SF_Range_4.set('fieldLabels', {'Id': 'no label', 'RANGE': 'inline label - visible with data', 'DIVISION': 'no label', 'CIRCLE': 'no label', });
lyr_Teritorial_Range_5.set('fieldLabels', {'Id': 'no label', 'Division': 'no label', 'Range': 'inline label - visible with data', });
lyr_Villages_6.set('fieldLabels', {'Id': 'no label', 'District': 'no label', 'Taluka': 'no label', 'Village': 'no label', 'Range': 'no label', 'Round': 'no label', 'Beat': 'no label', 'Division': 'no label', });
lyr_ForestAreas_7.set('fieldLabels', {'Name': 'no label', 'District': 'no label', 'Taluka': 'no label', 'Village': 'no label', 'F_SNo': 'no label', 'F_Type': 'no label', 'FG_Area_Ha': 'no label', 'Section': 'no label', 'Beat': 'no label', 'Round': 'no label', 'Range': 'no label', 'Division': 'no label', 'Circle': 'no label', 'Sanctuary': 'no label', });
lyr_GrassPlantationPlots_8.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'FG_AREA_Ha': 'no label', 'layer': 'no label', 'path': 'no label', 'Circle': 'no label', 'Division': 'inline label - visible with data', 'Range': 'inline label - visible with data', 'Village': 'inline label - visible with data', 'Module': 'inline label - visible with data', 'Year': 'no label', 'Feald_Area': 'no label', 'Area_Ha': 'no label', 'Vidi_Name': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Sr_No': 'inline label - visible with data', });
lyr_GrassPlantationPlots_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});