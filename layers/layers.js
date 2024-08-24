var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_1ra_linea_metro_1 = new ol.format.GeoJSON();
var features_1ra_linea_metro_1 = format_1ra_linea_metro_1.readFeatures(json_1ra_linea_metro_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_1ra_linea_metro_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_1ra_linea_metro_1.addFeatures(features_1ra_linea_metro_1);
var lyr_1ra_linea_metro_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_1ra_linea_metro_1, 
                style: style_1ra_linea_metro_1,
                popuplayertitle: "1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/1ra_linea_metro_1.png" /> 1ra_linea_metro'
            });
var format_2da_linea_metro_2 = new ol.format.GeoJSON();
var features_2da_linea_metro_2 = format_2da_linea_metro_2.readFeatures(json_2da_linea_metro_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_2da_linea_metro_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_2da_linea_metro_2.addFeatures(features_2da_linea_metro_2);
var lyr_2da_linea_metro_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_2da_linea_metro_2, 
                style: style_2da_linea_metro_2,
                popuplayertitle: "2da_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/2da_linea_metro_2.png" /> 2da_linea_metro'
            });
var format_Adaptacion_Cambio_Climatico_3 = new ol.format.GeoJSON();
var features_Adaptacion_Cambio_Climatico_3 = format_Adaptacion_Cambio_Climatico_3.readFeatures(json_Adaptacion_Cambio_Climatico_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adaptacion_Cambio_Climatico_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adaptacion_Cambio_Climatico_3.addFeatures(features_Adaptacion_Cambio_Climatico_3);
var lyr_Adaptacion_Cambio_Climatico_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Adaptacion_Cambio_Climatico_3, 
                style: style_Adaptacion_Cambio_Climatico_3,
                popuplayertitle: "Adaptacion_Cambio_Climatico",
                interactive: true,
    title: 'Adaptacion_Cambio_Climatico<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_0.png" /> Banco atrapaniebla<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_1.png" /> Ecohuerta<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_2.png" /> Huerta urbana agroecológica<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_3.png" /> Limnímetro<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_4.png" /> Micro-túnel agrícola<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_5.png" /> Pluviómetro<br />\
    <img src="styles/legend/Adaptacion_Cambio_Climatico_3_6.png" /> <br />'
        });
var format_Cuenca_Alta_Rio_Bogota_4 = new ol.format.GeoJSON();
var features_Cuenca_Alta_Rio_Bogota_4 = format_Cuenca_Alta_Rio_Bogota_4.readFeatures(json_Cuenca_Alta_Rio_Bogota_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuenca_Alta_Rio_Bogota_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuenca_Alta_Rio_Bogota_4.addFeatures(features_Cuenca_Alta_Rio_Bogota_4);
var lyr_Cuenca_Alta_Rio_Bogota_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cuenca_Alta_Rio_Bogota_4, 
                style: style_Cuenca_Alta_Rio_Bogota_4,
                popuplayertitle: "Cuenca_Alta_Rio_Bogota",
                interactive: true,
    title: 'Cuenca_Alta_Rio_Bogota<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_0.png" /> 0 - 0,0042<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_1.png" /> 0,0042 - 0,0084<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_2.png" /> 0,0084 - 0,0126<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_3.png" /> 0,0126 - 0,0168<br />\
    <img src="styles/legend/Cuenca_Alta_Rio_Bogota_4_4.png" /> 0,0168 - 0,0209<br />'
        });
var format_Estaciones_1ra_linea_metro_5 = new ol.format.GeoJSON();
var features_Estaciones_1ra_linea_metro_5 = format_Estaciones_1ra_linea_metro_5.readFeatures(json_Estaciones_1ra_linea_metro_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_1ra_linea_metro_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_1ra_linea_metro_5.addFeatures(features_Estaciones_1ra_linea_metro_5);
var lyr_Estaciones_1ra_linea_metro_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_1ra_linea_metro_5, 
                style: style_Estaciones_1ra_linea_metro_5,
                popuplayertitle: "Estaciones_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Estaciones_1ra_linea_metro_5.png" /> Estaciones_1ra_linea_metro'
            });
var format_Estaciones_2da_linea_metro_6 = new ol.format.GeoJSON();
var features_Estaciones_2da_linea_metro_6 = format_Estaciones_2da_linea_metro_6.readFeatures(json_Estaciones_2da_linea_metro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estaciones_2da_linea_metro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estaciones_2da_linea_metro_6.addFeatures(features_Estaciones_2da_linea_metro_6);
var lyr_Estaciones_2da_linea_metro_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estaciones_2da_linea_metro_6, 
                style: style_Estaciones_2da_linea_metro_6,
                popuplayertitle: "Estaciones_2da_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Estaciones_2da_linea_metro_6.png" /> Estaciones_2da_linea_metro'
            });
var format_limite_intervencion_1ra_linea_metro_7 = new ol.format.GeoJSON();
var features_limite_intervencion_1ra_linea_metro_7 = format_limite_intervencion_1ra_linea_metro_7.readFeatures(json_limite_intervencion_1ra_linea_metro_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_intervencion_1ra_linea_metro_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_intervencion_1ra_linea_metro_7.addFeatures(features_limite_intervencion_1ra_linea_metro_7);
var lyr_limite_intervencion_1ra_linea_metro_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_intervencion_1ra_linea_metro_7, 
                style: style_limite_intervencion_1ra_linea_metro_7,
                popuplayertitle: "limite_intervencion_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/limite_intervencion_1ra_linea_metro_7.png" /> limite_intervencion_1ra_linea_metro'
            });
