gdjs.perfil_32usuarioCode = {};
gdjs.perfil_32usuarioCode.localVariables = [];
gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1= [];
gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects2= [];
gdjs.perfil_32usuarioCode.GDNewSpriteObjects1= [];
gdjs.perfil_32usuarioCode.GDNewSpriteObjects2= [];
gdjs.perfil_32usuarioCode.GDcolisionObjects1= [];
gdjs.perfil_32usuarioCode.GDcolisionObjects2= [];
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects1= [];
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects2= [];
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects1= [];
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects2= [];
gdjs.perfil_32usuarioCode.GDCasasObjects1= [];
gdjs.perfil_32usuarioCode.GDCasasObjects2= [];
gdjs.perfil_32usuarioCode.GDCenterObjects1= [];
gdjs.perfil_32usuarioCode.GDCenterObjects2= [];
gdjs.perfil_32usuarioCode.GDSpawnpointObjects1= [];
gdjs.perfil_32usuarioCode.GDSpawnpointObjects2= [];
gdjs.perfil_32usuarioCode.GDTeletransporteObjects1= [];
gdjs.perfil_32usuarioCode.GDTeletransporteObjects2= [];
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects1= [];
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects2= [];
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects1= [];
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects2= [];
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects1= [];
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects2= [];
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects1= [];
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects2= [];
gdjs.perfil_32usuarioCode.GDEnemigoObjects1= [];
gdjs.perfil_32usuarioCode.GDEnemigoObjects2= [];
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects1= [];
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects2= [];
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects1= [];
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects2= [];


gdjs.perfil_32usuarioCode.userFunc0x1000b80 = function GDJSInlineCode(runtimeScene) {
"use strict";
const raw = localStorage.getItem("goe_user");
let foto = "https://via.placeholder.com/150/000000/FFFFFF/?text=Avatar"; // default
let username = "Invitado";

if (raw) {
  const user = JSON.parse(raw);
  if (user) {
    if (user.foto_perfil) {
      foto = user.foto_perfil;
    }
    if (user.username) {
      username = user.username;
    }
    // 🔥 Guardamos en variables globales de GDevelop
    runtimeScene.getGame().getVariables().get("username").setString(username);
    runtimeScene.getGame().getVariables().get("foto_perfil").setString(foto);
    runtimeScene.getGame().getVariables().get("access_token").setString(user.access_token || "");
    runtimeScene.getGame().getVariables().get("login_ok").setNumber(1);
  }
} else {
  runtimeScene.getGame().getVariables().get("login_ok").setNumber(0);
}

// Crear o actualizar avatar
let avatar = document.getElementById("avatarUsuario");
if (!avatar) {
  avatar = document.createElement("img");
  avatar.id = "avatarUsuario";
  avatar.style.position = "absolute";
  avatar.style.borderRadius = "50%";
  avatar.style.objectFit = "cover";
  avatar.style.border = "3px solid white";
  document.body.appendChild(avatar);
}

// Configurar imagen
avatar.src = foto;
avatar.style.top = "120px";
avatar.style.left = "200px";
avatar.style.width = "120px";
avatar.style.height = "120px";
avatar.style.display = "block";

};
gdjs.perfil_32usuarioCode.eventsList0 = function(runtimeScene) {

{


gdjs.perfil_32usuarioCode.userFunc0x1000b80(runtimeScene);

}


};gdjs.perfil_32usuarioCode.mapOfGDgdjs_9546perfil_959532usuarioCode_9546GDNewSpriteObjects1Objects = Hashtable.newFrom({"NewSprite": gdjs.perfil_32usuarioCode.GDNewSpriteObjects1});
gdjs.perfil_32usuarioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.perfil_32usuarioCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("nombreUsuario"), gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1);
{for(var i = 0, len = gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1.length ;i < len;++i) {
    gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(3).getAsString());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite"), gdjs.perfil_32usuarioCode.GDNewSpriteObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.perfil_32usuarioCode.mapOfGDgdjs_9546perfil_959532usuarioCode_9546GDNewSpriteObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Inicio", false);
}}

}


};

gdjs.perfil_32usuarioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDNewSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDNewSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDcolisionObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDcolisionObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCasasObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCasasObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCenterObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCenterObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDSpawnpointObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDSpawnpointObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDTeletransporteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDTeletransporteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDEnemigoObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDEnemigoObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects2.length = 0;

gdjs.perfil_32usuarioCode.eventsList1(runtimeScene);
gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDnombreUsuarioObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDNewSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDNewSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDcolisionObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDcolisionObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDPersonaje_9595PrincipalObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDDetalles_9595mapaObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCasasObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCasasObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCenterObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCenterObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDSpawnpointObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDSpawnpointObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDTeletransporteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDTeletransporteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDCaja_9595Da_95241oObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDGui_9595Da_95241oObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaMaximaSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualSpriteObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDEnemigoObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDEnemigoObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDcolicion_9595enemigosObjects2.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects1.length = 0;
gdjs.perfil_32usuarioCode.GDvidaActualJugadorObjects2.length = 0;


return;

}

gdjs['perfil_32usuarioCode'] = gdjs.perfil_32usuarioCode;
