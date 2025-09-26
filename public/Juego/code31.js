<<<<<<< HEAD
gdjs.Nivel_3224Code = {};
gdjs.Nivel_3224Code.localVariables = [];
gdjs.Nivel_3224Code.forEachIndex3 = 0;

gdjs.Nivel_3224Code.forEachIndex4 = 0;

gdjs.Nivel_3224Code.forEachObjects3 = [];

gdjs.Nivel_3224Code.forEachObjects4 = [];

gdjs.Nivel_3224Code.forEachTemporary3 = null;

gdjs.Nivel_3224Code.forEachTemporary4 = null;

gdjs.Nivel_3224Code.forEachTotalCount3 = 0;

gdjs.Nivel_3224Code.forEachTotalCount4 = 0;

gdjs.Nivel_3224Code.GDMapaObjects1= [];
gdjs.Nivel_3224Code.GDMapaObjects2= [];
gdjs.Nivel_3224Code.GDMapaObjects3= [];
gdjs.Nivel_3224Code.GDMapaObjects4= [];
gdjs.Nivel_3224Code.GDCuevaObjects1= [];
gdjs.Nivel_3224Code.GDCuevaObjects2= [];
gdjs.Nivel_3224Code.GDCuevaObjects3= [];
gdjs.Nivel_3224Code.GDCuevaObjects4= [];
gdjs.Nivel_3224Code.GDcolisionObjects1= [];
gdjs.Nivel_3224Code.GDcolisionObjects2= [];
gdjs.Nivel_3224Code.GDcolisionObjects3= [];
gdjs.Nivel_3224Code.GDcolisionObjects4= [];
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1= [];
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2= [];
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3= [];
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects4= [];
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects1= [];
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects2= [];
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects3= [];
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects4= [];
gdjs.Nivel_3224Code.GDCasasObjects1= [];
gdjs.Nivel_3224Code.GDCasasObjects2= [];
gdjs.Nivel_3224Code.GDCasasObjects3= [];
gdjs.Nivel_3224Code.GDCasasObjects4= [];
gdjs.Nivel_3224Code.GDCenterObjects1= [];
gdjs.Nivel_3224Code.GDCenterObjects2= [];
gdjs.Nivel_3224Code.GDCenterObjects3= [];
gdjs.Nivel_3224Code.GDCenterObjects4= [];
gdjs.Nivel_3224Code.GDSpawnpointObjects1= [];
gdjs.Nivel_3224Code.GDSpawnpointObjects2= [];
gdjs.Nivel_3224Code.GDSpawnpointObjects3= [];
gdjs.Nivel_3224Code.GDSpawnpointObjects4= [];
gdjs.Nivel_3224Code.GDTeletransporteObjects1= [];
gdjs.Nivel_3224Code.GDTeletransporteObjects2= [];
gdjs.Nivel_3224Code.GDTeletransporteObjects3= [];
gdjs.Nivel_3224Code.GDTeletransporteObjects4= [];
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1= [];
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2= [];
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3= [];
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects4= [];
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1= [];
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2= [];
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3= [];
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4= [];
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects1= [];
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2= [];
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3= [];
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects4= [];
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects1= [];
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2= [];
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3= [];
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects4= [];
gdjs.Nivel_3224Code.GDEnemigoObjects1= [];
gdjs.Nivel_3224Code.GDEnemigoObjects2= [];
gdjs.Nivel_3224Code.GDEnemigoObjects3= [];
gdjs.Nivel_3224Code.GDEnemigoObjects4= [];
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1= [];
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects2= [];
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects3= [];
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects4= [];
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects1= [];
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects2= [];
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects3= [];
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects4= [];


gdjs.Nivel_3224Code.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);

{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].addPolarForce(180, 80, 0);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)).setNumber(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);

{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].addPolarForce(0, 80, 0);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);

{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].addPolarForce(270, 80, 0);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)).setNumber(2);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);

{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].addPolarForce(90, 80, 0);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)).setNumber(3);
}
}}

}


{



}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("izquierda");
}
}}

}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("derecha");
}
}}

}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("arriba");
}
}}

}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("Abajo");
}
}}

}