var format_Viaducto_1ra_linea_metro_8 = new ol.format.GeoJSON();
var features_Viaducto_1ra_linea_metro_8 = format_Viaducto_1ra_linea_metro_8.readFeatures(json_Viaducto_1ra_linea_metro_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Viaducto_1ra_linea_metro_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Viaducto_1ra_linea_metro_8.addFeatures(features_Viaducto_1ra_linea_metro_8);
var lyr_Viaducto_1ra_linea_metro_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Viaducto_1ra_linea_metro_8, 
                style: style_Viaducto_1ra_linea_metro_8,
                popuplayertitle: "Viaducto_1ra_linea_metro",
                interactive: true,
                title: '<img src="styles/legend/Viaducto_1ra_linea_metro_8.png" /> Viaducto_1ra_linea_metro'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_1ra_linea_metro_1.setVisible(true);lyr_2da_linea_metro_2.setVisible(true);lyr_Adaptacion_Cambio_Climatico_3.setVisible(true);lyr_Cuenca_Alta_Rio_Bogota_4.setVisible(true);lyr_Estaciones_1ra_linea_metro_5.setVisible(true);lyr_Estaciones_2da_linea_metro_6.setVisible(true);lyr_limite_intervencion_1ra_linea_metro_7.setVisible(true);lyr_Viaducto_1ra_linea_metro_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_1ra_linea_metro_1,lyr_2da_linea_metro_2,lyr_Adaptacion_Cambio_Climatico_3,lyr_Cuenca_Alta_Rio_Bogota_4,lyr_Estaciones_1ra_linea_metro_5,lyr_Estaciones_2da_linea_metro_6,lyr_limite_intervencion_1ra_linea_metro_7,lyr_Viaducto_1ra_linea_metro_8];
lyr_1ra_linea_metro_1.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_2da_linea_metro_2.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_Adaptacion_Cambio_Climatico_3.set('fieldAliases', {'qc_id': 'qc_id', 'bnfc': 'bnfc', 'fase': 'fase', 'item': 'item', 'localidad': 'localidad', 'medida': 'medida', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'area_ha': 'area_ha', 'tipo': 'tipo', 'nombre': 'nombre', 'acto_admin': 'acto_admin', 'orig_fid': 'orig_fid', 'categoria': 'categoria', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_Estaciones_1ra_linea_metro_5.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre_com': 'nombre_com', 'número': 'número', 'nombre': 'nombre', 'tipo': 'tipo', });
lyr_Estaciones_2da_linea_metro_6.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'numero': 'numero', 'nombre': 'nombre', 'tipo': 'tipo', });
lyr_limite_intervencion_1ra_linea_metro_7.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', 'shape.area': 'shape.area', 'shape.len': 'shape.len', });
lyr_Viaducto_1ra_linea_metro_8.set('fieldAliases', {'qc_id': 'qc_id', 'objectid': 'objectid', 'nombre': 'nombre', });
lyr_1ra_linea_metro_1.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', });
lyr_2da_linea_metro_2.set('fieldImages', {'qc_id': '', 'objectid': 'TextEdit', 'nombre': '', });
lyr_Adaptacion_Cambio_Climatico_3.set('fieldImages', {'qc_id': '', 'bnfc': 'TextEdit', 'fase': 'TextEdit', 'item': 'TextEdit', 'localidad': 'TextEdit', 'medida': 'TextEdit', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldImages', {'qc_id': 'TextEdit', 'objectid': 'TextEdit', 'area_ha': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'acto_admin': 'TextEdit', 'orig_fid': 'TextEdit', 'categoria': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_Estaciones_1ra_linea_metro_5.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre_com': '', 'número': '', 'nombre': '', 'tipo': '', });
lyr_Estaciones_2da_linea_metro_6.set('fieldImages', {'qc_id': '', 'objectid': 'TextEdit', 'numero': '', 'nombre': '', 'tipo': '', });
lyr_limite_intervencion_1ra_linea_metro_7.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', 'shape.area': '', 'shape.len': '', });
lyr_Viaducto_1ra_linea_metro_8.set('fieldImages', {'qc_id': '', 'objectid': '', 'nombre': '', });
lyr_1ra_linea_metro_1.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_2da_linea_metro_2.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_Adaptacion_Cambio_Climatico_3.set('fieldLabels', {'qc_id': 'no label', 'bnfc': 'no label', 'fase': 'no label', 'item': 'no label', 'localidad': 'no label', 'medida': 'no label', });
lyr_Cuenca_Alta_Rio_Bogota_4.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'area_ha': 'no label', 'tipo': 'no label', 'nombre': 'no label', 'acto_admin': 'no label', 'orig_fid': 'no label', 'categoria': 'no label', 'shape_leng': 'no label', 'shape_area': 'header label - always visible', });
lyr_Estaciones_1ra_linea_metro_5.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre_com': 'no label', 'número': 'no label', 'nombre': 'no label', 'tipo': 'no label', });
lyr_Estaciones_2da_linea_metro_6.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'numero': 'no label', 'nombre': 'no label', 'tipo': 'no label', });
lyr_limite_intervencion_1ra_linea_metro_7.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', 'shape.area': 'no label', 'shape.len': 'no label', });
lyr_Viaducto_1ra_linea_metro_8.set('fieldLabels', {'qc_id': 'no label', 'objectid': 'no label', 'nombre': 'no label', });
lyr_Viaducto_1ra_linea_metro_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});