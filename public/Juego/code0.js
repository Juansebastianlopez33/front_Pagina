gdjs.verificacion_95datos_95userCode = {};
gdjs.verificacion_95datos_95userCode.localVariables = [];
gdjs.verificacion_95datos_95userCode.GDcargandoObjects1= [];
gdjs.verificacion_95datos_95userCode.GDcargandoObjects2= [];
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects1= [];
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects2= [];
gdjs.verificacion_95datos_95userCode.GDcolisionObjects1= [];
gdjs.verificacion_95datos_95userCode.GDcolisionObjects2= [];
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects1= [];
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects2= [];
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects1= [];
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects2= [];
gdjs.verificacion_95datos_95userCode.GDCasasObjects1= [];
gdjs.verificacion_95datos_95userCode.GDCasasObjects2= [];
gdjs.verificacion_95datos_95userCode.GDCenterObjects1= [];
gdjs.verificacion_95datos_95userCode.GDCenterObjects2= [];
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects1= [];
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects2= [];
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects1= [];
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects2= [];
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects1= [];
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects2= [];
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects1= [];
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects2= [];
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects1= [];
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects2= [];
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects1= [];
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects2= [];
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects1= [];
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects2= [];
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects1= [];
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects2= [];
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects1= [];
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects2= [];


gdjs.verificacion_95datos_95userCode.userFunc0x1000b80 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {
  const raw = localStorage.getItem("goe_user");
  if (raw) {
    const user = JSON.parse(raw);

    if (user && user.foto_perfil) {
      // Si ya existe una imagen anterior, la borramos
      const oldImg = document.getElementById("avatarUsuario");
      if (oldImg) oldImg.remove();

      // Crear la imagen circular
      let img = document.createElement("img");
      img.id = "avatarUsuario";
      img.src = user.foto_perfil;

      img.style.position = "absolute";
      img.style.top = "20px";
      img.style.left = "20px";
      img.style.width = "100px";
      img.style.height = "100px";
      img.style.borderRadius = "50%";
      img.style.objectFit = "cover";
      img.style.border = "3px solid white";
      img.style.zIndex = "1000";

      document.body.appendChild(img);

      // ✅ Indicar que todo salió bien
      runtimeScene.getGame().getVariables().get("login_ok").setNumber(1);

      console.log("Usuario cargado en el juego:", user.username);
    } else {
      // ⚠️ No hay foto en el usuario
      runtimeScene.getGame().getVariables().get("login_ok").setNumber(-1);
      console.warn("⚠️ El usuario no tiene foto_perfil en goe_user");
    }
  } else {
    // ⚠️ No existe goe_user en Local Storage
    runtimeScene.getGame().getVariables().get("login_ok").setNumber(-1);
    console.warn("⚠️ No se encontró goe_user en localStorage");
  }
} catch (e) {
  runtimeScene.getGame().getVariables().get("login_ok").setNumber(-1);
  console.error("Error leyendo localStorage:", e);
}
};
gdjs.verificacion_95datos_95userCode.asyncCallback18761156 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.verificacion_95datos_95userCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "perfil usuario", false);
}gdjs.verificacion_95datos_95userCode.localVariables.length = 0;
}
gdjs.verificacion_95datos_95userCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.verificacion_95datos_95userCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(5), (runtimeScene) => (gdjs.verificacion_95datos_95userCode.asyncCallback18761156(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.verificacion_95datos_95userCode.eventsList1 = function(runtimeScene) {

{


gdjs.verificacion_95datos_95userCode.userFunc0x1000b80(runtimeScene);

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() == 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cargando"), gdjs.verificacion_95datos_95userCode.GDcargandoObjects1);
{for(var i = 0, len = gdjs.verificacion_95datos_95userCode.GDcargandoObjects1.length ;i < len;++i) {
    gdjs.verificacion_95datos_95userCode.GDcargandoObjects1[i].getBehavior("Text").setText("Usuario cargado con exito");
}
}
{ //Subevents
gdjs.verificacion_95datos_95userCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() != 1);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("cargando"), gdjs.verificacion_95datos_95userCode.GDcargandoObjects1);
{for(var i = 0, len = gdjs.verificacion_95datos_95userCode.GDcargandoObjects1.length ;i < len;++i) {
    gdjs.verificacion_95datos_95userCode.GDcargandoObjects1[i].getBehavior("Text").setText("Error al cargar los datos del usuario");
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.verificacion_95datos_95userCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.verificacion_95datos_95userCode.GDcargandoObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcargandoObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolisionObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolisionObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCasasObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCasasObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCenterObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCenterObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects2.length = 0;

gdjs.verificacion_95datos_95userCode.eventsList1(runtimeScene);
gdjs.verificacion_95datos_95userCode.GDcargandoObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcargandoObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDfalloCargarObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolisionObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolisionObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCasasObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCasasObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCenterObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCenterObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDSpawnpointObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDTeletransporteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualSpriteObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDEnemigoObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects1.length = 0;
gdjs.verificacion_95datos_95userCode.GDvidaActualJugadorObjects2.length = 0;


return;

}

gdjs['verificacion_95datos_95userCode'] = gdjs.verificacion_95datos_95userCode;