{



}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getAverageForce().getLength() == 80 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").resumeAnimation();
}
}}

}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].hasNoForces() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getBehavior("Animation").pauseAnimation();
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].setAnimationFrame(0);
}
}}

}


};gdjs.Nivel_3224Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariableBoolean(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_3224Code.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_3224Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableBoolean(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects = Hashtable.newFrom({"Caja_Daño": gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3});
gdjs.Nivel_3224Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20094116);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3 */
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointX("Center")) - 45, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3[i].hide();
}
}}

}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Caja_Daño"), gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2);
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("izquierda");
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects = Hashtable.newFrom({"Caja_Daño": gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3});
gdjs.Nivel_3224Code.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20097668);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3 */
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointX("Center")) + 45, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3[i].hide();
}
}}

}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Caja_Daño"), gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2);
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("derecha");
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects = Hashtable.newFrom({"Caja_Daño": gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3});
gdjs.Nivel_3224Code.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20101452);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3 */
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects3Objects, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointX("Center")), (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointY("Center")), "");
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3[i].hide();
}
}}

}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Caja_Daño"), gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2);
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("arriba");
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects2Objects = Hashtable.newFrom({"Caja_Daño": gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2});
gdjs.Nivel_3224Code.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getAnimationFrame() == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20104932);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects2Objects, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[0].getPointX("Center")), (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[0].getPointY("Center")) + 30, "");
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2[i].hide();
}
}}

}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getBehavior("Animation").hasAnimationEnded() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Caja_Daño"), gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1);
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getBehavior("Animation").setAnimationName("Abajo");
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].returnVariable(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


};gdjs.Nivel_3224Code.eventsList7 = function(runtimeScene) {

{



}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("Ataque-izquierda");
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("Ataque-derecha");
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList4(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1, gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2[i].getBehavior("Animation").setAnimationName("Ataque-arriba");
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariableNumber(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariables().getFromIndex(0)) == 3 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getBehavior("Animation").setAnimationName("Ataque-abajo");
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_3224Code.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20090580);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_3224Code.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariableBoolean(gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getVariables().getFromIndex(1), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[k] = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].getBehavior("Animation").resumeAnimation();
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_3224Code.asyncCallback20107188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_3224Code.localVariables);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn de enemigos");
}gdjs.Nivel_3224Code.localVariables.length = 0;
}
gdjs.Nivel_3224Code.eventsList9 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_3224Code.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.Nivel_3224Code.asyncCallback20107188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDSpawnpointObjects2Objects = Hashtable.newFrom({"Spawnpoint": gdjs.Nivel_3224Code.GDSpawnpointObjects2});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects2Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects2});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects2Objects = Hashtable.newFrom({"vidaMaximaSprite": gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects2Objects = Hashtable.newFrom({"vidaActualSprite": gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2});
gdjs.Nivel_3224Code.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects3Objects = Hashtable.newFrom({"Personaje_Principal": gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3});
gdjs.Nivel_3224Code.eventsList11 = function(runtimeScene) {

};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects3Objects = Hashtable.newFrom({"Personaje_Principal": gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects3});
gdjs.Nivel_3224Code.eventsList12 = function(runtimeScene) {

};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects3});
gdjs.Nivel_3224Code.eventsList13 = function(runtimeScene) {

};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects3Objects = Hashtable.newFrom({"vidaActualSprite": gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects3Objects = Hashtable.newFrom({"vidaMaximaSprite": gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3});
gdjs.Nivel_3224Code.eventsList14 = function(runtimeScene) {

};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects3Objects = Hashtable.newFrom({"vidaMaximaSprite": gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects3Objects = Hashtable.newFrom({"vidaActualSprite": gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3});
gdjs.Nivel_3224Code.eventsList15 = function(runtimeScene) {

};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects2Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects2});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects2Objects = Hashtable.newFrom({"colision": gdjs.Nivel_3224Code.GDcolisionObjects2});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects2Objects = Hashtable.newFrom({"colision": gdjs.Nivel_3224Code.GDcolisionObjects2});
gdjs.Nivel_3224Code.mapOfEmptyGDEnemigoObjects = Hashtable.newFrom({"Enemigo": []});
gdjs.Nivel_3224Code.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.getSceneInstancesCount(runtimeScene, gdjs.Nivel_3224Code.mapOfEmptyGDEnemigoObjects) <= 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("colicion_enemigos"), gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1);
{for(var i = 0, len = gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setBoolean(true);
}}

}


};gdjs.Nivel_3224Code.eventsList17 = function(runtimeScene) {
=======
gdjs.Pantalla_32de_32MuerteCode = {};
gdjs.Pantalla_32de_32MuerteCode.localVariables = [];
gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects2= [];
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects1= [];
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects2= [];


gdjs.Pantalla_32de_32MuerteCode.eventsList0 = function(runtimeScene) {
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
<<<<<<< HEAD

{ //Subevents
gdjs.Nivel_3224Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Spawnpoint"), gdjs.Nivel_3224Code.GDSpawnpointObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "Spawn de enemigos") >= 1;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickRandomObject(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDSpawnpointObjects2Objects);
}
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDSpawnpointObjects2 */
gdjs.Nivel_3224Code.GDEnemigoObjects2.length = 0;

gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length = 0;

gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length = 0;

{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "Spawn de enemigos");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "revicion enemigos");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects2Objects, (( gdjs.Nivel_3224Code.GDSpawnpointObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDSpawnpointObjects2[0].getPointX("")), (( gdjs.Nivel_3224Code.GDSpawnpointObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDSpawnpointObjects2[0].getPointY("")), "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects2Objects, (( gdjs.Nivel_3224Code.GDEnemigoObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects2[0].getPointX("")), (( gdjs.Nivel_3224Code.GDEnemigoObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects2[0].getPointY("")) - 30, "");
}{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects2Objects, (( gdjs.Nivel_3224Code.GDEnemigoObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects2[0].getPointX("")), (( gdjs.Nivel_3224Code.GDEnemigoObjects2.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects2[0].getPointY("")) - 30, "");
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length !== 0 ? gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2[0] : null), (gdjs.Nivel_3224Code.GDEnemigoObjects2.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects2[0] : null));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length !== 0 ? gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2[0] : null), (gdjs.Nivel_3224Code.GDEnemigoObjects2.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects2[0] : null));
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2[i].getBehavior("Resizable").setHeight(5);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2[i].getBehavior("Resizable").setWidth(34);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2[i].getBehavior("Resizable").setWidth(34);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2[i].getBehavior("Resizable").setHeight(5);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects2[i].getBehavior("Resizable").setWidth(27);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects2[i].getBehavior("Resizable").setHeight(27);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects2[i].setZOrder(3);
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

for (gdjs.Nivel_3224Code.forEachIndex3 = 0;gdjs.Nivel_3224Code.forEachIndex3 < gdjs.Nivel_3224Code.GDEnemigoObjects2.length;++gdjs.Nivel_3224Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3);
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;


gdjs.Nivel_3224Code.forEachTemporary3 = gdjs.Nivel_3224Code.GDEnemigoObjects2[gdjs.Nivel_3224Code.forEachIndex3];
gdjs.Nivel_3224Code.GDEnemigoObjects3.push(gdjs.Nivel_3224Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects3Objects, 90, false);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getPointX("")) + ((gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getPointX("")) - (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointX(""))), (gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getPointY("")) + ((gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getPointY("")) - (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointY(""))));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

for (gdjs.Nivel_3224Code.forEachIndex3 = 0;gdjs.Nivel_3224Code.forEachIndex3 < gdjs.Nivel_3224Code.GDEnemigoObjects2.length;++gdjs.Nivel_3224Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3);
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;


gdjs.Nivel_3224Code.forEachTemporary3 = gdjs.Nivel_3224Code.GDEnemigoObjects2[gdjs.Nivel_3224Code.forEachIndex3];
gdjs.Nivel_3224Code.GDEnemigoObjects3.push(gdjs.Nivel_3224Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects3Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects, 90, true);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getBehavior("Pathfinding").moveTo(runtimeScene, (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointX("")) + gdjs.randomInRange(-(25), 25), (( gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3[0].getPointY("")) + gdjs.randomInRange(-(25), 25));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

for (gdjs.Nivel_3224Code.forEachIndex3 = 0;gdjs.Nivel_3224Code.forEachIndex3 < gdjs.Nivel_3224Code.GDEnemigoObjects2.length;++gdjs.Nivel_3224Code.forEachIndex3) {
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;


gdjs.Nivel_3224Code.forEachTemporary3 = gdjs.Nivel_3224Code.GDEnemigoObjects2[gdjs.Nivel_3224Code.forEachIndex3];
gdjs.Nivel_3224Code.GDEnemigoObjects3.push(gdjs.Nivel_3224Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects, 50, true);
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects3[i].separateFromObjectsList(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects3Objects, false);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

for (gdjs.Nivel_3224Code.forEachIndex3 = 0;gdjs.Nivel_3224Code.forEachIndex3 < gdjs.Nivel_3224Code.GDEnemigoObjects2.length;++gdjs.Nivel_3224Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("vidaActualSprite"), gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("vidaMaximaSprite"), gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3);
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;


gdjs.Nivel_3224Code.forEachTemporary3 = gdjs.Nivel_3224Code.GDEnemigoObjects2[gdjs.Nivel_3224Code.forEachIndex3];
gdjs.Nivel_3224Code.GDEnemigoObjects3.push(gdjs.Nivel_3224Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDEnemigoObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getVariableNumber(gdjs.Nivel_3224Code.GDEnemigoObjects3[i].getVariables().getFromIndex(1)) < 0 ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDEnemigoObjects3[k] = gdjs.Nivel_3224Code.GDEnemigoObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects3Objects, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects3Objects, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), null);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), (gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3[0] : null));
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), (gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3[0] : null));
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "revicion enemigos");
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

for (gdjs.Nivel_3224Code.forEachIndex3 = 0;gdjs.Nivel_3224Code.forEachIndex3 < gdjs.Nivel_3224Code.GDEnemigoObjects2.length;++gdjs.Nivel_3224Code.forEachIndex3) {
gdjs.copyArray(runtimeScene.getObjects("vidaActualSprite"), gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3);
gdjs.copyArray(runtimeScene.getObjects("vidaMaximaSprite"), gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3);
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;


gdjs.Nivel_3224Code.forEachTemporary3 = gdjs.Nivel_3224Code.GDEnemigoObjects2[gdjs.Nivel_3224Code.forEachIndex3];
gdjs.Nivel_3224Code.GDEnemigoObjects3.push(gdjs.Nivel_3224Code.forEachTemporary3);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaMaximaSpriteObjects3Objects, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDvidaActualSpriteObjects3Objects, (gdjs.Nivel_3224Code.GDEnemigoObjects3.length !== 0 ? gdjs.Nivel_3224Code.GDEnemigoObjects3[0] : null), null);
}
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3[i].setPosition((( gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getPointX("")),(( gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getPointY("")) - 30);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3[i].setPosition((( gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getPointX("")),(( gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getPointY("")) - 30);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3[i].getBehavior("Resizable").setWidth((((gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getVariables()).getFromIndex(1).getAsNumber() / ((gdjs.Nivel_3224Code.GDEnemigoObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDEnemigoObjects3[0].getVariables()).getFromIndex(2).getAsNumber()) * (( gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3[0].getWidth()));
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);
gdjs.copyArray(runtimeScene.getObjects("colision"), gdjs.Nivel_3224Code.GDcolisionObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects2Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDEnemigoObjects2 */
/* Reuse gdjs.Nivel_3224Code.GDcolisionObjects2 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects2[i].separateFromObjectsList(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects2Objects, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "revicion enemigos") >= 2.5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_3224Code.eventsList16(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDTeletransporteObjects1Objects = Hashtable.newFrom({"Teletransporte": gdjs.Nivel_3224Code.GDTeletransporteObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects = Hashtable.newFrom({"Personaje_Principal": gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1});
gdjs.Nivel_3224Code.eventsList18 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("Teletransporte"), gdjs.Nivel_3224Code.GDTeletransporteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDTeletransporteObjects1Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDTeletransporteObjects1 */
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, ((gdjs.Nivel_3224Code.GDTeletransporteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDTeletransporteObjects1[0].getVariables()).getFromIndex(0).getAsString(), false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X").setNumber(((gdjs.Nivel_3224Code.GDTeletransporteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDTeletransporteObjects1[0].getVariables()).getFromIndex(1).getAsNumber());
}{runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Y").setNumber(((gdjs.Nivel_3224Code.GDTeletransporteObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDTeletransporteObjects1[0].getVariables()).getFromIndex(2).getAsNumber());
}}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects4Objects = Hashtable.newFrom({"Caja_Daño": gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects4});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects4Objects = Hashtable.newFrom({"Enemigo": gdjs.Nivel_3224Code.GDEnemigoObjects4});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDGui_95959595Da_959595241oObjects4Objects = Hashtable.newFrom({"Gui_Daño": gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4});
gdjs.Nivel_3224Code.eventsList19 = function(runtimeScene) {

};gdjs.Nivel_3224Code.eventsList20 = function(runtimeScene) {

{

/* Reuse gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariableNumber(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariables().getFromIndex(1)) == runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Prob Crit").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[k] = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].returnVariable(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariables().getFromIndex(0)).mul(2);
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].setColor("255;0;0");
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getBehavior("Text").setText("¡ " + gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariables().getFromIndex(0).getAsString() + " Critico!");
}
}}

}


};gdjs.Nivel_3224Code.eventsList21 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Nivel_3224Code.GDEnemigoObjects2, gdjs.Nivel_3224Code.GDEnemigoObjects3);


for (gdjs.Nivel_3224Code.forEachIndex4 = 0;gdjs.Nivel_3224Code.forEachIndex4 < gdjs.Nivel_3224Code.GDEnemigoObjects3.length;++gdjs.Nivel_3224Code.forEachIndex4) {
gdjs.copyArray(runtimeScene.getObjects("Caja_Daño"), gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects4);
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length = 0;

gdjs.Nivel_3224Code.GDEnemigoObjects4.length = 0;


gdjs.Nivel_3224Code.forEachTemporary4 = gdjs.Nivel_3224Code.GDEnemigoObjects3[gdjs.Nivel_3224Code.forEachIndex4];
gdjs.Nivel_3224Code.GDEnemigoObjects4.push(gdjs.Nivel_3224Code.forEachTemporary4);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDCaja_95959595Da_959595241oObjects4Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDEnemigoObjects4Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(20124804);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDGui_95959595Da_959595241oObjects4Objects, (( gdjs.Nivel_3224Code.GDEnemigoObjects4.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects4[0].getCenterXInScene()), (( gdjs.Nivel_3224Code.GDEnemigoObjects4.length === 0 ) ? 0 :gdjs.Nivel_3224Code.GDEnemigoObjects4[0].getCenterYInScene()), "");
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4[i].returnVariable(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4[i].getVariables().getFromIndex(0)).setNumber(gdjs.randomInRange(runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Daño min").getAsNumber(), runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Daño Max").getAsNumber()));
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4[i].getBehavior("Text").setText(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4[i].getVariables().getFromIndex(0).getAsString());
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDEnemigoObjects4.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDEnemigoObjects4[i].returnVariable(gdjs.Nivel_3224Code.GDEnemigoObjects4[i].getVariables().get("Vida")).sub(((gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4[0].getVariables()).getFromIndex(0).getAsNumber());
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Gui_Daño"), gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariableNumber(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariables().getFromIndex(0)) == runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Daño Max").getAsNumber() ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[k] = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].returnVariable(gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3[i].getVariables().getFromIndex(1)).setNumber(gdjs.randomInRange(1, runtimeScene.getGame().getVariables().getFromIndex(1).getChild("Prob Crit").getAsNumber()));
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList20(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Nivel_3224Code.asyncCallback20129284 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Nivel_3224Code.localVariables);
gdjs.copyArray(asyncObjectsList.getObjects("Gui_Daño"), gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2);

{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2[i].getBehavior("Tween").addObjectOpacityTween2("Desvanecer", 0, "linear", 0.3, true);
}
}gdjs.Nivel_3224Code.localVariables.length = 0;
}
gdjs.Nivel_3224Code.eventsList22 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Nivel_3224Code.localVariables);
for (const obj of gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1) asyncObjectsList.addObject("Gui_Daño", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.3), (runtimeScene) => (gdjs.Nivel_3224Code.asyncCallback20129284(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Nivel_3224Code.eventsList23 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Enemigo"), gdjs.Nivel_3224Code.GDEnemigoObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Nivel_3224Code.GDEnemigoObjects2.length;i<l;++i) {
    if ( gdjs.Nivel_3224Code.GDEnemigoObjects2[i].getVariableBoolean(gdjs.Nivel_3224Code.GDEnemigoObjects2[i].getVariables().get("Golpeado"), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Nivel_3224Code.GDEnemigoObjects2[k] = gdjs.Nivel_3224Code.GDEnemigoObjects2[i];
        ++k;
    }
}
gdjs.Nivel_3224Code.GDEnemigoObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Nivel_3224Code.eventsList21(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Gui_Daño"), gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1);
{for(var i = 0, len = gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1[i].getBehavior("Tween").addObjectPositionYTween2("Movimiento Vertical", (gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1[i].getY()) - 30, "linear", 0.7, false);
}
}
{ //Subevents
gdjs.Nivel_3224Code.eventsList22(runtimeScene);} //End of subevents
}

}


};gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects = Hashtable.newFrom({"Personaje_Principal": gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolicion_95959595enemigosObjects1Objects = Hashtable.newFrom({"colicion_enemigos": gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolicion_95959595enemigosObjects1Objects = Hashtable.newFrom({"colicion_enemigos": gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects = Hashtable.newFrom({"Personaje_Principal": gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects1Objects = Hashtable.newFrom({"colision": gdjs.Nivel_3224Code.GDcolisionObjects1});
gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects1Objects = Hashtable.newFrom({"colision": gdjs.Nivel_3224Code.GDcolisionObjects1});
gdjs.Nivel_3224Code.eventsList24 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].setPosition(runtimeScene.getGame().getVariables().getFromIndex(0).getChild("X").getAsNumber(),runtimeScene.getGame().getVariables().getFromIndex(0).getChild("Y").getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Center"), gdjs.Nivel_3224Code.GDCenterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spawnpoint"), gdjs.Nivel_3224Code.GDSpawnpointObjects1);
gdjs.copyArray(runtimeScene.getObjects("Teletransporte"), gdjs.Nivel_3224Code.GDTeletransporteObjects1);
{for(var i = 0, len = gdjs.Nivel_3224Code.GDTeletransporteObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDTeletransporteObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDCenterObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDCenterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDSpawnpointObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDSpawnpointObjects1[i].hide();
}
}}

}


{


gdjs.Nivel_3224Code.eventsList1(runtimeScene);
}


{


gdjs.Nivel_3224Code.eventsList8(runtimeScene);
}


{


gdjs.Nivel_3224Code.eventsList17(runtimeScene);
}


{


gdjs.Nivel_3224Code.eventsList18(runtimeScene);
}


{


gdjs.Nivel_3224Code.eventsList23(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("colicion_enemigos"), gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolicion_95959595enemigosObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
/* Reuse gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].separateFromObjectsList(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolicion_95959595enemigosObjects1Objects, false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.clampCamera(runtimeScene, 200, 189, 1155, 890, "", 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Mapa"), gdjs.Nivel_3224Code.GDMapaObjects1);
gdjs.copyArray(runtimeScene.getObjects("colision"), gdjs.Nivel_3224Code.GDcolisionObjects1);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Nivel_3224Code.GDMapaObjects1.length !== 0 ? gdjs.Nivel_3224Code.GDMapaObjects1[0] : null), true, "", 0);
}{for(var i = 0, len = gdjs.Nivel_3224Code.GDcolisionObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDcolisionObjects1[i].hide();
}
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Personaje_Principal"), gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1);
gdjs.copyArray(runtimeScene.getObjects("colision"), gdjs.Nivel_3224Code.GDcolisionObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDPersonaje_95959595PrincipalObjects1Objects, gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1 */
/* Reuse gdjs.Nivel_3224Code.GDcolisionObjects1 */
{for(var i = 0, len = gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length ;i < len;++i) {
    gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1[i].separateFromObjectsList(gdjs.Nivel_3224Code.mapOfGDgdjs_9546Nivel_95953224Code_9546GDcolisionObjects1Objects, false);
}
=======
gdjs.copyArray(runtimeScene.getObjects("Fin_del_juego"), gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1);
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1.length !== 0 ? gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1[0] : null), true, "", 0);
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
}}

}


};

<<<<<<< HEAD
gdjs.Nivel_3224Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Nivel_3224Code.GDMapaObjects1.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects2.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects3.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects4.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects1.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects2.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects3.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects4.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects1.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects2.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects3.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects4.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects4.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects1.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects2.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects3.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects4.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects1.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects2.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects3.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects4.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects1.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects2.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects3.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects4.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects1.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects2.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects3.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects4.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects1.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects2.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects3.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects4.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects4.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects4.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects1.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects2.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects4.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects3.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects4.length = 0;

gdjs.Nivel_3224Code.eventsList24(runtimeScene);
gdjs.Nivel_3224Code.GDMapaObjects1.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects2.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects3.length = 0;
gdjs.Nivel_3224Code.GDMapaObjects4.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects1.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects2.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects3.length = 0;
gdjs.Nivel_3224Code.GDCuevaObjects4.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects1.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects2.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects3.length = 0;
gdjs.Nivel_3224Code.GDcolisionObjects4.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects3.length = 0;
gdjs.Nivel_3224Code.GDPersonaje_9595PrincipalObjects4.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects1.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects2.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects3.length = 0;
gdjs.Nivel_3224Code.GDDetalles_9595mapaObjects4.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects1.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects2.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects3.length = 0;
gdjs.Nivel_3224Code.GDCasasObjects4.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects1.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects2.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects3.length = 0;
gdjs.Nivel_3224Code.GDCenterObjects4.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects1.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects2.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects3.length = 0;
gdjs.Nivel_3224Code.GDSpawnpointObjects4.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects1.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects2.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects3.length = 0;
gdjs.Nivel_3224Code.GDTeletransporteObjects4.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects3.length = 0;
gdjs.Nivel_3224Code.GDCaja_9595Da_95241oObjects4.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects3.length = 0;
gdjs.Nivel_3224Code.GDGui_9595Da_95241oObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaMaximaSpriteObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaActualSpriteObjects4.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects1.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects2.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects3.length = 0;
gdjs.Nivel_3224Code.GDEnemigoObjects4.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects3.length = 0;
gdjs.Nivel_3224Code.GDcolicion_9595enemigosObjects4.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects1.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects2.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects3.length = 0;
gdjs.Nivel_3224Code.GDvidaActualJugadorObjects4.length = 0;
=======
gdjs.Pantalla_32de_32MuerteCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects2.length = 0;

gdjs.Pantalla_32de_32MuerteCode.eventsList0(runtimeScene);
gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDFin_9595del_9595juegoObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDcolisionObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCasasObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDEnemigo_95951Objects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCenterObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDSpawnpointObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDTeletransporteObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.Pantalla_32de_32MuerteCode.GDGui_9595Da_95241oObjects2.length = 0;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2


return;

}

<<<<<<< HEAD
gdjs['Nivel_3224Code'] = gdjs.Nivel_3224Code;
=======
gdjs['Pantalla_32de_32MuerteCode'] = gdjs.Pantalla_32de_32MuerteCode;
>>>>>>> 544a14f412003804d5e2dde516d404b34c3ee5f2
